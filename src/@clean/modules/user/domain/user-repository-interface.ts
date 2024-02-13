import { User } from "../../../shared/domain/entities/user";

export interface IUserRepository {
    getAllStudents(): Promise<User[]>;
}