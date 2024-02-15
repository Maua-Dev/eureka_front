import { ROLE, roleToEnum } from "../enums/role-enum";
import { stringToLocaleDate } from "../helpers/errors/date-formatter";
import { EntityError } from "../helpers/errors/domain-errors";

type TaskProps = {
  taskId: number;
  title: string;
  deliveryDate: Date;
  responsible: ROLE;
};

export type TaskJsonProps = {
  task_id: number;
  title: string;
  delivery_date: string;
  responsible: string;
};

export class Task {
  private _taskId: number;
  private _title: string;
  private _deliveryDate: Date;
  private _responsible: ROLE;

  constructor(props: TaskProps) {
    if (!Task.validateTaskId(props.taskId)) {
      throw new EntityError("taskId");
    }
    this._taskId = props.taskId;

    if (!Task.validateTitle(props.title)) {
      throw new EntityError("title");
    }
    this._title = props.title;

    if (!Task.validateDeliveryDate(props.deliveryDate)) {
      throw new EntityError("deliveryDate");
    }
    this._deliveryDate = props.deliveryDate;

    if (!Task.validateResponsible(props.responsible)) {
      throw new EntityError("responsible");
    }
    this._responsible = props.responsible;
  }

  get taskId(): number {
    return this._taskId;
  }

  set taskId(taskId: number) {
    if (!Task.validateTaskId(taskId)) {
      throw new EntityError("taskId");
    }
    this._taskId = taskId;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    if (!Task.validateTitle(title)) {
      throw new EntityError("title");
    }
    this._title = title;
  }

  get deliveryDate(): Date {
    return this._deliveryDate;
  }

  set deliveryDate(deliveryDate: Date) {
    if (!Task.validateDeliveryDate(deliveryDate)) {
      throw new EntityError("deliveryDate");
    }
    this._deliveryDate = deliveryDate;
  }

  get responsible(): ROLE {
    return this._responsible;
  }

  set responsible(responsible: ROLE) {
    if (!Task.validateResponsible(responsible)) {
      throw new EntityError("responsible");
    }
    this._responsible = responsible;
  }

  toJson(): TaskJsonProps {
    return {
      task_id: this._taskId,
      title: this._title,
      delivery_date: this._deliveryDate.toISOString(),
      responsible: ROLE[this._responsible].toString(),
    };
  }

  static fromJson(json: TaskJsonProps): Task {
    return new Task({
      taskId: json.task_id,
      title: json.title,
      deliveryDate: stringToLocaleDate(json.delivery_date),
      responsible: roleToEnum(json.responsible),
    });
  }

  static validateTaskId(taskId: number): boolean {
    if (taskId == null) {
      return false;
    } else if (taskId <= 0) {
      return false;
    }
    return true;
  }

  static validateTitle(title: string): boolean {
    if (title == null) {
      return false;
    } else if (title.trim() == "") {
      return false;
    }
    return true;
  }

  static validateDeliveryDate(deliveryDate: Date): boolean {
    if (deliveryDate == null) {
      return false;
    }
    return true;
  }

  static validateResponsible(responsible: ROLE): boolean {
    if (responsible == null) {
      return false;
    }
    return true;
  }
}
