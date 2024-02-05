import { Link } from "react-router-dom";
import "./NavColumn.css";
import { useState } from "react";
import Dialog from "../Dialog/Dialog";
interface NavColumnProps {
  navOptions: Array<string>;
  isMobile: boolean;
}

export default function NavColumn({
  navOptions,
  isMobile,
}: NavColumnProps) {

  const [isWorkAndStandsColumnOpen, setIsWorkAndStandsColumnOpen] =
    useState<boolean>(false);
  const [isEventColumnOpen, setIsEventColumnOpen] = useState<boolean>(false);
  const [isUserColumnOpen, setIsUserColumnOpen] = useState<boolean>(false);
  const [isSystemColumnOpen, setIsSystemColumnOpen] = useState<boolean>(false);
  const [isMenuColumnOpen, setIsMenuColumnOpen] = useState<boolean>(false);

  const mobileNavOptions = [
    [],
    [],
    [
      "Cadastrar",
      "Cadastrar múltiplos",
      "Consultar",
      "Estandes institucionais",
    ],
    [],
    [
      "Autorizar entrada",
      "Colaboradores externos",
      "Colaboradores internos",
      "Crachás",
      "Número de estandes",
      "Textos para correção",
    ],
    ["Cadastrar", "Cadastrar múltiplos", "Consultar", "Desativar"],
    [
      "Alterar ano de visualização",
      "Backup de arquivos",
      "Controle de estoque",
      "Datas",
      "Estatísticas",
      "Imagens",
      "Log de usuários",
      "Log de trabalhos",
    ],
  ];

  const mobileStateOptions = [
    false,
    false,
    isWorkAndStandsColumnOpen,
    false,
    isEventColumnOpen,
    isUserColumnOpen,
    isSystemColumnOpen,
    isMenuColumnOpen,
  ];

  const changeMobileStateOptions = [
    undefined,
    undefined,
    setIsWorkAndStandsColumnOpen,
    undefined,
    setIsEventColumnOpen,
    setIsUserColumnOpen,
    setIsSystemColumnOpen,
    setIsMenuColumnOpen,
  ];

  return (
    <div id="nav_column">
      {isMobile
        ? navOptions.map((e, navOptionIndex) => {
          return (
            <Dialog key={navOptionIndex} setOpen={changeMobileStateOptions[navOptionIndex]} className="option">
              <div onClick={(event) => {
                event.preventDefault();
                changeMobileStateOptions.map((changeState, changeStateIndex) => {
                  if (changeStateIndex == navOptionIndex) {
                    changeState != null && changeState!(!mobileStateOptions![navOptionIndex]);
                  }
                });
              }}
                className="option__button"
              >
                <span className="option__title">{e}</span>
              </div>
              {mobileStateOptions[navOptionIndex] &&
                <div className="nav_column--secondary">
                  {mobileNavOptions[navOptionIndex].map((e, index) => {
                    return (
                      <Link key={index} className="option option--secondary" to={""} onClick={(event) => event.preventDefault()}>
                        <span className="option__title">{e}</span>
                      </Link>
                    );
                  })}
                </div>}
            </Dialog>
          );
        })
        : navOptions.map((e, index) => {
          return (
            <Link key={index} className="option" to={""} onClick={(event) => event.preventDefault()}>
              <span className="option__title">{e}</span>
            </Link>
          );
        })}
    </div >
  );
}
