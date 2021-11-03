window.onload = function () {
  // Atributos da página
  const textElement = document.getElementById("text");
  const choicesElement = document.getElementById("choices");
  const howToPlayElement = document.getElementById("how-to-play");
  const disclaimerElement = document.getElementById("disclaimer");

  // Atributos do personagem & Status
  let moralElement = document.getElementById("moral");
  moralElement.innerText = 0;
  let luckElement = document.getElementById("luck");
  luckElement.innerText = 1;
  let placeElement = document.getElementById("place");
  placeElement.innerText = "?";
  let actElement = document.getElementById("current-act");
  actElement.innerText = "I";

  // Atributos da lógica do jogo
  let isDeadly;
  let nextPageId;

  //   Para inicar o jogo
  function startGame() {
    showCurrentPage(1);
  }

  // Para que o jogo saiba em que página o jogador se encontra
  function showCurrentPage(index) {
    const showPage = pages.find((currentPage) => currentPage.id === index - 1);

    // Mostra o texto
    textElement.innerText = showPage.text;

    // Atualiza os valores de status
    if (showPage.place) {
      placeElement.innerText = showPage.place;
    }
    if (showPage.act) {
      actElement.innerText = showPage.act;
    }
    if (showPage.moral) {
      moralChange(showPage.moral);
    }
    if (showPage.luck) {
      if (showPage.luck > 0) {
        luckAdd(showPage.luck);
      } else if (showPage.luck < 0) {
        luckElement.innerText--;
      }
    }

    // Remove as opções padrão
    while (choicesElement.firstChild) {
      choicesElement.removeChild(choicesElement.firstChild);
    }

    // Mostra as opções
    pages[index - 1].choices.forEach((currentChoice) => {
      const label = document.createElement("label");
      label.innerText = currentChoice.text;
      label.classList.add("btn-secondary");
      label.classList.add("btn");
      label.addEventListener("click", () => selectChoice(currentChoice));
      choicesElement.appendChild(label);
    });

    // Para mostrar o menu principal
    if (showPage.id === 0) {
      document.getElementById("menu-header").classList.remove("d-none");
      document.getElementById("status-header").classList.add("d-none");
      document.getElementById("continue").classList.add("d-none");
      document.getElementById("footer-buttons").classList.add("d-none");
    } else {
      document.getElementById("menu-header").classList.add("d-none");
      document.getElementById("status-header").classList.remove("d-none");
      document.getElementById("status-header").classList.add("invisible");
      document.getElementById("continue").classList.remove("d-none");
      if (showPage.id > 3) {
        document.getElementById("footer-buttons").classList.remove("d-none");
        document.getElementById("status-header").classList.remove("invisible");
      }
    }

    // Regendo os botões no fim da tela
    function footerButtons(button) {
      let currentId = pages[index - 1].id;
      console.log(currentId);
      if (button === "disclaimer") {
        nextPageId = 1001;
      } else if (button === "howToPlay") {
        nextPageId = 1002;
      }
      showCurrentPage(nextPageId);
    }

    disclaimerElement.addEventListener("click", () =>
      footerButtons("disclaimer")
    );
    howToPlayElement.addEventListener("click", () =>
      footerButtons("howToPlay")
    );
  }

  // Checa se passou no teste de atributo (teste com requerimento 0 sempre passam)
  function checkStats(moralRequirement) {
    if (moralRequirement > 0) {
      return moralElement >= moralRequirement;
    } else if (moralRequirement < 0) {
      return moralElement <= moralRequirement;
    } else {
      return true;
    }
  }

  // Checa se é possível acrescentar pontos de Sorte
  function luckAdd() {
    if (luckElement.innerText < 3) {
      luckElement;
      luckElement.innerText++;
    }
  }

  // Modifica o valor da moral
  function moralChange(value) {
    if (value > 0) {
      moralElement.innerText++;
    } else if (value < 0) {
      moralElement.innerText--;
    }
  }

  // Checa se uma decisão errada causou fim de jogo
  function checkDead() {
    return luckElement.innerText === 0 && isDeadly === true;
  }

  // Selecionando escolha
  function selectChoice(choice) {
    // Checa se teste são necessários e se passou nos testes
    if (choice.test) {
      if (checkStats(choice.moralRequirement)) {
        nextPageId = choice.nextPage;
      } else if (!checkStats(choice.moralRequirement)) {
        nextPageId = choice.failPage;
      }
    } else {
      nextPageId = choice.nextPage;
    }

    // Reinício do jogo
    if (nextPageId <= 0) {
      return startGame();
    } else {
      return showCurrentPage(nextPageId + 1);
    }
  }
  startGame();
};
