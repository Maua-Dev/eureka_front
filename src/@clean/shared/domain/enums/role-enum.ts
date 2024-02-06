export enum ROLE {
    STUDENT,
    ADVISOR,
    RESPONSIBLE
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
            throw new Error("Invalid value");
    }
}