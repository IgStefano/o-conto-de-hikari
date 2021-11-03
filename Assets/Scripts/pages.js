// // Modelo
// {
//   id: ,
//   text: `?`,
//   choices: [
//     {
//       text: "",
//       nextPage: ,
//     },
//     {
//       text: "",
//       nextPage: ,
//     },
//   ],
// },

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
      {
        text: "Teste Kaoru",
        test: false,
        nextPage: 24,
      },
    ],
  },
  {
    id: 1,
    text: `Disclaimer: Esse é um jogo de ficção interativa. Qualquer semelhança com eventos, pessoas ou grupos reais é mera coincidência. 

    Este jogo não contém imagens, porém pode conter descrições de cenas violentas e, portanto, pode não ser recomendável a todos os públicos. 

    "O Conto de Hikari" se baseia na cultura japonesa, porém quaisquer nomes ou palavras derivadas da língua japonesa foram adaptadas para a escrita romanizada.

    Bom divertimento!`,
    choices: [
      {
        text: "Seguir",
        test: false,
        nextPage: 2,
      },
    ],
  },
  {
    id: 2,
    text: `Como jogar:

  O básico de como jogar O Conto de Hikari é extremamente simples!

1) Clique em "Começar" para iniciar o jogo;
2) Leia a história e clique em uma das opções para prosseguir;
3) Repita o passo 2 até receber uma das telas de "Fim de Jogo";
4) Caso queira ver o que aconteceria se escolhesse diferente em algum ponto ou só gostaria de ver mais finais, clique em "Jogar novamente" e repita os passos de 1 a 3!`,
    choices: [
      {
        text: "Seguir",
        test: false,
        nextPage: 3,
      },
    ],
  },
  {
    id: 3,
    text: `Moral & Pontos de Sorte:
    
    Um aspecto diferente em O Conto de Hikari é o sistema de progressão incluso. Em primeiro lugar, há o sistema de "Moral". A Moral é uma barra de valor numérico cujo valor se estende de -5 a 5, e ela diz respeito ao estilo de combate empregado por Hikari.

Valores tendendo a 5 dizem respeito à Brutalidade, que supõe um estilo de combate agressivo e físico, enquanto a extremidade oposta demonstra que Hikari conta com a sua Astúcia, uma abordagem que enfatiza a sagacidade e a agilidade para confrontar seus inimigos no lugar da força pura. As escolhas do jogador devem ser fiéis ao estilo usado por Hikari para que ele possa ter sucesso em combate. Consistência é chave!

Além disso, em vez dos tradicionais "hit points", "HP" ou "vida", neste jogo Hikari conta com a sua sorte; ou, "Pontos de Sorte". Eles representam a quantidade de vezes que o jogador pode tomar alguma decisão errada antes do personagem ter um fim trágico. Apesar disso, alguns inimigos são impiedosos e nem a sorte de Hikari o protegerá. Portanto, muita cautela!`,
    choices: [
      {
        text: "Iniciar Ato I",
        test: false,
        nextPage: 4,
      },
    ],
  },

  {
    id: 4,
    text: `ATO I: Treinamento
    
    Você é Hikari, um jovem nobre em treinamento para ser um guerreiro. Na terra de Oyama - o belo, porém caótico país onde você nasceu -, a guerra é geralmente uma atividade reservada para aqueles que estão na nata da sociedade. Apesar de tudo, você não é tão privilegiado assim...`,
    choices: [
      {
        text: "Refletir",
        nextPage: 5,
      },
    ],
    act: "I",
  },

  {
    id: 5,
    text: `A guerra não é apenas aquela experiência gloriosa, reservada aos mais poderosos, com grandes feitos de heróis. Ela também é uma causadora de tragédias, como a que ocorreu com a sua família. Para você, o que é mais importante?`,
    choices: [
      {
        text: "A guerra é um hábito bárbaro que ainda não extinguimos.",
        nextPage: 6,
      },
      {
        text: "A guerra é o meio mais rápido para colocar o nome de alguém na história.",
        nextPage: 7,
      },
    ],
  },
  {
    id: 6,
    text: `A última guerra de Oyama foi o que causou a morte de seus pais. Você não tem nenhum desejo de glória que seja tão forte que te faça esquecer deste fato. Ainda assim, você está se tornando um guerreiro. Por quê?`,
    choices: [
      {
        text: "Para proteger o que resta de bom nesta terra.",
        nextPage: 8,
      },
      {
        text: "Honrar o último desejo da minha família.",
        nextPage: 8,
      },
    ],
  },
  {
    id: 7,
    text: `Desrespeitar a guerra seria como desrespeitar o nome dos heróis que construíram a paz em que hoje vivemos - incluindo os seus pais. Portanto, tornar-se um guerreiro é mais do que uma obrigação: é uma honra. Para este fim, você está sob os cuidados do mestre Minamoto, um guerreiro veterano muito respeitado pela sua versatilidade.`,
    choices: [
      {
        text: "Iniciar o treinamento!",
        nextPage: 9,
      },
    ],
  },
  {
    id: 8,
    text: `De fato, a paz em Oyama é como uma chama fraquejante, então não é e nunca foi uma opção para um nobre como você não ser versado na arte da guerra. Para este fim, você está sob os cuidados do mestre Minamoto, um guerreiro veterano muito respeitado pela sua versatilidade.`,
    choices: [
      {
        text: "Iniciar o treinamento!",
        nextPage: 9,
      },
    ],
  },

  {
    id: 9,
    text: `Minamoto é conhecido como o "Mestre dos Mil Estilos". Ele foi um excelente guerreiro em seu tempo, mas se destaca ainda mais como mestre pela capacidade de desenvolver em cada pupilo o estilo de combate mais apropriado a ele. O que Minamoto viu em você?`,
    choices: [
      {
        text: "Ele viu que penso rápido e sou capaz de vencer pupilos mais fortes que eu usando a minha inteligência.",
        nextPage: 10,
      },
      {
        text: "Ele viu a forma que eu dizimo os meus colegas. Mesmo que eu esteja em desvantagem numérica, eles tremem diante de mim.",
        nextPage: 11,
      },
    ],
    place: "Minamoto Dojo",
  },

  {
    id: 10,
    moral: -1,
    text: `A astúcia muitas vezes vence a cega força bruta. Lutar com agilidade e sagacidade é a sua marca registrada e você se destaca bastante por isso. Certamente, você não é o pupilo mais forte, mas ainda assim seria o principal, se não fosse por um detalhe...`,
    choices: [
      {
        text: "Detalhe?",
        nextPage: 12,
      },
    ],
  },

  {
    id: 11,
    moral: 1,
    text: `Ninguém fica no seu caminho se tiver vontade de viver. Esmagar seus inimigos em batalha para você é tão natural quanto respirar. Você pode não ser o mais estratégico de todos, mas não é qualquer um que tem coragem de te encarar. De fato, você só consegue pensar em uma pessoa...`,
    choices: [
      {
        text: "Kaoru...",
        nextPage: 12,
      },
    ],
  },

  {
    id: 12,
    text: `Kaoru não é nobre. Também não se pode dizer que é mais forte fisicamente do que você; mas não se deixe enganar. Ela é a estudante mais forte do Minamoto Dojo, incluindo - pelo menos por enquanto - você. O fato de ela ser uma garota causa estranheza na maioria das pessoas (o surgimento de mulheres guerreiras é um evento raro e incompreendido), mas essa estranheza se apaga ao vê-la lutando. O que você acha dela?`,
    choices: [
      {
        text: "Kaoru não é tão boa assim.",
        nextPage: 13,
      },
      {
        text: "Ela é boa. Mas eu vou ser melhor!",
        nextPage: 14,
      },
    ],
  },

  {
    id: 13,
    text: `Ela não é tudo isso que dizem. Após mais uma sessão de treinamento, vocês trocam olhares. A atitude dela te irrita mas não há muito o que fazer por enquanto. É hora da refeição.`,
    choices: [
      {
        text: "Finalmente!",
        nextPage: 15,
      },
    ],
  },

  {
    id: 14,
    text: `Apesar da Kaoru realmente ser assustadora em uma batalha, você sabe que vai superá-la eventualmente. Vocês se entreolham e cria-se um clima de competição amigável. Porém, por enquanto, vocês vão deixar isso para depois pois está na hora de comer.`,
    choices: [
      {
        text: "Finalmente!",
        nextPage: 15,
      },
    ],
  },

  {
    id: 15,
    text: `Você aproveita o momento da refeição para refletir sobre o lugar onde está. Nos últimos dias, você não tem tido muito tempo para pensar. O treinamento é realmente duro e intenso e você não se vê com tempo para respirar. Minamoto Dojo é um lugar renomado como o seu mestre, mas realmente parece ter decaído com o tempo. Percebe-se pela estrutura que já abrigou muitos alunos, bem mais do que hoje em dia. Equipamentos de treino quebram com regularidade e nunca são repostos, a comida perde em variedade a cada mês que se passa.
    
    Ainda assim, relances de uma época dourada podemser percebidos. Minamoto exibe com orgulho em sua sala o conjunto de chá que ganhou de presente do próprio Imperador. Além disso, correm boatos entre os pupilos que ele possui um arsenal secreto em algum lugar do Dojo com todos os tipos de armas valiosas. Você não consegue deixar de pensar que se ele se desfizesse de todas essas relíquias, esse lugar poderia voltar à sua era de Ouro.`,
    choices: [
      {
        text: "O que será desse Dojo daqui a algum tempo?",
        nextPage: 16,
      },
    ],
  },

  {
    id: 16,
    text: `A refeição terminou e com ela, o seu tempo de descanso. Minamoto leva vocês para o próximo treinamento. Desta vez, ele se dará em forma de desafio, envolvendo o bosque que cerca o Dojo.
    
    "A missão de vocês," explica Minamoto, "será infiltrar até o centro do bosque e retirar a espada que eu deixei dentro da nossa cabana de caça."
    
    Adachi, seu ajudante, traz uma espada longa com o cabo detalhado em dourado e prata. O mestre a pega e a empunha. "Ela será idêntica a esta daqui. Muito cuidado, é apenas uma réplica cerimonial."
    
    "Cada um de vocês realizará essa tarefa sozinho."
    
    Você conhece o bosque e sabe que existe um caminho mais curto até a cabana, com todos os tipos de animais perigosos. Por outro lado, pode haver outro caminho, mais longo mas mais seguro para atravessar. Como você vai abordar este desafio?`,
    choices: [
      {
        text: "Vou usar o caminho mais curto. Nada pode me parar, nem mesmo a mãe natureza.",
        nextPage: 17,
      },
      {
        text: "Procurar um caminho mais seguro é a melhor maneira de me manter vivo. O que importa é completar a missão.",
        nextPage: 18,
      },
    ],
  },

  {
    id: 17,
    moral: 1,
    text: `Você enfrenta todo tipo de fauna para chegar ao seu objetivo. Sem problemas, você pega a espada cerimonial e retorna. Talvez com uma ou duas cicatrizes a mais, mas isso faz parte.`,
    choices: [
      {
        text: "Qual é o próximo desafio?",
        nextPage: 19,
      },
    ],
  },

  {
    id: 18,
    moral: -1,
    text: `Astúcia por vezes pode ser confundida com covardia, mas com certeza não é o caso. Você é capaz de evitar os perigos do bosque e trazer a espada de volta. Isso te leva mais tempo, mas nada que te abata muito.`,
    choices: [
      {
        text: "Duvido alguém ir melhor do que eu.",
        nextPage: 20,
      },
    ],
  },

  {
    id: 19,
    text: `Todos os pupilos, cansados e alguns feridos após esse desafio, se encontram no refeitório para trocar experiências. Minamoto entra no recinto e pede a palavra, o que é o bastante para que o salão se emudeça.
    
    "Vocês todos foram muito bem," ele inicia, "todos foram capazes de completar o desafio. Podem se orgulhar."
    
    Essas palavras levantam o ânimo da sala, mas emudecem ao passo que o mestre continua.
    
    "Entretanto, houve uma pessoa que se destacou mais. Alguém cuja bravura espantaria os próprios céus. E é por isso que preciso congratular especialmente..."`,
    choices: [
      {
        text: "...",
        nextPage: 21,
      },
    ],
  },

  {
    id: 20,
    text: `Todos os pupilos, cansados e alguns feridos após esse desafio, se encontram no refeitório para trocar experiências. Minamoto entra no recinto e pede a palavra, o que é o bastante para que o salão se emudeça.
  
  "Vocês todos foram muito bem," ele inicia, "todos foram capazes de completar o desafio. Podem se orgulhar."
  
  Essas palavras levantam o ânimo da sala, mas emudecem ao passo que o mestre continua.
  
  "Entretanto, houve uma pessoa que se destacou mais. Alguém cuja astúcia poderia servir de inspiração a qualquer raposa. E é por isso que preciso congratular especialmente..."`,
    choices: [
      {
        text: "...",
        nextPage: 21,
      },
    ],
  },

  {
    id: 21,
    text: `"...A Kaoru. Você foi muito bem. Todos os outros, se espelhem no exemplo dela. Podem descansar." 
    
    Com isso, o mestre encerra a sua fala e você termina a sua noite confuso. Tinha certeza que dessa vez teria ultrapassado o desempenho dela. No dia seguinte, o que você fará?`,
    choices: [
      {
        text: "Ela com certeza trapaceou! Vou tirar satisfação antes dos exercícios matinais.",
        nextPage: 22,
      },
      {
        text: "Preciso entender o que fiz de errado. Vou conversar com ela e ver o que ela fez de tão diferente assim.",
        nextPage: 23,
      },
    ],
  },

  {
    id: 22,
    text: `O sol raiaria só depois de algum tempo, mas você e os outros pupilos já estão de pé para iniciar o dia. Você decide ir falar com Kaoru e expor ela como a víbora traiçoeira que é.
    
    "O que você fez?" é a primeira coisa que você diz a ela.
    
    "Bom dia pra você também," responde a jovem, ainda se alongando enquanto diz essas palavras.
    
    "Nem vem. Só quero que você admita que trapaceou."
    
    Kaoru para, olha para você fixamente e começa a rir.
    
    "Sempre posso contar com você para dar boas risadas, Hikari. Se acha que não sou tão boa assim, por que não treinamos juntos?"
    
    Você sabe o que ela quer dizer com isso; uma luta-treino. Apesar de serem os principais alunos do Dojo há algum tempo, vocês não chegaram a se enfrentar.`,
    choices: [
      {
        text: "Cai dentro!",
        nextPage: 24,
      },
      {
        text: "Espera, não sei se essa é a melhor ideia...",
        nextPage: 24,
      },
    ],
  },

  {
    id: 23,
    text: `O sol raiaria só depois de algum tempo, mas você e os outros pupilos já estão de pé para iniciar o dia. Você decide ir falar com Kaoru e entender o que ela fez de tão grandioso. 
    
    "O que você fez?" é a primeira coisa que você diz a ela.
    
    "Bom dia pra você também," responde a jovem, ainda se alongando enquanto diz essas palavras.
    
    "Perdão. Eu só quero entender como você se saiu tão bem no desafio de ontem."
    
    Kaoru para, olha para você fixamente e começa a rir.
    
    "Hikari, às vezes você é humilde demais, sabia? Se quer saber o que me faz tão boa assim, por que não treinamos juntos?"
    
    Você sabe o que ela quer dizer com isso; uma luta-treino. Apesar de serem os principais alunos do Dojo há algum tempo, vocês não chegaram a se enfrentar.`,
    choices: [
      {
        text: "É claro!",
        nextPage: 24,
      },
      {
        text: "Não sei se é o momento...",
        nextPage: 24,
      },
    ],
  },

  {
    id: 24,
    text: `Antes que você possa dizer qualquer coisa, Kaoru já está balançando uma espada de madeira em sua direção. 
    
    "Primeira dica, Hikari:", ela encontra uma maneira de te provocar enquanto tenta te acertar, "nada de hesitar em batalha!"
    
    O que você vai fazer?`,
    choices: [
      {
        text: "Irei me esquivar e procurar uma abertura nos ataques dela.",
        nextPage: 25,
        test: true,
        moralRequirement: -1,
        failPage: 29,
      },
      {
        text: "Pego a minha própria espada de madeira para defender do ataque e criar a abertura que preciso para fazer ela pagar.",
        nextPage: 26,
        test: true,
        moralRequirement: 1,
        failPage: 30,
      },
      {
        text: "Vou pegar a espada dela com as minhas mãos e desarmá-la.",
        nextPage: 27,
        test: true,
        moralRequirement: 2,
        failPage: 30,
      },
      {
        text: "Vou rolar no chão para pegar poeira e soprar nos olhos de Kaoru em seu próximo ataque.",
        nextPage: 28,
        test: true,
        moralRequirement: -2,
        failPage: 29,
      },
    ],
  },

  {
    id: 25,
    text: `Você é capaz de se esquivar da enxurrada de ataques de Kaoru! Você enxerga abertura para um contra-ataque. Como será?`,
    choices: [
      {
        text: "Vou com tudo para cima dela.",
        nextPage: 29,
      },
      {
        text: "Tento dar uma rasteira nela para que ela vá ao chão.",
        nextPage: 28,
      },
    ],
  },

  {
    id: 26,
    text: `Demonstrando muita habilidade e perserverança, você consegue se defender dos ataques de Kaoru. Ela abriu a guarda, e agora?`,
    choices: [
      {
        text: "Sigo aguardando mais ataques, pois pode ser uma cilada.",
        nextPage: 29,
      },
      {
        text: "Este é o momento! Vou dar um único ataque certeiro para acabar com a luta.",
        nextPage: 27,
      },
    ],
  },

  {
    id: 27,
    text: `O seu ataque foi bem-sucedido e Kaoru sai desarmada - mas não derrotada. Ela cria separação entre vocês com algumas acrobacias para trás e começa a atirar pedras contra você. Não são pedras muito grandes, mas são pontiagudas e com certeza machucaria se te acertassem. E agora?`,
    choices: [
      {
        text: "Continuar indo pra cima de Kaoru, se defendendo ou esquivando das pedras ao longo do caminho.",
        nextPage: 30,
      },
      {
        text: "Tenta se esconder atrás de alguma coisa até as pedras da sua oponente acabarem.",
        nextPage: 29,
      },
    ],
  },

  {
    id: 28,
    text: `O seu ataque leva Kaoru ao chão - mas estar por baixo não é estar derrotado. Ela rapidamente dá uma cambalhota para trás e começa a atirar pedras em você. Não são pedras muito grandes, mas são pontiagudas e com certeza machucaria se te acertassem. E agora?`,
    choices: [
      {
        text: "Você tenta ir de cobertura em cobertura até chegar próximo o bastante para subjugá-la.",
        nextPage: 31,
      },
      {
        text: "Você tenta jogar as pedras de volta.",
        nextPage: 29,
      },
    ],
  },

  {
    id: 29,
    text: `Kaoru percebe exatamente o que você está tentando fazer. Ela tem a resposta perfeita e logo você se vê ajoelhado em posição defensiva com Kaoru pronta para te derrubar.
    
    "Estou atrapalhando?", questiona uma voz masculina atrás de você. Kaoru prontamente abandona a postura de ataque e se curva. Você não precisa olhar para trás para saber que se trata do mestre Minamoto. Você...`,
    choices: [
      {
        text: "Se curva tal como Kaoru.",
        nextPage: 32,
      },
      {
        text: "Tenta se defender e dizer que é tudo um mal entendido.",
        nextPage: 33,
      },
    ],
    luck: -1,
  },

  {
    id: 30,
    text: `Kaoru não consegue te acertar e você consegue parar as pedras. Porém, bem quando achou que estava com a luta sob controle, ela acerta um chute na sua empunhadura; vocês estão agora ambos desarmados. Em um impasse, você se prepara para o próximo movimento, até que escuta uma voz familiar atrás de você:
    
    "Estou atrapalhando?", questiona a voz. Kaoru prontamente abandona a postura de ataque e se curva. Você não precisa olhar para trás para saber que se trata do mestre Minamoto. Você...`,
    choices: [
      {
        text: "Se curva tal como Kaoru.",
        nextPage: 32,
      },
      {
        text: "Tenta se defender e dizer que é tudo um mal entendido.",
        nextPage: 33,
      },
    ],
  },

  {
    id: 31,
    text: `Kaoru não tem a mira tão boa e não é capaz de responder à sua agilidade. Você tenta dar o ataque final mas ela é capaz de defender com a própria espada. Vocês se encaram, novamente em um impasse. Entretanto, a tensão no ar é instantaneamente vaporizada ao ouvir uma voz atrás de você:
    
    "Estou atrapalhando?", questiona a voz. Kaoru prontamente abandona a postura de ataque e se curva. Você não precisa olhar para trás para saber que se trata do mestre Minamoto. Você...`,
    choices: [
      {
        text: "Se curva tal como Kaoru.",
        nextPage: 32,
      },
      {
        text: "Tenta se defender e dizer que é tudo um mal entendido.",
        nextPage: 33,
      },
    ],
  },

  {
    id: 32,
    text: `"Não sei o que vocês estão fazendo, mas estão atrasados para o treino. Sugiro que vão de uma vez." Minamoto é firme mas justo com vocês. Ufa, não foi dessa vez que vocês invocaram a ira do velho mestre.`,
    choices: [
      {
        text: "Obedecer Minamoto e ir treinar.",
        nextPage: 34,
      },
    ],
  },

  {
    id: 33,
    text: `Minamoto solta um suspiro. "Vocês estão atrasados. Vão treinar se não quiserem ficar na limpeza do Dojo pelo próximo mês." Minamoto claramente ficou desapontado. É melhor obedecê-lo antes que a situação piore.`,
    choices: [
      {
        text: "Obedecer Minamoto e ir treinar.",
        nextPage: 34,
      },
    ],
  },

  {
    id: 34,
    text: `Conforme os anos passam, você e seus colegas se desenvolvem. Não apenas em combate, como  O que te preocupa é ver que não entram novos alunos no Dojo há bastante tempo. Um a um, seus colegas mais antigos se graduam e a sua vez não parece estar longe.
    
    Todos os alunos passam pela tradição do Dojo de enfrentar o mestre em uma luta-treino como condição de se graduar. Não é uma luta até alguém desmaiar, mas ainda assim é visto como o teste mais intenso do treinamento. Quem aguentar o um-a-um com o Mestre dos Mil Estilos está certamente pronto para ser um guerreiro e defender um clã de Oyama.`,
    choices: [
      {
        text: "",
        nextPage: 35,
      },
      {
        text: "",
        nextPage: 35,
      },
    ],
  },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  // {
  //   id: ,
  //   text: `?`,
  //   choices: [
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //     {
  //       text: "",
  //       nextPage: ,
  //     },
  //   ],
  // },

  {
    id: 1000,
    text: `Disclaimer: Esse é um jogo de ficção interativa. Qualquer semelhança com eventos, pessoas ou grupos reais é mera coincidência. 

    Este jogo não contém imagens, porém pode conter descrições de cenas violentas e, portanto, pode não ser recomendável a todos os públicos. 

    "O Conto de Hikari" se baseia na cultura japonesa, porém quaisquer nomes ou palavras derivadas da língua japonesa foram adaptadas para a escrita romanizada.

    Bom divertimento!`,
    choices: [
      {
        text: "Voltar",
        test: false,
        nextPage: 2,
      },
    ],
  },
  {
    id: 1001,
    text: `Como Jogar:

  O básico de como jogar O Conto de Hikari é extremamente simples!

1) Clique em "Começar" para iniciar o jogo;
2) Leia a história e clique em uma das opções para prosseguir;
3) Repita o passo 2 até receber uma das telas de "Fim de Jogo";
4) Caso queira ver o que aconteceria se escolhesse diferente em algum ponto ou só gostaria de ver mais finais, clique em "Jogar novamente" e repita os passos de 1 a 3!`,
    choices: [
      {
        text: "Voltar",
        nextPage: 2,
      },
      {
        text: "Ver sobre Moral e Pontos de Sorte",
        nextPage: 1002,
      },
    ],
  },
  {
    id: 1002,
    text: `Moral & Pontos de Sorte:
    
    Um aspecto diferente em O Conto de Hikari é o sistema de progressão incluso. Em primeiro lugar, há o sistema de "Moral". A Moral é uma barra de valor numérico cujo valor se estende de -5 a 5, e ela diz respeito ao estilo de combate empregado por Hikari.

Valores tendendo a 5 dizem respeito à Brutalidade, que supõe um estilo de combate agressivo e físico, enquanto a extremidade oposta demonstra que Hikari conta com a sua Astúcia, uma abordagem que enfatiza a sagacidade e a agilidade para confrontar seus inimigos no lugar da força pura. As escolhas do jogador devem ser fiéis ao estilo usado por Hikari para que ele possa ter sucesso em combate. Consistência é chave!

Além disso, em vez dos tradicionais "hit points", "HP" ou "vida", neste jogo Hikari conta com a sua sorte; ou, "Pontos de Sorte". Eles representam a quantidade de vezes que o jogador pode tomar alguma decisão errada antes do personagem ter um fim trágico. Apesar disso, alguns inimigos são impiedosos e nem a sorte de Hikari o protegerá. Portanto, muita cautela!

 `,
    choices: [
      {
        text: "Voltar",
        test: false,
        nextPage: 4,
      },
      {
        text: "Ver como jogar",
        test: false,
        nextPage: 1001,
      },
    ],
  },
];
