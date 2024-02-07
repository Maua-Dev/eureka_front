import { createContext } from "react";
import { UserModel } from "../models/user-model";
import { ROLE } from "../../@clean/shared/domain/enums/role-enum";

type AuthContextType = {
    user: UserModel;
}

const defaultContext: AuthContextType = {
    user: UserModel.empty()
};

export const AuthContext = createContext(defaultContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const user = new UserModel(
        {
            userId: 10,
            name: "Enrico Mota Santarelli",
            email: "enrico.santarelli@maua.br",
            role: ROLE.STUDENT,
        }
    );

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};