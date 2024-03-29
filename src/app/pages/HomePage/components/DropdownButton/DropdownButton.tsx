import React, { useState } from "react";
import arrowIcon from "../../../../assets/icons/arrow-icon.svg";
import "./DropdownButton.css";
import DismissableDialog from "../../../../ui/components/DismissableDialog/DismissableDialog";

type DropdownButtonProps = {
  options: string[];
  optionChoosed?: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
};

export default function DropdownButton({ options, optionChoosed, setOption }: DropdownButtonProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <DismissableDialog setOpen={setIsDropdownOpen} dialogClassName="dropdown_button">
      <button className="dropdown_button__btn" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <p className="dropdown_button__text">{optionChoosed}</p>
        <img
          className="dropdown_button__icon"
          src={arrowIcon}
          style={isDropdownOpen ? { transform: "scale(1, -1)" } : {}}
          alt="Ícone de flecha"
        />
        {isDropdownOpen && (
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
