import { Project } from "../../../shared/domain/entities/project";
import { IProjectRepository } from "../domain/repositories/project-repository-interface";

export class CreateProjectUsecase {
    private _projectRepository: IProjectRepository;

    constructor(projectRepository: IProjectRepository) {
        this._projectRepository = projectRepository;
    }
    
    async execute(project: Project): Promise<Project> {
        const projectCreated = await this._projectRepository.createProject(project);
        
        return projectCreated;
    }
}