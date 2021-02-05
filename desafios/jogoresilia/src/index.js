import Bloco from "./components/bloco/index.js";
import { createElement } from "./utils.js";

const personagem = {
  name: "",
  places: [""],
};

const { Container, ButtonNext } = Bloco({
  title: "Bem vindo a Radiante",
  contexto: `Radiante é conhecida por ser um local calmo e tranquilo, com baixos
indícies de criminalidade e uma boa expectativa de vida. A natureza desse
lugar se sobrepoem a tecnologia, todos seus recursos naturais parecem mais
"vivos" como se tivesse algo especial nesse lugar. A economia é fortemente
local, os próprios habitantes se fortalecem pois eles valorizam o que é
produzido por sua comunidade.Há alguns meses as coisas começaram a mudar, algumas pragas começaram a
consumir parte da vegatação algumas pessoas começaram a adoecer, ninguem
sabe exatamente o que aconteceu com Radiante, mas esse lugar não é mais o
mesmo.a
`,
  opts: [],
  imagePath: "./src/assets/img/radiante.jpg",
  buttonText: "Avançar",
});

ButtonNext.onclick = function () {
  bloco1();
};
document.body.append(Container);

function bloco1() {
  const { Container, ButtonNext, Contexto, Image } = Bloco({
    title: "Bem vindo a Radiante",
    contexto: `🤨 - Oi, você deve ser o amigo do Bario... espero que nos ajude a entender o motivo de Radiante esta passando por tantos problemas 😔.
        🙂 Venha... vou te apresantar a Radiante, mas antes me diga o seu nome.`,
    opts: [],
    imagePath: "./src/assets/img/hand-shake.png",
    buttonText: "Avançar",
  });
  Image.style.width = "30vw";
  const nameInput = createElement("input", "input__name");
  Container.insertBefore(nameInput, ButtonNext);

  ButtonNext.onclick = function () {
    personagem.name = nameInput.value;
    nameInput.remove();
    bloco1_1(Contexto, this);
  };

  document.body.innerHTML = "";
  document.body.append(Container);
}

function bloco1_1(Contexto, buttonThis) {
  Contexto.textContent = `😅 - ... putz esqueci de me apresentar, eu sou o Niquel um comerciante local
    👌 - ${personagem.name}, agora podemos conhecer Radiante.`;
  buttonThis.onclick = function () {
    bloco2();
  };
}

function bloco2() {
  const { Container, ButtonNext, Contexto, getInputChecked } = Bloco({
    title: "Conhecendo Radiante",
    contexto: `🙂 - Radiante como você pode notar é uma cidade pequena, nossa ecônimia é mantida pelo comércio local... até que...bom... deixa pra lá 🤐.
  
          🙂 - Além do centro da cidade temos alguns locais que precisa conhecer. O que você quer conheçer primerio?`,
    opts: [
      "Rio",
      "mercearia",
      "hostel",
      "Estação de tratamento de esgoto ⭐ especial ⭐",
    ],
    imagePath: "./src/assets/img/radiante.jpg",
    buttonText: "Avançar",
  });

  ButtonNext.onclick = function () {
    const option = getInputChecked();
    const places = {
      hostel() {
        bloco2__Hostel(Contexto);
      },
    };
    places[option]();
  };

  document.body.innerHTML = "";
  document.body.append(Container);
}

function bloco2__Mercearia(Contexto) {}

function bloco2__Rio(Contexto) {}

function bloco2__Espacial(Contexto) {}

function bloco2__Hostel(Contexto) {
  Contexto.textContent = `😀 - Você acabou de chegar e quer ir descançar? Eu sei que a viajem foi longa mas o que acha de conheçer os outros lugares?`;
}
