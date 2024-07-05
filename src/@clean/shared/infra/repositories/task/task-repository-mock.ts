import "reflect-metadata";
import { ITaskRepository } from "@modules/task/domain/repositories/task-repository-interface.ts";
import { Task } from "@entities/task.ts";
import { TaskJson } from "@jsons/task-json.ts";
import { decorate, injectable } from "inversify";
import { NoItemsFoundError } from "@helpers/errors/domain-errors.ts";

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
