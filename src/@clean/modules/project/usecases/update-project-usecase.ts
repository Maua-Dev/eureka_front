import { Project } from "../../../shared/domain/entities/project";
import { SHIFT } from "../../../shared/domain/enums/shift-enum";
import { IProjectRepository } from "../domain/repositories/project-repository-interface";

export class UpdateProjectUsecase {
  private _projectRepository: IProjectRepository;

  constructor(projectRepository: IProjectRepository) {
    this._projectRepository = projectRepository;
  }

  async execute(
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
  ): Promise<Project> {
    const projectUpdated = await this._projectRepository.updateProject(
      projectId,
      newTitle,
      newDescription,
      newQualification,
      newCode,
      newShift,
      newStandNumber,
      newIsEntrepreneurship,
      newResponsibles,
      newAdvisors,
      newStudents
    );

    return projectUpdated;
  }
}
