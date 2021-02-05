function greetings(name) {
  return "Olá " + name + "." + "Tudo bem " + name + "?";
}

function exibe(val) {
  document.write(val);
}

function text(val) {
  return `<span style="font-size:20px;">${val}</span>`;
}

var userName = window.prompt("Qual o seu nome?")

const salutation = greetings(userName)

exibe(text(salutation));

