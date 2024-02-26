import arrowBackIcon from "../../../assets/icons/arrow-back-icon.svg";
import { useNavigate } from "react-router-dom";
import "./ReturnButton.css";

// component that returns to the previous page
export default function ReturnButton() {
  const navigate = useNavigate();

  return (
    <button className="return" onClick={() => navigate(-1)}>
      <img className="return__icon" src={arrowBackIcon} alt="Ícone de flecha" />
    </button>
  );
}
