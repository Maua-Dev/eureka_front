import "reflect-metadata";
import { IUserRepository } from "../../../../modules/user/domain/user-repository-interface";
import { User } from "../../../domain/entities/user";
import { NoItemsFoundError } from "../../../domain/helpers/errors/domain-errors";
import { UserJson } from "../../jsons/user-json";
import { decorate, injectable } from "inversify";
import { ROLE } from "../../../domain/enums/role-enum";

export class UserRepositoryMock implements IUserRepository {
  async getAllStudents(): Promise<User[]> {
    const jsons = UserJson.userJson;

    if (jsons == null) {
      throw new NoItemsFoundError("users");
    }

    const users = jsons.map((user) => User.fromJson(user));

    return users.filter((user) => user.role === ROLE.STUDENT);
  }
}

decorate(injectable(), UserRepositoryMock);
