import { DeliveryJsonProps } from "../../domain/entities/delivery";

export class DeliveryJson {
  static deliveryJson: DeliveryJsonProps[] = [
    {
      delivery_id: 1,
      task: {
        task_id: 1,
        title: "Dados do trabalho",
        delivery_date: "2023-05-15",
        responsible: "STUDENT",
      },
      user: {
        user_id: 1,
        name: "VITOR GUIRAO SOLLER",
        email: "21.01444-2@maua.br",
        role: "STUDENT",
      },
      date: "2024-01-24T22:20:11.546Z",
      content: {
        content: "Aprovado",
      },
    },
    {
      delivery_id: 4,
      task: {
        task_id: 4,
        title: "Pôster Técnico (PDF)",
        delivery_date: "2023-10-01",
        responsible: "STUDENT",
      },
      user: {
        user_id: 1,
        name: "VITOR GUIRAO SOLLER",
        email: "21.01444-2@maua.br",
        role: "STUDENT",
      },
      date: "2024-01-24T22:53:34.071Z",
      content: {
        content: "Aprovado",
      },
    },
    {
      delivery_id: 5,
      task: {
        task_id: 2,
        title: "Dados do trabalho",
        delivery_date: "2023-05-22",
        responsible: "ADVISOR",
      },
      user: {
        user_id: 4,
        name: "CARLOS EDUARDO DANTAS DE MENEZES",
        email: "carlos.menezes@maua.br",
        role: "ADVISOR",
      },
      date: "2024-01-25T15:39:09.588Z",
      content: {
        content: "Aprovado",
      },
    },
  ];
}
