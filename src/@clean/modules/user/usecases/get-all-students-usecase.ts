import { User } from "@entities/user.ts";
import { IUserRepository } from "../domain/repositories/user-repository-interface.ts";

export class GetAllStudentsUsecase {
    private _userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this._userRepository = userRepository;
    }

    async execute(): Promise<User[]> {
        return this._userRepository.getAllStudents();
    }
}
