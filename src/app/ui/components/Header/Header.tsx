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
import Skeleton from "react-loading-skeleton";
import { AuthContext } from "../../../context/auth-context";
import DismissableDialog from "../../helpers/DismissableDialog/DismissableDialog";
import DefaultButton from "../../components/DefaultButton/DefaultButton";
import { navOptionsList } from "../../../utils/statics/nav-options-list";
import { BooleanStatesType } from "../../../utils/@types/boolean-states-type";
import { useHandleBooleanStates } from "../../../hooks/useHandleBooleanStates";
import SquareIconButton from "../SquareIconButton/SquareIconButton";

const initialStates: BooleanStatesType = {
  isWorkAndStandsColumnOpen: false,
  isEventColumnOpen: false,
  isUserColumnOpen: false,
  isSystemColumnOpen: false,
  isMenuColumnOpen: false,
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
          <SquareIconButton icon={profileIcon} alt="Ícone de perfil">
            {userFromContext.name != undefined ? (
              <h1 className="baloon__title baloon__title--margin">{userFromContext.name}</h1>
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
          </SquareIconButton>
          <SquareIconButton
            icon={questionIcon}
            alt="Ícone de dúvidas"
            baloonContentClassName="baloon__content--question"
          >
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
          </SquareIconButton>
          <SquareIconButton alt="Ícone de mensagens" icon={messageIcon} />
          <SquareIconButton
            alt="Ícone de calendário"
            icon={calendarIcon}
            squareClassName="square--calendar"
            iconClassName="square__img--calendar"
          />
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
          <SquareIconButton icon={profileIcon} alt="Ícone de perfil">
            {userFromContext.name != undefined ? (
              <h1 className="baloon__title baloon__title--margin">{userFromContext.name}</h1>
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
          </SquareIconButton>
          <SquareIconButton
            icon={questionIcon}
            alt="Ícone de dúvidas"
            baloonContentClassName="baloon__content--question"
          >
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
          </SquareIconButton>
          <SquareIconButton alt="Ícone de mensagens" icon={messageIcon} />
          <SquareIconButton
            alt="Ícone de calendário"
            icon={calendarIcon}
            squareClassName="square--calendar"
            iconClassName="square__img--calendar"
          />
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
