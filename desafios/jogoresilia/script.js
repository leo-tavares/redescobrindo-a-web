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

function find(collection, item){
    for (let index = 0; index < collection.length; index++) {
        const element = collection[index];
        if(element === item){
            return true;
            break;
        }
    }
    return false
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

function bloco2(){
    exibeMenu("🙂 - Radiante como você pode notar é uma cidade pequena, nossa ecônimia é mantida pelo comércio local... até que...bom... deixa pra lá 🤐.", [])
    exibeMenu("🙂 - Além do centro da cidade temos alguns locais que precisa conhecer. O que você quer conheçer primerio?", [])
    user[1] = [];//lista de locais conhecidos
    user[1][0] = parseInt(exibeMenu("Informa uma das opções", ["Rio","mercearia", "hostel", "⭐ especial ⭐"], true));

    if(find(user[1], 4)){
        exibeMenu(`🤔 - ( ${user[0]} pergunta a Niquel ) Podemos checar a estação de tratamento de esgoto?`)
        exibeMenu("😑 - É sério que você quer ir até lá? O que acha de conheçer minha merceário primeiro 😅? ", []);
        exibeMenu(`${user[0]} e Niquel vão para a mercearia`, [])
        bloco2Mercearia()
    }

}

function bloco2Mercearia(){

}

function bloco2Rio(){

}

function bloco2Hostel(){

}

bloco1();
bloco2();
