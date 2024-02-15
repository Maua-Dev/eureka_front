import { Delivery } from "../../../shared/domain/entities/delivery";
import { IDeliveryRepository } from "../domain/delivery-repository-interface";

export class CreateDeliveryUsecase {
  _repository: IDeliveryRepository;

  constructor(repository: IDeliveryRepository) {
    this._repository = repository;
  }

  async execute(delivery: Delivery): Promise<Delivery> {
    return await this._repository.createDelivery(delivery);
  }
}
