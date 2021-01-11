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


