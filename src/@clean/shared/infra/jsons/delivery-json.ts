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
    {
      delivery_id: 6,
      task: TaskJson.taskJson[24],
      user: UserJson.userJson[0],
      date: "2024-01-24T22:53:34.071Z",
      content: {
        resources: {
          table: {
            quantity: 5,
          },
          low_table: {
            quantity: 2,
          },
          round_table: {
            quantity: 1,
          },
          chair: {
            quantity: 0,
          },
          counter: {
            quantity: 2,
          },
          outlet_110: {
            quantity: 1,
          },
          showcase: {
            quantity: 2,
            specification:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          shelf: {
            quantity: 1,
            justification:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          corner_shelf: {
            quantity: 4,
          },
          computer: {
            quantity: 1,
            specification:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          television: {
            quantity: 1,
            specification:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          refrigerator: {
            quantity: 1,
            specification:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          water_point: {
            quantity: 1,
            specification:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            justification:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          sewage_point: {
            quantity: 1,
            specification:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            justification:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          special_gas_point: {
            quantity: 1,
            specification:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            justification:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        },
      },
    },
  ];
}
