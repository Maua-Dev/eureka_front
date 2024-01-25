import { RESPONSIBLE } from "../enums/responsible_enum";
import { EntityError } from "../helpers/errors/domain_error";

export type TaskProps = {
    task_id: number;
    title: string;
    delivery_date: Date;
    responsible: RESPONSIBLE;
}

export class Task {
    private _task_id: number;
    private _title: string;
    private _delivery_date: Date;
    private _responsible: RESPONSIBLE;

    constructor(props: TaskProps) {
            if(!Task.validateTaskId(props.task_id)){
                throw new EntityError("task_id");
            }
            this._task_id = props.task_id;

            if(!Task.validateTitle(props.title)){
                throw new EntityError("title");
            }
            this._title = props.title;
            
            if(!Task.validateDeliveryDate(props.delivery_date)){
                throw new EntityError("delivery_date");
            }
            this._delivery_date = props.delivery_date;

            if(!Task.validateResponsible(props.responsible)){
                throw new EntityError("responsible");
            }
            this._responsible = props.responsible;
        }

    get task_id() : number {
        return this._task_id;
    }

    set task_id(task_id: number) {
        this._task_id = task_id;
    }

    get title() : string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get delivery_date() : Date {
        return this._delivery_date;
    }

    set delivery_date(delivery_date: Date) {
        this._delivery_date = delivery_date;
    }

    get responsible() : RESPONSIBLE {
        return this._responsible;
    }

    set responsible(responsible: RESPONSIBLE) {
        this._responsible = responsible;
    }

    toJson() : TaskProps {
        return {
            "task_id": this._task_id,
            "title": this._title,
            "delivery_date": this._delivery_date,
            "responsible": this._responsible
        };
    }

    fromJson(json: TaskProps): Task {
        return new Task(
            {
                task_id: json.task_id,
                title: json.title,
                delivery_date: json.delivery_date,
                responsible: json.responsible
            }
        );
    }

    static validateTaskId(task_id: number) : boolean{
        if(task_id == null){
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

    static validateDeliveryDate(delivery_date: Date) : boolean{
        if(delivery_date == null){
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