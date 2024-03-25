import { Link } from "react-router-dom";
import DefaultTextFieldSkeleton from "../../ui/components/DefaultTextField/DefaultTextFieldSkeleton";
import HeaderedBoxSkeleton from "../../ui/components/HeaderedBox/HeaderedBoxSkeleton";
import { odsList } from "../../utils/statics/ods-list";
import { actionsList } from "../../utils/statics/actions-list";
import "./ProjectDataPage.css";
import ImageInfoCardSkeleton from "./components/ImageInfoCard/ImageInfoCardSkeleton";

export default function ProjectDataPageSkeleton() {
  return (
    <>
      <HeaderedBoxSkeleton headerTitleClassName="header__title--upper" boxClassName="box--margin">
        <div className="box__main">
          <DefaultTextFieldSkeleton insideTitle="Título" isSaveButtonIncluded={true} />
          <DefaultTextFieldSkeleton
            insideTitle="Descrição"
            isSaveButtonIncluded={true}
            isTextArea={true}
          />
          <span className="box__span">
            Os Objetivos de Desenvolvimento Sustentável (ODS) são uma agenda mundial adotada durante
            a Cúpula das Nações Unidas sobre o Desenvolvimento Sustentável em setembro de 2015
            composta por 17 objetivos e 169 metas a serem atingidos até 2030. Para saber mais veja a
            tela de{" "}
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
      </HeaderedBoxSkeleton>
      <HeaderedBoxSkeleton boxClassName="box--margin">
        <div className="box__main--flex">
          {odsList.map((_, index) => {
            return <ImageInfoCardSkeleton key={index} />;
          })}
        </div>
      </HeaderedBoxSkeleton>
      <HeaderedBoxSkeleton>
        <div className="box__main--flex">
          {actionsList.map(() => {
            return <ImageInfoCardSkeleton />;
          })}
        </div>
      </HeaderedBoxSkeleton>
    </>
  );
}
