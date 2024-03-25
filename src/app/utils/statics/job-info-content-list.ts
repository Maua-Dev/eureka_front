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
    description:
      "<p> Envio de Imagens. Tipos de arquivos válidos: <u>jpg, jpeg e png</u>. Atenção: as dimensões da imagem devem ser entre <u>680-730px de largura e 490-540px de altura</u>. O <u>tamanho máximo</u> do arquivo deve ser <u>5MB</u>. </p>",
    downloadText: "Fazer download da imagem",
    fileFormat: ["jpg", "jpeg", "png"],
    maxSize: 5,
    maxNumber: 1,
  },
  {
    id: 3,
    title: "Mini Capa",
    basePath: "upload",
    description:
      "<p> Envio de Imagens. Tipos de arquivos válidos: <u>jpg, jpeg e png</u>. Atenção: as dimensões da imagem devem ser de <u>256px de largura</u> por <u>256px de altura</u>. O <u>tamanho máximo</u> do arquivo deve ser <u>5MB</u>. </p>",
    downloadText: "Fazer download da imagem",
    fileFormat: ["jpg", "jpeg", "png"],
    maxSize: 5,
    maxNumber: 1,
  },
  {
    id: 4,
    title: "Vídeo Teaser",
    basePath: "upload",
    description:
      "<p> Upload do teaser. Envio do arquivo de vídeo de no <u>máximo 1 minuto</u>. </p>",
    downloadText: "Link do vídeo teaser",
    fileFormat: ["mp4"],
    maxNumber: 1,
  },
  {
    id: 5,
    title: "Fotos do Trabalho",
    basePath: "upload",
    description:
      "<p> Envio de Imagens. Tipos de arquivos válidos: <u>jpg, jpeg e png</u>. O limite <u>máximo</u> é de <u>5 fotos</u>. </p>",
    fileFormat: ["jpg", "jpeg", "png"],
    maxNumber: 5,
  },
  {
    id: 6,
    title: "Pôster Técnico (PDF)",
    basePath: "upload",
    description:
      "<p>O modelo do pôster pode ser encontrado <a href='https://sistema-eureka.maua.br/arquivos.php'>aqui</a>. Atenção: as dimensões do pôster devem ser <u>85 cm de largura</u> por <u>120 cm de altura</u>. O <u>tamaho máximo</u> do arquivo deve ser <u>20MB</u> </p> ",
    downloadText: "Fazer download da imagem",
    fileFormat: ["pdf"],
    maxSize: 20,
    maxNumber: 1,
  },
  {
    id: 7,
    title: "Modelo de Negócios",
    basePath: "upload",
  },
  {
    id: 8,
    title: "Resumo/Abstract",
    basePath: "abstract",
  },
  {
    id: 9,
    title: "Vídeo do Trabalho (30min)",
    basePath: "upload",
    downloadText: "Link do vídeo do trabalho",
    fileFormat: ["mp4"],
    description:
      "<p> Envio do arquivo de vídeo da apresentação do trabalho com no <u>máximo 30 minutos de duração</u>. </p>",
  },
  {
    id: 10,
    title: "Trabalho de Conclusão de Curso (TCC)",
    basePath: "upload",
    description:
      "<p> Envio do arquivo em PDF do trabalho de conclusão de curso (documento do TCC). O <u>tamanho máximo</u> do arquivo deve ser <u>10MB</u>. </p>",
    downloadText: "Link do documento",
    fileFormat: ["pdf"],
    maxSize: 10,
    maxNumber: 1,
  },
  {
    id: 11,
    title: "Autorização de divulgação do TCC",
    basePath: "upload",
    description:
      "<p> Envio do arquivo em <u>PDF</u> do termo de autorização de divulgação do TCC. O tamanho máximo do arquivo deve ser <u>35MB</u>. </p>",
    downloadText: "Link do documento",
    fileFormat: ["pdf"],
    maxSize: 35,
    maxNumber: 1,
  },
  {
    id: 12,
    title: "Banca de Avaliação",
    basePath: "upload",
  },
];
