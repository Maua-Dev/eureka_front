import ProjectCard from "../../components/ProjectCard/ProjectCard";
import workingImage from "../../../assets/working-image.jpg";
import arrowIcon from "../../../assets/icons/arrow-icon.svg";
import "./Home.css";
import { useContext, useState } from "react";
import Dialog from "../../components/Dialog/Dialog";
import { ProjectContext } from "../../../context/project-context";
import { AuthContext } from "../../../context/auth-context";
import { ROLE } from "../../../../@clean/shared/domain/enums/role-enum";
import { stringCapitalize } from "../../../utils/string-formatter";

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [dropdownText, setDropdownText] = useState<string>(
    "Visualizar trabalhos como"
  );

  const { projects, getProjectsByRole } = useContext(ProjectContext);
  const { user } = useContext(AuthContext);

  useState(() => {
    getProjectsByRole(user!.userId);
  });

  return (
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
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project.projectId}
            image={workingImage}
            teacherAdvisor={stringCapitalize(project.professors.filter((professor) => professor.role === ROLE.ADVISOR)[0].name)}
            title={project.title}
            newDeliveries={["Dados do trabalho", "Pôster de imagem", "Dados do trabalho", "Pôster de imagem"]}
          />
        );

      })}
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
  );
}
