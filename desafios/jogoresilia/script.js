function exibeMenu(textoPrincipal, opcoes, retornaInfo) {
  var conteudoDoAlert = `${textoPrincipal}\n`;
  for (var index = 0; index < opcoes.length; index++) {
    var opcao = opcoes[index];
    var numeroDaOpcao = index + 1; // cuidado com  ++, pesquise sobre pré e pós incremento
    conteudoDoAlert += `${numeroDaOpcao} - ${opcao}\n`;
  }
  var action;

  if (retornaInfo) {
    action = prompt;
  } else {
    action = alert;
  }

  return action(conteudoDoAlert);
}

var user = [];

function bloco1() {
  exibeMenu(
    "🤨 - Oi, você deve ser o amigo do Bario... espero que nos ajude a entender o motivo de Radiante esta passando por tantos problemas 😔.",[]
  );

  exibeMenu(
    "🙂 Venha... vou te apresantar a Radiante, mas antes me diga o seu nome.", []
  );

  user[0] = exibeMenu("Informe seu nome", [], true);
  exibeMenu("😅 - ... putz esqueci de me apresentar, eu sou o Niquel um comerciante local", []);

  exibeMenu(`👌 - ${user[0]}, agora podemos conhecer Radiante.`, [])
}

bloco1();