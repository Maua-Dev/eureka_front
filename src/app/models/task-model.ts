import { RESPONSIBLE } from "../../@clean/shared/domain/enums/responsible-enum";

type TaskModelProps = {
    taskId: number;
    title: string;
    deliveryDate: string;
    responsible: RESPONSIBLE;
}

export class TaskModel {
    taskId: number;
    title: string;
    deliveryDate: string;
    responsible: RESPONSIBLE;

    constructor(props: TaskModelProps){
        this.taskId = props.taskId;
        this.title = props.title;
        this.deliveryDate = props.deliveryDate;
        this.responsible = props.responsible;
    }
}