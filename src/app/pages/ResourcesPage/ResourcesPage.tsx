import { useContext, useEffect, useState } from "react";
import DefaultButton from "@components/DefaultButton/DefaultButton";
import HeaderedBox from "@components/HeaderedBox/HeaderedBox";
import { resourcesList } from "@constants/resources-list.ts";
import "./ResourcesPage.css";
import ResourceCard from "./components/ResourceCard/ResourceCard";
import { handleFetch } from "@functions/handle-fetch.ts";
import { useErrorBoundary } from "react-error-boundary";
import { DeliveryContext } from "@context/delivery-context.tsx";
import { useParams } from "react-router-dom";
import { AuthContext } from "@context/auth-context.tsx";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import isEqual from "lodash.isequal";
import { ProjectModel } from "@models/project-model.ts";
import { ProjectContext } from "@context/project-context.tsx";
import { ResourcesType } from "@@types/resources-type.ts";
import { toast } from "react-toastify";

export default function ResourcesPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSkeletonLoading, setIsSkeletonLoading] = useState(false);

    // get the project id from the url to fetch the project data
    const { projectId, taskId } = useParams();
    const projectIdFromPath = parseInt(projectId!);
    const taskIdFromPath = parseInt(taskId!);

    const { createDelivery, getDeliveries, deliveriesFromContext } =
        useContext(DeliveryContext);
    const { projectFromContext, getProject } = useContext(ProjectContext);
    const { userFromContext } = useContext(AuthContext);

    const deliveryFromContext = deliveriesFromContext.find(
        (delivery) => delivery.task.title === "Recursos de estande"
    );

    const resourcesFromContext = deliveryFromContext?.content[
        "resources"
    ] as ResourcesType;

    const [resources, setResources] =
        useState<ResourcesType>(resourcesFromContext);

    // error boundary to catch errors in the components (used in handleFetch function)
    const { showBoundary } = useErrorBoundary();

    const handleSendButtonClick = () => {
        let hasError = false;
        if (isEqual(resources, resourcesFromContext)) {
            toast.error("Nenhum recurso foi alterado");
            hasError = true;
        }
        Object.keys(resources).forEach((key) => {
            const resource = resourcesList.find(
                (resource) => resource.name === key
            );
            if (
                resources[key].quantity !== 0 &&
                ((resource?.hasJustificationField &&
                    (resources[key].justification == "" ||
                        resources[key].justification == undefined)) ||
                    (resource?.hasSpecificationField &&
                        (resources[key].specification == "" ||
                            resources[key].specification == undefined)))
            ) {
                toast.error(
                    `Preencha os campos de justificativa e/ou de especificação (${resource?.title})`
                );
                hasError = true;
            }
            if (
                ((resources[key].justification !== "" &&
                    resources[key].justification !== undefined) ||
                    (resources[key].specification !== "" &&
                        resources[key].specification !== undefined)) &&
                resources[key].quantity === 0
            ) {
                toast.error(
                    `Preencha o campo de quantidade (${resource?.title})`
                );
                hasError = true;
            }
        });
        if (!hasError) {
            handleFetch(
                setIsLoading,
                showBoundary,
                undefined,
                createDelivery(
                    taskIdFromPath,
                    projectIdFromPath,
                    userFromContext.userId,
                    {
                        resources: resources
                    }
                )
            );
            toast.success("Recursos enviados com sucesso");
        }
    };

    useEffect(() => {
        if (isEqual(projectFromContext, ProjectModel.empty())) {
            handleFetch(
                setIsSkeletonLoading,
                showBoundary,
                undefined,
                getProject(projectIdFromPath)
            );
        }
        if (isEqual(deliveriesFromContext, [])) {
            handleFetch(
                setIsSkeletonLoading,
                showBoundary,
                undefined,
                getDeliveries(projectIdFromPath)
            );
        }
    }, []);

    useEffect(() => {
        setResources(resourcesFromContext);
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
                                        resources={resources}
                                        setResources={setResources}
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
