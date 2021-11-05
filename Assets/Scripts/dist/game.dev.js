"use strict";

window.onload = function () {
  // Atributos da página
  var textElement = document.getElementById("text");
  var choicesElement = document.getElementById("choices");
  var howToPlayElement = document.getElementById("how-to-play");
  var disclaimerElement = document.getElementById("disclaimer");
  var backElement = document.getElementById("back");
  var bodyElement = document.getElementById("body");
  var savedId; // Regendo o modo escuro

  var darkModeElement = document.getElementById("dark-mode");
  var darkModeMenuElement = document.getElementById("dark-mode-menu");
  var darkModeToggle = false; // Adiciona um modo escuro ao jogo, clicando no kanji de Hikari

  darkModeElement.addEventListener("mousedown", function () {
    return darkMode();
  });
  darkModeMenuElement.addEventListener("mousedown", function () {
    return darkMode();
  });

  function darkMode() {
    darkModeToggle = !darkModeToggle;

    if (darkModeToggle === true) {
      disclaimerElement.classList.remove("btn-dark");
      howToPlayElement.classList.remove("btn-dark");
      backElement.classList.remove("btn-dark");
      disclaimerElement.classList.add("btn-light");
      howToPlayElement.classList.add("btn-light");
      backElement.classList.add("btn-light");
      bodyElement.classList.add("bg-dark");
      bodyElement.classList.add("text-light");
      darkModeElement.classList.remove("bg-dark");
      darkModeElement.classList.add("bg-light");
      darkModeElement.classList.remove("text-white");
    } else {
      disclaimerElement.classList.add("btn-dark");
      howToPlayElement.classList.add("btn-dark");
      backElement.classList.add("btn-dark");
      disclaimerElement.classList.remove("btn-light");
      howToPlayElement.classList.remove("btn-light");
      backElement.classList.remove("btn-light");
      bodyElement.classList.remove("bg-dark");
      bodyElement.classList.remove("text-light");
      darkModeElement.classList.add("bg-dark");
      darkModeElement.classList.remove("bg-light");
      darkModeElement.classList.add("text-white");
    }
  } // Atributos do personagem & Status


  var moralElement = document.getElementById("moral");
  var luckElement = document.getElementById("luck");
  var placeElement = document.getElementById("place");
  var actElement = document.getElementById("current-act"); // Atributos da lógica do jogo
  // let isDeadly;

  var nextPageId; //   Para inicar o jogo

  function startGame() {
    showCurrentPage(1);
    moralElement.innerText = 0;
    luckElement.innerText = 1;
    placeElement.innerText = "?";
    actElement.innerText = "I";
  } // Para que o jogo saiba em que página o jogador se encontra


  function showCurrentPage(index) {
    var showPage = pages.find(function (currentPage) {
      return currentPage.id === index - 1;
    }); // Mostra o texto

    textElement.innerText = showPage.text; // Atualiza os valores de status

    if (showPage.place) {
      placeElement.innerText = showPage.place;
    }

    if (showPage.act) {
      actElement.innerText = showPage.act;
    }

    if (showPage.luck) {
      if (showPage.luck > 0) {
        luckAdd(showPage.luck);
      } else if (showPage.luck < 0 && luckElement.innerText >= 0) {
        luckElement.innerText--;
      }
    } // Remove as opções padrão


    while (choicesElement.firstChild) {
      choicesElement.removeChild(choicesElement.firstChild);
    } // Mostra as opções


    pages[index - 1].choices.forEach(function (currentChoice) {
      var label = document.createElement("label");
      label.innerText = currentChoice.text;
      label.classList.add("btn-secondary");
      label.classList.add("btn");
      label.classList.add("shadow");
      label.addEventListener("mousedown", function () {
        return selectChoice(currentChoice);
      });
      choicesElement.appendChild(label);
    }); // Para mostrar o menu principal

    if (showPage.id === 0) {
      document.getElementById("menu-header").classList.remove("d-none");
      document.getElementById("status-header").classList.add("d-none");
      document.getElementById("continue").classList.add("d-none");
      document.getElementById("footer-buttons").classList.add("d-none");
    } else {
      document.getElementById("menu-header").classList.add("d-none");
      document.getElementById("status-header").classList.remove("d-none");
      document.getElementById("status-header").classList.add("invisible");
      document.getElementById("continue").classList.remove("d-none"); // Acrescentando os botões da parte de baixo

      if (showPage.id > 3) {
        document.getElementById("footer-buttons").classList.remove("d-none");
        document.getElementById("back").classList.add("d-none");
        document.getElementById("status-header").classList.remove("invisible");
      }

      if (showPage.id > pages.length - 4) {
        document.getElementById("back").classList.remove("d-none");
      }
    }

    var currentId = pages[index - 1].id;

    if (currentId < pages.length - 4) {
      savedId = currentId + 1;
    }
  } // Regendo os botões no fim da tela


  function footerButtons(button) {
    if (button === "disclaimer") {
      nextPageId = pages.length - 2;
    } else if (button === "howToPlay") {
      nextPageId = pages.length - 1;
    } else if (button === "back") {
      nextPageId = savedId;
    }

    showCurrentPage(nextPageId);
  }

  disclaimerElement.addEventListener("mousedown", function () {
    return footerButtons("disclaimer");
  });
  howToPlayElement.addEventListener("mousedown", function () {
    return footerButtons("howToPlay");
  });
  backElement.addEventListener("mousedown", function () {
    return footerButtons("back");
  }); // Checa se passou no teste de atributo (teste com requerimento 0 sempre passam)

  function checkStats(moralRequirement) {
    if (moralRequirement > 0) {
      return moralElement.innerText >= moralRequirement;
    } else if (moralRequirement < 0) {
      return moralElement.innerText <= moralRequirement;
    } else {
      return true;
    }
  } // Checa se é possível acrescentar pontos de Sorte


  function luckAdd() {
    if (luckElement.innerText < 3) {
      luckElement;
      luckElement.innerText++;
    }
  } // Modifica o valor da moral


  function moralChange(value) {
    if (value > 0 && moralElement.innerText < 5 && moralElement.innerText >= 0) {
      moralElement.innerText++;
    } else if (value < 0 && moralElement.innerText > -5 && moralElement.innerText <= 0) {
      moralElement.innerText--;
    }
  } // // Checa se uma decisão errada causou fim de jogo
  // function checkDead() {
  //   return luckElement.innerText === 0 && isDeadly === true;
  // }
  // Selecionando escolha


  function selectChoice(choice) {
    // Checa se testes são necessários e se passou nos testes
    if (choice.test) {
      if (checkStats(choice.moralRequirement)) {
        nextPageId = choice.nextPage;
      } else if (!checkStats(choice.moralRequirement)) {
        nextPageId = choice.failPage;
      }
    } else {
      nextPageId = choice.nextPage;

      if (choice.moral) {
        moralChange(choice.moral);
      }
    } // Reinício do jogo


    if (nextPageId <= 0) {
      return startGame();
    } else {
      return showCurrentPage(nextPageId + 1);
    }
  }

  startGame();
};