import { Project } from "@entities/project.ts";
import { SHIFT } from "@enums/shift-enum.ts";

export interface IProjectRepository {
    createProject(project: Project): Promise<Project>;
    getProject(projectId: number): Promise<Project>;
    updateProject(
        projectId: number,
        newTitle?: string,
        newDescription?: string,
        newQualification?: string,
        newCode?: string,
        newShift?: SHIFT,
        newStandNumber?: string,
        newIsEntrepreneurship?: boolean,
        newResponsibles?: number[],
        newAdvisors?: number[],
        newStudents?: number[]
    ): Promise<Project>;
    getProjectsByRole(userId: number): Promise<Project[]>;
}
