import { User } from "@entities/user.ts";
import { IUserRepository } from "../domain/user-repository-interface";

export class GetAllProfessorsUsecase {
    private _userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this._userRepository = userRepository;
    }

    async execute(): Promise<User[]> {
        return this._userRepository.getAllProfessors();
    }
}
