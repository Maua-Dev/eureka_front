import { createContext, useState } from "react";
import { UserModel } from "../models/user-model";
import { RegistryUser, containerUser } from "../../@clean/shared/infra/containers/container-user";
import { GetAllStudentsUsecase } from "../../@clean/modules/user/usecases/get-all-students-usecase";
import { UserAdapter } from "../adapters/user-adapter";

type UserContextType = {
  studentsFromContext: UserModel[];
  getAllStudents(): Promise<UserModel[] | undefined>;
};

const defaultContext: UserContextType = {
  studentsFromContext: [],
  getAllStudents: async () => [],
};

export const UserContext = createContext(defaultContext);

const getAllStudentsUsecase = containerUser.get<GetAllStudentsUsecase>(
  RegistryUser.GetAllStudentsUsecase
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [studentsFromContext, setStudentsFromContext] = useState<UserModel[]>([]);

  const getAllStudents = async () => {
    const studentsCaught = await getAllStudentsUsecase.execute();
    const studentsModel = studentsCaught.map((task) => UserAdapter.toModel(task));
    setStudentsFromContext(studentsModel);

    return studentsModel;
  };

  return (
    <UserContext.Provider value={{ studentsFromContext, getAllStudents }}>
      {children}
    </UserContext.Provider>
  );
};
