import { Project } from "../../../../shared/domain/entities/project";
import { User } from "../../../../shared/domain/entities/user";
import { SHIFT } from "../../../../shared/domain/enums/shift-enum";

export interface IProjectRepository {
    createProject(project: Project): Promise<Project>;
    getProject(projectId: number): Promise<Project>;
    updateProject(projectId: number, newTitle?: string,
        newQualification?: string,
        newCode?: string,
        newShift?: SHIFT,
        newStandNumber?: string,
        newIsEntrepreneurship?: boolean,
        newProfessors?: User[],
        newStudents?: User[]): Promise<Project>; 
    getProjectsByRole(userId: number): Promise<Project[]>;
}