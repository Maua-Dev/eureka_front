import { SHIFT } from "../../@clean/shared/domain/enums/shift-enum";
import { UserModel } from "./user-model";

type ProjectModelProps = {
  projectId: number;
  title: string;
  description: string;
  qualification: string;
  code: string;
  shift: SHIFT;
  standNumber: string;
  isEntrepreneurship: boolean;
  professors: UserModel[];
  students: UserModel[];
};

export class ProjectModel {
  projectId: number;
  title: string;
  description: string;
  qualification: string;
  code: string;
  shift: SHIFT;
  standNumber: string;
  isEntrepreneurship: boolean;
  professors: UserModel[];
  students: UserModel[];

  constructor(props: ProjectModelProps) {
    this.projectId = props.projectId;
    this.title = props.title;
    this.description = props.description;
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
      description: "",
      title: "",
      qualification: "",
      code: "",
      shift: SHIFT.DAYTIME,
      standNumber: "",
      isEntrepreneurship: false,
      professors: [],
      students: [],
    });
  }
}
