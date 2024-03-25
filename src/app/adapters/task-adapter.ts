import { Task } from "../../@clean/shared/domain/entities/task";
import { stringToDate } from "../utils/formatters/date-formatters";
import { TaskModel } from "../models/task-model";

export class TaskAdapter {
  static fromModel(model: TaskModel): Task {
    return new Task({
      taskId: model.taskId,
      title: model.title,
      deliveryDate: stringToDate(model.deliveryDate),
      responsible: model.responsible,
    });
  }

  static toModel(entity: Task): TaskModel {
    return new TaskModel({
      taskId: entity.taskId,
      title: entity.title,
      deliveryDate: entity.deliveryDate.toLocaleDateString(),
      responsible: entity.responsible,
    });
  }
}
