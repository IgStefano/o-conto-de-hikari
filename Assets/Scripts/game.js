window.onload = function () {
  // Atributos da página
  const textElement = document.getElementById("text");
  const choicesElement = document.getElementById("choices");

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
  let moralRequirement;
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
      document.getElementById("continue").classList.remove("d-none");
      if (showPage.id > 3) {
        document.getElementById("footer-buttons").classList.remove("d-none");
      }
    }
  }

  function checkStats(moralRequirement) {
    if (moralRequirement > 0) {
      return moralElement >= moralRequirement;
    } else if (moralRequirement < 0) {
      return moralElement <= moralRequirement;
    } else {
      return true;
    }
  }

  function checkDead() {
    return luckElement === 0 && isDeadly === true;
  }

  // Selecionando escolha
  function selectChoice(choice) {
    // Checa se teste são necessários e se passou nos testes
    if (choice.test) {
      console.log(choice.test);
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
