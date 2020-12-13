function exibe(val, breakline) {
  console.log(val + (breakline ? "\n" : ""));
}
exibe("Olá 👋! Bem vindo a Bebederia!");
exibe("1 - Refrigerante 🥤");
exibe("2 - Suco 🥤");
exibe("3 - Água 🥤");

var escolhaDoCliente = Number(prompt("Escolha um dos itens!", 1));

if (!escolhaDoCliente) {
  alert("Informe apenas números");
} else if (escolhaDoCliente > 0 && escolhaDoCliente <= 3) {
  exibe(escolhaDoCliente);
} else {
  exibe("Opção não encontrada");
}
