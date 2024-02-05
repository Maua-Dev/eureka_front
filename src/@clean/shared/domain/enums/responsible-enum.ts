export enum RESPONSIBLE {
    STUDENT,
    ADVISOR,
    RESPONSIBLE
}

export function responsibleToEnum(value: string): RESPONSIBLE {
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