import "reflect-metadata";
import { IProjectRepository } from "../../../../modules/project/domain/repositories/project-repository-interface";
import { Project } from "../../../domain/entities/project";
import { SHIFT } from "../../../domain/enums/shift-enum";
import { NoItemsFoundError } from "../../../domain/helpers/errors/domain-errors";
import { ProjectJson } from "../../jsons/project-json";
import { decorate, injectable } from "inversify";
import { UserJson } from "../../jsons/user-json";

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
    newProfessors?: number[] | undefined,
    newStudents?: number[] | undefined
  ): Promise<Project> {
    let existingProject: Project | null = null;

    ProjectJson.projectJson.forEach((project, index) => {
      if (project.project_id === projectId) {
        const projectToUpdate = { ...project };
        if (newTitle !== undefined) projectToUpdate.title = newTitle;
        if (newQualification !== undefined) projectToUpdate.qualification = newQualification;
        if (newCode !== undefined) projectToUpdate.code = newCode;
        if (newShift !== undefined) projectToUpdate.shift = SHIFT[newShift].toString();
        if (newStandNumber !== undefined) projectToUpdate.stand_number = newStandNumber;
        if (newIsEntrepreneurship !== undefined)
          projectToUpdate.is_entrepreneurship = newIsEntrepreneurship;
        if (newProfessors !== undefined) {
          projectToUpdate.professors = projectToUpdate.professors.concat(
            newProfessors.map((professorId) => {
              const user = UserJson.userJson.find((user) => user.user_id === professorId);
              if (user == null) {
                throw new NoItemsFoundError("userId: " + professorId);
              }
              return user;
            })
          );
        }
        if (newStudents !== undefined) {
          projectToUpdate.students = projectToUpdate.students.concat(
            newStudents.map((studentId) => {
              const user = UserJson.userJson.find((user) => user.user_id === studentId);
              if (user == null) {
                throw new NoItemsFoundError("userId: " + studentId);
              }
              return user;
            })
          );
        }

        existingProject = Project.fromJson(projectToUpdate);
        ProjectJson.projectJson[index] = projectToUpdate;
      }
    });

    if (existingProject == null) {
      throw new NoItemsFoundError("projectId: " + projectId);
    }

    return existingProject;
  }
}

decorate(injectable(), ProjectRepositoryMock);
