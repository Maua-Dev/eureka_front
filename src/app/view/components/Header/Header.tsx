import "./Header.css";
import mauaLogo from "../../../assets/maua_logo.png";
import eurekaLogo from "../../../assets/eureka_logo.png";
import profileIcon from "../../../assets/profile_icon.svg";
import questionIcon from "../../../assets/question_icon.svg";
import messageIcon from "../../../assets/message_icon.svg";
import calendarIcon from "../../../assets/calendar_icon.svg";
import menuIcon from "../../../assets/menu_icon.svg";
import { Link } from "react-router-dom";
import NavColumn from "../NavColumn/NavColumn";
import { useState } from "react";
import Dialog from "../Dialog/Dialog";

export default function Header() {
  const [isWorkAndStandsColumnOpen, setIsWorkAndStandsColumnOpen] =
    useState<boolean>(false);
  const [isEventColumnOpen, setIsEventColumnOpen] = useState<boolean>(false);
  const [isUserColumnOpen, setIsUserColumnOpen] = useState<boolean>(false);
  const [isSystemColumnOpen, setIsSystemColumnOpen] = useState<boolean>(false);
  const [isMenuColumnOpen, setIsMenuColumnOpen] = useState<boolean>(false);
  const [isUserDialogOpen, setIsUserDialogOpen] = useState<boolean>(false);
  const [isQuestionDialogOpen, setIsQuestionDialogOpen] =
    useState<boolean>(false);
  const [isUserMobileDialogOpen, setIsUserMobileDialogOpen] =
    useState<boolean>(false);
  const [isQuestionMobileDialogOpen, setIsQuestionMobileDialogOpen] =
    useState<boolean>(false);

  return (
    <header id="header">
      <div className="header--top">
        <div className="container--left">
          <Link className="logo" to={""} >
            <img className="logo__img" src={mauaLogo} alt="Logo do Instituto Mauá de Tecnologia" />
          </Link>
          <Link className="logo logo--margin" to={""}>
            <img className="logo__img logo__img--bigger" src={eurekaLogo} alt="Logo da Eureka 2024" />
          </Link>
        </div>
        <aside className="container--right">
          <Dialog setOpen={setIsUserDialogOpen} className="square square--user">
            <img
              className="square__img"
              onClick={() => setIsUserDialogOpen(!isUserDialogOpen)}
              src={profileIcon}
              alt="Ícone de perfil"
            />
            {isUserDialogOpen && <section className="baloon baloon--user">
              <div className="baloon__content">
                <h1 className="baloon__title baloon__title--margin">Isabella Augusta Rodrigues</h1>
                <p className="baloon__text">RA: 22.01190-0</p>
                <Link className="baloon__btn" to={""}>
                  Sair
                </Link>
              </div>
            </section>}
          </Dialog>
          <Dialog setOpen={setIsQuestionDialogOpen} className="square" to={""}>
            <img
              className="square__img"
              onClick={() => setIsQuestionDialogOpen(!isQuestionDialogOpen)}
              src={questionIcon}
              alt="Ícone de interrogação"
            />
            {isQuestionDialogOpen && <section className="baloon baloon--question">
              <div className="baloon__content baloon__content--question">
                <Link className="baloon__title baloon__title--hover" to={""} onClick={(event) => event.preventDefault()}>
                  Ajuda
                </Link>
                <Link className="baloon__title baloon__title--hover" to={""} onClick={(event) => event.preventDefault()}>
                  Conheça o sistema
                </Link>
              </div>
            </section>}
          </Dialog>
          <Link className="square" to={""} onClick={(event) => event.preventDefault()}>
            <img className="square__img" src={messageIcon} alt="Ícone de mensagens" />
          </Link>
          <Link className="square square--calendar" to={""} onClick={(event) => event.preventDefault()}>
            <img className="square__img square__img--calendar" src={calendarIcon} alt="ìcone de calendário" />
          </Link>
        </aside>
      </div>
      <nav className="header--botton">
        <ul className="nav">
          <li className="nav__item">
            <div className="nav__btn">Meus trabalhos e estandes</div>
          </li>
          <li className="nav__item">
            <div className="nav__btn">Downloads</div>
          </li>
          <Dialog setOpen={setIsWorkAndStandsColumnOpen} className="nav__item">
            <div
              onClick={() =>
                setIsWorkAndStandsColumnOpen(!isWorkAndStandsColumnOpen)
              }
              className="nav__btn"
            >
              Trabalhos e estandes
            </div>
            {isWorkAndStandsColumnOpen && <NavColumn
              isMobile={false}
              navOptions={[
                "Cadastrar",
                "Cadastrar múltiplos",
                "Consultar",
                "Estandes institucionais",
              ]}
            />}
          </Dialog>
          <li className="nav__item">
            <div className="nav__btn">Relatórios</div>
          </li>
          <Dialog setOpen={setIsEventColumnOpen} className="nav__item">
            <div
              onClick={() => setIsEventColumnOpen(!isEventColumnOpen)}
              className="nav__btn"
            >
              Evento
            </div>
            {isEventColumnOpen && <NavColumn
              isMobile={false}
              navOptions={[
                "Autorizar entrada",
                "Colaboradores externos",
                "Colaboradores internos",
                "Crachás",
                "Número de estandes",
                "Textos para correção",
              ]}
            />}
          </Dialog>
          <Dialog setOpen={setIsUserColumnOpen} className="nav__item">
            <div
              onClick={() => setIsUserColumnOpen(!isUserColumnOpen)}
              className="nav__btn"
            >
              Usuários
            </div>
            {isUserColumnOpen && <NavColumn
              isMobile={false}
              navOptions={[
                "Cadastrar",
                "Cadastrar múltiplos",
                "Consultar",
                "Desativar",
              ]}
            />}
          </Dialog>
          <Dialog setOpen={setIsSystemColumnOpen} className="nav__item">
            <div
              onClick={() => setIsSystemColumnOpen(!isSystemColumnOpen)}
              className="nav__btn"
            >
              {" "}
              Sistema
            </div>
            {isSystemColumnOpen && <NavColumn
              isMobile={false}
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
            />}
          </Dialog>
        </ul>
        <aside className="squares">
          <Dialog setOpen={setIsUserMobileDialogOpen} className="square square--user">
            <img
              className="square__img"
              onClick={() => setIsUserMobileDialogOpen(!isUserMobileDialogOpen)}
              src={profileIcon}
              alt="Ícone de perfil"
            />
            {isUserMobileDialogOpen && <section className="baloon baloon--user">
              <div className="baloon__content">
                <h1 className="baloon__title baloon__title--margin">Isabella Augusta Rodrigues</h1>
                <p className="baloon__text">RA: 22.01190-0</p>
                <Link className="baloon__btn" to={""} onClick={(event) => event.preventDefault()}>
                  Sair
                </Link>
              </div>
            </section>}
          </Dialog>
          <Dialog setOpen={setIsQuestionMobileDialogOpen} className="square" >
            <img
              className="square__img"
              onClick={() =>
                setIsQuestionMobileDialogOpen(!isQuestionMobileDialogOpen)
              }
              src={questionIcon}
              alt="Ícone de interrogação"
            />
            {isQuestionMobileDialogOpen && <section className="baloon baloon--question">
              <div className="baloon__content baloon__content--question">
                <Link className="baloon__title baloon__title--hover" to={""} onClick={(event) => event.preventDefault()}>
                  Ajuda
                </Link>
                <Link className="baloon__title baloon__title--hover" to={""} onClick={(event) => event.preventDefault()}>
                  Conheça o sistema
                </Link>
              </div>
            </section>}
          </Dialog>
          <Link to={""} className="square" onClick={(event) => event.preventDefault()}>
            <img className="square__img" src={messageIcon} alt="Ícone de mensagens" />
          </Link>
          <Link to={""} className="square square--calendar" onClick={(event) => event.preventDefault()}>
            <img className="square__img square__img--calendar" src={calendarIcon} alt="ìcone de calendário" />
          </Link>
          <Dialog className="menu" setOpen={setIsMenuColumnOpen}>
            <img
              className="menu__img"
              onClick={() => setIsMenuColumnOpen(!isMenuColumnOpen)}
              src={menuIcon}
              alt="ìcone de menu"
            />
            {isMenuColumnOpen && <NavColumn
              isMobile={true}
              navOptions={[
                "Meus trabalhos e estandes",
                "Downloads",
                "Trabalhos e estandes",
                "Relatórios",
                "Evento",
                "Usuários",
                "Sistema",
              ]}
            />}
          </Dialog>
        </aside>
      </nav>
    </header>
  );
}
