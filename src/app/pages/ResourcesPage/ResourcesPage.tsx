import DefaultButton from "../../ui/components/DefaultButton/DefaultButton";
import HeaderedBox from "../../ui/components/HeaderedBox/HeaderedBox";
import { resourcesList } from "../../utils/statics/resources-list";
import "./ResourcesPage.css";
import ResourceCard from "./components/ResourceCard/ResourceCard";

export default function ResourcesPage() {
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
                <ResourceCard resource={resource} />
              </div>
            );
          })}
        </div>
        <DefaultButton title="Enviar" buttonClassName="box__btn" />
      </HeaderedBox>
    </main>
  );
}
