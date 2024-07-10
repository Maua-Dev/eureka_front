import { Delivery } from "@entities/delivery.ts";

export interface IDeliveryRepository {
    getDeliveries(projectId: number): Promise<Delivery[]>;
    createDelivery(
        taskId: number,
        projectId: number,
        userId: number,
        content: { [key: string]: unknown }
    ): Promise<Delivery>;
}
