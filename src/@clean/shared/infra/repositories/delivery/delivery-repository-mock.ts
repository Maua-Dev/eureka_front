import "reflect-metadata";
import { IDeliveryRepository } from "../../../../modules/delivery/domain/delivery-repository-interface";
import { Delivery } from "../../../domain/entities/delivery";
import { NoItemsFoundError } from "../../../domain/helpers/errors/domain-errors";
import { DeliveryJson } from "../../jsons/delivery-json";
import { decorate, injectable } from "inversify";
import { TaskJson } from "../../jsons/task-json";
import { UserJson } from "../../jsons/user-json";
import { Task } from "../../../domain/entities/task";
import { User } from "../../../domain/entities/user";

export class DeliveryRepositoryMock implements IDeliveryRepository {
  async getDeliveries(): Promise<Delivery[]> {
    const jsons = DeliveryJson.deliveryJson;

    if (jsons == null) {
      throw new NoItemsFoundError("deliveries");
    }

    const deliveries = jsons.map((delivery) => Delivery.fromJson(delivery));

    return deliveries;
  }

  async createDelivery(
    taskId: number,
    _projectId: number,
    userId: number,
    content: { [key: string]: unknown }
  ): Promise<Delivery> {
    const deliveriesJson = DeliveryJson.deliveryJson;
    const existingDeliveryIndex = deliveriesJson.findIndex(
      (delivery) => delivery.task.task_id === taskId && delivery.user.user_id === userId
    );

    if (existingDeliveryIndex !== -1) {
      const existingDelivery = deliveriesJson[existingDeliveryIndex];
      let updatedContent = { ...existingDelivery.content };

      for (const key in content) {
        if (Object.prototype.hasOwnProperty.call(existingDelivery.content, key)) {
          updatedContent[key] = content[key];
        } else {
          updatedContent = { ...updatedContent, [key]: content[key] };
        }
      }

      deliveriesJson[existingDeliveryIndex] = { ...existingDelivery, content: updatedContent };

      return Delivery.fromJson(deliveriesJson[existingDeliveryIndex]);
    }

    const task = TaskJson.taskJson.find((task) => task.task_id === taskId);
    if (!task) {
      throw new NoItemsFoundError(`Task not found for taskId: ${taskId}`);
    }

    const user = UserJson.userJson.find((user) => user.user_id === userId);
    if (!user) {
      throw new NoItemsFoundError(`User not found for userId: ${userId}`);
    }

    const lastId =
      deliveriesJson.length > 0 ? deliveriesJson[deliveriesJson.length - 1].delivery_id : 0;
    const newDelivery = new Delivery({
      deliveryId: lastId + 1,
      content: content,
      date: new Date(),
      task: Task.fromJson(task),
      user: User.fromJson(user),
    });

    DeliveryJson.deliveryJson.push(newDelivery.toJson());

    return newDelivery;
  }
}

decorate(injectable(), DeliveryRepositoryMock);
