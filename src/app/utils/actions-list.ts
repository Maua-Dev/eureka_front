import divisionLogo from "../assets/logos/division-logo.png";
import innovationLogo from "../assets/logos/innovation-logo.png";
import smartLogo from "../assets/logos/smart-logo.png";
import accessibilityLogo from "../assets/logos/accessibility-logo.png";
import tripodLogo from "../assets/logos/tripod-logo.png";
import systemLogo from "../assets/logos/system-logo.png";
import companiesLogo from "../assets/logos/companies-logo.png";
import fablabLogo from "../assets/logos/fablab-logo.png";

type action = {
  actionId: number;
  image: string;
  title: string;
  description: string;
};

export const actionsList: action[] = [
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
