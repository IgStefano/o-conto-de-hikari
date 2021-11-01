const pages = [
  {
    id: 0,
    text: "",

    choices: [
      {
        text: "Começar",
        test: false,
        nextPage: 1,
      },
    ],
  },
  {
    id: 1,
    text: "Oi",
    choices: [
      {
        text: "Começar mesmo",
        test: false,
        nextPage: 2,
      },
      {
        text: "Ou não",
        test: false,
        nextPage: 0,
      },
    ],
  },
  {
    id: 2,
    text: "Oi de novo",
    choices: [
      {
        text: "Teste 1",
        test: false,
        nextPage: 3,
      },
      {
        text: "Teste 2",
        test: false,
        nextPage: 3,
      },
    ],
  },
  {
    id: 3,
    text: "Teste de atributos",
    choices: [
      {
        text: "Teste 1",
        test: true,
        nextPage: 4,
        failPage: 5,
        moralRequirement: 0,
      },
    ],
  },

  {
    id: 4,
    text: "Passou no teste",
    choices: [
      {
        text: "Voltar",
        nextPage: 0,
        moralRequirement: 0,
      },
      {
        text: "Teste 2",
        nextPage: 6,
        moralRequirement: 2,
      },
    ],
  },

  {
    id: 5,
    text: "Falhou no teste",
    choices: [
      {
        text: "Voltar",
        nextPage: 0,
        moralRequirement: 0,
      },
      {
        text: "Teste 2",
        nextPage: 6,
        moralRequirement: 2,
      },
    ],
  },
];
