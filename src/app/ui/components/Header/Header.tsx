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
import { useContext } from "react";
import { ROLE } from "../../../../@clean/shared/domain/enums/role-enum";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { AuthContext } from "../../../context/auth-context";
import DismissableDialog from "../../helpers/DismissableDialog/DismissableDialog";
import DefaultButton from "../../components/DefaultButton/DefaultButton";
import { navOptionsList } from "../../../utils/statics/nav-options-list";
import { BooleanStatesType } from "../../../utils/@types/boolean-states-type";
import { useHandleBooleanStates } from "../../../hooks/useHandleBooleanStates";

const initialStates: BooleanStatesType = {
  isWorkAndStandsColumnOpen: false,
  isEventColumnOpen: false,
  isUserColumnOpen: false,
  isSystemColumnOpen: false,
  isMenuColumnOpen: false,
  isUserDialogOpen: false,
  isQuestionDialogOpen: false,
  isUserMobileDialogOpen: false,
  isQuestionMobileDialogOpen: false,
};

export default function Header() {
  const { userFromContext } = useContext(AuthContext);
  const ra = userFromContext.email.slice(0, 10);

  const { states, handleStates } = useHandleBooleanStates(initialStates);

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
            <DismissableDialog
              setOpen={() => handleStates("isUserDialogOpen", false)}
              dialogClassName="square square--user"
            >
              <img
                className="square__img"
                onClick={() => handleStates("isUserDialogOpen")}
                src={profileIcon}
                alt="Ícone de perfil"
              />
              {states["isUserDialogOpen"] && (
                <section className="baloon baloon--user">
                  <div className="baloon__content">
                    {userFromContext.name !== "" ? (
                      <h1 className="baloon__title baloon__title--margin">
                        {userFromContext.name}
                      </h1>
                    ) : (
                      <Skeleton containerClassName="baloon__title baloon__title--skeleton baloon__title--margin"></Skeleton>
                    )}
                    {userFromContext.role === ROLE.STUDENT &&
                      (ra !== "" ? (
                        <p className="baloon__text">RA: {ra}</p>
                      ) : (
                        <Skeleton containerClassName="baloon__text baloon__text--skeleton"></Skeleton>
                      ))}
                    <DefaultButton title="Sair" buttonClassName="baloon__btn"></DefaultButton>
                  </div>
                </section>
              )}
            </DismissableDialog>
          </SkeletonTheme>
          <DismissableDialog
            setOpen={() => handleStates("isQuestionDialogOpen", false)}
            dialogClassName="square"
          >
            <img
              className="square__img"
              onClick={() => handleStates("isQuestionDialogOpen")}
              src={questionIcon}
              alt="Ícone de interrogação"
            />
            {states["isQuestionDialogOpen"] && (
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
          </DismissableDialog>
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
          {navOptionsList.map((navOption, index) => {
            /* construct the nav row  */
            return (
              <DismissableDialog
                key={index}
                setOpen={() => handleStates(navOption.stateKey!, false)}
                dialogClassName="nav__item"
              >
                <div onClick={() => handleStates(navOption.stateKey!)} className="nav__btn">
                  {navOption.primaryOption}
                </div>
                {states[navOption.stateKey!] && (
                  <NavColumn navColumnOptions={navOption.secondaryOptions} />
                )}
              </DismissableDialog>
            );
          })}
        </ul>
        <aside className="squares">
          <SkeletonTheme baseColor="var(--blue)" highlightColor="var(--light-blue)">
            <DismissableDialog
              setOpen={() => handleStates("isUserMobileDialogOpen", false)}
              dialogClassName="square square--user"
            >
              <img
                className="square__img"
                onClick={() => handleStates("isUserMobileDialogOpen")}
                src={profileIcon}
                alt="Ícone de perfil"
              />
              {states["isUserMobileDialogOpen"] && (
                <section className="baloon baloon--user">
                  <div className="baloon__content">
                    {userFromContext.name != undefined ? (
                      <h1 className="baloon__title baloon__title--margin">
                        {userFromContext.name}
                      </h1>
                    ) : (
                      <Skeleton containerClassName="baloon__title baloon__title--skeleton baloon__title--margin"></Skeleton>
                    )}
                    {userFromContext.role == ROLE.STUDENT &&
                      (ra != undefined ? (
                        <p className="baloon__text">RA: {ra}</p>
                      ) : (
                        <Skeleton containerClassName="baloon__text baloon__text--skeleton"></Skeleton>
                      ))}
                    <DefaultButton title="Sair" buttonClassName="baloon__btn"></DefaultButton>
                  </div>
                </section>
              )}
            </DismissableDialog>
          </SkeletonTheme>
          <DismissableDialog
            setOpen={() => handleStates("isQuestionMobileDialogOpen", false)}
            dialogClassName="square"
          >
            <img
              className="square__img"
              onClick={() => handleStates("isQuestionMobileDialogOpen")}
              src={questionIcon}
              alt="Ícone de interrogação"
            />
            {states["isQuestionMobileDialogOpen"] && (
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
          </DismissableDialog>
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
          <DismissableDialog
            dialogClassName="menu"
            setOpen={() => handleStates("isMenuColumnOpen", false)}
          >
            <img
              className="menu__img"
              onClick={() => handleStates("isMenuColumnOpen")}
              src={menuIcon}
              alt="ìcone de menu"
            />
            {states["isMenuColumnOpen"] && <NavColumn />}
          </DismissableDialog>
        </aside>
      </nav>
    </header>
  );
}
