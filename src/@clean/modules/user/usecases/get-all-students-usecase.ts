import { User } from "../../../shared/domain/entities/user";
import { IUserRepository } from "../domain/user-repository-interface";

export class GetAllStudentsUsecase {
    private _userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this._userRepository = userRepository;
    }

    async execute(): Promise<User[]> {
        return this._userRepository.getAllStudents();
    }
}