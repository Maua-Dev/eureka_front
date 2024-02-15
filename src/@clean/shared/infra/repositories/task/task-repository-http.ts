import "reflect-metadata";
import { AxiosInstance } from "axios";
import { Task, TaskJsonProps } from "../../../domain/entities/task";
import { decorate, injectable } from "inversify";

export class TaskRepositoryHttp {
  private _axios: AxiosInstance;

  constructor(axiosAdapter: AxiosInstance) {
    this._axios = axiosAdapter;
  }

  public async getAllTasks(): Promise<Task[]> {
    const response = await this._axios.get("/get_all_tasks");
    return response.data.map((task: TaskJsonProps) => Task.fromJson(task));
  }
}

decorate(injectable(), TaskRepositoryHttp);
