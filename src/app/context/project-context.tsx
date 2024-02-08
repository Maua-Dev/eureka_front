import { createContext } from "react";
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
    projectsList: ProjectModel[];
    createProject(project: ProjectModel): Promise<ProjectModel | undefined>;
    getProjectsByRole(userId: number): Promise<ProjectModel[] | undefined>;
    getProject(projectId: number): Promise<ProjectModel | undefined>;
    updateProject(projectId: number, newTitle?: string,
        newQualification?: string,
        newCode?: string,
        newShift?: SHIFT,
        newStandNumber?: string,
        newIsEntrepreneurship?: boolean,
        newProfessors?: UserModel[],
        newStudents?: UserModel[]): Promise<ProjectModel | undefined>;
}

const defaultContext: ProjectContextType = {
    projectsList: [],
    createProject: async () => ProjectModel.empty(),
    getProjectsByRole: async () => [],
    getProject: async () => ProjectModel.empty(),
    updateProject: async () => ProjectModel.empty()
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
    let projectsList: ProjectModel[] = [];

    // used to show the error boundary (error threatment)
    const { showBoundary } = useErrorBoundary();

    const createProject = async (projectModelToCreate: ProjectModel) => {
        try {
            const projectToCreate = ProjectAdapter.fromModel(projectModelToCreate);
            const createdProject = await createProjectUsecase.execute(projectToCreate);
            const createdProjectModel = ProjectAdapter.toModel(createdProject);
            projectsList.push(createdProjectModel);
            return createdProjectModel;
        } catch (err) {
            console.error(err);
            showBoundary(err);
        }
    };

    const getProjectsByRole = async (projectId: number) => {
        try {
            const projectsCaught = await getProjectsByRoleUsecase.execute(projectId);
            const projectsModel = projectsCaught.map(project => ProjectAdapter.toModel(project));
            projectsList = projectsModel;
            return projectsList;
        } catch (err) {
            console.error(err);
            showBoundary(err);
        }
    };

    const getProject = async (projectId: number) => {
        try {
            const projectCaught = await getProjectUsecase.execute(projectId);
            const projectModel = ProjectAdapter.toModel(projectCaught);
            return projectModel;
        } catch (err) {
            console.error(err);
            showBoundary(err);
        }
    };

    const updateProject = async (projectId: number, newTitle?: string, newQualification?: string, newCode?: string, newShift?: SHIFT, newStandNumber?: string, newIsEntrepreneurship?: boolean, newProfessorsModel?: UserModel[], newStudentsModel?: UserModel[]) => {
        try {
            const newProfessors = newProfessorsModel?.map(professorModel => UserAdapter.fromModel(professorModel));
            const newStudents = newStudentsModel?.map(newStudentModel => UserAdapter.fromModel(newStudentModel));
            console.log(newIsEntrepreneurship);
            const projectUpdated = await updateProjectUsecase.execute(projectId, newTitle, newQualification, newCode, newShift, newStandNumber, newIsEntrepreneurship, newProfessors, newStudents);
            console.log(projectUpdated.isEntrepreneurship);
            const projectModelUpdated = ProjectAdapter.toModel(projectUpdated);
            return projectModelUpdated;
        } catch (err) {
            console.error(err);
            showBoundary(err);
        }
    };

    return (
        <ProjectContext.Provider value={{ projectsList, createProject, getProjectsByRole, getProject, updateProject }}>
            {children}
        </ProjectContext.Provider>
    );
};
