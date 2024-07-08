import { Task } from "@entities/task.ts";
import { stringToDate } from "@formatters/date-formatters.ts";
import { TaskModel } from "../models/task-model";

export class TaskAdapter {
    static fromModel(model: TaskModel): Task {
        return new Task({
            taskId: model.taskId,
            title: model.title,
            deliveryDate: stringToDate(model.deliveryDate),
            responsible: model.responsible
        });
    }

    static toModel(entity: Task): TaskModel {
        return new TaskModel({
            taskId: entity.taskId,
            title: entity.title,
            deliveryDate: entity.deliveryDate.toLocaleDateString(),
            responsible: entity.responsible
        });
    }
}
