import { createContext, useState } from "react";
import { ProjectModel } from "../models/project-model";
import { SHIFT } from "../../@clean/shared/domain/enums/shift-enum";
import {
  RegistryProject,
  containerProject,
} from "../../@clean/shared/infra/containers/container-project";
import { CreateProjectUsecase } from "../../@clean/modules/project/usecases/create-project-usecase";
import { GetProjectUsecase } from "../../@clean/modules/project/usecases/get-project-usecase";
import { UpdateProjectUsecase } from "../../@clean/modules/project/usecases/update-project-usecase";
import { ProjectAdapter } from "../adapters/project-adapter";
import { GetProjectsByRoleUsecase } from "../../@clean/modules/project/usecases/get-projects-by-role-usecase";

type ProjectContextType = {
  projectsFromContext: ProjectModel[];
  projectFromContext: ProjectModel;
  createProject(project: ProjectModel): Promise<ProjectModel | undefined>;
  getProjectsByRole(userId: number): Promise<ProjectModel[] | undefined>;
  getProject(projectId: number): Promise<ProjectModel | undefined>;
  updateProject(
    projectId: number,
    newTitle?: string,
    newQualification?: string,
    newCode?: string,
    newShift?: SHIFT,
    newStandNumber?: string,
    newIsEntrepreneurship?: boolean,
    newProfessors?: number[],
    newStudents?: number[]
  ): Promise<ProjectModel | undefined>;
};

const defaultContext: ProjectContextType = {
  projectsFromContext: [],
  projectFromContext: ProjectModel.empty(),
  createProject: async () => ProjectModel.empty(),
  getProjectsByRole: async () => [],
  getProject: async () => ProjectModel.empty(),
  updateProject: async () => ProjectModel.empty(),
};

export const ProjectContext = createContext(defaultContext);

const createProjectUsecase = containerProject.get<CreateProjectUsecase>(
  RegistryProject.CreateProjectUsecase
);

const getProjectsByRoleUsecase = containerProject.get<GetProjectsByRoleUsecase>(
  RegistryProject.GetProjectsByRoleUsecase
);

const getProjectUsecase = containerProject.get<GetProjectUsecase>(
  RegistryProject.GetProjectUsecase
);

const updateProjectUsecase = containerProject.get<UpdateProjectUsecase>(
  RegistryProject.UpdateProjectUsecase
);

export const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
  const [projectsFromContext, setProjectsFromContext] = useState<ProjectModel[]>([]);
  const [projectFromContext, setProjectFromContext] = useState<ProjectModel>(ProjectModel.empty());

  const createProject = async (projectModelToCreate: ProjectModel) => {
    const projectToCreate = ProjectAdapter.fromModel(projectModelToCreate);
    const projectCreated = await createProjectUsecase.execute(projectToCreate);
    const projectModel = ProjectAdapter.toModel(projectCreated);
    setProjectsFromContext([...projectsFromContext, projectModel]);

    return projectModel;
  };

  const getProjectsByRole = async (projectId: number) => {
    const projectsCaught = await getProjectsByRoleUsecase.execute(projectId);
    const projectsModel = projectsCaught.map((project) => ProjectAdapter.toModel(project));
    setProjectsFromContext(projectsModel);

    return projectsModel;
  };

  const getProject = async (projectId: number) => {
    const projectCaught = await getProjectUsecase.execute(projectId);
    const projectModel = ProjectAdapter.toModel(projectCaught);
    setProjectFromContext(projectModel);

    return projectModel;
  };

  const updateProject = async (
    projectId: number,
    newTitle?: string,
    newQualification?: string,
    newCode?: string,
    newShift?: SHIFT,
    newStandNumber?: string,
    newIsEntrepreneurship?: boolean,
    newProfessors?: number[],
    newStudents?: number[]
  ) => {
    const projectUpdated = await updateProjectUsecase.execute(
      projectId,
      newTitle,
      newQualification,
      newCode,
      newShift,
      newStandNumber,
      newIsEntrepreneurship,
      newProfessors,
      newStudents
    );
    const projectModel = ProjectAdapter.toModel(projectUpdated);
    setProjectsFromContext(
      projectsFromContext.map((project) =>
        project.projectId === projectId ? projectModel : project
      )
    );
    setProjectFromContext(projectModel);

    return projectModel;
  };

  return (
    <ProjectContext.Provider
      value={{
        projectsFromContext,
        projectFromContext,
        createProject,
        getProjectsByRole,
        getProject,
        updateProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
