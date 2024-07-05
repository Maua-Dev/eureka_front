import { Delivery } from "@entities/delivery.ts";
import { IDeliveryRepository } from "../domain/delivery-repository-interface";

export class CreateDeliveryUsecase {
    _repository: IDeliveryRepository;

    constructor(repository: IDeliveryRepository) {
        this._repository = repository;
    }

    async execute(
        taskId: number,
        projectId: number,
        userId: number,
        content: { [key: string]: unknown }
    ): Promise<Delivery> {
        return await this._repository.createDelivery(
            taskId,
            projectId,
            userId,
            content
        );
    }
}
