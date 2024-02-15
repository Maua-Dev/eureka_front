import "reflect-metadata";
import { IDeliveryRepository } from "../../../../modules/delivery/domain/delivery-repository-interface";
import { Delivery } from "../../../domain/entities/delivery";
import { NoItemsFoundError } from "../../../domain/helpers/errors/domain-errors";
import { DeliveryJson } from "../../jsons/delivery-json";
import { decorate, injectable } from "inversify";

export class DeliveryRepositoryMock implements IDeliveryRepository {
  async getDeliveries(): Promise<Delivery[]> {
    const jsons = DeliveryJson.deliveryJson;

    if (jsons == null) {
      throw new NoItemsFoundError("deliveries");
    }
    const deliveries = jsons.map((delivery) => Delivery.fromJson(delivery));

    return deliveries;
  }

  async createDelivery(delivery: Delivery): Promise<Delivery> {
    DeliveryJson.deliveryJson.push(delivery.toJson());

    return delivery;
  }
}

decorate(injectable(), DeliveryRepositoryMock);
