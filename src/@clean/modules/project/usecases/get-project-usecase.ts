import { Project } from "@entities/project.ts";
import { IProjectRepository } from "../domain/repositories/project-repository-interface";

export class GetProjectUsecase {
    private _projectRepository: IProjectRepository;

    constructor(projectRepository: IProjectRepository) {
        this._projectRepository = projectRepository;
    }

    async execute(projectId: number): Promise<Project> {
        const project = await this._projectRepository.getProject(projectId);

        return project;
    }
}
