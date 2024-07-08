import workingImage from "@assets/working-image.jpg";
import "./HomePage.css";
import { useContext, useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { ProjectContext } from "@context/project-context.tsx";
import { AuthContext } from "@context/auth-context.tsx";
import { ROLE } from "@enums/role-enum.ts";
import { handleFetch } from "@functions/handle-fetch.ts";
import { shiftToAcronym } from "@enums/shift-enum.ts";
import ProjectCardSkeleton from "./components/ProjectCard/ProjectCardSkeleton";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import DropdownButton from "./components/DropdownButton/DropdownButton";

export default function HomePage() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { userFromContext } = useContext(AuthContext);
    const { projectsFromContext, getProjectsByRole } =
        useContext(ProjectContext);

    // error boundary to catch errors in the components (used in handleFetch function)
    const { showBoundary } = useErrorBoundary();

    const [projectsViewType, setProjectsViewType] = useState<string>(
        "Visualizar trabalhos como "
    );

    useEffect(() => {
        handleFetch(
            setIsLoading,
            showBoundary,
            undefined,
            getProjectsByRole(userFromContext.userId)
        );
    }, []);

    return (
        <main className="home_page">
            {userFromContext.role != ROLE.STUDENT && (
                <div className="container">
                    <DropdownButton
                        optionChoosed={projectsViewType}
                        setOption={setProjectsViewType}
                        options={[
                            "Professor orientador",
                            "Professor responsável"
                        ]}
                    />
                </div>
            )}
            {isLoading
                ? Array(userFromContext.role == ROLE.STUDENT ? 1 : 3)
                      .fill(0)
                      .map((_, index) => <ProjectCardSkeleton key={index} />)
                : projectsFromContext.map((project) => {
                      return (
                          <ProjectCard
                              key={project.projectId}
                              projectId={project.projectId}
                              image={workingImage}
                              advisor={project.advisors[0].name}
                              title={`${project.code}${shiftToAcronym(project.shift)}${project.standNumber} - ${project.title}`}
                              newDeliveries={[
                                  "Dados do trabalho",
                                  "Pôster de imagem",
                                  "Dados do trabalho",
                                  "Pôster de imagem"
                              ]}
                          />
                      );
                  })}
        </main>
    );
}
