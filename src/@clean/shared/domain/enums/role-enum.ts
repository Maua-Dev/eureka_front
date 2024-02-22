import { EnumError } from "../helpers/errors/domain-errors";

export enum ROLE {
  STUDENT,
  PROFESSOR,
}

export function roleToEnum(value: string): ROLE {
  switch (value) {
    case "STUDENT":
      return ROLE.STUDENT;
    case "PROFESSOR":
      return ROLE.PROFESSOR;
    default:
      throw new EnumError(value);
  }
}
