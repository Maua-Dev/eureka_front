import React, { createContext } from "react";
import { UserModel } from "@models/user-model";
import { UserAdapter } from "@adapters/user-adapter";
import { UserJson } from "@jsons/user-json.ts";
import { User } from "@entities/user.ts";

type AuthContextType = {
    userFromContext: UserModel;
};

const defaultContext: AuthContextType = {
    userFromContext: UserModel.empty()
};

export const AuthContext = createContext(defaultContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const userFromContext = UserAdapter.toModel(
        User.fromJson(UserJson.userJson[0])
    );

    return (
        <AuthContext.Provider value={{ userFromContext }}>
            {children}
        </AuthContext.Provider>
    );
};
