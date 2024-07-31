import { User } from "@entities/user.ts";

export interface IUserRepository {
    getAllStudents(): Promise<User[]>;
    getAllProfessors(): Promise<User[]>;
}
