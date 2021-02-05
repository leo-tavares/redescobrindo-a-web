var listaDeNumeros = [1,2,3,-5,6,-10];

function somaNumeros(lista){
	var acc = 0;
	for(var index = 0; index < lista.length; index++){
		acc += lista[index];
	}
	return acc;
}

function ignorandoNumerosNegativos(lista){
	var listaAuxiliar = [];
	for(var index = 0; index < lista.length; index++){
		var valor = lista[index];
		if(valor >= 0){
			listaAuxiliar.push(valor);
		}
	}
	return listaAuxiliar;
}

var resultado = somaNumeros(ignorandoNumerosNegativos(listaDeNumeros))

console.log("⭐ " + resultado + " ⭐");