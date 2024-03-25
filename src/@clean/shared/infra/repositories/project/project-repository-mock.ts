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
        project.responsibles.some((responsible) => responsible.user_id === userId) ||
        project.advisors.some((advisor) => advisor.user_id === userId) ||
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
    newDescription?: string | undefined,
    newQualification?: string | undefined,
    newCode?: string | undefined,
    newShift?: SHIFT | undefined,
    newStandNumber?: string | undefined,
    newIsEntrepreneurship?: boolean | undefined,
    newResponsibles?: number[] | undefined,
    newAdvisors?: number[] | undefined,
    newStudents?: number[] | undefined
  ): Promise<Project> {
    let existingProject: Project | null = null;

    ProjectJson.projectJson.forEach((project, index) => {
      if (project.project_id === projectId) {
        const projectToUpdate = { ...project };
        if (newTitle !== undefined) projectToUpdate.title = newTitle;
        if (newDescription !== undefined) projectToUpdate.description = newDescription;
        if (newQualification !== undefined) projectToUpdate.qualification = newQualification;
        if (newCode !== undefined) projectToUpdate.code = newCode;
        if (newShift !== undefined) projectToUpdate.shift = SHIFT[newShift].toString();
        if (newStandNumber !== undefined) projectToUpdate.stand_number = newStandNumber;
        if (newIsEntrepreneurship !== undefined)
          projectToUpdate.is_entrepreneurship = newIsEntrepreneurship;
        if (newResponsibles !== undefined) {
          projectToUpdate.responsibles = projectToUpdate.responsibles.concat(
            newResponsibles.map((responsibleId) => {
              const user = UserJson.userJson.find((user) => user.user_id === responsibleId);
              if (user == null) {
                throw new NoItemsFoundError("userId: " + responsibleId);
              }
              return user;
            })
          );
        }
        if (newAdvisors !== undefined) {
          const users = newAdvisors.map((advisorId) => {
            const user = UserJson.userJson.find((user) => user.user_id === advisorId);
            if (user == null) {
              throw new NoItemsFoundError("userId: " + advisorId);
            }
            return user;
          });
          switch (newAdvisors.length) {
            case 1:
              projectToUpdate.advisors[1] = users[0];
              break;
            case 2:
              projectToUpdate.advisors[0] = users[0];
              projectToUpdate.advisors[1] = users[1];
              break;
            default:
              throw new Error("Invalid number of advisors");
          }
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
