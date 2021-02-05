var variacaoDeDias = 6;

function exibe(val, breakline) {
  document.write(val + (breakline ? "<br>" : ""));
}

function title(texto) {
  return exibe(
    "<span style='display:block; font-size:20px'>" + texto + "</span>"
  );
}

function currencyFormat(valor) {
  return new Intl.NumberFormat("pt-br", {
    currency: "BRL",
    style: "currency",
    maximumFractionDigits: 3,
  }).format(valor);
}

function estimativaInflacaoDiariaPorPeriodo(precoInicio, precoFim, periodo) {
  var inflacao = (precoFim - precoInicio) / periodo;
  return inflacao;
}

function inflacaoDoProduto(precoInicio, precoFim) {
  var inflacao = (precoFim - precoInicio) / precoInicio;
  return inflacao;
}

function inflacaoMediaDeProdutos(inflacaoA, inflacaoB, inflacaoC) {
  var inflacaoMedia = (inflacaoA + inflacaoB + inflacaoC) / 3;
  return inflacaoMedia;
}
//tomate
var precoTomateDia24 = 3.3;
var precoTomateDia30 = 4.7;
var inflacaoBrutaTomate = inflacaoDoProduto(precoTomateDia24, precoTomateDia30);
var estimativaDeInflecaoDiariaTomate = estimativaInflacaoDiariaPorPeriodo(
  precoTomateDia24,
  precoTomateDia30,
  variacaoDeDias
);
//arroz
var precoArrozDia24 = 2.99;
var precoArrozDia30 = 3.25;
var inflacaoBrutaArroz = inflacaoDoProduto(precoArrozDia24, precoArrozDia30);
var estimativaDeInflecaoDiariaArroz = estimativaInflacaoDiariaPorPeriodo(
  precoArrozDia24,
  precoArrozDia30,
  variacaoDeDias
);
//cenoura
var precoCenouraDia24 = 3.99;
var precoCenouraDia30 = 4.14;
var inflacaoBrutaCenoura = inflacaoDoProduto(
  precoCenouraDia24,
  precoCenouraDia30
);
var estimativaDeInflecaoDiariaCenoura = estimativaInflacaoDiariaPorPeriodo(
  precoCenouraDia24,
  precoCenouraDia30,
  variacaoDeDias
);

var inflacaoMedia = inflacaoMediaDeProdutos(
  inflacaoBrutaTomate,
  inflacaoBrutaArroz,
  inflacaoBrutaCenoura
);
exibe("<p>");
title("Tomate");
exibe("Inflação bruta do tomate => ");
exibe(currencyFormat(inflacaoBrutaTomate), true);
exibe("Estimativa de inflação diária do tomate => ");
exibe(currencyFormat(estimativaDeInflecaoDiariaTomate), true);
exibe("</p>");

exibe("<p>");
title("Arroz");
exibe("Inflação bruta do arroz => ");
exibe(currencyFormat(inflacaoBrutaArroz), true);
exibe("Estimativa de inflação diária do arroz => ");
exibe(currencyFormat(estimativaDeInflecaoDiariaArroz), true);
exibe("</p>");

exibe("<p>");
title("Cenoura");
exibe("Inflação bruta do cenoura => ");
exibe(currencyFormat(inflacaoBrutaCenoura), true);
exibe("Estimativa de inflação diária do cenoura => ");
exibe(currencyFormat(estimativaDeInflecaoDiariaCenoura), true);
exibe("</p>");

title("Geral");
exibe("Inflação média dos produtos", true);
exibe(currencyFormat(inflacaoMedia));
