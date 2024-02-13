import ProjectCard from "../../components/ProjectCard/ProjectCard";
import workingImage from "../../../assets/working-image.jpg";
import arrowIcon from "../../../assets/icons/arrow-icon.svg";
import "./Home.css";
import { useContext, useEffect, useState } from "react";
import Dialog from "../../components/Dialog/Dialog";
import { ProjectContext } from "../../../context/project-context";
import { AuthContext } from "../../../context/auth-context";
import { ROLE } from "../../../../@clean/shared/domain/enums/role-enum";
import { ProjectModel } from "../../../models/project-model";
import ProjectCardSkeleton from "../../components/ProjectCard/ProjectCardSkeleton";

export default function Home() {
  const [projectsList, setProjectsList] = useState<ProjectModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [dropdownText, setDropdownText] = useState<string>(
    "Visualizar trabalhos como"
  );

  const { getProjectsByRole } = useContext(ProjectContext);

  async function fetchGetProjectsByRole() {
    const projectsListCaught = await getProjectsByRole(user!.userId);
    if (projectsListCaught) {
      setProjectsList(projectsListCaught);
    }
  }

  /* fetch api and handle loading states */
  useEffect(() => {
    setIsLoading(true);
    fetchGetProjectsByRole();
    setIsLoading(false);
  }, []);

  /* get user from auth context */
  const { user } = useContext(AuthContext);

  return (
    <main id="home">
      {user.role != ROLE.STUDENT && <div className="container">
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
      </div>}
      {isLoading ? Array(user.role == ROLE.STUDENT ? 1 : 3).fill(0).map((_, index) => <ProjectCardSkeleton key={index} />)
        : projectsList.map((project) => {
          const advisor = project.professors.find((professor) => professor.role === ROLE.ADVISOR)!.name;
          return (
            <ProjectCard
              key={project.projectId}
              projectId={project.projectId}
              image={workingImage}
              advisor={advisor}
              title={project.title}
              newDeliveries={["Dados do trabalho", "Pôster de imagem", "Dados do trabalho", "Pôster de imagem"]}
            />
          );
        })}
    </main >
  );
}
