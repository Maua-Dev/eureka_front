import { EnumError } from "../helpers/errors/domain-errors";

export enum ROLE {
  STUDENT,
  ADVISOR,
  RESPONSIBLE,
}

export function roleToEnum(value: string): ROLE {
  switch (value) {
    case "STUDENT":
      return ROLE.STUDENT;
    case "ADVISOR":
      return ROLE.ADVISOR;
    case "RESPONSIBLE":
      return ROLE.RESPONSIBLE;
    default:
      throw new EnumError(value);
  }
}
