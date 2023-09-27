import "./Header.css";
import mauaLogo from "../../../assets/maua_logo.png";
import profileIcon from "../../../assets/profile_icon.svg";
import questionIcon from "../../../assets/question_icon.svg";
import messageIcon from "../../../assets/message_icon.svg";
import calendarIcon from "../../../assets/calendar_icon.svg";
import menuIcon from "../../../assets/menu_icon.svg";
import { Link } from "react-router-dom";

export default function Header() {
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
          <Link to={""} className="navigator">
            <li>Meus trabalhos e estandes</li>
          </Link>
          <Link to={""} className="navigator">
            <li>Downloads</li>
          </Link>
          <Link to={""} className="navigator">
            <li>Trabalhos e estandes</li>
          </Link>
          <Link to={""} className="navigator">
            <li>Relatórios</li>
          </Link>
          <Link to={""} className="navigator">
            <li>Evento</li>
          </Link>
          <Link to={""} className="navigator">
            <li>Usuários</li>
          </Link>
          <Link to={""} className="navigator">
            <li>Sistema</li>
          </Link>
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
