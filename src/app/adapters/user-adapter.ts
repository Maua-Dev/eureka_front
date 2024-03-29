import { User } from "../../@clean/shared/domain/entities/user";
import { UserModel } from "../models/user-model";
import { stringCapitalize } from "../utils/formatters/string-formatters";

export class UserAdapter {
  static fromModel(model: UserModel): User {
    return new User({
      userId: model.userId,
      name: model.name,
      email: model.email,
      role: model.role,
    });
  }

  static toModel(entity: User): UserModel {
    return new UserModel({
      userId: entity.userId,
      name: stringCapitalize(entity.name),
      email: entity.email,
      role: entity.role,
    });
  }
}
