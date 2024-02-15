import { Project } from "../../../shared/domain/entities/project";
import { User } from "../../../shared/domain/entities/user";
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
    newQualification?: string,
    newCode?: string,
    newShift?: SHIFT,
    newStandNumber?: string,
    newIsEntrepreneurship?: boolean,
    newProfessors?: User[],
    newStudents?: User[]
  ): Promise<Project> {
    const projectUpdated = await this._projectRepository.updateProject(
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

    return projectUpdated;
  }
}
