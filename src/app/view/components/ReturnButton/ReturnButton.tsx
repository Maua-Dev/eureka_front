import arrowBackIcon from "../../../assets/icons/arrow-back-icon.svg";
import { Link } from "react-router-dom";
import "./ReturnButton.css";

type ReturnButtonProps = {
    to?: string;
}

// Component that returns to the previous page
export default function ReturnButton({ to = "/" }: ReturnButtonProps) {
    return (
        <Link className="return" to={to}>
            <img className="return__icon" src={arrowBackIcon} alt="Ícone de flecha" />
        </Link>
    );
}