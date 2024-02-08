import { Task } from "../../../../shared/domain/entities/task";

export interface TaskRepositoryInterface {
    getAllTasks(projectId: number): Promise<Task[]>;
}