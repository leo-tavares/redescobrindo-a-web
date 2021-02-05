var userInput = parseInt(prompt("Insira um número"));
var multiplos = [];

for(var index = 1; index <= userInput; index++){
	if(isMultiplo(index, 5) || isMultiplo(index, 3)){
		multiplos.push(index);
	}
}

function isMultiplo(numeroDeComparacao, numRef){
    return numeroDeComparacao % numRef  === 0;
}
isMultiplo(5, 10)

console.log(multiplos)