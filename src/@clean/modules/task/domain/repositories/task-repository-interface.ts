import { Task } from "@entities/task.ts";

export interface ITaskRepository {
    getAllTasks(): Promise<Task[]>;
}
