function idadeMinimaPorPais(pais) {
  switch (pais) {
    case "brasil":
      return 18;
    case "argentina":
      return 16;
    case "eua":
      return 21;
    default:
      return Number.MAX_SAFE_INTEGER;
  }
}

function podeBeber(idadeDoUsuario, idadeMinimaParaBeber) {
  if (idadeDoUsuario >= idadeMinimaParaBeber) {
    return "você pode 🍺🍺🍺!";
  } else {
    return "✋ você não pode 🍺, que tal um 🥤?";
  }
}

var idadeDoUsuario = prompt(
  "Antes de te vender 🍺, preciso saber sua idade 🤔"
);

var paisDoUsuario = prompt("E qual o teu país?")

var usuarioPodeBeber = podeBeber(idadeDoUsuario, idadeMinimaPorPais(paisDoUsuario));

console.log(usuarioPodeBeber);