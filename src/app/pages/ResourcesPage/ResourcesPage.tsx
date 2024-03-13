import { useContext, useEffect, useState } from "react";
import DefaultButton from "../../ui/components/DefaultButton/DefaultButton";
import HeaderedBox from "../../ui/components/HeaderedBox/HeaderedBox";
import { resourcesList } from "../../utils/statics/resources-list";
import "./ResourcesPage.css";
import ResourceCard from "./components/ResourceCard/ResourceCard";
import { handleFetch } from "../../utils/functions/handle-fetch";
import { useErrorBoundary } from "react-error-boundary";
import { DeliveryContext } from "../../context/delivery-context";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import LoadingSpinner from "../../ui/components/LoadingSpinner/LoadingSpinner";
import isEqual from "lodash.isequal";
import { ProjectModel } from "../../models/project-model";
import { ProjectContext } from "../../context/project-context";
import { ResourcesType } from "../../utils/@types/resources-type";

export default function ResourcesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSkeletonLoading, setIsSkeletonLoading] = useState(false);

  // get the project id from the url to fetch the project data
  const { projectId, taskId } = useParams();
  const projectIdFromPath = parseInt(projectId!);
  const taskIdFromPath = parseInt(taskId!);

  const { createDelivery, getDeliveries, deliveriesFromContext } = useContext(DeliveryContext);
  const { projectFromContext, getProject } = useContext(ProjectContext);
  const { userFromContext } = useContext(AuthContext);

  const resourcesFromContext = deliveriesFromContext.find(
    (delivery) => delivery.task.title === "Recursos de estande"
  );

  const resourcesWithJustification = resourcesList.filter(
    (resource) => resource.hasJustificationField == true
  );
  const resourcesWithSpecification = resourcesList.filter(
    (resource) => resource.hasSpecificationField == true
  );

  //based on resource id
  const [justificationValues, setJustificationValues] = useState(
    Object.fromEntries(resourcesWithJustification.map((resource) => [resource.resourceId, ""]))
  );
  const [specificationValues, setSpecificationValues] = useState(
    Object.fromEntries(resourcesWithSpecification.map((resource) => [resource.resourceId, ""]))
  );
  const [quantityValue, setQuantityValue] = useState(
    Object.fromEntries(resourcesList.map((resource) => [resource.resourceId]))
  );
  const [resources, setResources] = useState<ResourcesType>(
    resourcesFromContext?.content["resources"] as ResourcesType
  );

  console.log(resources);

  // error boundary to catch errors in the components (used in handleFetch function)
  const { showBoundary } = useErrorBoundary();

  const handleSendButtonClick = () => {
    const resourceJson = Object.fromEntries(
      resourcesList.map((resource) => {
        const specification =
          specificationValues[resource.resourceId] == ""
            ? null
            : specificationValues[resource.resourceId];
        const justification =
          justificationValues[resource.resourceId] == ""
            ? null
            : justificationValues[resource.resourceId];
        return [
          resource.name,
          {
            ...quantityValue[resource.resourceId],
            specification: specification,
            justification: justification,
          },
        ];
      })
    );
    handleFetch(
      setIsLoading,
      showBoundary,
      undefined,
      createDelivery(taskIdFromPath, projectIdFromPath, userFromContext.userId, {
        resources: resourceJson,
      })
    );
  };

  useEffect(() => {
    if (isEqual(projectFromContext, ProjectModel.empty())) {
      handleFetch(setIsSkeletonLoading, showBoundary, undefined, getProject(projectIdFromPath));
    }
    if (isEqual(deliveriesFromContext, [])) {
      handleFetch(setIsSkeletonLoading, showBoundary, undefined, getDeliveries(projectIdFromPath));
    }
  }, []);

  useEffect(() => {
    setResources(resourcesFromContext?.content["resources"] as ResourcesType);
  }, [resourcesFromContext]);

  return (
    <main className="resources_page">
      {isLoading && <LoadingSpinner />}
      {isSkeletonLoading ? (
        <></>
      ) : (
        <HeaderedBox
          headerTitle="Recursos do estande: "
          boxHeaderClassName="box__header--start"
          boxContentClassName="box"
        >
          <div className="box__main">
            {resourcesList.map((resource) => {
              return (
                <div className="card" key={resource.resourceId}>
                  <ResourceCard
                    resource={resource}
                    setSpecificationValues={setSpecificationValues}
                    setJustificationValues={setJustificationValues}
                    setQuantityValue={setQuantityValue}
                    resources={resources}
                  />
                </div>
              );
            })}
          </div>
          <DefaultButton
            title="Enviar"
            buttonClassName="box__btn"
            onClick={handleSendButtonClick}
          />
        </HeaderedBox>
      )}
    </main>
  );
}
