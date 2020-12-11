function restoDaDivisao(dividendo, divisor) {
  return dividendo % 9;
}

function formatResult(dividendo, divisor, resto) {
  return "O resto de " + dividendo + " dividio por " + divisor + " é: " + resto;
}

function exibe(val) {
  document.write(val);
}

function text(val) {
  return `<span style="font-size:20px;">${val}</span>`;
}

var dividendo = window.prompt("Informa um número?", 0);
var divisor = 9;
var resto = restoDaDivisao(dividendo, divisor);

const salutation = formatResult(dividendo, divisor, resto);

exibe(text(salutation));
