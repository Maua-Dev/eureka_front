import "./Header.css";
import mauaLogo from "../../../assets/logos/maua-logo.png";
import eurekaLogo from "../../../assets/logos/eureka-logo.png";
import profileIcon from "../../../assets/icons/profile-icon.svg";
import questionIcon from "../../../assets/icons/question-icon.svg";
import messageIcon from "../../../assets/icons/message-icon.svg";
import calendarIcon from "../../../assets/icons/calendar-icon.svg";
import menuIcon from "../../../assets/icons/menu-icon.svg";
import { Link } from "react-router-dom";
import NavColumn from "../NavColumn/NavColumn";
import { useContext, useState } from "react";
import Dialog from "../Dialog/Dialog";
import { AuthContext } from "../../../context/auth-context";
import { ROLE } from "../../../../@clean/shared/domain/enums/role-enum";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

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

  const { user } = useContext(AuthContext);
  const ra = user.email.slice(0, 10);

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
          <SkeletonTheme baseColor="var(--blue)" highlightColor="var(--light-blue)">
            <Dialog setOpen={setIsUserDialogOpen} className="square square--user">
              <img
                className="square__img"
                onClick={() => setIsUserDialogOpen(!isUserDialogOpen)}
                src={profileIcon}
                alt="Ícone de perfil"
              />
              {isUserDialogOpen && <section className="baloon baloon--user">
                <div className="baloon__content">
                  {user.name != undefined ? <h1 className="baloon__title baloon__title--margin">{user.name}</h1> : <Skeleton containerClassName="baloon__title baloon__title--skeleton baloon__title--margin" ></Skeleton>}
                  {user.role == ROLE.STUDENT && (ra != undefined ? <p className="baloon__text">RA: {ra}</p> : <Skeleton containerClassName="baloon__text baloon__text--skeleton" ></Skeleton>)}
                  <Link className="baloon__btn" to={""}>
                    Sair
                  </Link>
                </div>
              </section>}
            </Dialog>
          </SkeletonTheme>
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
          <SkeletonTheme baseColor="var(--blue)" highlightColor="var(--light-blue)">
            <Dialog setOpen={setIsUserMobileDialogOpen} className="square square--user">
              <img
                className="square__img"
                onClick={() => setIsUserMobileDialogOpen(!isUserMobileDialogOpen)}
                src={profileIcon}
                alt="Ícone de perfil"
              />
              {isUserMobileDialogOpen && <section className="baloon baloon--user">
                <div className="baloon__content">
                  {user.name != undefined ? <h1 className="baloon__title baloon__title--margin">{user.name}</h1> : <Skeleton containerClassName="baloon__title baloon__title--skeleton baloon__title--margin" ></Skeleton>}
                  {user.role == ROLE.STUDENT && (ra != undefined ? <p className="baloon__text">RA: {ra}</p> : <Skeleton containerClassName="baloon__text baloon__text--skeleton" ></Skeleton>)}
                  <Link className="baloon__btn" to={""} onClick={(event) => event.preventDefault()}>
                    Sair
                  </Link>
                </div>
              </section>}
            </Dialog>
          </SkeletonTheme>
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
