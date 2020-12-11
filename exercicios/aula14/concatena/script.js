function concatenar(str1, str2) {
  return `${str1} ${str2}`;
}

function exibe(val) {
  document.write(val);
}

function text(val) {
  return `<span style="font-size:20px;">${val}</span>`;
}

const stringConcatenada = concatenar("Olá", "Mundo!");

exibe(text(stringConcatenada));
