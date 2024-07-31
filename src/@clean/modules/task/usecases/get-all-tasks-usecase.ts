import { Task } from "@entities/task.ts";
import { ITaskRepository } from "../domain/repositories/task-repository-interface";

export class GetAllTasksUsecase {
    private _taskRepository: ITaskRepository;

    constructor(taskRepository: ITaskRepository) {
        this._taskRepository = taskRepository;
    }
    async execute(): Promise<Task[]> {
        return await this._taskRepository.getAllTasks();
    }
}
