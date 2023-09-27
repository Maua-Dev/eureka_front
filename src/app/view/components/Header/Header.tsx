import "./Header.css";
import mauaLogo from "../../../assets/maua_logo.png";
import profileIcon from "../../../assets/profile_icon.svg";
import questionIcon from "../../../assets/question_icon.svg";
import messageIcon from "../../../assets/message_icon.svg";
import calendarIcon from "../../../assets/calendar_icon.svg";
import menuIcon from "../../../assets/menu_icon.svg";
import { Link } from "react-router-dom";
import NavColumn from "../NavColumn/NavColumn";
import { useState } from "react";

export default function Header() {
  const [isNavColumnOpen, setIsNavColumnOpen] = useState<boolean>(false);

  return (
    <>
      <header id="header">
        <Link className="logo" to={""}>
          <img src={mauaLogo} alt="Logo do Instituto Mauá de Tecnologia" />
        </Link>
        <aside>
          <Link className="link" to={""}>
            <img src={profileIcon} alt="Ícone de perfil" />
          </Link>
          <Link className="link" to={""}>
            <img src={questionIcon} alt="Ícone de interrogação" />
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
            <button  className="navigator">
              Meus trabalhos e estandes
            </button>
          </li>
          <li>
            <button  className="navigator">
              Downloads
            </button>
          </li>
          <li
              onBlur={() => setIsNavColumnOpen(false)}
            >
            <button
              
              onClick={() => setIsNavColumnOpen(!isNavColumnOpen)}
              className="navigator"
            >
              {" "}
              Trabalhos e estandes
            </button>
            {isNavColumnOpen ? (
              <NavColumn
                navOptions={[
                  "Cadastrar",
                  "Cadastrar múltiplos",
                  "Consultar",
                  "Estandes institucionais"
                ]}
              />
            ) : null}
          </li>
          <li>
            <button  className="navigator">
              Relatórios
            </button>
          </li>
          <li
              onBlur={() => setIsNavColumnOpen(false)}
            >
            <button
              
              onClick={() => setIsNavColumnOpen(!isNavColumnOpen)}
              className="navigator"
            >
              {" "}
              Evento
            </button>
            {isNavColumnOpen ? (
              <NavColumn
                navOptions={[
                  "Autorizar entrada",
                  "Colaboradores externos",
                  "Colaboradores internos",
                  "Crachás",
                  "Número de estandes",
                  "Textos para correção"
                ]}
              />
            ) : null}
          </li>
          <li
              onBlur={() => setIsNavColumnOpen(false)}
            >
            <button
              
              onClick={() => setIsNavColumnOpen(!isNavColumnOpen)}
              className="navigator"
            >
              {" "}
              Usuários
            </button>
            {isNavColumnOpen ? (
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

          <li
              onBlur={() => setIsNavColumnOpen(false)}
            >
            <button
              
              onClick={() => setIsNavColumnOpen(!isNavColumnOpen)}
              className="navigator"
            >
              {" "}
              Sistema
            </button>
            {isNavColumnOpen ? (
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
          <Link className="link" to={""}>
            <img src={profileIcon} alt="Ícone de perfil" />
          </Link>
          <Link className="link" to={""}>
            <img src={questionIcon} alt="Ícone de interrogação" />
          </Link>
          <Link className="link" to={""}>
            <img src={messageIcon} alt="Ícone de mensagens" />
          </Link>
          <Link className="link" to={""}>
            <img src={calendarIcon} alt="ìcone de calendário" />
          </Link>
          <Link className="link" to={""}>
            <img src={menuIcon} alt="ìcone de calendário" />
          </Link>
        </aside>
      </nav>
    </>
  );
}
