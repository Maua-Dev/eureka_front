import { TaskModel } from "./task-model";
import { UserModel } from "./user-model";

interface DeliveryModelProps {
  deliveryId: number
  task: TaskModel
  user: UserModel
  date: Date
  content: Record<string, unknown>
}

export class DeliveryModel {
  deliveryId: number;
  task: TaskModel;
  user: UserModel;
  date: Date;
  content: Record<string, unknown>;

  constructor (props: DeliveryModelProps) {
    this.deliveryId = props.deliveryId;
    this.task = props.task;
    this.user = props.user;
    this.date = props.date;
    this.content = props.content;
  }

  static empty (): DeliveryModel {
    return new DeliveryModel({
      deliveryId: 0,
      task: TaskModel.empty(),
      user: UserModel.empty(),
      date: new Date(),
      content: {}
    });
  }
}
