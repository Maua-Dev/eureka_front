import { ROLE } from "../../../@clean/shared/domain/enums/role-enum";
import { TaskModel } from "../../models/task-model";
import { TaskContentType } from "../@types/task-content-type";

export const eventSetupContentList: TaskContentType[] = [
  {
    title: "Recursos de estande",
    basePath: "",
    description: "",
  },
  {
    title: "Questionário",
    basePath: "",
    description: "",
  },
  {
    title: "Layout do estande",
    basePath: "",
    description: "",
  },
  {
    title: "Testeira",
    basePath: "",
    description: "",
  },
  {
    title: "Autorização de entrada",
    basePath: "",
    description: "",
  },
  {
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
    responsible: ROLE.STUDENT,
  },
  {
    taskId: 2,
    title: "Recursos de estande",
    deliveryDate: "24/01/2024",
    responsible: ROLE.ADVISOR,
  },
  {
    taskId: 3,
    title: "Recursos de estande",
    deliveryDate: "24/01/2024",
    responsible: ROLE.RESPONSIBLE,
  },
  {
    taskId: 4,
    title: "Questionário",
    deliveryDate: "24/01/2024",
    responsible: ROLE.STUDENT,
  },
  {
    taskId: 5,
    title: "Questionário",
    deliveryDate: "24/01/2024",
    responsible: ROLE.ADVISOR,
  },
  {
    taskId: 6,
    title: "Questionário",
    deliveryDate: "24/01/2024",
    responsible: ROLE.RESPONSIBLE,
  },
  {
    taskId: 7,
    title: "Layout do estande",
    deliveryDate: "24/01/2024",
    responsible: ROLE.STUDENT,
  },
  {
    taskId: 8,
    title: "Layout do estande",
    deliveryDate: "24/01/2024",
    responsible: ROLE.ADVISOR,
  },
  {
    taskId: 9,
    title: "Layout do estande",
    deliveryDate: "24/01/2024",
    responsible: ROLE.RESPONSIBLE,
  },
  {
    taskId: 10,
    title: "Testeira",
    deliveryDate: "24/01/2024",
    responsible: ROLE.STUDENT,
  },
  {
    taskId: 11,
    title: "Testeira",
    deliveryDate: "24/01/2024",
    responsible: ROLE.ADVISOR,
  },
  {
    taskId: 12,
    title: "Testeira",
    deliveryDate: "24/01/2024",
    responsible: ROLE.RESPONSIBLE,
  },
  {
    taskId: 13,
    title: "Autorização de entrada",
    deliveryDate: "24/01/2024",
    responsible: ROLE.RESPONSIBLE,
  },
  {
    taskId: 14,
    title: "Certificado",
    deliveryDate: "24/01/2024",
    responsible: ROLE.RESPONSIBLE,
  },
];
