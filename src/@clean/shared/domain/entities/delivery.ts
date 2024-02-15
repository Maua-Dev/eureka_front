import { EntityError } from "../helpers/errors/domain-errors";
import { Task, TaskJsonProps } from "./task";
import { User, UserJsonProps } from "./user";

type DeliveryProps = {
  deliveryId: number;
  task: Task;
  user: User;
  date: Date;
  content: {
    [key: string]: unknown;
  };
};

export type DeliveryJsonProps = {
  delivery_id: number;
  task: TaskJsonProps;
  user: UserJsonProps;
  date: string;
  content: {
    [key: string]: unknown;
  };
};

export class Delivery {
  private _deliveryId: number;
  private _task: Task;
  private _user: User;
  private _date: Date;
  private _content: {
    [key: string]: unknown;
  };

  constructor(props: DeliveryProps) {
    if (!Delivery.validateDeliveryId(props.deliveryId)) {
      throw new EntityError("deliveryId");
    }
    this._deliveryId = props.deliveryId;

    if (!Delivery.validateTask(props.task)) {
      throw new EntityError("task");
    }
    this._task = props.task;

    if (!Delivery.validateUser(props.user)) {
      throw new EntityError("user");
    }
    this._user = props.user;

    if (!Delivery.validateDate(props.date)) {
      throw new EntityError("date");
    }
    this._date = props.date;

    if (!Delivery.validateContent(props.content)) {
      throw new EntityError("content");
    }
    this._content = props.content;
  }

  get deliveryId(): number {
    return this._deliveryId;
  }

  set deliveryId(deliveryId: number) {
    if (!Delivery.validateDeliveryId(deliveryId)) {
      throw new EntityError("deliveryId");
    }
    this._deliveryId = deliveryId;
  }

  get task(): Task {
    return this._task;
  }

  set task(task: Task) {
    if (!Delivery.validateTask(task)) {
      throw new EntityError("task");
    }
    this._task = task;
  }

  get user(): User {
    return this._user;
  }

  set user(user: User) {
    if (!Delivery.validateUser(user)) {
      throw new EntityError("user");
    }
    this._user = user;
  }

  get date(): Date {
    return this._date;
  }

  set date(date: Date) {
    if (!Delivery.validateDate(date)) {
      throw new EntityError("date");
    }
    this._date = date;
  }

  get content(): {
    [key: string]: unknown;
  } {
    return this._content;
  }

  set content(content: { [key: string]: string }) {
    if (!Delivery.validateContent(content)) {
      throw new EntityError("content");
    }
    this._content = content;
  }

  toJson(): DeliveryJsonProps {
    return {
      delivery_id: this._deliveryId,
      task: this._task.toJson(),
      user: this._user.toJson(),
      date: this._date.toISOString(),
      content: this._content,
    };
  }

  static fromJson(json: DeliveryJsonProps): Delivery {
    return new Delivery({
      deliveryId: json.delivery_id,
      task: Task.fromJson(json.task),
      user: User.fromJson(json.user),
      date: new Date(json.date),
      content: json.content,
    });
  }

  static validateDeliveryId(deliveryId: number): boolean {
    if (deliveryId == null) {
      return false;
    }
    if (deliveryId <= 0) {
      return false;
    }
    return true;
  }

  static validateTask(task: Task): boolean {
    if (task == null) {
      return false;
    }
    return true;
  }

  static validateUser(user: User): boolean {
    if (user == null) {
      return false;
    }
    return true;
  }

  static validateDate(date: Date): boolean {
    if (date == null) {
      return false;
    }
    return true;
  }

  static validateContent(content: { [key: string]: unknown }): boolean {
    if (content == null) {
      return false;
    }
    return true;
  }
}
