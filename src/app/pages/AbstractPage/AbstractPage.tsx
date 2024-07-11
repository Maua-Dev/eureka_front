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
import DefaultButton from "../../ui/components/DefaultButton/DefaultButton";
import { DeliveryContext } from "../../context/delivery-context";
import { AbstractType } from "../../utils/@types/abstract-type";
import { AuthContext } from "../../context/auth-context";

export default function AbstractPage() {
  const [isSkeletonLoading, setIsSkeletonLoading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [title, setTitle] = useState<string>("");
  const [projectAbstract, setProjectAbstract] = useState<string>("");
  const [keywords, setKeywords] = useState<string>("");

  const [titleENG, setTitleENG] = useState<string>("");
  const [projectAbstractENG, setProjectAbstractENG] = useState<string>("");
  const [keywordsENG, setKeywordsENG] = useState<string>("");

  // get the project id from the url to fetch the project data
  const { projectId, taskId } = useParams();
  const projectIdFromPath = parseInt(projectId!);
  const taskIdFromPath = parseInt(taskId!);

  const { projectFromContext, getProject, updateProject } = useContext(ProjectContext);
  const { createDelivery, getDeliveries, deliveriesFromContext } = useContext(DeliveryContext);
  const { userFromContext } = useContext(AuthContext);

  const deliveryFromContext = deliveriesFromContext.find(
    (delivery) => delivery.task.title === "Resumo/Abstract"
  );

  // error boundary to catch errors in the components (used in handleFetch function)
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (isEqual(projectFromContext, ProjectModel.empty())) {
      handleFetch(setIsSkeletonLoading, showBoundary, undefined, getProject(projectIdFromPath));
    }
    if (isEqual(deliveriesFromContext, [])) {
      handleFetch(setIsSkeletonLoading, showBoundary, undefined, getDeliveries(projectIdFromPath));
    }
  }, []);

  // Abstract PT

  const abstractsFromContext = deliveryFromContext?.content["abstract"] as AbstractType;

  useEffect(() => {
    setAbstract(abstractsFromContext);
  }, [abstractsFromContext]);

  const [abstract, setAbstract] = useState<AbstractType>(abstractsFromContext);

  useEffect(() => {
    if (abstractsFromContext?.title != null && title !== abstractsFromContext.title) {
      setTitle(abstractsFromContext.title);
    }
  }, [abstractsFromContext?.title != undefined]);

  useEffect(() => {
    if (
      abstractsFromContext?.projectAbstract != null &&
      projectAbstract !== abstractsFromContext.projectAbstract
    ) {
      setProjectAbstract(abstractsFromContext.projectAbstract);
    }
  }, [abstractsFromContext?.projectAbstract != undefined]);

  useEffect(() => {
    if (abstractsFromContext?.keyWords != null && keywords !== abstractsFromContext.keyWords) {
      setKeywords(abstractsFromContext.keyWords);
    }
  }, [abstractsFromContext?.keyWords != undefined]);

  useEffect(() => {
    const updatedAbstract: {
      title?: string;
      projectAbstract?: string;
      keyWords?: string;
    } = {};

    if (title !== "") {
      updatedAbstract.title = title;
    }

    if (projectAbstract !== "") {
      updatedAbstract.projectAbstract = projectAbstract;
    }

    if (keywords !== "") {
      updatedAbstract.keyWords = keywords;
    }

    const newAbstract = {
      title: updatedAbstract.title!,
      projectAbstract: updatedAbstract.projectAbstract!,
      keyWords: updatedAbstract.keyWords!,
    };

    setAbstract(newAbstract);
  }, [title, projectAbstract, keywords]);

  const handleSendButtonClick = () => {
    let hasError = false;
    if (isEqual(abstract, abstractsFromContext)) {
      toast.error("O resumo não foi alterado");
      hasError = true;
    }

    if (
      abstract.title == "" ||
      abstract.title == undefined ||
      abstract.projectAbstract == "" ||
      abstract.projectAbstract == undefined ||
      abstract.keyWords == "" ||
      abstract.keyWords == undefined
    ) {
      console.log(abstract);
      console.log(abstract.title);
      toast.error("Preencha os campos de título e/ou resumo e/ou palavras chave");
      hasError = true;
    }

    if (!hasError) {
      handleFetch(
        setIsLoading,
        showBoundary,
        undefined,
        createDelivery(taskIdFromPath, projectIdFromPath, userFromContext.userId, {
          abstract: abstract,
        })
      );
      toast.success("Resumo enviado com sucesso");
    }
  };

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
                  setValue={setTitle}
                  value={title}
                  type="text"
                  topTitle="Título do trabalho"
                  isSaveButtonIncluded={true}
                  onSaveClick={() => {
                    if (title === "") {
                      toast.error("O título do projeto não pode ser vazio");
                    } else if (title === projectFromContext.title) {
                      toast.error("O título do projeto não pode ser igual ao anterior");
                    } else {
                      handleFetch(
                        setIsLoading,
                        showBoundary,
                        "Título atualizado",
                        updateProject(projectIdFromPath, title)
                      );
                    }
                  }}
                ></DefaultTextField>
                <span className="box__span">
                  Título do trabalho após apresentação para banca. Lembrando que ao salvar o título
                  ele se torna definitivo.
                </span>
              </div>
              <div>
                <DefaultTextField
                  setValue={setProjectAbstract}
                  value={projectAbstract}
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
              <div>
                <DefaultTextField
                  setValue={setKeywords}
                  value={keywords}
                  type="text"
                  topTitle="Palavras-chave"
                  isSaveButtonIncluded={false}
                  isTextArea={false}
                ></DefaultTextField>
                <span className="box__span">
                  Palavras-chave separadas entre si por ponto e finalizadas também por ponto.
                </span>
              </div>
              <div>
                <DefaultButton
                  title="Enviar"
                  buttonClassName="box__btn--end"
                  onClick={handleSendButtonClick}
                />
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
              <div>
                <DefaultTextField
                  setValue={setTitleENG}
                  value={titleENG}
                  type="text"
                  topTitle="Título do trabalho (em inglês)"
                  isSaveButtonIncluded={true}
                  onSaveClick={() => {
                    if (title === "") {
                      toast.error("O título do projeto não pode ser vazio");
                    } else if (title === projectFromContext.title) {
                      toast.error("O título do projeto não pode ser igual ao anterior");
                    } else {
                      handleFetch(
                        setIsLoading,
                        showBoundary,
                        "Título atualizado",
                        updateProject(projectIdFromPath, title)
                      );
                    }
                  }}
                ></DefaultTextField>
                <span className="box__span">
                  Título do trabalho após apresentação para banca. Lembrando que ao salvar o título
                  ele se torna definitivo.
                </span>
              </div>
              <div>
                <DefaultTextField
                  setValue={setProjectAbstractENG}
                  value={projectAbstractENG}
                  type="text"
                  topTitle="Resumo do trabalho (em inglês)"
                  isSaveButtonIncluded={false}
                  isTextArea={true}
                  textFieldClassName="input--bigger"
                ></DefaultTextField>
                <span className="box__span">
                  Resumo do trabalho após apresentação para banca. Lembrando que ao salvar o resumo
                  ele se torna definitivo.
                </span>
              </div>
              <div>
                <DefaultTextField
                  setValue={setKeywordsENG}
                  value={keywordsENG}
                  type="text"
                  topTitle="Palavras-chave (em inglês)"
                  isSaveButtonIncluded={false}
                  isTextArea={false}
                ></DefaultTextField>
                <span className="box__span">
                  Palavras-chave separadas entre si por ponto e finalizadas também por ponto.
                </span>
              </div>
              <div>
                <DefaultButton title="Enviar" buttonClassName="box__btn--end" />
              </div>
            </div>
          </HeaderedBox>
        </>
      )}
    </main>
  );
}
