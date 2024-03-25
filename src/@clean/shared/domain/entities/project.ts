import { SHIFT, shiftToEnum } from "../enums/shift-enum";
import { EntityError } from "../helpers/errors/domain-errors";
import { User, UserJsonProps } from "./user";

type ProjectProps = {
  projectId: number;
  title: string;
  description: string;
  qualification: string;
  code: string;
  shift: SHIFT;
  standNumber: string;
  isEntrepreneurship: boolean;
  responsibles: User[];
  advisors: User[];
  students: User[];
};

export type ProjectJsonProps = {
  project_id: number;
  title: string;
  description: string;
  qualification: string;
  code: string;
  shift: string;
  stand_number: string;
  is_entrepreneurship: boolean;
  responsibles: UserJsonProps[];
  advisors: UserJsonProps[];
  students: UserJsonProps[];
};

export type ProjectRequestBodyProps = {
  project_id: number;
  title?: string;
  description?: string;
  qualification?: string;
  code?: string;
  shift?: string;
  stand_number?: string;
  is_entrepreneurship?: boolean;
  responsibles?: number[];
  advisors?: number[];
  students?: number[];
};

export class Project {
  private _projectId: number;
  private _title: string;
  private _description: string;
  private _qualification: string;
  private _code: string;
  private _shift: SHIFT;
  private _standNumber: string;
  private _isEntrepreneurship: boolean;
  private _responsibles: User[];
  private _advisors: User[];
  private _students: User[];

  constructor(props: ProjectProps) {
    if (!Project.validateProjectId(props.projectId)) {
      throw new EntityError("projectId");
    }
    this._projectId = props.projectId;

    if (!Project.validateTitle(props.title)) {
      throw new EntityError("title");
    }
    this._title = props.title;

    if (!Project.validateDescription(props.description)) {
      throw new EntityError("description");
    }
    this._description = props.description;

    if (!Project.validateQualification(props.qualification)) {
      throw new EntityError("qualification");
    }
    this._qualification = props.qualification;

    if (!Project.validateCode(props.code)) {
      throw new EntityError("code");
    }
    this._code = props.code;

    if (!Project.validateShift(props.shift)) {
      throw new EntityError("shift");
    }
    this._shift = props.shift;

    if (!Project.validateStandNumber(props.standNumber)) {
      throw new EntityError("standNumber");
    }
    this._standNumber = props.standNumber;

    if (!Project.validateIsEntrepreneurship(props.isEntrepreneurship)) {
      throw new EntityError("isEntrepreneurship");
    }
    this._isEntrepreneurship = props.isEntrepreneurship;

    if (!Project.validateResponsibles(props.responsibles)) {
      throw new EntityError("responsibles");
    }
    this._responsibles = props.responsibles;

    if (!Project.validateAdvisors(props.advisors)) {
      throw new EntityError("advisors");
    }
    this._advisors = props.advisors;

    if (!Project.validateStudents(props.students)) {
      throw new EntityError("students");
    }
    this._students = props.students;
  }

  get projectId(): number {
    return this._projectId;
  }

  set projectId(projectId: number) {
    if (!Project.validateProjectId(projectId)) {
      throw new EntityError("projectId");
    }
    this._projectId = projectId;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    if (!Project.validateTitle(title)) {
      throw new EntityError("title");
    }
    this._title = title;
  }

  get description(): string {
    return this._description;
  }

  set description(description: string) {
    if (!Project.validateDescription(description)) {
      throw new EntityError("description");
    }
    this._description = description;
  }

  get qualification(): string {
    return this._qualification;
  }

  set qualification(qualification: string) {
    if (!Project.validateQualification(qualification)) {
      throw new EntityError("qualification");
    }
    this._qualification = qualification;
  }

  get code(): string {
    return this._code;
  }

  set code(code: string) {
    if (!Project.validateCode(code)) {
      throw new EntityError("code");
    }
    this._code = code;
  }

  get shift(): SHIFT {
    return this._shift;
  }

  set shift(shift: SHIFT) {
    if (!Project.validateShift(shift)) {
      throw new EntityError("shift");
    }
    this._shift = shift;
  }

  get standNumber(): string {
    return this._standNumber;
  }

  set standNumber(standNumber: string) {
    if (!Project.validateStandNumber(standNumber)) {
      throw new EntityError("standNumber");
    }
    this._standNumber = standNumber;
  }

  get isEntrepreneurship(): boolean {
    return this._isEntrepreneurship;
  }

  set isEntrepreneurship(isEntrepreneurship: boolean) {
    if (!Project.validateIsEntrepreneurship(isEntrepreneurship)) {
      throw new EntityError("isEntrepreneurship");
    }
    this._isEntrepreneurship = isEntrepreneurship;
  }

  get responsibles(): User[] {
    return this._responsibles;
  }

  set responsibles(responsibles: User[]) {
    if (!Project.validateResponsibles(responsibles)) {
      throw new EntityError("responsibles");
    }
    this._responsibles = responsibles;
  }

  get advisors(): User[] {
    return this._advisors;
  }

  set advisors(advisors: User[]) {
    if (!Project.validateAdvisors(advisors)) {
      throw new EntityError("advisors");
    }
    this._advisors = advisors;
  }

  get students(): User[] {
    return this._students;
  }

  set students(students: User[]) {
    if (!Project.validateStudents(students)) {
      throw new EntityError("students");
    }
    this._students = students;
  }

  toJson(): ProjectJsonProps {
    return {
      project_id: this._projectId,
      title: this._title,
      description: this._description,
      qualification: this._qualification,
      code: this._code,
      shift: SHIFT[this._shift].toString(),
      stand_number: this._standNumber,
      is_entrepreneurship: this._isEntrepreneurship,
      responsibles: this.responsibles.map((responsible) => responsible.toJson()),
      advisors: this._advisors.map((advisor) => advisor.toJson()),
      students: this._students.map((student) => student.toJson()),
    };
  }

  static fromJson(json: ProjectJsonProps): Project {
    return new Project({
      projectId: json.project_id,
      title: json.title,
      description: json.description,
      qualification: json.qualification,
      code: json.code,
      shift: shiftToEnum(json.shift),
      standNumber: json.stand_number,
      isEntrepreneurship: json.is_entrepreneurship,
      responsibles: json.responsibles.map((responsible) => User.fromJson(responsible)),
      advisors: json.advisors.map((advisor) => User.fromJson(advisor)),
      students: json.students.map((student) => User.fromJson(student)),
    });
  }

  static validateProjectId(projectId: number): boolean {
    if (projectId == null) {
      return false;
    } else if (projectId < 0) {
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

  static validateDescription(description: string): boolean {
    if (description == null) {
      return false;
    } else if (description.trim() == "") {
      return false;
    }

    return true;
  }

  static validateQualification(qualification: string): boolean {
    if (qualification == null) {
      return false;
    } else if (qualification.trim() == "") {
      return false;
    }

    return true;
  }

  static validateCode(code: string): boolean {
    if (code == null) {
      return false;
    } else if (code.trim() == "") {
      return false;
    }

    return true;
  }

  static validateShift(shift: SHIFT): boolean {
    if (shift == null) {
      return false;
    }

    return true;
  }

  static validateStandNumber(standNumber: string): boolean {
    if (standNumber == null) {
      return false;
    }

    return true;
  }

  static validateIsEntrepreneurship(isEntrepreneurship: boolean): boolean {
    if (isEntrepreneurship == null) {
      return false;
    }

    return true;
  }

  static validateResponsibles(responsibles: User[]): boolean {
    if (responsibles == null) {
      return false;
    } else if (responsibles.length == 0) {
      return false;
    }

    return true;
  }

  static validateAdvisors(advisors: User[]): boolean {
    if (advisors == null) {
      return false;
    } else if (advisors.length == 0) {
      return false;
    }

    return true;
  }

  static validateStudents(students: User[]): boolean {
    if (students == null) {
      return false;
    } else if (students.length == 0) {
      return false;
    }

    return true;
  }
}
