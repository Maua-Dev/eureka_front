import { ROLE, roleToEnum } from "../enums/role-enum";
import { EntityError } from "../helpers/errors/domain-errors";

type UserProps = {
    userId: number,
    name: string,
    email: string,
    role: ROLE
}

export type UserJsonProps = {
    user_id: number,
    name: string,
    email: string,
    role: string
}

export class User {
    private _userId: number;
    private _name: string;
    private _email: string;
    private _role: ROLE;

    constructor(props: UserProps) {
        if(!User.validateUserId(props.userId)){
            throw new EntityError("userId");
        }
        this._userId = props.userId;
        if(!User.validateName(props.name)){
            throw new EntityError("name");
        }
        this._name = props.name;
        if(!User.validateEmail(props.email)){
            throw new EntityError("email");
        }
        this._email = props.email;
        if(!User.validateRole(props.role)){
            throw new EntityError("role");
        }
        this._role = props.role;
    }

    get userId() : number {
        return this._userId;
    }

    set userId(userId: number) {
        if(!User.validateUserId(userId)){
            throw new EntityError("userId");
        }
        this._userId = userId;
    }

    get name() : string {
        return this._name;
    }

    set name(name: string) {
        if(!User.validateName(name)){
            throw new EntityError("name");
        }
        this._name = name;
    }

    get email() : string {
        return this._email;
    }

    set email(email: string) {
        if(!User.validateEmail(email)){
            throw new EntityError("email");
        }
        this._email = email;
    }

    get role() : ROLE {
        return this._role;
    }

    set role(role: ROLE) {
        if(!User.validateRole(role)){
            throw new EntityError("role");
        }
        this._role = role;
    }

    static validateUserId(userId: number) : boolean{
        if(userId == null){
            return false;
        }
        if(userId <= 0){
            return false;
        }
        return true;
    }

    toJson() : UserJsonProps {
        return {
            "user_id": this._userId,
            "name": this._name,
            "email": this._email,
            "role": ROLE[this._role].toString()
        };
    }

    static fromJson(json: UserJsonProps): User {
        return new User(
            {
                userId: json.user_id,
                name: json.name,
                email: json.email,
                role: roleToEnum(json.role) 
            }
        );
    }

    static validateName(name: string) : boolean{
        if(name == null){
            return false;
        }
        else if(name.trim() == ""){
            return false;
        }
        return true;
    }

    static validateEmail(email: string) : boolean{
        const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if(email == null){
            return false;
        }
        else if(email.trim() == ""){
            return false;
        }
        else if(!emailRegex.test(email)){
            return false;
        }
        return true;
    }

    static validateRole(role: ROLE) : boolean{
        if(role == null){
            return false;
        }
        return true;
    }
}
