import { ROLE } from "../../@clean/shared/domain/enums/role-enum";

type UserModelProps = {
    userId: number;
    name: string;
    email: string;
    role: ROLE;
}

export class UserModel {
    userId: number;
    name: string;
    email: string;
    role: ROLE;

    constructor(props: UserModelProps) {
        this.userId = props.userId;
        this.name = props.name;
        this.email = props.email;
        this.role = props.role;
    }
}