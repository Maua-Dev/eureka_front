import { Link } from "react-router-dom";
import "./NavColumn.css";
import { useEffect, useRef, useState } from "react";

interface NavColumnProps {
  navOptions: Array<String>;
  isMobile: boolean;
  isColumnOpen: boolean;
  backgroundColor: string;
}

export default function NavColumn({
  navOptions,
  isMobile,
  isColumnOpen,
  backgroundColor,
}: NavColumnProps) {
  const [isWorkAndStandsColumnOpen, setIsWorkAndStandsColumnOpen] =
    useState<boolean>(false);
  const [isEventColumnOpen, setIsEventColumnOpen] = useState<boolean>(false);
  const [isUserColumnOpen, setIsUserColumnOpen] = useState<boolean>(false);
  const [isSystemColumnOpen, setIsSystemColumnOpen] = useState<boolean>(false);
  const [isMenuColumnOpen, setIsMenuColumnOpen] = useState<boolean>(false);

  const refWorkAndStandsColumn = useRef<HTMLLIElement>(null);
  const refEventColumn = useRef<HTMLLIElement>(null);
  const refUserColumn = useRef<HTMLLIElement>(null);
  const refSystemColumn = useRef<HTMLLIElement>(null);
  const refMenuColumn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!refWorkAndStandsColumn.current!.contains(e.target as Node)) {
        setIsWorkAndStandsColumnOpen(false);
      }
      if (!refUserColumn.current!.contains(e.target as Node)) {
        setIsUserColumnOpen(false);
      }
      if (!refSystemColumn.current!.contains(e.target as Node)) {
        setIsSystemColumnOpen(false);
      }
      if (!refEventColumn.current!.contains(e.target as Node)) {
        setIsEventColumnOpen(false);
      }
      if (!refMenuColumn.current!.contains(e.target as Node)) {
        setIsMenuColumnOpen(false);
      }
    });
  }, []);

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
    null,
    null,
    setIsWorkAndStandsColumnOpen,
    null,
    setIsEventColumnOpen,
    setIsUserColumnOpen,
    setIsSystemColumnOpen,
    setIsMenuColumnOpen,
  ];

  return (
    <>
      {isColumnOpen ? (
        <div id="navColumn" style={{ backgroundColor: backgroundColor }}>
          {isMobile
            ? navOptions.map((e, index) => {
                return (
                  <>
                    <Link
                      onClick={() =>
                        changeMobileStateOptions.map((e, i) => {
                          e != null ? e(false) : {};
                          if (i == index) {
                            e != null ? e!(!mobileStateOptions![index]) : {};
                          }
                        })
                      }
                      className="link"
                      to={""}
                    >
                      <span>{e}</span>
                    </Link>
                    <div className="floatingColumn">
                      <NavColumn
                      backgroundColor="var(--medium-light-blue)"
                        isMobile={false}
                        isColumnOpen={
                          mobileStateOptions[index] != null
                            ? mobileStateOptions![index]
                            : false
                        }
                        navOptions={mobileNavOptions[index]}
                      />
                    </div>
                  </>
                );
              })
            : navOptions.map((e) => {
                return (
                  <Link className="link" to={""}>
                    <span>{e}</span>
                  </Link>
                );
              })}
        </div>
      ) : null}
    </>
  );
}
