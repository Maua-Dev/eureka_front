import { ProjectJsonProps } from "../../domain/entities/project";
import { UserJson } from "./user-json";

export class ProjectJson {
  static projectJson: ProjectJsonProps[] = [
    {
      project_id: 1,
      title: "Estudo da Lágrima",
      description: "Estudo da lágrima humana",
      qualification: "Engenharia de Software",
      code: "ECM-02",
      shift: "DIURNO",
      stand_number: "1",
      is_entrepreneurship: false,
      responsibles: [UserJson.userJson[0]],
      advisors: [UserJson.userJson[1], UserJson.userJson[2]],
      students: [UserJson.userJson[7]],
    },
    {
      project_id: 2,
      title: "Computação em nuvem",
      description: "Estudo de computação em nuvem",
      qualification: "Sistemas de Informação",
      code: "G2-1",
      shift: "DIURNO",
      stand_number: "2",
      is_entrepreneurship: true,
      responsibles: [UserJson.userJson[1]],
      advisors: [UserJson.userJson[2], UserJson.userJson[3]],
      students: [
        UserJson.userJson[9],
        UserJson.userJson[10],
        UserJson.userJson[11],
        UserJson.userJson[12],
      ],
    },
    {
      project_id: 3,
      title: "Alimentos orientais",
      description: "Estudo de alimentos orientais",
      qualification: "Engenharia de Alimentos",
      code: "EDA-12",
      shift: "NOTURNO",
      stand_number: "3",
      is_entrepreneurship: true,
      responsibles: [UserJson.userJson[3]],
      advisors: [UserJson.userJson[4], UserJson.userJson[5]],
      students: [UserJson.userJson[7], UserJson.userJson[8]],
    },
  ];
}
