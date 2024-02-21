import workingImage from "../../assets/working-image.jpg";
import "./HomePage.css";
import { useContext, useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { ProjectContext } from "../../context/project-context";
import { AuthContext } from "../../context/auth-context";
import { ROLE } from "../../../@clean/shared/domain/enums/role-enum";
import { handleFetch } from "../../utils/functions/handle-fetch";
import ProjectCardSkeleton from "../../ui/components/ProjectCard/ProjectCardSkeleton";
import ProjectCard from "../../ui/components/ProjectCard/ProjectCard";
import { shiftToAcronym } from "../../../@clean/shared/domain/enums/shift-enum";
import DropdownButton from "../../ui/components/DropdownButton/DropdownButton";

export default function HomePage() {
  const { userFromContext } = useContext(AuthContext);
  const { projectsFromContext, getProjectsByRole } = useContext(ProjectContext);

  // error boundary to catch errors in the components (used in handleFetch function)
  const { showBoundary } = useErrorBoundary();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [projectsViewType, setProjectsViewType] = useState<string>("Visualizar trabalhos como ");

  useEffect(() => {
    handleFetch(setIsLoading, showBoundary, undefined, getProjectsByRole(userFromContext!.userId));
  }, []);

  return (
    <main className="home_page">
      {userFromContext.role != ROLE.STUDENT && (
        <div className="container">
          <DropdownButton
            optionChoosed={projectsViewType}
            setOption={setProjectsViewType}
            options={["Professor orientador", "Professor responsável"]}
          />
        </div>
      )}
      {isLoading
        ? Array(userFromContext.role == ROLE.STUDENT ? 1 : 3)
            .fill(0)
            .map((_, index) => <ProjectCardSkeleton key={index} />)
        : projectsFromContext.map((project) => {
            const advisor = project.professors.find(
              (professor) => professor.role === ROLE.ADVISOR
            )!.name;
            return (
              <ProjectCard
                key={project.projectId}
                projectId={project.projectId}
                image={workingImage}
                advisor={advisor}
                title={`${project.code}${shiftToAcronym(project.shift)}${project.standNumber} - ${project.title}`}
                newDeliveries={[
                  "Dados do trabalho",
                  "Pôster de imagem",
                  "Dados do trabalho",
                  "Pôster de imagem",
                ]}
              />
            );
          })}
    </main>
  );
}
