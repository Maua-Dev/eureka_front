import "reflect-metadata";
import { ITaskRepository } from "../../../../modules/task/domain/repositories/task-repository-interface";
import { Task } from "../../../domain/entities/task";
import { TaskJson } from "../../jsons/task-json";
import { decorate, injectable } from "inversify";
import { NoItemsFoundError } from "../../../domain/helpers/errors/domain-errors";

export class TaskRepositoryMock implements ITaskRepository {
  public async getAllTasks(): Promise<Task[]> {
    const jsons = TaskJson.taskJson;

    if (jsons == null) {
      throw new NoItemsFoundError("tasks");
    }
    const tasks = jsons.map((task) => Task.fromJson(task));

    return tasks;
  }
}

decorate(injectable(), TaskRepositoryMock);
