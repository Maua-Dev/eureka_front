import React, { createContext, useState } from "react";
import { TaskModel } from "@models/task-model";
import { GetAllTasksUsecase } from "@modules/task/usecases/get-all-tasks-usecase.ts";
import { RegistryTask, containerTask } from "@containers/container-task.ts";
import { TaskAdapter } from "@adapters/task-adapter";

type TaskContextType = {
    tasksFromContext: TaskModel[];
    getAllTasks(): Promise<TaskModel[] | undefined>;
};

const defaultContext: TaskContextType = {
    tasksFromContext: [],
    getAllTasks: async () => []
};

export const TaskContext = createContext(defaultContext);

const getAllTasksUsecase = containerTask.get<GetAllTasksUsecase>(
    RegistryTask.GetAllTasksUsecase
);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasksFromContext, setTasksFromContext] = useState<TaskModel[]>([]);

    const getAllTasks = async () => {
        const tasksCaught = await getAllTasksUsecase.execute();
        const tasksModel = tasksCaught.map((task) => TaskAdapter.toModel(task));
        setTasksFromContext(tasksModel);

        return tasksModel;
    };

    return (
        <TaskContext.Provider value={{ tasksFromContext, getAllTasks }}>
            {children}
        </TaskContext.Provider>
    );
};
