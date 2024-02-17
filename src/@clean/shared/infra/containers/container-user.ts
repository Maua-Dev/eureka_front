import "reflect-metadata";
import { Container } from "inversify";
import { http } from "../axios/http";
import { UserRepositoryMock } from "../repositories/user/user-repository-mock";
import { UserRepositoryHttp } from "../repositories/user/user-repository-http";
import { GetAllStudentsUsecase } from "../../../modules/user/usecases/get-all-students-usecase";

export const RegistryUser = {
  AxiosAdapter: Symbol.for("AxiosAdapter"),

  UserRepositoryMock: Symbol.for("UserRepositoryMock"),
  UserRepositoryHttp: Symbol.for("UserRepositoryHttp"),

  GetAllStudentsUsecase: Symbol.for("GetAllStudentsUsecase"),
};

export const containerUser = new Container();

containerUser.bind(RegistryUser.AxiosAdapter).toConstantValue(http);

containerUser.bind(RegistryUser.UserRepositoryMock).to(UserRepositoryMock);
containerUser.bind(RegistryUser.UserRepositoryHttp).toDynamicValue((context) => {
  return new UserRepositoryHttp(context.container.get(RegistryUser.AxiosAdapter));
});

containerUser.bind(RegistryUser.GetAllStudentsUsecase).toDynamicValue((context) => {
  if (import.meta.env.APP_STAGE === "TEST") {
    return new GetAllStudentsUsecase(context.container.get(RegistryUser.UserRepositoryMock));
  } else if (import.meta.env.APP_STAGE === "DEV" || import.meta.env.APP_STAGE === "PROD") {
    return new GetAllStudentsUsecase(context.container.get(RegistryUser.UserRepositoryHttp));
  } else {
    return new GetAllStudentsUsecase(context.container.get(RegistryUser.UserRepositoryMock));
  }
});
