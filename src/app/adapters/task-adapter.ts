import { Task } from "../../@clean/shared/domain/entities/task";
import { TaskModel } from "../models/task-model";
import { formatDate, formatString } from "../utils/date-formatter";

export class TaskAdapter {
    static fromModel(model: TaskModel): Task {
        return new Task({
          taskId: model.taskId,
          title: model.title,
          deliveryDate: formatString(model.deliveryDate),
          responsible: model.responsible,
        });
      }
    
      static toModel(entity: Task): TaskModel {
        return new TaskModel({
          taskId: entity.taskId,
          title: entity.title,
          deliveryDate: formatDate(entity.deliveryDate),
          responsible: entity.responsible,
        });
      }
}