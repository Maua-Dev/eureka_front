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
            throw new Error("Invalid value");
    }
}