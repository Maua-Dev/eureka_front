import { Project } from "../../../shared/domain/entities/project";
import { IProjectRepository } from "../domain/repositories/project-repository-interface";

export class GetProjectsByRoleUsecase {
  private _projectRepository: IProjectRepository;

  constructor(projectRepository: IProjectRepository) {
    this._projectRepository = projectRepository;
  }

  async execute(userId: number): Promise<Project[]> {
    const project = await this._projectRepository.getProjectsByRole(userId);

    return project;
  }
}
