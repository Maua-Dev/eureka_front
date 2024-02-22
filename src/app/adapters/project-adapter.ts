import { Project } from "../../@clean/shared/domain/entities/project";
import { ProjectModel } from "../models/project-model";
import { UserAdapter } from "./user-adapter";

export class ProjectAdapter {
  static fromModel(model: ProjectModel): Project {
    return new Project({
      projectId: model.projectId,
      title: model.title,
      description: model.description,
      qualification: model.qualification,
      code: model.code,
      shift: model.shift,
      standNumber: model.standNumber,
      isEntrepreneurship: model.isEntrepreneurship,
      responsibles: model.responsibles.map((responsible) => UserAdapter.fromModel(responsible)),
      advisors: model.advisors.map((advisor) => UserAdapter.fromModel(advisor)),
      students: model.students.map((student) => UserAdapter.fromModel(student)),
    });
  }

  static toModel(entity: Project): ProjectModel {
    return new ProjectModel({
      projectId: entity.projectId,
      title: entity.title,
      description: entity.description,
      qualification: entity.qualification,
      code: entity.code,
      shift: entity.shift,
      standNumber: entity.standNumber,
      isEntrepreneurship: entity.isEntrepreneurship,
      responsibles: entity.responsibles.map((responsible) => UserAdapter.toModel(responsible)),
      advisors: entity.advisors.map((advisor) => UserAdapter.toModel(advisor)),
      students: entity.students.map((student) => UserAdapter.toModel(student)),
    });
  }
}
