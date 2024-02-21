import { TaskContentType } from "../@types/task-content-type";

export const jobInfoContentList: TaskContentType[] = [
  { title: "Dados do trabalho", basePath: "data" },
  {
    title: "Pôster Imagem",
    basePath: "upload",
    fileFormat: ["pdf"],
    description:
      "<p> O modelo do pôster pode ser encontrado <a href='https://sistema-eureka.maua.br/arquivos.php'>aqui</a>.Atenção: as dimensões do pôster devem ser 85 cm de largura por 120 cm de altura. Fazer download do pôster </p > ",
  },
  { title: "Mini Capa", basePath: "upload" },
  { title: "Vídeo Teaser", basePath: "upload" },
  { title: "Fotos do Trabalho", basePath: "upload" },
  { title: "Pôster Técnico (PDF)", basePath: "upload" },
  { title: "Modelo de Negócios", basePath: "upload" },
  { title: "Resumo/Abstract", basePath: "upload" },
  { title: "Vídeo do Trabalho (30min)", basePath: "upload" },
  { title: "Trabalho de Conclusão de Curso (TCC)", basePath: "upload" },
  { title: "Autorização de divulgação do TCC", basePath: "upload" },
  { title: "Banca de Avaliação", basePath: "upload" },
];
