import "reflect-metadata";
import { ITaskRepository } from "../../../../modules/task/domain/repositories/task-repository-interface";
import { Task } from "../../../domain/entities/task";
import { TaskJson } from "../../jsons/task-json";
import { decorate, injectable } from "inversify";

export class TaskRepositoryMock implements ITaskRepository {
    public async getAllTasks(): Promise<Task[]> {
        return TaskJson.taskJson.map(task => Task.fromJson(task));
    }
}

decorate(injectable(), TaskRepositoryMock);