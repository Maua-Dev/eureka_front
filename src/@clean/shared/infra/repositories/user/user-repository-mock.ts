import "reflect-metadata";
import { IUserRepository } from "@modules/user/domain/repositories/user-repository-interface.ts";
import { User } from "@entities/user.ts";
import { NoItemsFoundError } from "@helpers/errors/domain-errors.ts";
import { UserJson } from "@jsons/user-json.ts";
import { decorate, injectable } from "inversify";
import { ROLE } from "@enums/role-enum.ts";

export class UserRepositoryMock implements IUserRepository {
    async getAllStudents(): Promise<User[]> {
        const jsons = UserJson.userJson;

        if (jsons == null) {
            throw new NoItemsFoundError("users");
        }

        const users = jsons.map((user) => User.fromJson(user));

        return users.filter((user) => user.role === ROLE.STUDENT);
    }

    async getAllProfessors(): Promise<User[]> {
        const jsons = UserJson.userJson;

        if (jsons == null) {
            throw new NoItemsFoundError("users");
        }

        const users = jsons.map((user) => User.fromJson(user));

        return users.filter((user) => user.role === ROLE.PROFESSOR);
    }
}

decorate(injectable(), UserRepositoryMock);
