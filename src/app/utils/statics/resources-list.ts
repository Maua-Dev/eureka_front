import chairLogo from "../../assets/resources/chair-logo.png";
import counterLogo from "../../assets/resources/counter-logo.png";
import dvdLogo from "../../assets/resources/dvd-logo.png";
import outlet110Logo from "../../assets/resources/outlet-110-logo.png";
import outlet220Logo from "../../assets/resources/outlet-220-logo.png";
import refrigeratorLogo from "../../assets/resources/refrigerator-logo.png";
import roundTableLogo from "../../assets/resources/round-table-logo.png";
import shelfCornerLogo from "../../assets/resources/shelf-corner-logo.png";
import shelfLogo from "../../assets/resources/shelf-logo.png";
import showcaseLogo from "../../assets/resources/showcase-logo.png";
import tableLogo from "../../assets/resources/table-logo.png";
import tableLowLogo from "../../assets/resources/table-low-logo.png";
import tvLogo from "../../assets/resources/tv-logo.png";
import { ResourceType } from "../@types/resource-type";

export const resourcesList: ResourceType[] = [
  {
    resourceId: 1,
    image: tableLogo,
    title: "Mesa",
    description:
      "Dimensões: largura 0,50m; comprimento 1,00m; altura 1,00m. A mesa não vem com a cadeira.",
    maximum: 6,
    hasJustificationField: false,
    hasSpecificationField: false,
  },
  {
    resourceId: 2,
    image: tableLowLogo,
    title: "Mesa baixa",
    description:
      "Dimensões: largura 0,50m; comprimento 1,00m; altura 0,70m. A mesa não vem com a cadeira.",
    maximum: 6,
    hasJustificationField: false,
    hasSpecificationField: false,
  },
  {
    resourceId: 3,
    image: roundTableLogo,
    title: "Mesa redonda",
    description:
      "Mesa com tampo de vidro. Dimensões: diâmetro 0,80m; altura 0,74m. A mesa redonda não vem com a cadeira.",
    maximum: 2,
    hasJustificationField: false,
    hasSpecificationField: false,
  },
  {
    resourceId: 4,
    image: chairLogo,
    title: "Cadeira",
    description: "Cadeira para sentar.",
    maximum: 3,
    hasJustificationField: false,
    hasSpecificationField: false,
  },
  {
    resourceId: 5,
    image: counterLogo,
    title: "Balcão",
    description: "Dimensões: largura 0,50m; comprimento 1,00m; altura 1,00m.",
    maximum: 4,
    hasJustificationField: false,
    hasSpecificationField: false,
  },
  {
    resourceId: 6,
    image: outlet110Logo,
    title: "Tomada 110V",
    description:
      "Com 1 fase, 1 neutro e sem terra. Solicitar, por exemplo, para computador e notebook",
    maximum: 6,
    hasJustificationField: false,
    hasSpecificationField: false,
  },
  {
    resourceId: 7,
    image: showcaseLogo,
    title: "Balcão vitrine",
    description:
      "Balcão com parte superior em vidro, para exposição de produtos. Dimensões: largura 0,50m; comprimento 1,00m; altura 1,00m. Face abaixo da vitrine para adesivo mede 56cm; Face de vitrine mede 25cm.",
    maximum: 2,
    hasJustificationField: true,
    hasSpecificationField: false,
  },
  {
    resourceId: 8,
    image: dvdLogo,
    title: "DVD",
    maximum: 2,
    hasJustificationField: true,
    hasSpecificationField: false,
  },
  {
    resourceId: 9,
    image: shelfLogo,
    title: "Prateleira",
    description: "Dimensões: largura 0,50m; comprimento 1,00m. Especificar altura de fixação.",
    maximum: 6,
    hasJustificationField: false,
    hasSpecificationField: true,
  },
  {
    resourceId: 10,
    image: shelfCornerLogo,
    title: "Prateleira de canto",
    description: "Dimensão 1,00m de lado. Especificar altura de fixação.",
    maximum: 4,
    hasJustificationField: false,
    hasSpecificationField: true,
  },
  {
    resourceId: 11,
    title: "Computador alugado",
    description:
      "Observação: grupos que solicitarem Computador não poderão solicitar Televisor. Solicitar 1 tomada de 110V para ligar o estabilizador do computador. Se o grupo for utilizar outro computador não selecionar este item. Descrição do computador: Pentium D, monitor de 17'' LCD, memória RAM 1GB, teclado, mouse, CD-ROM de 52X, DVD-ROM, HD de 40GB, placa de rede sem fio, placa de som e vídeo, 01 serial, 01 paralela, 04 USB e estabilizador. Gravador de CD não está incluso. Os computadores possuem o Windows XP e Office 2003 instalados.",
    maximum: 2,
    hasJustificationField: true,
    hasSpecificationField: false,
  },
  {
    resourceId: 12,
    title: "Ponto de rede de dados sem fio",
    description:
      "Para ter acesso à Internet. Observação: Todos os computadores alugados para o evento virão com placa de rede SEM fio.",
    maximum: 2,
    hasJustificationField: true,
    hasSpecificationField: false,
  },
  {
    resourceId: 13,
    title: "Ponto de rede de dados com fio",
    description:
      "Recurso só liberado para trabalhos que dependam da conexão com equipamentos que só têm placa de rede COM fio. Quem precisar de um ''IP válido'' e também acesso à rede interna da Mauá (por exemplo aos servidores do Núcleo de Métodos Computacionais) tem de entrar em contato com gti@maua.br. Observação: todos os micros alugados para o evento virão com placa de rede SEM fio.",
    maximum: 2,
    hasJustificationField: true,
    hasSpecificationField: false,
  },
  {
    resourceId: 14,
    image: tvLogo,
    title: "Televisor",
    description:
      "Recurso só liberado para trabalhos que dependam de seu uso. Observação: Trabalhos que solicitarem televisor não podem solicitar computador. Solicitar uma tomada de 110V para ligar o televisor. Solicitar o cabo conector (televisor x computador), no primeiro dia de montagem, no estande da Organização. Obrigatoriamente o televisor será instalado em um pedestal, que será aleatoriamente distribuído.",
    maximum: 1,
    hasJustificationField: true,
    hasSpecificationField: false,
  },
  {
    resourceId: 15,
    image: refrigeratorLogo,
    title: "Geladeira",
    description:
      "Recurso só liberado para trabalhos que dependam de seu uso. Solicitar uma tomada de 110V para ligar a geladeira.",
    maximum: 1,
    hasJustificationField: true,
    hasSpecificationField: false,
  },
  {
    resourceId: 16,
    image: refrigeratorLogo,
    title: "Freezer",
    description:
      "Recurso só liberado para trabalhos que dependam de seu uso. Freezer Vertical. Solicitar uma tomada de 110V para ligar o freezer.",
    maximum: 1,
    hasJustificationField: true,
    hasSpecificationField: false,
  },
  {
    resourceId: 17,
    image: outlet220Logo,
    title: "Tomada 220V",
    description:
      "Observação: grupos que não especificarem as suas tomadas terão seu recurso automaticamente reprovado. Especificar se é 220V bifásico (2 fases + terra) ou 220V trifásico (3 fases + terra). Justificar qual equipamento será utilizado, informando sua potência.",
    maximum: 3,
    hasJustificationField: true,
    hasSpecificationField: true,
  },
  {
    resourceId: 18,
    title: "Software",
    description:
      "A aquisição e implantação de Software (com exceção do Pacote Office e Windows) é de responsabilidade do grupo. Pedimos a informação do que será utilizado para verificar a capacidade do computador.",
    maximum: 5,
    hasJustificationField: true,
    hasSpecificationField: true,
  },
  {
    resourceId: 19,
    title: "Ponto de ar comprimido",
    description:
      "O ar comprimido será disponibilizado com uma pressão máxima de 7 Bar. Por meio de uma tubulação de aço galvanizado de 1/2'' de diâmetro com um registro de esfera entre a tubulação e a conexão de saída. Essa conexão de saída será do tipo macho (espigão) com mangueira de borracha de diâmetro interno de 5/6'' e 2m de comprimento. A alimentação dos equipamentos bem como o controle da vazão e da pressão é de responsabilidade do grupo. Caso necessário, será permitida a retirada da conexão fornecida, e, nesse caso, a saída do registro será uma rosca fêmea de 1/2'' BSP",
    maximum: 1,
    hasJustificationField: true,
    hasSpecificationField: true,
  },
  {
    resourceId: 20,
    title: "Ponto de água",
    description:
      "Recurso só liberado para trabalhos que dependam do seu uso. Será disponibilizada uma torneira tipo jardim de 1/2'' a uma altura aproximada de 1,10m do piso. Ela terá 2,4m³ de vazão por hora, ou seja, 40 litros por minuto, com uma pressão aproximada de 2,5kgf/m³.Qualquer outra adaptação necessária é de responsabilidade do grupo.",
    maximum: 2,
    hasJustificationField: true,
    hasSpecificationField: true,
  },
  {
    resourceId: 21,
    title: "Ponto de esgoto",
    description:
      "Recurso só liberado para trabalhos que dependam do seu uso. Será disponibilizada uma saída de 50mm com uma altura aproximada de 25cm do piso. Qualquer outra adaptação necessária é de responsabilidade do grupo.",
    maximum: 2,
    hasJustificationField: true,
    hasSpecificationField: true,
  },
  {
    resourceId: 22,
    title: "Ponto de telefone",
    description:
      "Recurso só liberado para trabalhos que dependam de seu uso. O PONTO DE TELEFONE NÃO SERÁ UTILIZADO PARA ACESSO À INTERNET. Para acesso à internet solicitar ponto de rede sem fio. Especificar se o ponto de telefone será utilizado para efetuar ligações apenas e tão somente para ramais internos do campus, para ramais internos do campus e para fora do campus (utilizando PABX) ou para fora do campus, sem depender do sistema de PABX (justificar).",
    maximum: 2,
    hasJustificationField: true,
    hasSpecificationField: true,
  },
  {
    resourceId: 23,
    title: "Ponto de gás",
    description:
      "Recurso só liberado para trabalhos que dependam de seu uso. Não será permitido o preparo de alimentos dentro do evento. Mencionar a quantidade em kg a ser utilizada.",
    maximum: 2,
    hasJustificationField: true,
    hasSpecificationField: true,
  },
  {
    resourceId: 24,
    title: "Ponto de gás especial",
    description:
      "Recurso só liberado para trabalhos que dependam de seu uso. Mencionar o tipo do gás (composição, no caso de misturas), pressão e vazão a serem utilizados no trabalho, bem como a(s) quantidade(s) em kg ou L. Mesmo que o grupo já possua o gás mencionar neste campo para podermos localizar o estande em local seguro. Por questões de segurança, nenhum vaso de pressão será permitido dentro do evento.",
    maximum: 2,
    hasJustificationField: true,
    hasSpecificationField: true,
  },
];
