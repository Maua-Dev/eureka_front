import { Delivery } from "../../../shared/domain/entities/delivery";
import { IDeliveryRepository } from "../domain/delivery-repository-interface";

export class GetDeliveriesUsecase {
    _repository: IDeliveryRepository;

    constructor(repository: IDeliveryRepository) {
        this._repository = repository;
    }

    async execute(projectId: number) : Promise<Delivery[]> {
        return await this._repository.getDeliveries(projectId);
    }
}