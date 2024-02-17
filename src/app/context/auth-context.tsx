import { createContext } from "react";
import { UserModel } from "../models/user-model";
import { UserAdapter } from "../adapters/user-adapter";
import { UserJson } from "../../@clean/shared/infra/jsons/user-json";
import { User } from "../../@clean/shared/domain/entities/user";

type AuthContextType = {
  user: UserModel;
};

const defaultContext: AuthContextType = {
  user: UserModel.empty(),
};

export const AuthContext = createContext(defaultContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const user = UserAdapter.toModel(User.fromJson(UserJson.userJson[0]));

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
