import { Project } from "../../@clean/shared/domain/entities/project";
import { ProjectModel } from "../models/project-model";
import { UserAdapter } from "./user-adapter";

export class ProjectAdapter {
    static fromModel(model: ProjectModel) : Project {
        return new Project({
            projectId: model.projectId,
            title: model.title,
            qualification: model.qualification,
            code: model.code,
            shift: model.shift,
            standNumber: model.standNumber,
            isEntrepreneurship: model.isEntrepreneurship,
            professors: model.professors.map((professor) => UserAdapter.fromModel(professor)),
            students: model.students.map((student) => UserAdapter.fromModel(student))
        });
    }

    static toModel(entity: Project) : ProjectModel {
        return new ProjectModel({
            projectId: entity.projectId,
            title: entity.title,
            qualification: entity.qualification,
            code: entity.code,
            shift: entity.shift,
            standNumber: entity.standNumber,
            isEntrepreneurship: entity.isEntrepreneurship,
            professors: entity.professors.map((professor) => UserAdapter.toModel(professor)),
            students: entity.students.map((student) => UserAdapter.toModel(student))
        });
    }
}