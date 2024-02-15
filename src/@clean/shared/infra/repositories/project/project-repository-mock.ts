import "reflect-metadata";
import { IProjectRepository } from "../../../../modules/project/domain/repositories/project-repository-interface";
import { Project } from "../../../domain/entities/project";
import { User } from "../../../domain/entities/user";
import { SHIFT } from "../../../domain/enums/shift-enum";
import { NoItemsFoundError } from "../../../domain/helpers/errors/domain-errors";
import { ProjectJson } from "../../jsons/project-json";
import { decorate, injectable } from "inversify";

export class ProjectRepositoryMock implements IProjectRepository {
  async createProject(project: Project): Promise<Project> {
    ProjectJson.projectJson.push(project.toJson());

    return project;
  }

  async getProjectsByRole(userId: number): Promise<Project[]> {
    const json = ProjectJson.projectJson.filter(
      (project) =>
        project.professors.some((professor) => professor.user_id === userId) ||
        project.students.some((student) => student.user_id === userId)
    );

    if (json == null) {
      throw new NoItemsFoundError("userId: " + userId);
    }
    const project = json.map((project) => Project.fromJson(project));

    return project;
  }

  async getProject(projectId: number): Promise<Project> {
    const json = ProjectJson.projectJson.find((project) => project.project_id === projectId);

    if (json == null) {
      throw new NoItemsFoundError("projectId: " + projectId);
    }
    const project = Project.fromJson(json);

    return project;
  }
  async updateProject(
    projectId: number,
    newTitle?: string | undefined,
    newQualification?: string | undefined,
    newCode?: string | undefined,
    newShift?: SHIFT | undefined,
    newStandNumber?: string | undefined,
    newIsEntrepreneurship?: boolean | undefined,
    newProfessors?: User[] | undefined,
    newStudents?: User[] | undefined
  ): Promise<Project> {
    let existingProject: Project | null = null;

    ProjectJson.projectJson.forEach((project) => {
      if (project.project_id === projectId) {
        existingProject = Project.fromJson(project);

        if (newTitle !== undefined) project.title = newTitle;
        if (newQualification !== undefined) project.qualification = newQualification;
        if (newCode !== undefined) project.code = newCode;
        if (newShift !== undefined) project.shift = SHIFT[newShift].toString();
        if (newStandNumber !== undefined) project.stand_number = newStandNumber;
        if (newIsEntrepreneurship !== undefined)
          project.is_entrepreneurship = newIsEntrepreneurship;
        if (newProfessors !== undefined)
          project.professors = newProfessors.map((professor) => professor.toJson());
        if (newStudents !== undefined)
          project.students = newStudents.map((student) => student.toJson());
      }
    });

    if (existingProject == null) {
      throw new NoItemsFoundError("projectId: " + projectId);
    }

    return existingProject;
  }
}

decorate(injectable(), ProjectRepositoryMock);
