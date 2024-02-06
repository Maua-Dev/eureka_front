import { TaskModel } from "./task-model";
import { UserModel } from "./user-model";

type DeliveryModelProps = {
    deliveryId: number;
    task: TaskModel;
    user: UserModel;
    date: Date;
    content: {
        [key: string]: string;
    }
}

export class DeliveryModel {
    deliveryId: number;
    task: TaskModel;
    user: UserModel;
    date: Date;
    content: {
        [key: string]: string;
    };

    constructor(props: DeliveryModelProps){
        this.deliveryId = props.deliveryId;
        this.task = props.task;
        this.user = props.user;
        this.date = props.date;
        this.content = props.content;
    }
}