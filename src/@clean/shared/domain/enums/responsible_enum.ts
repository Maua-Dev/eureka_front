export enum RESPONSIBLE {
    STUDENT = "STUDENT",
    ADVISOR = "ADVISOR",
    RESPONSIBLE = "RESPONSIBLE"
}

export function toEnum(value: string): RESPONSIBLE {
    switch (value) {
        case "STUDENT":
            return RESPONSIBLE.STUDENT;
        case "ADVISOR":
            return RESPONSIBLE.ADVISOR;
        case "RESPONSIBLE":
            return RESPONSIBLE.RESPONSIBLE;
        default:
            throw new Error("Invalid value");
    }
}