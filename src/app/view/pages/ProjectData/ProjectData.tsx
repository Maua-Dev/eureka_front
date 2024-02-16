import { Link, useParams } from "react-router-dom";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import Card from "../../components/Card/Card";
import { ProjectModel } from "../../../models/project-model";
import { useContext, useEffect, useState } from "react";
import { handleFetch } from "../../../utils/handle-fetch";
import { useErrorBoundary } from "react-error-boundary";
import { ProjectContext } from "../../../context/project-context";
import isEqual from "lodash.isequal";
import "./ProjectData.css";
import CircularLoading from "../../components/CircularLoading/CircularLoading";
import BasicButton from "../../components/BasicButton/BasicButton";

export default function ProjectData() {
  // get the project id from the url to fetch the project data
  const { id } = useParams();
  const projectId = parseInt(id!);

  const { project, getProject, updateProject } = useContext(ProjectContext);

  // error boundary to catch errors in the components (used in handleFetch function)
  const { showBoundary } = useErrorBoundary();

  const [isSkeletonLoading, setIsSkeletonLoading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [projectTitle, setProjectTitle] = useState<string>(project.title);
  const [projectDescription, setProjectDescription] = useState<string>(
    "Descrição do projeto muito legal e interessante."
  );

  useEffect(() => {
    if (isEqual(project, ProjectModel.empty())) {
      handleFetch(setIsSkeletonLoading, showBoundary, getProject(projectId));
    }
  }, []);

  useEffect(() => {
    setProjectTitle(project.title);
    setProjectDescription("Descrição do projeto muito legal e interessante.");
  }, [project.title]);

  return (
    <main className="project_data">
      <ReturnButton to={`/project/${projectId}`} />
      {isLoading && <CircularLoading />}
      {isSkeletonLoading ? null : (
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
              durante a Cúpula das Nações Unidas sobre o Desenvolvimento Sustentável em setembro de
              2015 composta por 17 objetivos e 169 metas a serem atingidos até 2030. Para saber mais
              veja a tela de{" "}
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
      )}
    </main>
  );
}
