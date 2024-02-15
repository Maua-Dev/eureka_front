import { createContext, useState } from "react";
import { UserModel } from "../models/user-model";
import { RegistryUser, containerUser } from "../../@clean/shared/infra/containers/container-user";
import { GetAllStudentsUsecase } from "../../@clean/modules/user/usecases/get-all-students-usecase";
import { UserAdapter } from "../adapters/user-adapter";

type UserContextType = {
  studentsList: UserModel[];
  getAllStudents(): Promise<UserModel[] | undefined>;
};

const defaultContext: UserContextType = {
  studentsList: [],
  getAllStudents: async () => [],
};

export const UserContext = createContext(defaultContext);

const getAllStudentsUsecase = containerUser.get<GetAllStudentsUsecase>(
  RegistryUser.GetAllStudentsUsecase
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [studentsList, setStudentsList] = useState<UserModel[]>([]);

  const getAllStudents = async () => {
    const studentsCaught = await getAllStudentsUsecase.execute();
    const studentsModel = studentsCaught.map((task) => UserAdapter.toModel(task));
    setStudentsList(studentsModel);
    return studentsList;
  };

  return (
    <UserContext.Provider value={{ studentsList, getAllStudents }}>{children}</UserContext.Provider>
  );
};
