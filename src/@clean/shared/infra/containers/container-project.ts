import "reflect-metadata";
import { Container } from "inversify";
import { http } from "../axios/http";
import { ProjectRepositoryMock } from "../repositories/project/project-repository-mock";
import { ProjectRepositoryHttp } from "../repositories/project/project-repository-http";
import { CreateProjectUsecase } from "../../../modules/project/usecases/create-project-usecase";
import { GetProjectUsecase } from "../../../modules/project/usecases/get-project-usecase";
import { UpdateProjectUsecase } from "../../../modules/project/usecases/update-project-usecase";
import { GetProjectsByRoleUsecase } from "../../../modules/project/usecases/get-projects-by-role-usecase";

export const RegistryProject = {
  AxiosAdapter: Symbol.for("AxiosAdapter"),

  ProjectRepositoryMock: Symbol.for("ProjectRepositoryMock"),
  ProjectRepositoryHttp: Symbol.for("ProjectRepositoryHttp"),

  CreateProjectUsecase: Symbol.for("CreateProjectUsecase"),
  GetProjectsByRoleUsecase: Symbol.for("GetProjectsByRoleUsecase"),
  GetProjectUsecase: Symbol.for("GetProjectUsecase"),
  UpdateProjectUsecase: Symbol.for("UpdateProjectUsecase"),
};

export const containerProject = new Container();

containerProject.bind(RegistryProject.AxiosAdapter).toConstantValue(http);

containerProject.bind(RegistryProject.ProjectRepositoryMock).to(ProjectRepositoryMock);
containerProject.bind(RegistryProject.ProjectRepositoryHttp).toDynamicValue((context) => {
  return new ProjectRepositoryHttp(context.container.get(RegistryProject.AxiosAdapter));
});

containerProject.bind(RegistryProject.CreateProjectUsecase).toDynamicValue((context) => {
  if (import.meta.env.APP_STAGE === "TEST") {
    return new CreateProjectUsecase(context.container.get(RegistryProject.ProjectRepositoryMock));
  } else if (import.meta.env.APP_STAGE === "DEV" || import.meta.env.APP_STAGE === "PROD") {
    return new CreateProjectUsecase(context.container.get(RegistryProject.ProjectRepositoryHttp));
  } else {
    return new CreateProjectUsecase(context.container.get(RegistryProject.ProjectRepositoryMock));
  }
});

containerProject.bind(RegistryProject.GetProjectsByRoleUsecase).toDynamicValue((context) => {
  if (import.meta.env.APP_STAGE === "TEST") {
    return new GetProjectsByRoleUsecase(
      context.container.get(RegistryProject.ProjectRepositoryMock)
    );
  } else if (import.meta.env.APP_STAGE === "DEV" || import.meta.env.APP_STAGE === "PROD") {
    return new GetProjectsByRoleUsecase(
      context.container.get(RegistryProject.ProjectRepositoryHttp)
    );
  } else {
    return new GetProjectsByRoleUsecase(
      context.container.get(RegistryProject.ProjectRepositoryMock)
    );
  }
});

containerProject.bind(RegistryProject.GetProjectUsecase).toDynamicValue((context) => {
  if (import.meta.env.APP_STAGE === "TEST") {
    return new GetProjectUsecase(context.container.get(RegistryProject.ProjectRepositoryMock));
  } else if (import.meta.env.APP_STAGE === "DEV" || import.meta.env.APP_STAGE === "PROD") {
    return new GetProjectUsecase(context.container.get(RegistryProject.ProjectRepositoryHttp));
  } else {
    return new GetProjectUsecase(context.container.get(RegistryProject.ProjectRepositoryMock));
  }
});

containerProject.bind(RegistryProject.UpdateProjectUsecase).toDynamicValue((context) => {
  if (import.meta.env.APP_STAGE === "TEST") {
    return new UpdateProjectUsecase(context.container.get(RegistryProject.ProjectRepositoryMock));
  } else if (import.meta.env.APP_STAGE === "DEV" || import.meta.env.APP_STAGE === "PROD") {
    return new UpdateProjectUsecase(context.container.get(RegistryProject.ProjectRepositoryHttp));
  } else {
    return new UpdateProjectUsecase(context.container.get(RegistryProject.ProjectRepositoryMock));
  }
});
