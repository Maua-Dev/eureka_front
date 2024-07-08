import React, { createContext, useState } from "react";
import { UserModel } from "@models/user-model";
import { RegistryUser, containerUser } from "@containers/container-user.ts";
import { GetAllStudentsUsecase } from "@modules/user/usecases/get-all-students-usecase.ts";
import { UserAdapter } from "../adapters/user-adapter";
import { GetAllProfessorsUsecase } from "@modules/user/usecases/get-all-professors-usecase.ts";

type UserContextType = {
    studentsFromContext: UserModel[];
    professorsFromContext: UserModel[];
    getAllStudents(): Promise<UserModel[] | undefined>;
    getAllProfessors(): Promise<UserModel[] | undefined>;
};

const defaultContext: UserContextType = {
    studentsFromContext: [],
    professorsFromContext: [],
    getAllStudents: async () => [],
    getAllProfessors: async () => []
};

export const UserContext = createContext(defaultContext);

const getAllStudentsUsecase = containerUser.get<GetAllStudentsUsecase>(
    RegistryUser.GetAllStudentsUsecase
);

const getAllProfessorsUsecase = containerUser.get<GetAllProfessorsUsecase>(
    RegistryUser.GetAllProfessorsUsecase
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [studentsFromContext, setStudentsFromContext] = useState<UserModel[]>(
        []
    );
    const [professorsFromContext, setProfessorsFromContext] = useState<
        UserModel[]
    >([]);

    const getAllStudents = async () => {
        const studentsCaught = await getAllStudentsUsecase.execute();
        const studentsModel = studentsCaught.map((student) =>
            UserAdapter.toModel(student)
        );
        setStudentsFromContext(studentsModel);

        return studentsModel;
    };

    const getAllProfessors = async () => {
        const professorsCaught = await getAllProfessorsUsecase.execute();
        const professorsModel = professorsCaught.map((professor) =>
            UserAdapter.toModel(professor)
        );
        setProfessorsFromContext(professorsModel);

        return professorsModel;
    };

    return (
        <UserContext.Provider
            value={{
                studentsFromContext,
                professorsFromContext,
                getAllStudents,
                getAllProfessors
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
