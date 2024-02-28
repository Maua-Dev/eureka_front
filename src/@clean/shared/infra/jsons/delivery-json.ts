import { DeliveryJsonProps } from "../../domain/entities/delivery";
import { TaskJson } from "./task-json";
import { UserJson } from "./user-json";

export class DeliveryJson {
  static deliveryJson: DeliveryJsonProps[] = [
    {
      delivery_id: 1,
      task: TaskJson.taskJson[0],
      user: UserJson.userJson[0],
      date: "2024-01-24T22:20:11.546Z",
      content: {
        status: "Aprovado",
        ods: [1, 2, 5, 7],
        actions: [5, 6, 7],
      },
    },
    {
      delivery_id: 4,
      task: TaskJson.taskJson[4],
      user: UserJson.userJson[9],
      date: "2024-01-24T22:53:34.071Z",
      content: {
        status: "Aprovado",
      },
    },
    {
      delivery_id: 5,
      task: TaskJson.taskJson[10],
      user: UserJson.userJson[0],
      date: "2024-01-25T15:39:09.588Z",
      content: {
        status: "Aprovado",
      },
    },
  ];
}
