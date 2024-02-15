type navOptions = {
  primaryOption: string;
  secondaryOptions: string[];
  stateKey?: string;
};

// const nav options of the nav horizontal bar (header)
export const navOptions: navOptions[] = [
  {
    primaryOption: "Meus trabalhos e estandes",
    secondaryOptions: [],
  },
  {
    primaryOption: "Downloads",
    secondaryOptions: [],
  },
  {
    primaryOption: "Trabalhos e estandes",
    secondaryOptions: ["Cadastrar", "Cadastrar múltiplos", "Consultar", "Estandes institucionais"],
    stateKey: "isWorkAndStandsColumnOpen",
  },
  {
    primaryOption: "Relatórios",
    secondaryOptions: [],
  },
  {
    primaryOption: "Evento",
    secondaryOptions: [
      "Autorizar entrada",
      "Colaboradores externos",
      "Colaboradores internos",
      "Crachás",
      "Número de estandes",
      "Textos para correção",
    ],
    stateKey: "isEventColumnOpen",
  },
  {
    primaryOption: "Usuários",
    secondaryOptions: ["Cadastrar", "Cadastrar múltiplos", "Consultar", "Desativar"],
    stateKey: "isUserColumnOpen",
  },
  {
    primaryOption: "Sistema",
    secondaryOptions: [
      "Alterar ano de visualização",
      "Backup de arquivos",
      "Controle de estoque",
      "Datas",
      "Estatísticas",
      "Imagens",
      "Log de usuários",
      "Log de trabalhos",
    ],
    stateKey: "isSystemColumnOpen",
  },
];
