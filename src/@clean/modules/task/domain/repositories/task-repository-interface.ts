import { Task } from "../../../../shared/domain/entities/task";

export interface ITaskRepository {
  getAllTasks(): Promise<Task[]>;
}
