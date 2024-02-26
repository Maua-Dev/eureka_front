import { ReactNode, useState } from "react";
import "./SquareIconButton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import DismissableDialog from "../DismissableDialog/DismissableDialog";

type SquareIconButtonProps = {
  icon: string;
  alt: string;
  to?: string;
  children?: ReactNode;
  squareClassName?: string;
  iconClassName?: string;
  baloonClassName?: string;
  baloonContentClassName?: string;
  position?: "--top_left" | "--top_right" | "--bottom_left" | "--bottom_right";
};

export default function SquareIconButton({
  icon,
  alt,
  to,
  children,
  squareClassName,
  iconClassName,
  baloonClassName,
  baloonContentClassName,
  position = "--top_right",
}: SquareIconButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <SkeletonTheme baseColor="var(--blue)" highlightColor="var(--light-blue)">
      {children ? (
        <DismissableDialog
          dialogClassName={`square_icon_button ${squareClassName}`}
          setOpen={setIsDialogOpen}
        >
          <img
            onClick={() => setIsDialogOpen(!isDialogOpen)}
            className={`square_icon_button__img square_icon_button--hover ${iconClassName}`}
            src={icon}
            alt={alt}
          />
          {isDialogOpen && (
            <aside className={`baloon baloon${position} ${baloonClassName}`}>
              <div
                className={`baloon__content baloon__content${position} ${baloonContentClassName}`}
              >
                {children}
              </div>
            </aside>
          )}
        </DismissableDialog>
      ) : (
        <Link to={to ?? ""} className={`square_icon_button ${squareClassName}`}>
          <img
            onClick={() => setIsDialogOpen(!isDialogOpen)}
            className={`square_icon_button__img square_icon_button--hover ${iconClassName}`}
            src={icon}
            alt={alt}
          />
        </Link>
      )}
    </SkeletonTheme>
  );
}
