import divisionLogo from "../../assets/actions/division-logo.png";
import innovationLogo from "../../assets/actions/innovation-logo.png";
import smartLogo from "../../assets/actions/smart-logo.png";
import accessibilityLogo from "../../assets/actions/accessibility-logo.png";
import tripodLogo from "../../assets/actions/tripod-logo.png";
import systemLogo from "../../assets/actions/system-logo.png";
import companiesLogo from "../../assets/actions/companies-logo.png";
import fablabLogo from "../../assets/actions/fablab-logo.png";
import { ActionType } from "../@types/action-type";

export const actionsList: ActionType[] = [
  {
    actionId: 1,
    image: divisionLogo,
    title: "Divisão de Inovação e Qualidade - DIQ",
    description:
      "TCC que apresentou conexão com empresas ligadas ao ecossistema do IMT e/ou potencial inovador.",
  },
  {
    actionId: 2,
    image: innovationLogo,
    title: "Núcleo de Inovação em Negócios e Empreendedorismo - NINE",
    description: "TCC com viés empreendedor e que utilizou do apoio estruturado do NINE.",
  },
  {
    actionId: 3,
    image: smartLogo,
    title: "Smart Campus",
    description: "TCC que utilizou da estrutura de conectividade (IoT) do Campus.",
  },
  {
    actionId: 4,
    image: accessibilityLogo,
    title: "Acessibilidade",
    description: "TCC com foco na melhoria da qualidade de vida da pessoa com deficiência.",
  },
  {
    actionId: 5,
    image: tripodLogo,
    title: "Tripé da Inovação",
    description:
      "TCC que se destaca no equilíbrio conseguido entre Feasibility - Viability - Desirability.",
  },
  {
    actionId: 6,
    image: systemLogo,
    title: "Núcleo de Sistemas Produtivos Inteligentes - NSPI",
    description: "TCC desenvolvido com apoio e suporte do NSPi.",
  },
  {
    actionId: 7,
    image: companiesLogo,
    title: "Mauá Empresas",
    description: "TCC cujo trabalho possui parceria com empresa ou com a sociedade.",
  },
  {
    actionId: 8,
    image: fablabLogo,
    title: "FABLAB Mauá",
    description: "TCC que fez uso intensivo da estrutura do FABLAB Mauá.",
  },
];
