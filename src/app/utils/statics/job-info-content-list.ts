import { TaskContentType } from "../@types/task-content-type";

export const jobInfoContentList: TaskContentType[] = [
  {
    id: 1,
    title: "Dados do trabalho",
    basePath: "data",
  },
  {
    id: 2,
    title: "Pôster Imagem",
    basePath: "upload",
    fileFormat: ["jpg", "jpeg", "png"],
    description:
      "<p> Atenção: as dimensões da imagem devem ser entre 680-730px de largura e 490-540px de altura. O tamanho máximo do arquivo deve ser 5MB. </p>",
  },
  {
    id: 3,
    title: "Mini Capa",
    basePath: "upload",
    fileFormat: ["jpg", "jpeg", "png"],
    description:
      "<p> Atenção: as dimensões da imagem devem ser de 256px de largura por 256px de altura. O tamanho máximo do arquivo deve ser 5MB. </p>",
  },
  {
    id: 4,
    title: "Vídeo Teaser",
    basePath: "upload",
    description: "<p> Envio do arquivo de vídeo de no máximo 1 minuto. </p>",
  },
  {
    id: 5,
    title: "Fotos do Trabalho",
    basePath: "upload",
    fileFormat: ["jpg", "jpeg", "png"],
    description: "<p> O limite máximo é de 5 fotos. </p>",
  },
  {
    id: 6,
    title: "Pôster Técnico (PDF)",
    basePath: "upload",
    fileFormat: ["pdf"],
    description:
      "<p>O modelo do pôster pode ser encontrado <a href='https://sistema-eureka.maua.br/arquivos.php'>aqui</a>.Atenção: as dimensões do pôster devem ser 85 cm de largura por 120 cm de altura. Fazer download do pôster </p > ",
  },
  {
    id: 7,
    title: "Modelo de Negócios",
    basePath: "upload",
  },
  {
    id: 8,
    title: "Resumo/Abstract",
    basePath: "upload",
  },
  {
    id: 9,
    title: "Vídeo do Trabalho (30min)",
    basePath: "upload",
  },
  {
    id: 10,
    title: "Trabalho de Conclusão de Curso (TCC)",
    basePath: "upload",
    fileFormat: ["pdf"],
    description: "<p> O tamanho máximo do arquivo deve ser 10MB. </p>",
  },
  {
    id: 11,
    title: "Autorização de divulgação do TCC",
    basePath: "upload",
    fileFormat: ["pdf"],
    description: "<p> O tamanho máximo do arquivo deve ser 35MB. </p>",
  },
  {
    id: 12,
    title: "Banca de Avaliação",
    basePath: "upload",
  },
];
