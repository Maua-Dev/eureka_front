import { RESPONSIBLE } from "../enums/responsible-enum";
import { EntityError } from "../helpers/errors/domain-errors";

type TaskProps = {
    taskId: number;
    title: string;
    deliveryDate: Date;
    responsible: RESPONSIBLE;
}

type TaskJsonProps = {
    task_id: number;
    title: string;
    delivery_date: Date;
    responsible: RESPONSIBLE;
}

export class Task {
    private _taskId: number;
    private _title: string;
    private _deliveryDate: Date;
    private _responsible: RESPONSIBLE;

    constructor(props: TaskProps) {
            if(!Task.validateTaskId(props.taskId)){
                throw new EntityError("taskId");
            }
            this._taskId = props.taskId;

            if(!Task.validateTitle(props.title)){
                throw new EntityError("title");
            }
            this._title = props.title;
            
            if(!Task.validateDeliveryDate(props.deliveryDate)){
                throw new EntityError("deliveryDate");
            }
            this._deliveryDate = props.deliveryDate;

            if(!Task.validateResponsible(props.responsible)){
                throw new EntityError("responsible");
            }
            this._responsible = props.responsible;
        }

    get taskId() : number {
        return this._taskId;
    }

    set taskId(taskId: number) {
        this._taskId = taskId;
    }

    get title() : string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get deliveryDate() : Date {
        return this._deliveryDate;
    }

    set deliveryDate(deliveryDate: Date) {
        this._deliveryDate = deliveryDate;
    }

    get responsible() : RESPONSIBLE {
        return this._responsible;
    }

    set responsible(responsible: RESPONSIBLE) {
        this._responsible = responsible;
    }

    toJson() : TaskJsonProps {
        return {
            "task_id": this._taskId,
            "title": this._title,
            "delivery_date": this._deliveryDate,
            "responsible": this._responsible
        };
    }

    fromJson(json: TaskJsonProps): Task {
        return new Task(
            {
                taskId: json.task_id,
                title: json.title,
                deliveryDate: json.delivery_date,
                responsible: json.responsible
            }
        );
    }

    static validateTaskId(taskId: number) : boolean{
        if(taskId == null){
            return false;
        }
        return true;
    }

    static validateTitle(title: string) : boolean{
        if(title == null){
            return false;
        }
        return true;
    }

    static validateDeliveryDate(deliveryDate: Date) : boolean{
        if(deliveryDate == null){
            return false;
        }
        return true;
    }

    static validateResponsible(responsible: RESPONSIBLE) : boolean{
        if(responsible == null){
            return false;
        }
        return true;
    }
}