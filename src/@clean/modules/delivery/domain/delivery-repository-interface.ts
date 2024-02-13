import { Delivery } from "../../../shared/domain/entities/delivery";

export interface IDeliveryRepository {
    getDeliveries(projectId: number): Promise<Delivery[]>;
    createDelivery(delivery: Delivery): Promise<Delivery>;
}