var listDeNomes = ["LeoTavares", "Vitor vaz", "Victor", "Ana Vitória"];

//varrendo minha lista e construindo um botão para cada item
for (var index = 0; index < listDeNomes.length; index++) {
  var nome = listDeNomes[index];
  createButton(nome, index);
}

function Alert(name) {
  alert(name);
}

function createButton(nome, index) {
  document.write(
    "<button onClick='Alert(" + '"' + nome + '"' + ")'>" + nome + "</button>"
  );
}