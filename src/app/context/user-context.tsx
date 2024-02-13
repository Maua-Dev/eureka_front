import { createContext } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { UserModel } from "../models/user-model";
import { RegistryUser, containerUser } from "../../@clean/shared/infra/containers/container-user";
import { GetAllStudentsUsecase } from "../../@clean/modules/user/usecases/get-all-students-usecase";
import { UserAdapter } from "../adapters/user-adapter";

type UserContextType = {
    studentsList: UserModel[];
    getAllStudents(): Promise<UserModel[] | undefined>;
}

const defaultContext: UserContextType = {
    studentsList: [],
    getAllStudents: async () => []
};

export const UserContext = createContext(defaultContext);

const getAllStudentsUsecase = containerUser.get<GetAllStudentsUsecase>(
    RegistryUser.GetAllStudentsUsecase
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    let studentsList: UserModel[] = [];

    // used to show the error boundary (error threatment)
    const { showBoundary } = useErrorBoundary();

    const getAllStudents = async () => {
        try {
            const studentsCaught = await getAllStudentsUsecase.execute();
            const studentsModel = studentsCaught.map(task => UserAdapter.toModel(task));
            studentsList = studentsModel;
            return studentsList;
        } catch (err) {
            console.error(err);
            showBoundary(err);
        }
    };

    return (
        <UserContext.Provider value={{ studentsList, getAllStudents }}>
            {children}
        </UserContext.Provider>
    );
};
