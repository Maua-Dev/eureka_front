import { createContext } from "react";
import { TaskModel } from "../models/task-model";
import { GetAllTasksUsecase } from "../../@clean/modules/task/usecases/get-all-tasks-usecase";
import { RegistryTask, containerTask } from "../../@clean/shared/infra/containers/container-task";
import { TaskAdapter } from "../adapters/task-adapter";

type TaskContextType = {
    tasksList: TaskModel[];
    getAllTasks(): Promise<TaskModel[] | undefined>;
}

const defaultContext: TaskContextType = {
    tasksList: [],
    getAllTasks: async () => []
};

export const TaskContext = createContext(defaultContext);

const getAllTasksUsecase = containerTask.get<GetAllTasksUsecase>(
    RegistryTask.GetAllTasksUsecase
);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    let tasksList: TaskModel[] = [];

    const getAllTasks = async () => {
        const tasksCaught = await getAllTasksUsecase.execute();
        const tasksModel = tasksCaught.map(task => TaskAdapter.toModel(task));
        tasksList = tasksModel;
        return tasksList;
    };

    return (
        <TaskContext.Provider value={{ tasksList, getAllTasks }}>
            {children}
        </TaskContext.Provider>
    );
};
