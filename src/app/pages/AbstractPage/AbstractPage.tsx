import { useContext, useEffect, useState } from "react";
import HeaderedBox from "../../ui/components/HeaderedBox/HeaderedBox";
import "./AbstractPage.css";
import { useErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../ui/components/LoadingSpinner/LoadingSpinner";
import { ProjectContext } from "../../context/project-context";
import DefaultTextField from "../../ui/components/DefaultTextField/DefaultTextField";
import isEqual from "lodash.isequal";
import { ProjectModel } from "../../models/project-model";
import { handleFetch } from "../../utils/functions/handle-fetch";
import { toast } from "react-toastify";

export default function AbstractPage() {
  const [isSkeletonLoading, setIsSkeletonLoading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { projectFromContext, getProject, updateProject } = useContext(ProjectContext);

  // get the project id from the url to fetch the project data
  const { projectId } = useParams();
  const projectIdFromPath = parseInt(projectId!);

  // error boundary to catch errors in the components (used in handleFetch function)
  const { showBoundary } = useErrorBoundary();

  const [projectTitle, setProjectTitle] = useState<string>(projectFromContext.title);
  const [projectDescription, setProjectDescription] = useState<string>(
    projectFromContext.description
  );

  useEffect(() => {
    if (isEqual(projectFromContext, ProjectModel.empty())) {
      handleFetch(setIsSkeletonLoading, showBoundary, undefined, getProject(projectIdFromPath));
    }
  }, []);

  useEffect(() => {
    setProjectTitle(projectFromContext.title);
  }, [projectFromContext.title]);

  return (
    <main className="abstract_page">
      {isLoading && <LoadingSpinner />}
      {isSkeletonLoading ? (
        <></>
      ) : (
        <>
          <HeaderedBox
            headerTitle="Resumo"
            boxHeaderClassName="box__header--start"
            boxContentClassName="box"
            boxClassName="box--margin"
          >
            <div className="box__main">
              <span className="box__span">
                Envio do resumo corrigido. As palavras em ingês devem estar isoladas com aspas. Tudo
                deve ser preenchido em <u>português</u>.
              </span>
              <div>
                <DefaultTextField
                  setValue={setProjectTitle}
                  value={projectTitle}
                  type="text"
                  topTitle="Título do trabalho"
                  isSaveButtonIncluded={true}
                  onSaveClick={() => {
                    if (projectTitle === "") {
                      toast.error("O título do projeto não pode ser vazio");
                    } else if (projectTitle === projectFromContext.title) {
                      toast.error("O título do projeto não pode ser igual ao anterior");
                    } else {
                      handleFetch(
                        setIsLoading,
                        showBoundary,
                        "Título atualizado",
                        updateProject(projectIdFromPath, projectTitle)
                      );
                    }
                  }}
                ></DefaultTextField>
                <span className="box__span">
                  Título do trabalho após apresentação para banca. Lembrando que ao salvar o título
                  ele se torna definitivo.
                </span>
              </div>
              <div className="projectDefinition">
                <DefaultTextField
                  setValue={setProjectDescription}
                  value={projectDescription}
                  type="text"
                  topTitle="Resumo do trabalho"
                  isSaveButtonIncluded={false}
                  isTextArea={true}
                  textFieldClassName="input--bigger"
                ></DefaultTextField>
                <span className="box__span">
                  Resumo do trabalho após apresentação para banca. Lembrando que ao salvar o resumo
                  ele se torna definitivo.
                </span>
              </div>
            </div>
          </HeaderedBox>
          <HeaderedBox
            headerTitle="Abstract"
            boxHeaderClassName="box__header--start"
            boxContentClassName="box"
          >
            <div className="box__main">
              <span className="box__span">
                Envio do resumo corrigido. As palavras em ingês devem estar isoladas com aspas. Tudo
                deve ser preenchido em <u>inglês</u>.
              </span>
            </div>
          </HeaderedBox>
        </>
      )}
    </main>
  );
}
