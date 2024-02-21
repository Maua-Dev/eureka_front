import React from "react";
import arrowIcon from "../../../assets/icons/arrow-icon.svg";
import DismissableDialog from "../../helpers/DismissableDialog/DismissableDialog";
import "./DropdownButton.css";
import { useHandleBooleanStates } from "../../../hooks/useHandleBooleanStates";
import { BooleanStatesType } from "../../../utils/@types/boolean-states-type";

type DropdownButtonProps = {
  options: string[];
  optionChoosed?: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
};

const initialStates: BooleanStatesType = {
  isDropdownOpen: false,
};

export default function DropdownButton({ options, optionChoosed, setOption }: DropdownButtonProps) {
  const { states, handleStates } = useHandleBooleanStates(initialStates);

  return (
    <DismissableDialog
      setOpen={() => handleStates("isDropdownOpen", false)}
      dialogClassName="dropdown_button"
    >
      <button className="dropdown_button__btn" onClick={() => handleStates("isDropdownOpen")}>
        <p className="dropdown_button__text">{optionChoosed}</p>
        <img
          className="dropdown_button__icon"
          src={arrowIcon}
          style={states["isDropdownOpen"] ? { transform: "scale(1, -1)" } : {}}
          alt="Ícone de flecha"
        />
        {states["isDropdownOpen"] && (
          <section className="dropdown_button__options">
            {options.map((option) => {
              return (
                <div
                  key={option}
                  className="option"
                  onClick={() => {
                    setOption(option);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </section>
        )}
      </button>
    </DismissableDialog>
  );
}
