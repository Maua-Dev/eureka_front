import { useState } from "react";
import "./NavSquare.css";
import NavColumn from "../NavColumn/NavColumn";
import DismissableDialog from "../DismissableDialog/DismissableDialog";

type NavSquareProps = {
  primaryOption: string;
  secondaryOptions: string[];
};

export default function NavSquare({ primaryOption, secondaryOptions }: NavSquareProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <DismissableDialog setOpen={setIsNavOpen} dialogClassName="nav__square">
      <div onClick={() => setIsNavOpen(!isNavOpen)} className="nav__btn">
        {primaryOption}
      </div>
      {isNavOpen && <NavColumn navColumnOptions={secondaryOptions} />}
    </DismissableDialog>
  );
}
