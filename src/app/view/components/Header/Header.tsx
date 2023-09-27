import "./Header.css";
import mauaLogo from "../../../assets/maua_logo.png";
import eurekaLogo from "../../../assets/eureka_logo.png";
import mauaEurekaLogo from "../../../assets/maua_eureka_logo.png";
import profileIcon from "../../../assets/profile_icon.svg";
import questionIcon from "../../../assets/question_icon.svg";
import messageIcon from "../../../assets/message_icon.svg";
import calendarIcon from "../../../assets/calendar_icon.svg";
import menuIcon from "../../../assets/menu_icon.svg";
import { Link } from "react-router-dom";
import NavColumn from "../NavColumn/NavColumn";
import { useState } from "react";

export default function Header() {
  const [isWorkAndStandsOpenColumn, setIsWorkAndStandsOpenColumn] =
    useState<boolean>(false);
  const [isEventColumnOpen, setIsEventColumnOpen] = useState<boolean>(false);
  const [isUserColumnOpen, setIsUserColumnOpen] = useState<boolean>(false);
  const [isSystemColumnOpen, setIsSystemColumnOpen] = useState<boolean>(false);
  const [isMenuColumnOpen, setIsMenuColumnOpen] = useState<boolean>(false);
  const [isUserDialogOpen, setIsUserDialogOpen] = useState<boolean>(false);
  const [isQuestionDialogOpen, setIsQuestionDialogOpen] = useState<boolean>(false);

  return (
    <>
      <header id="header">
        <div>
          <Link className="logo" to={""}>
            <img src={mauaLogo} alt="Logo do Instituto Mauá de Tecnologia" />
          </Link>

          <Link className="logo" to={""}>
            <img src={eurekaLogo} alt="Logo da Eureka 2024" />
          </Link>
          <Link className="logo" to={""}>
            <img
              src={mauaEurekaLogo}
              alt="Logo do Instituto Mauá de Tecnologia e Eureka 2024"
            />
          </Link>
        </div>
        <aside>
          <Link  onBlur={() => setIsUserDialogOpen(false)} className="link" to={""}>
            <img onClick={() => setIsUserDialogOpen(!isUserDialogOpen)} src={profileIcon} alt="Ícone de perfil" className="profile" />
            {isUserDialogOpen ? <section>
              <div>
                <h1>Isabella Augusta Rodrigues</h1>
                <p>RA: 22.01190-0</p>
                <Link className="button" to={""}>Sair</Link>
              </div>
            </section> : null}
          </Link>
          <Link   onBlur={() => setIsQuestionDialogOpen(false)} className="link" to={""}>
            <img onClick={() => setIsQuestionDialogOpen(!isQuestionDialogOpen)} src={questionIcon} alt="Ícone de interrogação" />
            {isQuestionDialogOpen ? <section>
              <div>
                <Link className="questionTitle" to={""}>Ajuda</Link>
                <Link  className="questionTitle"  to={""}>Conheça o sistema</Link>
              </div>
            </section> : null}
          </Link>
          <Link className="link" to={""}>
            <img src={messageIcon} alt="Ícone de mensagens" />
          </Link>
          <Link className="link" to={""}>
            <img src={calendarIcon} alt="ìcone de calendário" />
          </Link>
        </aside>
      </header>
      <nav id="headerNav">
        <ul>
          <li>
            <button className="navigator">Meus trabalhos e estandes</button>
          </li>
          <li>
            <button className="navigator">Downloads</button>
          </li>
          <li onBlur={() => setIsWorkAndStandsOpenColumn(false)}>
            <button
              onClick={() =>
                setIsWorkAndStandsOpenColumn(!isWorkAndStandsOpenColumn)
              }
              className="navigator"
            >
              {" "}
              Trabalhos e estandes
            </button>
            {isWorkAndStandsOpenColumn ? (
              <NavColumn
                navOptions={[
                  "Cadastrar",
                  "Cadastrar múltiplos",
                  "Consultar",
                  "Estandes institucionais",
                ]}
              />
            ) : null}
          </li>
          <li>
            <button className="navigator">Relatórios</button>
          </li>
          <li onBlur={() => setIsEventColumnOpen(false)}>
            <button
              onClick={() => setIsEventColumnOpen(!isEventColumnOpen)}
              className="navigator"
            >
              {" "}
              Evento
            </button>
            {isEventColumnOpen ? (
              <NavColumn
                navOptions={[
                  "Autorizar entrada",
                  "Colaboradores externos",
                  "Colaboradores internos",
                  "Crachás",
                  "Número de estandes",
                  "Textos para correção",
                ]}
              />
            ) : null}
          </li>
          <li onBlur={() => setIsUserColumnOpen(false)}>
            <button
              onClick={() => setIsUserColumnOpen(!isUserColumnOpen)}
              className="navigator"
            >
              {" "}
              Usuários
            </button>
            {isUserColumnOpen ? (
              <NavColumn
                navOptions={[
                  "Cadastrar",
                  "Cadastrar múltiplos",
                  "Consultar",
                  "Desativar",
                ]}
              />
            ) : null}
          </li>

          <li onBlur={() => setIsSystemColumnOpen(false)}>
            <button
              onClick={() => setIsSystemColumnOpen(!isSystemColumnOpen)}
              className="navigator"
            >
              {" "}
              Sistema
            </button>
            {isSystemColumnOpen ? (
              <NavColumn
                navOptions={[
                  "Alterar ano de visualização",
                  "Backup de arquivos",
                  "Controle de estoque",
                  "Datas",
                  "Estatísticas",
                  "Imagens",
                  "Log de usuários",
                  "Log de trabalhos",
                ]}
              />
            ) : null}
          </li>
        </ul>
        <aside>
          <button onClick={() => setIsUserDialogOpen(!isUserDialogOpen)} onBlur={() => setIsUserDialogOpen(false)} className="link">
            <img src={profileIcon} alt="Ícone de perfil" />
            {isUserDialogOpen ? <section>
              <div>
                <h1>Isabella Augusta Rodrigues</h1>
                <p>RA: 22.01190-0</p>
                <Link className="button" to={""}>Sair</Link>
              </div>
            </section> : null}
          </button>
          <button onClick={() => setIsQuestionDialogOpen(!isQuestionDialogOpen)} onBlur={() => setIsQuestionDialogOpen(false)}  className="link">
            <img src={questionIcon} alt="Ícone de interrogação" />
            {isQuestionDialogOpen ? <section>
              <div>
                <Link className="questionTitle" to={""}>Ajuda</Link>
                <Link  className="questionTitle"  to={""}>Conheça o sistema</Link>
              </div>
            </section> : null}
          </button>
          <button className="link">
            <img src={messageIcon} alt="Ícone de mensagens" />
          </button>
          <button className="link">
            <img src={calendarIcon} alt="ìcone de calendário" />
          </button>

          <button
            className="link"
            onClick={() => setIsMenuColumnOpen(!isMenuColumnOpen)}
            onBlur={() => setIsMenuColumnOpen(false)}
          >
            <img src={menuIcon} alt="ìcone de menu" />
            {isMenuColumnOpen ? (
              <NavColumn
                navOptions={[
                  "Meus trabalhos e estandes",
                  "Downloads",
                  "Trabalhos e estandes",
                  "Relatórios",
                  "Evento",
                  "Usuários",
                  "Sistema",
                ]}
              />
            ) : null}
          </button>
        </aside>
      </nav>
    </>
  );
}
