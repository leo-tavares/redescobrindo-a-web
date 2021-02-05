var bulbo_queimado = true;

var lampada_desplugada = true;

function plugarLampada() {
  lampada_desplugada = true;
  console.log("Lampada plugada...");
}

function trocarBulbo() {
  bulbo_queimado = true;
  console.log("Bulbo trocado...");
}

function comprarNovaLampada() {
  console.log("Uma nova Lampada foi comprada!!");
}

if (lampada_desplugada) {
  plugarLampada();
} else {
  if (bulbo_queimado) {
    trocarBulbo();
  } else {
    comprarNovaLampada();
  }
}
