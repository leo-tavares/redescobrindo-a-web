function exibe(val, breakline) {
  console.log(val + (breakline ? "\n" : ""));
}
exibe("Olá 👋! Bem vindo a Bebederia!");
exibe("1 - Refrigerante 🥤");
exibe("2 - Suco 🥤");
exibe("3 - Água 🥤");

var escolhaDoCliente = Number(prompt("Escolha um dos itens!", 1));

switch (escolhaDoCliente) {
  case 1:
    exibe("Refrigerante 🥤");
    break;
  case 2:
    exibe("Suco 🥤");
    break;
  case 3:
    exibe("Água 🥤");
    break;
  default:
    exibe("opção inválida")
    break;
}