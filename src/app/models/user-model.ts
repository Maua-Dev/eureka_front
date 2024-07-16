import { ROLE } from "@enums/role-enum.ts";

type UserModelProps = {
    userId: number;
    name: string;
    email: string;
    role: ROLE;
    phone: string;
};

export class UserModel {
    userId: number;
    name: string;
    email: string;
    role: ROLE;
    phone: string;

    constructor(props: UserModelProps) {
        this.userId = props.userId;
        this.name = props.name;
        this.email = props.email;
        this.role = props.role;
        this.phone = props.phone;
    }

    static empty(): UserModel {
        return new UserModel({
            userId: 0,
            name: "",
            email: "",
            role: ROLE.STUDENT,
            phone: ""
        });
    }
}
