import { SHIFT } from "../../@clean/shared/domain/enums/shift-enum";
import { UserModel } from "./user-model";

type ProjectModelProps = {
    projectId: number,
    title: string,
    qualification: string,
    code: string,
    shift: SHIFT,
    standNumber: number,
    isEntrepreneurship: boolean,
    professors: UserModel[],
    students: UserModel[]
}

export class ProjectModel {
    projectId: number;
    title: string;
    qualification: string;
    code: string;
    shift: SHIFT;
    standNumber: number;
    isEntrepreneurship: boolean;
    professors: UserModel[];
    students: UserModel[];

    constructor(props: ProjectModelProps){
        this.projectId = props.projectId;
        this.title = props.title;
        this.qualification = props.qualification;
        this.code = props.code;
        this.shift = props.shift;
        this.standNumber = props.standNumber;
        this.isEntrepreneurship = props.isEntrepreneurship;
        this.professors = props.professors;
        this.students = props.students;
    }

    static empty(): ProjectModel {
        return new ProjectModel({
            projectId: 0,
            title: "",
            qualification: "",
            code: "",
            shift: SHIFT.DAYTIME,
            standNumber: 0,
            isEntrepreneurship: false,
            professors: [],
            students: []
        });
    }
}