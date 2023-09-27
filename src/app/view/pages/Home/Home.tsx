import ProjectCard from "../../components/ProjectCard/ProjectCard";
import workingImage from "../../../assets/working_image.jpg";
import arrowIcon from "../../../assets/arrow_icon.png";
import "./Home.css";
import { useState } from "react";

export default function Home() {

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [dropdownText, setDropdownText] = useState<String>("Visualizar trabalhos como");

  let handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <>
      <main id="home">
        <div>
          <button onClick={handleDropdownClick}
          onBlur={handleDropdownClick}
          >
            <p>{dropdownText}</p>
            <img src={arrowIcon} style={
              isDropdownOpen ? {transform: "scale(1, -1)"} : {}
            } alt="Ícone de flecha" />
          </button>
          
        </div>
        <ProjectCard
          image={workingImage}
          teacherAdvisor="Ana Paula"
          title="DSG - Design universal aplicado em embalagem de protetor solar"
        />
        <ProjectCard
          image={workingImage}
          teacherAdvisor="Ana Paula"
          title="DSG - Design universal aplicado em embalagem de protetor solar"
        />
        <ProjectCard
          image={workingImage}
          teacherAdvisor="Ana Paula"
          title="DSG - Design universal aplicado em embalagem de protetor solar"
        />
      </main>
    </>
  );
}
