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
    text: `Como Jogar:

  O básico de como jogar O Conto de Hikari é extremamente simples!

1) Clique em "Começar" para iniciar o jogo;
2) Leia a história e clique em uma das opções para prosseguir;
3) Repita o passo 2 até receber uma das telas de "Fim de Jogo";
4) Caso queira ver o que aconteceria se escolhesse diferente em algum ponto ou só gostaria de ver mais finais, clique em "Jogar novamente" e repita os passos de 1 a 3!

Você pode apertar nos botões que estarão no canto da tela para ler o Disclaimer ou a estas instruções novamente. Também pode clicar no "kanji" no centro-superior para ativar ou desativar o Modo Escuro.`,
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
        moral: -1,
      },
      {
        text: "Ele viu a forma que eu dizimo os meus colegas. Mesmo que eu esteja em desvantagem numérica, eles tremem diante de mim.",
        nextPage: 11,
        moral: 1,
      },
    ],
    place: "Minamoto Dojo",
  },

  {
    id: 10,

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
    
    Ainda assim, relances de uma época dourada podem ser percebidos. Minamoto exibe com orgulho em sua sala o conjunto de chá que ganhou de presente do próprio Imperador. Além disso, correm boatos entre os pupilos que ele possui um arsenal secreto em algum lugar do Dojo com todos os tipos de armas valiosas. Você não consegue deixar de pensar que se ele se desfizesse de todas essas relíquias, esse lugar poderia voltar à sua era de Ouro.`,
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
        moral: 1,
      },
      {
        text: "Procurar um caminho mais seguro é a melhor maneira de me manter vivo. O que importa é completar a missão.",
        nextPage: 18,
        moral: -1,
      },
    ],
  },

  {
    id: 17,
    text: `Você enfrenta todo tipo de fauna para chegar ao seu objetivo. Sem problemas, você pega a espada cerimonial e retorna. Talvez com uma ou duas cicatrizes a mais, mas isso faz parte.`,
    choices: [
      {
        text: "Qual é o próximo desafio?",
        nextPage: 19,
      },
    ],
    place: "Bosque que cerca Minamoto Dojo",
  },

  {
    id: 18,

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
    place: "Minamoto Dojo",
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
    place: "Minamoto Dojo",
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
        failPage: 29,
      },
      {
        text: "Vou pegar a espada dela com as minhas mãos e desarmá-la.",
        nextPage: 27,
        test: true,
        moralRequirement: 2,
        failPage: 29,
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
        text: "Este é o momento! Vou aproveitar essa abertura para atacá-la na empunhadura e desarmá-la.",
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
    text: `Conforme os anos passam, você e seus colegas se desenvolvem. Não apenas em combate, como em outras artes apreciadas pela elite de Oyama: a escrita, a leitura e a cerimônia do chá. O que te preocupa é ver que não entram novos alunos no Dojo há bastante tempo. Um a um, seus colegas mais antigos se graduam e a sua vez não parece estar longe.
    
    Todos os alunos passam pela tradição do Dojo de enfrentar o mestre em uma luta-treino como condição de se graduar. Não é uma luta até o, mas ainda assim é visto como o teste mais intenso do treinamento. Quem aguentar o um-a-um com o Mestre dos Mil Estilos está certamente pronto para ser um guerreiro e defender um clã de Oyama.`,
    choices: [
      {
        text: "É a minha vez",
        nextPage: 35,
      },
    ],
  },

  {
    id: 35,
    text: `Você adentra o espaço de treinamento do Dojo. Neste momento, só existem duas pessoas nele: você mesmo e Minamoto. O mestre se encontra sentado sobre os próprios calcanhares, em cima de uma almofada, tomando uma xícara de chá com o auxílio de uma mesa improvisada. Ele acena para que você se aproxime.`,
    choices: [
      {
        text: "Se aproximar",
        nextPage: 36,
      },
    ],
  },

  {
    id: 36,
    text: `"Hikari," ele te chama, "aprecie o momento." Você não tem certeza se entende a princípio, mas ele continua. "Não é raro que não seja o guerreiro mais habilidoso ou o mais forte a ser o vencedor, e sim o mais sereno. Entender que a sua vida pode acabar a qualquer instante faz parte disso. Não tema a morte... aprecie o momento de vida que lhe resta."
    
    O que você faz?`,
    choices: [
      {
        text: "Aguardar inquietamente o início do seu teste",
        nextPage: 37,
      },
      {
        text: "Sentar-se com Minamoto e tomar chá junto com ele",
        nextPage: 38,
      },
    ],
  },

  {
    id: 37,
    text: `Minamoto percebe a sua impaciência e coloca a sua xícara na mesa. "Muito bem..." Ele bate palmas e Adachi, seu ajudante, entra na sala e corre para retirar o conjunto. "A ansiedade é filha do medo, o pior inimigo de um guerreiro. Vou te ajudar a entender isso." Adachi o entrega a sua espada e prontamente deixa o ambiente. Minamoto está pronto.`,
    choices: [
      {
        text: "Preparar-se para a batalha",
        nextPage: 39,
      },
    ],
  },

  {
    id: 38,
    text: `Vocês apreciam o sabor delicado do chá por alguns minutos. Quando você menos espera, o momento de calmaria passa. Minamoto bate palmas e Adachi, seu ajudante, entra na sala e corre para retirar o conjunto. "A ansiedade é filha do medo, o pior inimigo de um guerreiro. Você demonstrou auto-controle, mas quero ver do que é capaz no calor da batalha. Adachi o entrega a sua espada e prontamente deixa o ambiente. Minamoto está pronto.`,
    choices: [
      {
        text: "Preparar-se para a batalha",
        nextPage: 39,
      },
    ],
  },

  {
    id: 39,
    text: `Minamoto e você passam os primeiros segundos da batalha se rodeando e circulando. Você consegue praticamente sentir os olhos do veterano lendo cada micro-movimento seu, caçando uma abertura; até que parece ter encontrado. Com uma velocidade incrível, ele avança para te atacar.`,
    choices: [
      {
        text: "Se esquivar indo para trás",
        nextPage: 42,
      },
      {
        text: "Se esquivar indo para os lados",
        test: true,
        moralRequirement: -2,
        failPage: 44,
        nextPage: 40,
      },
      {
        text: "Segurar a sua posição e bloquear os golpes do mestre",
        test: true,
        moralRequirement: 2,
        failPage: 44,
        nextPage: 41,
      },
    ],
  },

  {
    id: 40,
    text: `Você esquiva e vai circulando os ataques do mestre. Você até busca uma abertura para contra-atacar, mas a postura que Minamoto exerce é perfeita e ele continua a pressão sobre você.`,
    choices: [
      {
        text: "Continuar se esquivando para os lados até que o veterano se canse",
        nextPage: 44,
      },
      {
        text: "Se esquivar para trás até a parede do Dojo",
        nextPage: 44,
      },
      {
        text: "Realizar uma finta e dar um chute no pé de Minamoto para enfraquecer a sua postura",
        nextPage: 43,
      },
    ],
  },

  {
    id: 41,
    text: `Com uma persistência sublime, você é capaz de bloquear ou até mesmo aparar cada golpe que Minamoto desfere. Isso claramente tem um efeito sobre a resistência do mestre, então ele muda de tática. Ele passa a usar fintas e golpes auxiliares para te confundir.`,
    choices: [
      {
        text: "Continuar tentando ler cada movimento de Minamoto",
        nextPage: 44,
      },
      {
        text: "Responder com suas próprias fintas para confundir o mestre e criar abertura para si mesmo",
        nextPage: 44,
      },
      {
        text: "Aproveitar que o mestre agora se encontra na defensiva e começar a pressionar com seus próprios golpes",
        nextPage: 42,
      },
    ],
  },

  {
    id: 42,
    text: `Minamoto agora é quem está sob pressão. Você mantém uma postura firme e desfere diversos golpes. Ele bloqueia alguns, se esquiva de outros, até que você dá um golpe um pouco mais lento que o permite criar separação. Vocês estão novamente em um impasse.`,
    choices: [
      {
        text: "Partir para cima e continuar a investida",
        nextPage: 44,
      },
      {
        text: "Manter a postura e voltar a ler os movimentos do mestre",
        nextPage: 45,
      },
    ],
  },

  {
    id: 43,
    text: `Minamoto cai na sua cilada, mas consegue aparar o golpe. Ele volta a criar separação entre vocês com um rápido movimento para trás. Vocês se encontram em um novo impasse.`,
    choices: [
      {
        text: "Se aproximar e tentar realizar uma nova finta",
        nextPage: 44,
      },
      {
        text: "Analisar os movimentos de Minamoto e se manter no lugar",
        nextPage: 45,
      },
    ],
  },

  {
    id: 44,
    text: `"Previsível," você escuta Minamoto falar antes de ser golpeado. Essa é a última coisa que você se lembra por alguns minutos.
    
    Ao acordar, o mestre já está novamente tomando o seu chá. Ele percebe que você acordou.
    
    "Hikari, você é forte," ele diz entre goles, "mas você não se apropriou dos seus próprios pontos fortes. Vamos continuar trabalhando nisso antes de você se graduar."`,
    choices: [
      {
        text: "Curvar-se e agradecer pelos ensinamentos",
        nextPage: 52,
      },
      {
        text: "Sair do Dojo batendo os pés no chão de frustração",
        nextPage: 53,
      },
    ],
    luck: -1,
  },

  {
    id: 45,
    text: `"Muito bem, Hikari," Minamoto te diz, "você já mostrou estar melhor do que antecipei. Vamos ver até onde você vai." Ele solta a espada e, da parede, retira um bastão. Empunhando uma arma de alcance maior, ele passa a te atacar com diversos golpes rápidos.`,
    choices: [
      {
        text: "Manter a distância e aparar os golpes de lança com a sua espada",
        test: true,
        nextPage: 46,
        failPage: 49,
        moralRequirement: 2,
      },
      {
        text: "Bloquear os ataques de Minamoto com a sua espada até que ele mude de estratégia",
        nextPage: 49,
      },
      {
        text: "Correr pela parede e pular para trás do mestre para flanqueá-lo",
        nextPage: 49,
      },
      {
        text: "Se esquivar dos ataques do bastão e rolar para o lado",
        test: true,
        nextPage: 47,
        failPage: 49,
        moralRequirement: -2,
      },
    ],
  },

  {
    id: 46,
    text: `Você é capaz de manter distante os golpes de Minamoto mesmo com a desvantagem de alcance. Quando ele se prepara para desferir um ataque mais intenso, você o recebe com um chute para quebrar a sua postura. Neste momento de abertura, você aproveita e...`,
    choices: [
      {
        text: "Ataca o ombro do velho guerreiro com um poderoso golpe de cima para baixo",
        nextPage: 48,
      },
      {
        text: "Ataca o tronco do mestre com um devastador corte horizontal",
        nextPage: 48,
      },
    ],
  },

  {
    id: 47,
    text: `Através da sua astúcia, você é capaz de acessar o flanco de Minamoto pelo mais breve dos instantes. Entretanto, isso é tempo o bastante para que você desfira o golpe que pode encerrar a luta...`,
    choices: [
      {
        text: "Um corte vertical mirando na cabeça do mestre",
        nextPage: 48,
      },
      {
        text: "Um golpe impalador mirando na coluna de Minamoto",
        nextPage: 48,
      },
    ],
  },

  {
    id: 48,
    text: `Você parece estar em uma posição muito boa para encerrar a luta em seu favor - talvez o primeiro pupilo em muito tempo a conseguir essa façanha. Entretanto, no último segundo, o mestre percebe que você se comprometeu demais e volta o impulso do seu próprio ataque contra você. Você agora está no chão.
    
    Você já pensa em como voltar à luta quando ouve Minamoto dizer "Ok, isso é o bastante". 
    
    Por um momento, você pensa no que fez errado, no que poderia ter feito diferente. Você se senta e o mestre, como se lesse os seus pensamentos, diz: "Hikari, você foi muito bem. Melhor do que eu poderia imaginar. Você conhece onde reside a sua força e onde estão suas fraquezas. Não há dúvidas de que você já é um guerreiro."
    
    Ele te chama para conversar em seu escritório. Ao adentrar, você vê o famoso conjunto de chá do Imperador, na mesa e pronto para servir.
    
    "Você aceita um chá?"`,
    choices: [
      {
        text: "Curvar-se e aceitar o chá",
        nextPage: 50,
      },
      {
        text: "Rejeitar o chá e perguntar por que foi chamado ali",
        nextPage: 51,
      },
    ],
  },

  {
    id: 49,
    text: `"Hmm, então é isso?" Minamoto resmunga enquanto observa a sua resposta. Ele rapidamente sabota o seu plano e você rapidamente se encontra no chão. Ele lhe diz: "Hikari, você é forte; é um guerreiro. Você só precisa de um pouco mais de autoconhecimento. Onde estão suas forças e fraquezas? Ser um guerreiro não se resume a ser forte, habilidoso ou a somente saber lutar. Todo bom guerreiro é alguém que se conhece profundamente. Lembre-se disso.`,
    choices: [
      {
        text: "Curvar-se e agradecer pelos ensinamentos",
        nextPage: 54,
      },
      {
        text: "Sair do Dojo batendo os pés no chão de frustração",
        nextPage: 54,
      },
    ],
  },

  {
    id: 50,
    text: `Você aproveita o momento de calmaria com Minamoto.

    "Hikari," ele te chama a atenção, "quero que você saiba que são pouquíssimos pupilos que eu permito tomar chá onde você está, usando a xícara que está em sua mão."
    
    Ele olha para os seus olhos e continua, "apenas os mais excelentes vieram aqui. Nos últimos 5 anos, somente dois. Você..."`,
    choices: [
      {
        text: "...E Kaoru.",
        nextPage: 52,
      },
      {
        text: "...e quem mais?",
        nextPage: 53,
      },
    ],
  },

  {
    id: 51,
    text: `Você aproveita o momento de calmaria com Minamoto, mas decide não tomar o chá.

    "Hikari," ele te chama a atenção, "quero que você saiba que são pouquíssimos pupilos que eu permito tomar chá onde você está, usando a xícara que lhe ofereci."
    
    Ele olha para os seus olhos e continua, "apenas os mais excelentes vieram aqui. Nos últimos 5 anos, somente dois. Você..."`,
    choices: [
      {
        text: `"...E Kaoru."`,
        nextPage: 52,
      },
      {
        text: `"...e quem mais?"`,
        nextPage: 53,
      },
    ],
  },

  {
    id: 52,
    text: `"Sim, você está certo." Minamoto continua tomando o seu chá. "Você e Kaoru são os alunos mais excelentes que eu tive em muito tempo." Ele para de falar por um momento e pensa em algo que você não é capaz de sondar. Como se tivesse percebido a própria distração, ele toma mais um gole de chá e te diz:
    
    "Perdoe esse velho. Só queria dizer que estou orgulhoso de você. Agradeço por me acompanhar. Pode ir agora."`,
    choices: [
      {
        text: "Curvar-se e partir para o seu alojamento.",
        nextPage: 55,
      },
    ],
  },

  {
    id: 53,
    text: `"Eu sei que vocês são rivais, mas, Hikari, você não é cego." Minamoto continua tomando o seu chá. "Você e Kaoru são os alunos mais excelentes que eu tive em muito tempo." Ele para de falar por um momento e pensa em algo que você não é capaz de sondar. Como se tivesse percebido a própria distração, ele toma mais um gole de chá e te diz:
    
    "Perdoe esse velho. Só queria dizer que estou orgulhoso de você. Agradeço por me acompanhar. Pode ir agora."`,
    choices: [
      {
        text: "Curvar-se e partir para o seu alojamento.",
        nextPage: 55,
      },
    ],
  },

  {
    id: 54,
    text: `Seu desempenho no teste final não te deixou feliz. Você esperava se destacar. Ainda assim, nos últimos meses antes da cerimônia de graduação, você dá tudo de si para se provar um verdadeiro guerreiro.`,
    choices: [
      {
        text: "O tempo passa mais rápido do que você é capaz de perceber.",
        nextPage: 56,
      },
    ],
  },

  {
    id: 55,
    text: `Você não poderia ficar mais feliz com como se desempenhou no teste final. Minamoto até mesmo te ofereceu o chá do Imperador. A única coisa que te surpreendeu é saber que Kaoru também esteve lá. Você passa o tempo até a graduação treinando ainda mais duro para se tornar o indiscutível pupilo número 1.`,
    choices: [
      {
        text: "O tempo passa mais rápido do que você é capaz de perceber.",
        nextPage: 56,
      },
    ],
  },

  {
    id: 56,
    text: `O dia da cerimônia finalmente chegou. Existe uma grande expectativa entre os pupilos de Minamoto pois hoje os mais promissores pupilos - você e Kaoru - se tornarão guerreiros. Entretanto, está havendo algum tipo de comoção no Dojo. A cerimônia está para começar, mas Kaoru não pode ser encontrada em lugar algum. O que você acha disso?`,
    choices: [
      {
        text: "Ela deve ter se assustado com a vinda do dia e voltado para casa.",
        nextPage: 57,
      },
      {
        text: "Isso é estranho...",
        nextPage: 58,
      },
    ],
  },

  {
    id: 57,
    text: `Não seria a primeira vez que alguém simplesmente some antes do dia da graduação. Algumas pessoas já descobriram que realmente gostariam de se dedicar a outros ofícios. Pode ser o caso de Kaoru. Minamoto está tentando acalmar a todos e pedir para que sigam a cerimônia independente disso.`,
    choices: [
      {
        text: "Tanto faz, ela não veio por que não quis. Por você, a cerimônia deve seguir.",
        nextPage: 65,
      },
    ],
  },

  {
    id: 58,
    text: `Isso te cheira mal... Você e Kaoru podem não ser os melhores dos amigos, mas de bem longe você consegue perceber que isso não é do feitio dela. Ela possui uma personalidade por vezes imprudente e sempre destemida. Ela não fugiria do dia mais importante do caminho do guerreiro. Minamoto está tentando acalmar a todos e pedir para que sigam a cerimônia independente disso.`,
    choices: [
      {
        text: "Você pede a Minamoto alguns minutos para procurar por Kaoru; ela pode estar em perigo",
        nextPage: 59,
      },
      {
        text: "Apesar de tudo, você concorda que a cerimônia deve seguir. O grupo não pode ser prejudicado por conta de uma pessoa só.",
        nextPage: 65,
      },
    ],
  },

  {
    id: 59,
    text: `À contragosto, Minamoto permite alguns minutos depois que você e outros pupilos preocupados pedissem tempo para procurar por Kaoru no Dojo. Onde você irá procurá-la?`,
    choices: [
      {
        text: "Nos arredores do Dojo",
        nextPage: 60,
      },
      {
        text: "Na parte de dentro do Dojo",
        nextPage: 60,
      },
    ],
  },

  {
    id: 60,
    text: `Você procurou bastante, mas não viu sinal de Kaoru em lugar algum. O tempo está quase acabando quando você decide olhar em um lugar específico: o campo onde vocês se enfrentaram nos primeiros meses de treinamento.
    
    Surpreendendo até a si mesmo, você a encontra.
    
    "Hikari..."
    
    A voz dela está com um tom de tristeza nada característico dela. Você tenta apressá-la para a cerimônia, mas ela permanece estática e olhando para o chão.
    
    "Eu não... eu não posso ir. Nem deveria estar aqui."`,
    choices: [
      {
        text: `"Como não? Hoje é o nosso dia de graduação."`,
        nextPage: 61,
      },
      {
        text: `"Se não deveria, por que está aqui?"`,
        nextPage: 61,
      },
    ],
  },

  {
    id: 61,
    text: `As suas palavras soam meio ríspidas; é um misto de preocupação com confusão. Kaoru só abaixa a cabeça.
    
    "Eu não posso me graduar. Eu sou mulher. O mestre Minamoto e o Adachi tiveram uma reunião comigo ontem e deixaram bem claro que hoje eu não deveria estar aqui..."
    
    Ela hesita, cerra os punhos e continua:
    
    "Só que... só que isso não é justo! Eu me esforcei o dobro para ser um destaque aqui! Eu mereço estar lá! Hikari, diz que você concorda comigo!"
    
    Kaoru está claramente agitada, o que você diz?`,
    choices: [
      {
        text: `"Isso é realmente injusto. Você é um destaque daqui, como eles puderam?"`,
        nextPage: 62,
      },
      {
        text: `"Na real, acho que eles estão certos."`,
        nextPage: 62,
      },
    ],
  },

  {
    id: 62,
    text: `Antes que você pudesse dizer qualquer coisa, Minamoto e Adachi aparecem.
    
    "Kaoru", Minamoto diz, suspirando, "não deixe as coisas complicadas para nós. Já conversamos que a sua graduação é impossível agora."
    
    O que você fará?`,
    choices: [
      {
        text: "Ficar ao lado de Kaoru",
        nextPage: 63,
      },
      {
        text: "Ficar ao lado de Minamoto",
        nextPage: 64,
      },
    ],
  },

  {
    id: 63,
    text: `Independente do motivo, está claro que Minamoto mentiu para você e a todos os outros pupilos. Você tem lá as suas desavenças com Kaoru, mas é claro como o dia que ela é qualificada para ser uma guerreira.
    
    "Mestre, como pode fazer isso?", você questiona, "as habilidades de Kaoru são indiscutíveis. Ela é uma guerreira e o senhor sabe disso. O senhor mesmo a treinou."
    
    Minamoto mexe a cabeça desaprovadoramente. "Hikari, não podemos ter guerreiras mulheres, principalmente agora. Estamos em paz," Kaoru tem em seu rosto um misto de asco e ódio enquanto Minamoto prossegue, "mulheres são temperamentais e isso as torna pouco confiáveis no ofício do guerreiro. Kaoru, você já pode ir."`,
    choices: [
      {
        text: `"Se Kaoru for, irei com ela."`,
        nextPage: 66,
      },
      {
        text: `"O mestre acumula sabedoria, ele tem razão."`,
        nextPage: 64,
      },
    ],
  },

  {
    id: 64,
    luck: -1,
    text: `Por fim, você decide concordar com o mestre. Ele possui anos de sabedoria, e se ele diz que mulheres não podem ser guerreiras, você tem certeza que é por um bom motivo. Você vê Kaoru indo embora até que a sua silhueta se extingue no horizonte. É então finalmente o tempo da cerimônia.`,
    choices: [
      {
        text: "Ir à cerimônia",
        nextPage: 65,
      },
    ],
  },

  {
    id: 65,
    text: `A cerimônia ocorre normalmente, mesmo sem Kaoru. Todos estão trajados com um tipo especial de kimono, todo branco, simbolizando que o caminho do guerreiro para todos os pupilos está apenas começando. Você foi homenageado como pupilo de destaque ao fim da cerimônia. Por fim, todos comeram e beberam por horas pela primeira vez desde que o treinamento começou. 
    
    Essa é certamente uma ocasião ímpar e, por mais difícil que tenha sido, você sabe que vai sentir falta dos seus colegas, do seu mestre e de toda a rotina de treinamento.`,
    choices: [
      {
        text: "Você se pega imaginando que tipo de lugares você vai conhecer e a que tipo de mestre irá servir...",
        nextPage: 67,
      },
    ],
  },

  {
    id: 66,
    luck: 1,
    text: `Você não sabe por que disse essas palavras - afinal, nem faz sentido colocar o seu futuro na linha - mas você segue o ímpeto de dizê-las mesmo assim. Simplesmente te pareceu a coisa certa a se fazer. Kaoru, entretanto, discorda:
    
    "Hikari, obrigada," ela diz, "mas não é como se você pudesse mudar as coisas. Eu... me vou. Já entendi que o caminho do guerreiro não é pra mim." Minamoto acena com a cabeça, e você vê Kaoru indo embora até que a sua silhueta se extingue no horizonte. Mesmo sem Kaoru, é chegado o tempo da cerimônia.`,
    choices: [
      {
        text: "Ir à cerimônia",
        nextPage: 65,
      },
    ],
  },

  {
    id: 67,
    text: `Antes que você perceba, um novo dia nasce. Você nem lembra como chegou no alojamento na noite anterior. Guerreiros não são conhecidos por ter uma vida com muitos festejos, então foi bom ter aproveitado.
    
    Com a vinda de hoje, você começa a arrumar as malas. Afinal, amanhã já irá partir em rumo à terra de Inaba, onde servirá o seu novo mestre. Você não sabe muito de Inaba e imagina que tipo de vida viverá lá... Ou estava imaginando, até ouvir um barulho esquisito vindo do lado de fora do Dojo.`,
    choices: [
      {
        text: "Ir investigar",
        nextPage: 68,
      },
      {
        text: "Procurar alguém que possa te informar o que acontece",
        nextPage: 68,
      },
    ],
  },

  {
    id: 68,
    text: `Você percebe que está sozinho no alojamento; isso te deixa pouca opção além de ir investigar por conta própria o que está acontecendo. Então você vê vários de seus colegas pupilos estirados no chão. Infelizmente, você sabe que eles não estão em um torpor alcóolico. O sangue que banha a parte de fora do Dojo denuncia isso.
    
    Você não sabe ainda quem fez isso... mas eles irão pagar.
    
    Esse pensamento passa por sua cabeça quando você escuta o tinir de aço colidindo vindo do lado de fora do Dojo.`,
    choices: [
      {
        text: "Correr em direção ao lado de fora do Dojo para descobrir o que acontece",
        nextPage: 69,
      },
    ],
  },

  {
    id: 69,
    text: `Devido aos acontecimentos da noite anterior, o seu corpo simplesmente não está respondendo como de costume. Isso pesa em sua mente quando você chega ao lado de fora e vê Minamoto ofegante, dando tudo de si para conter um grupo de homens desconhecidos. 
    
    Você conta cinco ou seis homens, todos armados com espadas, enfrentando o seu mestre. Tem pelo menos mais dois caídos no chão.`,
    choices: [
      {
        text: "Correr para o lado de Minamoto",
        nextPage: 70,
      },
      {
        text: "Aguardar uma abertura para se armar com a espada de um dos homens caídos",
        nextPage: 71,
      },
    ],
    place: "Lado de fora do Minamoto Dojo",
  },

  {
    id: 70,
    text: `Você corre, mesmo desarmado, para enfrentar os bandidos ao lado de seu mestre. Não há tempo para conversa. 
    
    Analisando a forma como eles lutam, não há dúvidas de que apenas Minamoto já teria dado cabo deles em um dia normal; quanto mais um Dojo inteiro. A forma é imperfeita e os movimentos são previsíveis. Contudo... o estado atual do seu corpo impede que você faça movimentos muito bruscos no momento.`,
    choices: [
      {
        text: "Aguardar um ataque de um dos homens para derrubá-lo",
        nextPage: 72,
      },
      {
        text: "Ir para cima e desarmar um dos homens com as suas próprias mãos",
        nextPage: 73,
      },
    ],
  },

  {
    id: 71,
    text: `Um dos homens te percebe e o que você tenta fazer. Ele joga as armas para longe com o seu pé e te obriga a assumir posição de combate ao lado de Minamoto sem armas, mesmo.
    
    Analisando a forma como eles lutam, não há dúvidas de que apenas Minamoto já teria dado cabo deles em um dia normal; quanto mais um Dojo inteiro. A forma é imperfeita e os movimentos são previsíveis. Contudo... o estado atual do seu corpo impede que você faça movimentos muito bruscos no momento.`,
    choices: [
      {
        text: "Aguardar um ataque de um dos homens para derrubá-lo",
        nextPage: 72,
      },
      {
        text: "Ir para cima e desarmar um dos homens com as suas próprias mãos",
        nextPage: 73,
      },
    ],
  },

  {
    id: 72,
    text: `Sua estratégia é sólida e certamente funcionaria muito bem em um momento diferente. No momento, porém, seus movimentos estão lentos e você atinge um impasse com o bandido à sua frente.
    
    Ou era isso que estava ocorrendo até a cabeça dele ser cortada.
    
    Olhando para o lado, você vê Minamoto ainda contendo os outros bandidos como se fossem lobos. Ao passo que o corpo do criminoso cai, você vê o rosto do seu salvador...
    
    Ou salvadora. Kaoru!`,
    choices: [
      {
        text: "Agradecer e perguntar o que ela faz ali",
        nextPage: 74,
      },
      {
        text: "Rapidamente se armar e entrar em postura para a luta",
        nextPage: 74,
      },
    ],
  },

  {
    id: 73,
    luck: -1,
    text: `A sua decisão foi equivocada. O homem que você atacou te empurra para trás, te desequilibrando e jogando no chão. Ele se prepara para um golpe de finalização e você se vê enxarcado de sangue...
    
    Contudo, não o seu sangue. Você vê uma lâmina perfurando o seu suposto algoz. Olhando para o lado, você vê Minamoto ainda contendo os outros bandidos como se fossem lobos. Ao passo que o criminoso cai, você vê o rosto do seu salvador...
    
    Ou salvadora. Kaoru!`,
    choices: [
      {
        text: "Agradecer e perguntar o que ela faz ali",
        nextPage: 74,
      },
      {
        text: "Rapidamente se armar e entrar em postura para a luta",
        nextPage: 74,
      },
    ],
  },

  {
    id: 74,
    text: `Kaoru não diz nada a você ou a Minamoto, apenas assume a posição de combate ao lado de vocês. O que está para ocorrer não será bonito... para os bandidos. Você se arma com a espada do homem que Kaoru acabou de abater.`,
    choices: [
      {
        text: "Esmagar o criminoso à sua frente",
        test: true,
        moralRequirement: 2,
        failPage: 77,
        nextPage: 75,
      },
      {
        text: "Jogar poeira sobre os olhos do bandido à sua frente e atacar",
        test: true,
        moralRequirement: -2,
        failPage: 77,
        nextPage: 76,
      },
      {
        text: "Pedir para Kaoru defender a sua retaguarda e investir com tudo",
        nextPage: 77,
      },
      {
        text: "Manter-se apenas defendendo a retaguarda de Kaoru e Minamoto",
        nextPage: 78,
      },
    ],
  },

  {
    id: 75,
    text: `O infeliz recipiente do seu ataque teve a sorte de não ter sobrevivido o bastante para sentir dor. Bastou um brutal corte para que ele fosse retalhado ao meio.`,
    choices: [
      {
        text: "Voltar-se para o resto da batalha",
        nextPage: 78,
      },
    ],
  },

  {
    id: 76,
    text: `De maneira bem sagaz, você engana o criminoso à sua frente e o torna um alvo fácil. Você o finaliza com uma habilidosa estocada no peito esquerdo. Esse não volta mais.`,
    choices: [
      {
        text: "Ver o que mais está ocorrendo na batalha",
        nextPage: 78,
      },
    ],
  },

  {
    id: 77,
    luck: -1,
    text: `O que você tentou fazer não dá certo e você é jogado no chão. Quando está prestes a receber um ataque que pode significar o seu fim, Minamoto intervém e retalha o seu atacante. Ele te olha preocupado, mas também como quem pede para que você volte à batalha.`,
    choices: [
      {
        text: "Ver como mais você pode contribuir com o combate",
        nextPage: 78,
      },
    ],
  },

  {
    id: 78,
    text: `Um a um, Kaoru ceifa os bandidos que ousaram atacar o Minamoto Dojo. Não demora muito para que restasse apenas um, pateticamente caído no chão. Kaoru aponta a sua lâmina ensanguentada para o pescoço do infeliz.
    
    "Anda, diga logo, não temos tempo a perder," ela diz ao homem, que aparenta confusão.
    
    "Não se faça de bobo. Vocês atacaram exatamente no momento certo. Quem foi que mandou vocês aqui? Quem nos traiu?!"
    
    O homem chora, hesita, mas finalmente solta: "O... o nome dele... o nome dele era Adachi."`,
    choices: [
      {
        text: "...?!",
        nextPage: 79,
      },
    ],
  },

  {
    id: 79,
    text: `A confusão toma conta do ambiente. Como poderia Adachi fazer isso? Ele que esteve com vocês desde o início do seu treinamento, sempre sendo o fiel ajudante de Minamoto... Que razão ele poderia ter para causar tanto estrago?!
    
    Como quem admite o próprio crime, Adachi sai do Dojo, caminha lentamente até o mestre e se prostra diante dele.
    
    Pela primeira vez desde que você o conhece, Minamoto está em lágrimas. Ele ecoa a pergunta que está nas mentes de todos:
    
    "Por quê?!"`,
    choices: [
      {
        text: "...",
        nextPage: 80,
      },
    ],
  },

  {
    id: 80,
    text: `"Olha o estrago que você causou, Adachi! Tudo está perdido... tudo. Por quê?!"
    Adachi levanta a cabeça, e olha para Kaoru.
    
    "Por causa dela," o traidor responde.
    
    "Como você bem sabe, nós só funcionamos até hoje porque o dinheiro do pai comerciante dela nos manteve em pé. A Corte já não nos sustenta... E você sabe. Eu queria manter o Dojo em pé, mas eu precisa... eu precisava--"
    
    "Basta!", Minamoto o interrompe, se vira, e dá o seu veredito:
    
    "Adachi, não importa que motivos altruístas você possa ter tido... você destruiu esse Dojo, você destruiu a minha-- a nossa marca na história. Em respeito aos seus anos de serviço: vá. Se eu não te ver novamente, você seguirá vivendo."`,
    choices: [
      {
        text: "...",
        nextPage: 81,
      },
    ],
  },

  {
    id: 81,
    text: `Adachi deixa o recinto. Kaoru então enxota o único bandido restante, que agradece a todas as divindades que conhece pela misericórdia. 
    
    Ela se curva diante de Minamoto. Segurando a espada rente ao seu corpo, ela começa a falar.
    
    "Mestre, por favor," ela aumenta a sua voz, "por favor, me permita ser uma guerreira. Por favor, me permita levar o nome do Minamoto Dojo à frente!"
    
    "Kaoru," Minamoto responde, "você deve ir."`,
    choices: [
      {
        text: "O quê?",
        nextPage: 82,
      },
    ],
  },

  {
    id: 82,
    text: `"Kaoru, Hikari, a verdade é que eu nunca deveria ter treinado vocês. Nenhum de vocês. Esse Dojo deveria ter fechado anos atrás," Minamoto diz. "treinar Kaoru em troca do dinheiro do pai dela foi um erro. Eu achei que poderia ser bom manter o Dojo vivo... mas foi a causa de toda essa ruína. Eu não posso permitir que você carregue o nosso nome depois disso."
    
    Kaoru levanta o rosto e não é capaz de conter o choque e as lágrimas. "O.. o que o senhor quer dizer com isso?"
    
    "Kaoru," Minamoto responde, "você é tão responsável quanto Adachi por essa destruição. O fato de ter nos salvado não te absolve disso. Você também está banida daqui."
    
    Kaoru abaixa a cabeça e não responde nada. Ela já deixou de ter alguma expressão em seu rosto. Sem palavras, ela simplesmente some da cena.`,
    choices: [
      {
        text: "Tentar dizer algo a ela",
        nextPage: 83,
      },
      {
        text: "Deixar que ela se vá sem dizer nada",
        nextPage: 83,
      },
    ],
  },

  {
    id: 83,
    text: `"Quanto a você, Hikari," o mestre continua, "você tem um mestre a servir. Peço que vá imediatamente."`,
    choices: [
      {
        text: "Obedecer a Minamoto e se preparar para partir",
        nextPage: 84,
      },
    ],
  },

  {
    id: 84,
    text: `Você mal acredita em tudo o que aconteceu hoje. Toda a festa, toda a glória de seguir no caminho do guerreiro... toda a ilusão foi despedaçada. O mundo agora parece ser um lugar terrível.
    
    Independente disso, esse é o caminho onde você se encontra hoje. Um guerreiro não luta apenas por si, mas por seu clã. E o clã Inaba, ao qual você deve jurar a sua lealdade em breve, te aguarda. Você não ouviu muita histórias sobre Inaba. O fato de não saber o que te aguarda causa ansiedade... mas não tanta quanto saber que você não tem para onde voltar.`,
    choices: [
      {
        text: "Partir para Inaba para conhecer o seu novo clã",
        nextPage: 85,
      },
    ],
  },

  {
    id: 85,
    text: `Esse é o fim do Ato I do Conto de Hikari!
    
    Obrigado por jogar!`,
    choices: [
      {
        text: "Jogar novamente",
        nextPage: 0,
      },
    ],
  },
];

const disclaimerPage = {
  text: `Disclaimer: Esse é um jogo de ficção interativa. Qualquer semelhança com eventos, pessoas ou grupos reais é mera coincidência. 

  Este jogo não contém imagens, porém pode conter descrições de cenas violentas e, portanto, pode não ser recomendável a todos os públicos. 

  "O Conto de Hikari" se baseia na cultura japonesa, porém quaisquer nomes ou palavras derivadas da língua japonesa foram adaptadas para a escrita romanizada.

  Bom divertimento!`,
  choices: [
    {
      text: "Reiniciar o Jogo",
      nextPage: 0,
    },
  ],
};

const howToPlay1 = {
  text: `Como Jogar:

O básico de como jogar O Conto de Hikari é extremamente simples!

1) Clique em "Começar" para iniciar o jogo;
2) Leia a história e clique em uma das opções para prosseguir;
3) Repita o passo 2 até receber uma das telas de "Fim de Jogo";
4) Caso queira ver o que aconteceria se escolhesse diferente em algum ponto ou só gostaria de ver mais finais, clique em "Jogar novamente" e repita os passos de 1 a 3!

Você pode apertar nos botões que estarão no canto da tela para ler o Disclaimer ou a estas instruções novamente. Também pode clicar no "kanji" no centro-superior para ativar ou desativar o Modo Escuro.

Moral & Pontos de Sorte:
  
  Um aspecto diferente em O Conto de Hikari é o sistema de progressão incluso. Em primeiro lugar, há o sistema de "Moral". A Moral é uma barra de valor numérico cujo valor se estende de -5 a 5, e ela diz respeito ao estilo de combate empregado por Hikari.

Valores tendendo a 5 dizem respeito à Brutalidade, que supõe um estilo de combate agressivo e físico, enquanto a extremidade oposta demonstra que Hikari conta com a sua Astúcia, uma abordagem que enfatiza a sagacidade e a agilidade para confrontar seus inimigos no lugar da força pura. As escolhas do jogador devem ser fiéis ao estilo usado por Hikari para que ele possa ter sucesso em combate. Consistência é chave!

Além disso, em vez dos tradicionais "hit points", "HP" ou "vida", neste jogo Hikari conta com a sua sorte; ou, "Pontos de Sorte". Eles representam a quantidade de vezes que o jogador pode tomar alguma decisão errada antes do personagem ter um fim trágico. Apesar disso, alguns inimigos são impiedosos e nem a sorte de Hikari o protegerá. Portanto, muita cautela!`,
  choices: [
    {
      text: "Reiniciar o jogo",
      nextPage: 0,
    },
  ],
};

const howToPlay2 = {
  text: "",
  choices: [
    {
      text: "Voltar",
      nextPage: 2,
    },
    {
      text: "Ver como jogar",
      nextPage: pages.length - 2,
    },
  ],
};

pages.push(disclaimerPage);

pages.push(howToPlay1);

pages.push(howToPlay2);

pages[pages.length - 3].id = pages.length - 3;
pages[pages.length - 2].id = pages.length - 2;
pages[pages.length - 1].id = pages.length - 1;
