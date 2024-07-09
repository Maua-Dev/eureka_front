import "reflect-metadata";
import { AxiosInstance } from "axios";
import { IUserRepository } from "@modules/user/domain/repositories/user-repository-interface.ts";
import { User, UserJsonProps } from "@entities/user.ts";
import { decorate, injectable } from "inversify";

export class UserRepositoryHttp implements IUserRepository {
    private _axios: AxiosInstance;

    constructor(axiosAdapter: AxiosInstance) {
        this._axios = axiosAdapter;
    }

    async getAllStudents(): Promise<User[]> {
        const response = await this._axios.get("/get_all_students");
        return response.data.map((user: UserJsonProps) => User.fromJson(user));
    }

    async getAllProfessors(): Promise<User[]> {
        const response = await this._axios.get("/get_all_professors");
        return response.data.map((user: UserJsonProps) => User.fromJson(user));
    }
}

decorate(injectable(), UserRepositoryHttp);
