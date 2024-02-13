import "reflect-metadata";
import { Container } from "inversify";
import { http } from "../axios/http";
import { TaskRepositoryMock } from "../repositories/task/task-repository-mock";
import { TaskRepositoryHttp } from "../repositories/task/task-repository-http";
import { GetAllTasksUsecase } from "../../../modules/task/usecases/get-all-tasks-usecase";

export const RegistryTask = {

    AxiosAdapter: Symbol.for("AxiosAdapter"),

    TaskRepositoryMock: Symbol.for("TaskRepositoryMock"),
    TaskRepositoryHttp: Symbol.for("TaskRepositoryHttp"),

    GetAllTasksUsecase: Symbol.for("GetAllTasksUsecase"),
};

export const containerTask = new Container();

containerTask.bind(RegistryTask.AxiosAdapter).toConstantValue(http);

containerTask.bind(RegistryTask.TaskRepositoryMock).to(TaskRepositoryMock);
containerTask.bind(RegistryTask.TaskRepositoryHttp).toDynamicValue((context) => {
    return new TaskRepositoryHttp(context.container.get(RegistryTask.AxiosAdapter));
});

containerTask.bind(RegistryTask.GetAllTasksUsecase).toDynamicValue((context) => {
    if (import.meta.env.VITE_STAGE === "TEST") {
        return new GetAllTasksUsecase(context.container.get(RegistryTask.TaskRepositoryMock));
    } else if (import.meta.env.VITE_STAGE === "DEV" || import.meta.env.VITE_STAGE === "PROD") {
        return new GetAllTasksUsecase(context.container.get(RegistryTask.TaskRepositoryHttp));
    } else {
        return new GetAllTasksUsecase(context.container.get(RegistryTask.TaskRepositoryMock));
    }
});