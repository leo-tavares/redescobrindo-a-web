//Concatenar duas liastas;

var lista1 = [1, 2, 3, 4, 5];
var lista2 = [6, 7, 8, 9, 10];
var lista3 = ["um", "dois", "3"];
//Usando o método "built in" concat
// modo easy
var deUmADez = lista1.concat(lista2);

//Concat feito na "unha" => modo divertido
function concat(primeiraLista, segundaLista) {
  var listaAuxiliar = [];
  copiaLista(primeiraLista, listaAuxiliar);
  copiaLista(segundaLista, listaAuxiliar);
  return listaAuxiliar;
}
//Copia todas as informações de origin para destination
function copiaLista(origin, destination) {
  for (var index = 0; index < origin.length; index++) {
    destination.push(origin[index]);
  }
}

var listaConcatenada = concat(lista1, lista2);

var novaListaConcatenada = concat(listaConcatenada, lista3);
