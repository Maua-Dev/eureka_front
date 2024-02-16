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
import { navOptions } from "../../../utils/nav-options";
import { States } from "../../../utils/states-type";
import BasicButton from "../BasicButton/BasicButton";

const initialNavStates: States = {
  isWorkAndStandsColumnOpen: false,
  isEventColumnOpen: false,
  isUserColumnOpen: false,
  isSystemColumnOpen: false,
  isMenuColumnOpen: false,
};

const initialDialogStates: States = {
  isUserDialogOpen: false,
  isQuestionDialogOpen: false,
  isUserMobileDialogOpen: false,
  isQuestionMobileDialogOpen: false,
};

export default function Header() {
  const { user } = useContext(AuthContext);
  const ra = user.email.slice(0, 10);

  const [navStates, setNavStates] = useState<States>(initialNavStates);
  const [dialogStates, setDialogStates] = useState<States>(initialDialogStates);

  const handleNavStates = (key: string, state?: boolean) => {
    setNavStates((prevState) => ({
      ...prevState,
      [key]: state === undefined ? !prevState[key] : state,
    }));
  };

  const handleDialogStates = (key: string, state?: boolean) => {
    setDialogStates((prevState) => ({
      ...prevState,
      [key]: state === undefined ? !prevState[key] : state,
    }));
  };

  return (
    <header id="header">
      <div className="header--top">
        <div className="container--left">
          <Link className="logo" to={""}>
            <img className="logo__img" src={mauaLogo} alt="Logo do Instituto Mauá de Tecnologia" />
          </Link>
          <Link className="logo logo--margin" to={""}>
            <img
              className="logo__img logo__img--bigger"
              src={eurekaLogo}
              alt="Logo da Eureka 2024"
            />
          </Link>
        </div>
        <aside className="container--right">
          <SkeletonTheme baseColor="var(--blue)" highlightColor="var(--light-blue)">
            <Dialog
              setOpen={() => handleDialogStates("isUserDialogOpen", false)}
              className="square square--user"
            >
              <img
                className="square__img"
                onClick={() => handleDialogStates("isUserDialogOpen")}
                src={profileIcon}
                alt="Ícone de perfil"
              />
              {dialogStates["isUserDialogOpen"] && (
                <section className="baloon baloon--user">
                  <div className="baloon__content">
                    {user.name !== "" ? (
                      <h1 className="baloon__title baloon__title--margin">{user.name}</h1>
                    ) : (
                      <Skeleton containerClassName="baloon__title baloon__title--skeleton baloon__title--margin"></Skeleton>
                    )}
                    {user.role === ROLE.STUDENT &&
                      (ra !== "" ? (
                        <p className="baloon__text">RA: {ra}</p>
                      ) : (
                        <Skeleton containerClassName="baloon__text baloon__text--skeleton"></Skeleton>
                      ))}
                    <BasicButton title="Sair" buttonClassName="baloon__btn"></BasicButton>
                  </div>
                </section>
              )}
            </Dialog>
          </SkeletonTheme>
          <Dialog
            setOpen={() => handleDialogStates("isQuestionDialogOpen", false)}
            className="square"
            to={""}
          >
            <img
              className="square__img"
              onClick={() => handleDialogStates("isQuestionDialogOpen")}
              src={questionIcon}
              alt="Ícone de interrogação"
            />
            {dialogStates["isQuestionDialogOpen"] && (
              <section className="baloon baloon--question">
                <div className="baloon__content baloon__content--question">
                  <Link
                    className="baloon__title baloon__title--hover"
                    to={""}
                    onClick={(event) => event.preventDefault()}
                  >
                    Ajuda
                  </Link>
                  <Link
                    className="baloon__title baloon__title--hover"
                    to={""}
                    onClick={(event) => event.preventDefault()}
                  >
                    Conheça o sistema
                  </Link>
                </div>
              </section>
            )}
          </Dialog>
          <Link className="square" to={""} onClick={(event) => event.preventDefault()}>
            <img className="square__img" src={messageIcon} alt="Ícone de mensagens" />
          </Link>
          <Link
            className="square square--calendar"
            to={""}
            onClick={(event) => event.preventDefault()}
          >
            <img
              className="square__img square__img--calendar"
              src={calendarIcon}
              alt="ìcone de calendário"
            />
          </Link>
        </aside>
      </div>
      <nav className="header--botton">
        <ul className="nav">
          {navOptions.map((navOption, index) => {
            /* construct the nav row  */
            return (
              <Dialog
                key={index}
                setOpen={() => handleNavStates(navOption.stateKey!, false)}
                className="nav__item"
              >
                <div onClick={() => handleNavStates(navOption.stateKey!)} className="nav__btn">
                  {navOption.primaryOption}
                </div>
                {navStates[navOption.stateKey!] && (
                  <NavColumn navColumnOptions={navOption.secondaryOptions} />
                )}
              </Dialog>
            );
          })}
        </ul>
        <aside className="squares">
          <SkeletonTheme baseColor="var(--blue)" highlightColor="var(--light-blue)">
            <Dialog
              setOpen={() => handleDialogStates("isUserMobileDialogOpen", false)}
              className="square square--user"
            >
              <img
                className="square__img"
                onClick={() => handleDialogStates("isUserMobileDialogOpen")}
                src={profileIcon}
                alt="Ícone de perfil"
              />
              {dialogStates["isUserMobileDialogOpen"] && (
                <section className="baloon baloon--user">
                  <div className="baloon__content">
                    {user.name != undefined ? (
                      <h1 className="baloon__title baloon__title--margin">{user.name}</h1>
                    ) : (
                      <Skeleton containerClassName="baloon__title baloon__title--skeleton baloon__title--margin"></Skeleton>
                    )}
                    {user.role == ROLE.STUDENT &&
                      (ra != undefined ? (
                        <p className="baloon__text">RA: {ra}</p>
                      ) : (
                        <Skeleton containerClassName="baloon__text baloon__text--skeleton"></Skeleton>
                      ))}
                    <BasicButton title="Sair" buttonClassName="baloon__btn"></BasicButton>
                  </div>
                </section>
              )}
            </Dialog>
          </SkeletonTheme>
          <Dialog
            setOpen={() => handleDialogStates("isQuestionMobileDialogOpen", false)}
            className="square"
          >
            <img
              className="square__img"
              onClick={() => handleDialogStates("isQuestionMobileDialogOpen")}
              src={questionIcon}
              alt="Ícone de interrogação"
            />
            {dialogStates["isQuestionMobileDialogOpen"] && (
              <section className="baloon baloon--question">
                <div className="baloon__content baloon__content--question">
                  <Link
                    className="baloon__title baloon__title--hover"
                    to={""}
                    onClick={(event) => event.preventDefault()}
                  >
                    Ajuda
                  </Link>
                  <Link
                    className="baloon__title baloon__title--hover"
                    to={""}
                    onClick={(event) => event.preventDefault()}
                  >
                    Conheça o sistema
                  </Link>
                </div>
              </section>
            )}
          </Dialog>
          <Link to={""} className="square" onClick={(event) => event.preventDefault()}>
            <img className="square__img" src={messageIcon} alt="Ícone de mensagens" />
          </Link>
          <Link
            to={""}
            className="square square--calendar"
            onClick={(event) => event.preventDefault()}
          >
            <img
              className="square__img square__img--calendar"
              src={calendarIcon}
              alt="ìcone de calendário"
            />
          </Link>
          <Dialog className="menu" setOpen={() => handleNavStates("isMenuColumnOpen", false)}>
            <img
              className="menu__img"
              onClick={() => handleNavStates("isMenuColumnOpen")}
              src={menuIcon}
              alt="ìcone de menu"
            />
            {navStates["isMenuColumnOpen"] && <NavColumn />}
          </Dialog>
        </aside>
      </nav>
    </header>
  );
}
