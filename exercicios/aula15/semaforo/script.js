//No geral amarelo piscante é modo de emergência
var estadoDoSemaforo = prompt("Qual o estado do semáforo", "amarelo");

const semaforo = function (state) {
  switch (state) {
    case "verde":
      console.log("pode passar!");
      break;
    case "amarelo":
      console.log("melhor freiar");
      break;
    case "vermelho":
      console.log("pare já!");
      break;
  }
};

semaforo(estadoDoSemaforo);
