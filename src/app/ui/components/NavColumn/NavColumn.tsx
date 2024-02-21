import { Link } from "react-router-dom";
import "./NavColumn.css";
import { useState } from "react";
import { navOptionsList } from "../../../utils/statics/nav-options-list";
import { BooleanStatesType } from "../../../utils/@types/boolean-states-type";
import DismissableDialog from "../../helpers/DismissableDialog/DismissableDialog";

type NavColumnProps = {
  navColumnOptions?: string[];
};

const initialNavStates: BooleanStatesType = {
  isWorkAndStandsColumnOpen: false,
  isEventColumnOpen: false,
  isUserColumnOpen: false,
  isSystemColumnOpen: false,
  isMenuColumnOpen: false,
};

export default function NavColumn({ navColumnOptions }: NavColumnProps) {
  const [navStates, setNavStates] = useState<BooleanStatesType>(initialNavStates);

  const handleNavStates = (key: string, state?: boolean) => {
    setNavStates((prevState) => ({
      ...prevState,
      [key]: state === undefined ? !prevState[key] : state,
    }));
  };

  return (
    <div id="nav_column">
      {navColumnOptions === undefined
        ? navOptionsList.map((navOption, navOptionIndex) => {
            return (
              <DismissableDialog
                key={navOptionIndex}
                setOpen={() => handleNavStates(navOption.stateKey!, false)}
                dialogClassName="option"
              >
                <div
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavStates(navOption.stateKey!);
                  }}
                  className="option__btn"
                >
                  <span className="option__title">{navOption.primaryOption}</span>
                </div>
                {navStates[navOption.stateKey!] && (
                  <div className="nav_column--secondary">
                    {navOption.secondaryOptions.map((secondaryOption, index) => {
                      return (
                        <Link
                          key={index}
                          className="option option--secondary"
                          to={""}
                          onClick={(event) => event.preventDefault()}
                        >
                          <span className="option__title">{secondaryOption}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </DismissableDialog>
            );
          })
        : navColumnOptions!.map((e, index) => {
            return (
              <Link
                key={index}
                className="option"
                to={""}
                onClick={(event) => event.preventDefault()}
              >
                <span className="option__title">{e}</span>
              </Link>
            );
          })}
    </div>
  );
}
