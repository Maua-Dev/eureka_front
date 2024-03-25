import { createContext, useState } from "react";
import { UserModel } from "../models/user-model";
import { RegistryUser, containerUser } from "../../@clean/shared/infra/containers/container-user";
import { GetAllStudentsUsecase } from "../../@clean/modules/user/usecases/get-all-students-usecase";
import { UserAdapter } from "../adapters/user-adapter";
import { GetAllProfessorsUsecase } from "../../@clean/modules/user/usecases/get-all-professors-usecase";

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
  getAllProfessors: async () => [],
};

export const UserContext = createContext(defaultContext);

const getAllStudentsUsecase = containerUser.get<GetAllStudentsUsecase>(
  RegistryUser.GetAllStudentsUsecase
);

const getAllProfessorsUsecase = containerUser.get<GetAllProfessorsUsecase>(
  RegistryUser.GetAllProfessorsUsecase
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [studentsFromContext, setStudentsFromContext] = useState<UserModel[]>([]);
  const [professorsFromContext, setProfessorsFromContext] = useState<UserModel[]>([]);

  const getAllStudents = async () => {
    const studentsCaught = await getAllStudentsUsecase.execute();
    const studentsModel = studentsCaught.map((student) => UserAdapter.toModel(student));
    setStudentsFromContext(studentsModel);

    return studentsModel;
  };

  const getAllProfessors = async () => {
    const professorsCaught = await getAllProfessorsUsecase.execute();
    const professorsModel = professorsCaught.map((professor) => UserAdapter.toModel(professor));
    setProfessorsFromContext(professorsModel);

    return professorsModel;
  };

  return (
    <UserContext.Provider
      value={{ studentsFromContext, professorsFromContext, getAllStudents, getAllProfessors }}
    >
      {children}
    </UserContext.Provider>
  );
};
