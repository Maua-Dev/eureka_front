import { useState } from "react";
import DefaultButton from "../../ui/components/DefaultButton/DefaultButton";
import HeaderedBox from "../../ui/components/HeaderedBox/HeaderedBox";
import { resourcesList } from "../../utils/statics/resources-list";
import "./ResourcesPage.css";
import ResourceCard from "./components/ResourceCard/ResourceCard";

export default function ResourcesPage() {
  const resourcesWithJustification = resourcesList.filter(
    (resource) => resource.hasJustificationField == true
  );
  const resourcesWithSpecification = resourcesList.filter(
    (resource) => resource.hasSpecificationField == true
  );

  //based on resource id
  const [justificationValues, setJustificationValues] = useState(
    Object.fromEntries(
      resourcesWithJustification.map((test) => test.resourceId).map((key) => [key, ""])
    )
  );
  const [specificationValues, setSpecificationValues] = useState(
    Object.fromEntries(
      resourcesWithSpecification.map((test) => test.resourceId).map((key) => [key, ""])
    )
  );
  const [quantityValue, setQuantityValue] = useState(
    Object.fromEntries(resourcesList.map((key) => [key, 0]))
  );

  console.log(quantityValue, justificationValues, specificationValues);

  return (
    <main className="resources_page">
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
                />
              </div>
            );
          })}
        </div>
        <DefaultButton title="Enviar" buttonClassName="box__btn" />
      </HeaderedBox>
    </main>
  );
}
