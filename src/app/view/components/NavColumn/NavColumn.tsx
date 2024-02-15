import { Link } from "react-router-dom";
import "./NavColumn.css";
import { useState } from "react";
import Dialog from "../Dialog/Dialog";
import { States } from "../../../utils/states-type";
import { navOptions } from "../../../utils/nav-options";

type NavColumnProps = {
  navColumnOptions?: string[];
};

const initialNavStates: States = {
  isWorkAndStandsColumnOpen: false,
  isEventColumnOpen: false,
  isUserColumnOpen: false,
  isSystemColumnOpen: false,
  isMenuColumnOpen: false,
};

export default function NavColumn({ navColumnOptions }: NavColumnProps) {
  const [navStates, setNavStates] = useState<States>(initialNavStates);

  const handleNavStates = (key: string, state?: boolean) => {
    setNavStates((prevState) => ({
      ...prevState,
      [key]: state === undefined ? !prevState[key] : state,
    }));
  };

  return (
    <div id="nav_column">
      {navColumnOptions === undefined
        ? navOptions.map((navOption, navOptionIndex) => {
            return (
              <Dialog
                key={navOptionIndex}
                setOpen={() => handleNavStates(navOption.stateKey!, false)}
                className="option"
              >
                <div
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavStates(navOption.stateKey!);
                  }}
                  className="option__button"
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
              </Dialog>
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
