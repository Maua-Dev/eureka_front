import { RESPONSIBLE } from "../../../@clean/shared/domain/enums/responsible-enum";
import { TaskModel } from "../../models/task-model";
import { TaskContentType } from "../@types/task-content-type";

export const eventSetupContentList: TaskContentType[] = [
  {
    id: 13,
    title: "Recursos de estande",
    basePath: "",
    description: "",
  },
  {
    id: 14,
    title: "Questionário",
    basePath: "",
    description: "",
  },
  {
    id: 15,
    title: "Layout do estande",
    basePath: "",
    description: "",
  },
  {
    id: 16,
    title: "Testeira",
    basePath: "",
    description: "",
  },
  {
    id: 17,
    title: "Autorização de entrada",
    basePath: "",
    description: "",
  },
  {
    id: 18,
    title: "Certificado",
    basePath: "",
    description: "",
  },
];

export const eventSetupContentListMock: TaskModel[] = [
  {
    taskId: 1,
    title: "Recursos de estande",
    deliveryDate: "24/01/2024",
    responsible: RESPONSIBLE.STUDENT,
  },
  {
    taskId: 2,
    title: "Recursos de estande",
    deliveryDate: "24/01/2024",
    responsible: RESPONSIBLE.ADVISOR,
  },
  {
    taskId: 3,
    title: "Recursos de estande",
    deliveryDate: "24/01/2024",
    responsible: RESPONSIBLE.RESPONSIBLE,
  },
  {
    taskId: 4,
    title: "Questionário",
    deliveryDate: "24/01/2024",
    responsible: RESPONSIBLE.STUDENT,
  },
  {
    taskId: 5,
    title: "Questionário",
    deliveryDate: "24/01/2024",
    responsible: RESPONSIBLE.ADVISOR,
  },
  {
    taskId: 6,
    title: "Questionário",
    deliveryDate: "24/01/2024",
    responsible: RESPONSIBLE.RESPONSIBLE,
  },
  {
    taskId: 7,
    title: "Layout do estande",
    deliveryDate: "24/01/2024",
    responsible: RESPONSIBLE.STUDENT,
  },
  {
    taskId: 8,
    title: "Layout do estande",
    deliveryDate: "24/01/2024",
    responsible: RESPONSIBLE.ADVISOR,
  },
  {
    taskId: 9,
    title: "Layout do estande",
    deliveryDate: "24/01/2024",
    responsible: RESPONSIBLE.RESPONSIBLE,
  },
  {
    taskId: 10,
    title: "Testeira",
    deliveryDate: "24/01/2024",
    responsible: RESPONSIBLE.STUDENT,
  },
  {
    taskId: 11,
    title: "Testeira",
    deliveryDate: "24/01/2024",
    responsible: RESPONSIBLE.ADVISOR,
  },
  {
    taskId: 12,
    title: "Testeira",
    deliveryDate: "24/01/2024",
    responsible: RESPONSIBLE.RESPONSIBLE,
  },
  {
    taskId: 13,
    title: "Autorização de entrada",
    deliveryDate: "24/01/2024",
    responsible: RESPONSIBLE.RESPONSIBLE,
  },
  {
    taskId: 14,
    title: "Certificado",
    deliveryDate: "24/01/2024",
    responsible: RESPONSIBLE.RESPONSIBLE,
  },
];
