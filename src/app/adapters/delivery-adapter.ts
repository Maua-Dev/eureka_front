import { Delivery } from "../../@clean/shared/domain/entities/delivery";
import { DeliveryModel } from "../models/delivery-model";
import { stringToDate } from "../utils/formatters/date-formatters";
import { TaskAdapter } from "./task-adapter";
import { UserAdapter } from "./user-adapter";

export class DeliveryAdapter {
  static fromModel(model: DeliveryModel): Delivery {
    return new Delivery({
      deliveryId: model.deliveryId,
      task: TaskAdapter.fromModel(model.task),
      user: UserAdapter.fromModel(model.user),
      date: stringToDate(model.date),
      content: model.content,
    });
  }

  static toModel(entity: Delivery): DeliveryModel {
    return new DeliveryModel({
      deliveryId: entity.deliveryId,
      task: TaskAdapter.toModel(entity.task),
      user: UserAdapter.toModel(entity.user),
      date: entity.date.toLocaleDateString(),
      content: entity.content,
    });
  }
}
