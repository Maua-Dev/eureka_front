import "reflect-metadata";
import { IDeliveryRepository } from "../../../../modules/delivery/domain/delivery-repository-interface";
import { Delivery, DeliveryJsonProps } from "../../../domain/entities/delivery";
import { decorate, injectable } from "inversify";
import { AxiosInstance } from "axios";

export class DeliveryRepositoryHttp implements IDeliveryRepository {
    _axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this._axios = axios;
    }

    async getDeliveries(projectId: number): Promise<Delivery[]> {
        const response = await this._axios.get(`/get-deliveries?project_id=${projectId}`);
        return response.data.map((delivery : DeliveryJsonProps) => Delivery.fromJson(delivery));
    }

    async createDelivery(delivery: Delivery): Promise<Delivery> {
        const response = await this._axios.post("/create-delivery", delivery.toJson());
        return Delivery.fromJson(response.data);
    }
}

decorate(injectable(), DeliveryRepositoryHttp);