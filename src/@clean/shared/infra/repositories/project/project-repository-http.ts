import { AxiosInstance } from "axios";

export class ProjectRepositoryHttp {
    private _axios : AxiosInstance;

    constructor(axios: AxiosInstance){
        this._axios = axios;
    }
}