import { Link, useParams } from "react-router-dom";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import Card from "../../components/Card/Card";
import { ProjectModel } from "../../../models/project-model";
import { useContext, useEffect, useState } from "react";
import { handleFetch } from "../../../utils/functions/handle-fetch";
import { useErrorBoundary } from "react-error-boundary";
import { ProjectContext } from "../../../context/project-context";
import isEqual from "lodash.isequal";
import "./ProjectData.css";
import CircularLoading from "../../components/CircularLoading/CircularLoading";
import BasicButton from "../../components/BasicButton/BasicButton";
import { odsList } from "../../../utils/ods-list";
import DataCard from "../../components/DataCard/DataCard";
import { DeliveryContext } from "../../../context/delivery-context";

export default function ProjectData() {
  // get the project id from the url to fetch the project data
  const { id } = useParams();
  const projectId = parseInt(id!);

  const { project, getProject, updateProject } = useContext(ProjectContext);
  const { deliveriesList, getDeliveries } = useContext(DeliveryContext);

  // error boundary to catch errors in the components (used in handleFetch function)
  const { showBoundary } = useErrorBoundary();

  const [isSkeletonLoading, setIsSkeletonLoading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [projectTitle, setProjectTitle] = useState<string>(project.title);
  const [projectDescription, setProjectDescription] = useState<string>(
    "Descrição do projeto muito legal e interessante."
  );
  const [selectedOds, setSelectedOds] = useState<number[]>(
    (deliveriesList.find((delivery) => delivery.task.title === "Dados do trabalho")?.content[
      "ods"
    ] as number[]) || []
  );

  useEffect(() => {
    if (isEqual(project, ProjectModel.empty())) {
      handleFetch(setIsSkeletonLoading, showBoundary, getProject(projectId));
    }
  }, []);

  useEffect(() => {
    if (isEqual(deliveriesList, [])) {
      handleFetch(setIsSkeletonLoading, showBoundary, getDeliveries(projectId));
    }
  }, []);

  useEffect(() => {
    setProjectTitle(project.title);
    setProjectDescription("Descrição do projeto muito legal e interessante.");
  }, [project.title]);

  useEffect(() => {
    setSelectedOds(
      (deliveriesList.find((delivery) => delivery.task.title === "Dados do trabalho")?.content[
        "ods"
      ] as number[]) || []
    );
  }, [
    deliveriesList.find((delivery) => delivery.task.title === "Dados do trabalho")?.content["ods"],
  ]);

  return (
    <main className="project_data">
      <ReturnButton to={`/project/${projectId}`} />
      {isLoading && <CircularLoading />}
      {isSkeletonLoading ? null : (
        <>
          {" "}
          <Card
            headerTitleClassName="header__title--upper"
            cardClassName="card--margin"
            headerTitle={project.title}
          >
            <div className="card__main">
              <div className="input">
                <h2 className="input__title">Título: </h2>
                <input
                  className="input__field"
                  value={projectTitle}
                  onChange={(value) => setProjectTitle(value.currentTarget.value)}
                ></input>
                <BasicButton
                  title="Salvar"
                  buttonClassName="input__btn"
                  onClick={() =>
                    handleFetch(setIsLoading, showBoundary, updateProject(projectId, projectTitle))
                  }
                ></BasicButton>
              </div>
              <div className="input input--bigger input--column">
                <h2 className="input__title">Descrição: </h2>
                <textarea
                  className="input__field"
                  value={projectDescription}
                  onChange={(value) => setProjectDescription(value.currentTarget.value)}
                ></textarea>
                <BasicButton
                  title="Salvar"
                  buttonClassName="input__btn--end"
                  onClick={() =>
                    handleFetch(setIsLoading, showBoundary, updateProject(projectId, projectTitle))
                  }
                ></BasicButton>
              </div>
              <span className="card__span">
                Os Objetivos de Desenvolvimento Sustentável (ODS) são uma agenda mundial adotada
                durante a Cúpula das Nações Unidas sobre o Desenvolvimento Sustentável em setembro
                de 2015 composta por 17 objetivos e 169 metas a serem atingidos até 2030. Para saber
                mais veja a tela de{" "}
                <Link
                  className="card__span"
                  target="_blank"
                  to={"https://sistema-eureka.maua.br/downloads/arquivos/ODS-agenda2030-pt-br.pdf"}
                >
                  downloads
                </Link>{" "}
                ou{" "}
                <Link className="card__span" target="_blank" to={"https://brasil.un.org/pt-br"}>
                  link
                </Link>
              </span>
            </div>
          </Card>
          <Card headerTitle="Selecione quais ODS o trabalho está envolvido: ">
            <div className="card__main--flex">
              {odsList.map((ods) => {
                return (
                  <DataCard
                    title={ods.title}
                    description={ods.description}
                    image={ods.image}
                    key={ods.odsId}
                    backgroundColor={
                      selectedOds.includes(ods.odsId) ? "var(--dark-mustard)" : undefined
                    }
                    onClick={() => {
                      setSelectedOds((previousOds) => {
                        return previousOds.includes(ods.odsId)
                          ? previousOds.filter((id) => id !== ods.odsId)
                          : [...previousOds, ods.odsId];
                      });
                    }}
                  />
                );
              })}
            </div>
          </Card>
        </>
      )}
    </main>
  );
}
