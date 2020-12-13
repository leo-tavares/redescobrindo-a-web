function idadeMinimaPorPais(pais) {
  switch (pais) {
    case "brasil":
      return 18;
    case "argentina":
      return 17;
    case "eua":
      return 16;
    default:
      return Number.MAX_SAFE_INTEGER;
  }
}

function podeDirigir(idadeDoUsuario, idadeMinimaParaDirigir) {
  if (idadeDoUsuario >= idadeMinimaParaDirigir) {
    return "você pode 🚗!";
  } else {
    return "✋ você não pode 🚗! No momento você não tem a idade minima!";
  }
}

var idadeDoUsuario = prompt("Qual a tua idade?!");

var paisDoUsuario = prompt("E qual o teu país?")

var usuariopodeDirigir = podeDirigir(idadeDoUsuario, idadeMinimaPorPais(paisDoUsuario));

console.log(usuariopodeDirigir);