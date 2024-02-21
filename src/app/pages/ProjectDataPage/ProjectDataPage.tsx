import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import isEqual from "lodash.isequal";
import "./ProjectDataPage.css";
import { AuthContext } from "../../context/auth-context";
import { ProjectContext } from "../../context/project-context";
import { DeliveryContext } from "../../context/delivery-context";
import { ProjectModel } from "../../models/project-model";
import { handleFetch } from "../../utils/functions/handle-fetch";
import LoadingSpinner from "../../ui/helpers/LoadingSpinner/LoadingSpinner";
import HeaderedBox from "../../ui/components/HeaderedBox/HeaderedBox";
import { toast } from "react-toastify";
import { odsList } from "../../utils/statics/ods-list";
import ImageInfoCard from "../../ui/components/ImageInfoCard/ImageInfoCard";
import { actionsList } from "../../utils/statics/actions-list";
import DefaultTextField from "../../ui/components/DefaultTextField/DefaultTextField";
import ProjectDataPageSkeleton from "./ProjectDataPageSkeleton";

export default function ProjectDataPage() {
  const [isSkeletonLoading, setIsSkeletonLoading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // get the project id from the url to fetch the project data
  const { projectId, taskId } = useParams();
  const projectIdFromPath = parseInt(projectId!);
  const taskIdFromPath = parseInt(taskId!);

  const { userFromContext } = useContext(AuthContext);
  const { projectFromContext, getProject, updateProject } = useContext(ProjectContext);
  const { deliveriesFromContext, getDeliveries, createDelivery } = useContext(DeliveryContext);

  // error boundary to catch errors in the components (used in handleFetch function)
  const { showBoundary } = useErrorBoundary();

  const [projectTitle, setProjectTitle] = useState<string>(projectFromContext.title);
  const [projectDescription, setProjectDescription] = useState<string>(
    projectFromContext.description
  );
  const [selectedOds, setSelectedOds] = useState<number[]>(
    (deliveriesFromContext.find((delivery) => delivery.task.title === "Dados do trabalho")?.content[
      "ods"
    ] as number[]) || []
  );
  const [selectedActions, setSelectedActions] = useState<number[]>(
    (deliveriesFromContext.find((delivery) => delivery.task.title === "Dados do trabalho")?.content[
      "actions"
    ] as number[]) || []
  );

  useEffect(() => {
    if (isEqual(projectFromContext, ProjectModel.empty())) {
      handleFetch(setIsSkeletonLoading, showBoundary, undefined, getProject(projectIdFromPath));
    }
    if (isEqual(deliveriesFromContext, [])) {
      handleFetch(setIsSkeletonLoading, showBoundary, undefined, getDeliveries(projectIdFromPath));
    }
  }, []);

  useEffect(() => {
    setProjectTitle(projectFromContext.title);
    setProjectDescription(projectFromContext.description);
  }, [projectFromContext.title, projectFromContext.description]);

  useEffect(() => {
    setSelectedOds(
      (deliveriesFromContext.find((delivery) => delivery.task.title === "Dados do trabalho")
        ?.content["ods"] as number[]) || []
    );
  }, [
    deliveriesFromContext.find((delivery) => delivery.task.title === "Dados do trabalho")?.content[
      "ods"
    ],
  ]);

  useEffect(() => {
    if (selectedOds.length > 0) {
      handleFetch(
        setIsSkeletonLoading,
        showBoundary,
        undefined,
        createDelivery(taskIdFromPath, projectIdFromPath, userFromContext.userId, {
          ods: selectedOds,
        })
      );
    }
  }, [selectedOds]);

  useEffect(() => {
    if (selectedOds.length > 0) {
      handleFetch(
        setIsSkeletonLoading,
        showBoundary,
        undefined,
        createDelivery(taskIdFromPath, projectIdFromPath, userFromContext.userId, {
          actions: selectedActions,
        })
      );
    }
  }, [selectedActions]);

  useEffect(() => {
    setSelectedActions(
      (deliveriesFromContext.find((delivery) => delivery.task.title === "Dados do trabalho")
        ?.content["actions"] as number[]) || []
    );
  }, [
    deliveriesFromContext.find((delivery) => delivery.task.title === "Dados do trabalho")?.content[
      "actions"
    ],
  ]);

  return (
    <main className="project_data_page">
      {isLoading && <LoadingSpinner />}
      {isSkeletonLoading ? (
        <ProjectDataPageSkeleton />
      ) : (
        <>
          <HeaderedBox
            headerTitleClassName="header__title--upper"
            boxClassName="box--margin"
            headerTitle={projectFromContext.title}
          >
            <div className="box__main">
              <DefaultTextField
                setValue={setProjectTitle}
                value={projectTitle}
                type="text"
                insideTitle="Título"
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
              />
              <DefaultTextField
                setValue={setProjectDescription}
                value={projectDescription}
                type="text"
                insideTitle="Descrição"
                isSaveButtonIncluded={true}
                isTextArea={true}
                textFieldClassName="input--bigger"
                onSaveClick={() => {
                  if (projectDescription === "") {
                    toast.error("A descrição do projeto não pode ser vazio");
                  } else if (projectTitle === projectFromContext.description) {
                    toast.error("A descrição do projeto não pode ser igual ao anterior");
                  } else {
                    handleFetch(
                      setIsLoading,
                      showBoundary,
                      "Descrição atualizada",
                      updateProject(projectIdFromPath, undefined, projectDescription)
                    );
                  }
                }}
              />
              <span className="box__span">
                Os Objetivos de Desenvolvimento Sustentável (ODS) são uma agenda mundial adotada
                durante a Cúpula das Nações Unidas sobre o Desenvolvimento Sustentável em setembro
                de 2015 composta por 17 objetivos e 169 metas a serem atingidos até 2030. Para saber
                mais veja a tela de{" "}
                <Link
                  className="box__span"
                  target="_blank"
                  to={"https://sistema-eureka.maua.br/downloads/arquivos/ODS-agenda2030-pt-br.pdf"}
                >
                  downloads
                </Link>{" "}
                ou{" "}
                <Link className="box__span" target="_blank" to={"https://brasil.un.org/pt-br"}>
                  link
                </Link>
              </span>
            </div>
          </HeaderedBox>
          <HeaderedBox
            boxClassName="box--margin"
            headerTitle="Selecione quais ODS o trabalho está envolvido: "
          >
            <div className="box__main--flex">
              {odsList.map((ods) => {
                return (
                  <ImageInfoCard
                    title={ods.title}
                    description={ods.description}
                    image={ods.image}
                    key={ods.odsId}
                    backgroundColor={
                      selectedOds.includes(ods.odsId) ? "var(--dark-mustard)" : undefined
                    }
                    onClick={() => {
                      setSelectedOds((previousOds) => {
                        const updatedOds = previousOds.includes(ods.odsId)
                          ? previousOds.filter((id) => id !== ods.odsId)
                          : [...previousOds, ods.odsId];
                        return updatedOds;
                      });
                    }}
                  />
                );
              })}
            </div>
          </HeaderedBox>
          <HeaderedBox headerTitle="Selecione quais Ações do IMT o trabalho está envolvido: ">
            <div className="box__main--flex">
              {actionsList.map((action) => {
                return (
                  <ImageInfoCard
                    title={action.title}
                    description={action.description}
                    image={action.image}
                    key={action.actionId}
                    backgroundColor={
                      selectedActions.includes(action.actionId) ? "var(--dark-mustard)" : undefined
                    }
                    onClick={() => {
                      setSelectedActions((previousOds) => {
                        const updatedOds = previousOds.includes(action.actionId)
                          ? previousOds.filter((id) => id !== action.actionId)
                          : [...previousOds, action.actionId];
                        return updatedOds;
                      });
                    }}
                  />
                );
              })}
            </div>
          </HeaderedBox>
        </>
      )}
    </main>
  );
}
