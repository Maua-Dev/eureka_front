import "reflect-metadata";
import { AxiosInstance, AxiosResponse } from "axios";
import { IProjectRepository } from "../../../../modules/project/domain/repositories/project-repository-interface";
import { Project, ProjectJsonProps, ProjectRequestBodyProps } from "../../../domain/entities/project";
import { User } from "../../../domain/entities/user";
import { SHIFT } from "../../../domain/enums/shift-enum";
import { decorate, injectable } from "inversify";

export class ProjectRepositoryHttp implements IProjectRepository {
    private _axios : AxiosInstance;

    constructor(axios: AxiosInstance){
        this._axios = axios;
    }

    async createProject(project: Project): Promise<Project> {
        const response: AxiosResponse = await this._axios.post("/create_project", project.toJson());
        return Project.fromJson(response.data);
    }

    async getProject(projectId: number): Promise<Project> {
        const response: AxiosResponse = await this._axios.get(`/get_project?project_id=${projectId}`);
        return Project.fromJson(response.data);
    }

    async getProjectsByRole(userId: number): Promise<Project[]> {
        const response: AxiosResponse = await this._axios.get(`/get_projects_by_role?user_id=${userId}`);
        return response.data.map((project: ProjectJsonProps) => Project.fromJson(project));
    }

    async updateProject(projectId: number, newTitle?: string | undefined, newQualification?: string | undefined, newCode?: string | undefined, newShift?: SHIFT | undefined, newStandNumber?: string | undefined, newIsEntrepreneurship?: boolean | undefined, newProfessors?: User[] | undefined, newStudents?: User[] | undefined): Promise<Project> {
        const body : ProjectRequestBodyProps = {"project_id": projectId};
        
        if (newTitle !== undefined) body.title = newTitle;
        if (newQualification !== undefined) body.qualification = newQualification;
        if (newCode !== undefined) body.code = newCode;
        if (newShift !== undefined) body.shift = SHIFT[newShift].toString();
        if (newStandNumber !== undefined) body.stand_number = newStandNumber;
        if (newIsEntrepreneurship !== undefined) body.is_entrepreneurship = newIsEntrepreneurship;
        if (newProfessors !== undefined) body.professors = newProfessors.map(professor => professor.toJson());
        if (newStudents !== undefined) body.students = newStudents.map(student => student.toJson());
        
        const response = await this._axios.put(`/update_project?project_id=${projectId}`, body);
        return Project.fromJson(response.data);
    }
}

decorate(injectable(), ProjectRepositoryHttp);