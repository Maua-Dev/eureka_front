import { createContext, useState } from "react";
import { ProjectModel } from "../models/project-model";
import { UserModel } from "../models/user-model";
import { SHIFT } from "../../@clean/shared/domain/enums/shift-enum";
import { RegistryProject, containerProject } from "../../@clean/shared/infra/containers/container_project";
import { CreateProjectUsecase } from "../../@clean/modules/project/usecases/create-project-usecase";
import { GetProjectUsecase } from "../../@clean/modules/project/usecases/get-project-usecase";
import { UpdateProjectUsecase } from "../../@clean/modules/project/usecases/update-project-usecase";
import { ProjectAdapter } from "../adapters/project-adapter";
import { useErrorBoundary } from "react-error-boundary";
import { UserAdapter } from "../adapters/user-adapter";
import { GetProjectsByRoleUsecase } from "../../@clean/modules/project/usecases/get-projects-by-role-usecase";

type ProjectContextType = {
    project: ProjectModel;
    projects: ProjectModel[];
    createProject(project: ProjectModel): Promise<void>;
    getProjectsByRole(userId: number): Promise<void>;
    getProject(projectId: number): Promise<void>;
    updateProject(projectId: number, newTitle?: string,
        newQualification?: string,
        newCode?: string,
        newShift?: SHIFT,
        newStandNumber?: string,
        newIsEntrepreneurship?: boolean,
        newProfessors?: UserModel[],
        newStudents?: UserModel[]): Promise<void>;
}

const defaultContext: ProjectContextType = {
    project: ProjectModel.empty(),
    projects: [],
    createProject: async () => { },
    getProjectsByRole: async () => { },
    getProject: async () => { },
    updateProject: async () => { }
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
    const [project, setProject] = useState<ProjectModel>(ProjectModel.empty());
    const [projects, setProjects] = useState<ProjectModel[]>([]);

    // used to show the error boundary (error threatment)
    const { showBoundary } = useErrorBoundary();

    const createProject = async (projectModelToCreate: ProjectModel) => {
        try {
            const projectToCreate = ProjectAdapter.fromModel(projectModelToCreate);
            const createdProject = await createProjectUsecase.execute(projectToCreate);
            const createdProjectModel = ProjectAdapter.toModel(createdProject);
            setProjects([...projects, createdProjectModel]);
        } catch (err) {
            console.log(err);
            showBoundary(err);
        }
    };

    const getProjectsByRole = async (projectId: number) => {
        try {
            const projectsCaught = await getProjectsByRoleUsecase.execute(projectId);
            const projectModel = projectsCaught.map(project => ProjectAdapter.toModel(project));
            setProjects([...projects, ...projectModel]);
        } catch (err) {
            console.log(err);
            showBoundary(err);
        }
    };

    const getProject = async (projectId: number) => {
        try {
            const project = await getProjectUsecase.execute(projectId);
            const projectModel = ProjectAdapter.toModel(project);
            setProject(projectModel);
        } catch (err) {
            console.log(err);
            showBoundary(err);
        }
    };

    const updateProject = async (projectId: number, newTitle?: string, newQualification?: string, newCode?: string, newShift?: SHIFT, newStandNumber?: string, newIsEntrepreneurship?: boolean, newProfessorsModel?: UserModel[], newStudentsModel?: UserModel[]) => {
        try {
            const newProfessors = newProfessorsModel?.map(professorModel => UserAdapter.fromModel(professorModel));
            const newStudents = newStudentsModel?.map(newStudentModel => UserAdapter.fromModel(newStudentModel));
            const updatedProject = await updateProjectUsecase.execute(projectId, newTitle, newQualification, newCode, newShift, newStandNumber, newIsEntrepreneurship, newProfessors, newStudents);
            const updateProjectModel = ProjectAdapter.toModel(updatedProject);
            setProjects(projects.map(projectModel => projectModel.projectId === projectId ? updateProjectModel : projectModel));
        } catch (err) {
            console.log(err);
            showBoundary(err);
        }
    };

    return (
        <ProjectContext.Provider value={{ projects, project, createProject, getProjectsByRole, getProject, updateProject }}>
            {children}
        </ProjectContext.Provider>
    );
};
