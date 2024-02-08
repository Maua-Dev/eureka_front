import { EnumError } from "../helpers/errors/domain-errors";

export enum SHIFT {
    DAYTIME,
    NIGHTTIME
}

export function shiftToEnum(value: string): SHIFT {
    switch (value) {
        case "DIURNO":
            return SHIFT.DAYTIME;
        case "NOTURNO":
            return SHIFT.NIGHTTIME;
        default:
            throw new EnumError(value);
    }
}

export function shiftToAcronym(value: SHIFT): string {
    return SHIFT[value].toString().charAt(0);
}