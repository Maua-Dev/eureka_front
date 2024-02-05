import ProjectCard from "../../components/ProjectCard/ProjectCard";
import workingImage from "../../../assets/working-image.jpg";
import arrowIcon from "../../../assets/arrow-icon.png";
import "./Home.css";
import { useState } from "react";
import Dialog from "../../components/Dialog/Dialog";

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [dropdownText, setDropdownText] = useState<string>(
    "Visualizar trabalhos como"
  );

  return (
    <>
      <main id="home">
        <div className="container">
          <Dialog setOpen={setIsDropdownOpen} className="dropdown">
            <button
              className="dropdown__button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <p className="dropdown__text">{dropdownText}</p>
              <img
                className="dropdown__icon"
                src={arrowIcon}
                style={isDropdownOpen ? { transform: "scale(1, -1)" } : {}}
                alt="Ícone de flecha"
              />
              {isDropdownOpen && <section className="dropdown__options">
                <div
                  className="option"
                  onClick={(event) => {
                    setDropdownText(event.currentTarget.innerHTML);
                  }}
                >
                  Professor orientador
                </div>
                <div
                  className="option"
                  onClick={(event) => {
                    setDropdownText(event.currentTarget.innerHTML);
                  }}
                >
                  Professor responsável
                </div>
              </section>}

            </button>
          </Dialog>
        </div>
        <ProjectCard
          image={workingImage}
          teacherAdvisor="Ana Paula"
          title="DSG - Design universal aplicado em embalagem de protetor solar"
          newDeliveries={["Dados do trabalho", "Pôster de imagem", "Dados do trabalho", "Pôster de imagem"]}
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
      </main >
    </>
  );
}
