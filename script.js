let nome = document.getElementById("Nome");

let altura = document.getElementById("Altura");

let peso = document.getElementById("Peso");

let painel = document.querySelector(".painel");

let botao = document.querySelector(".botao");

function calcular() {
  let alturaValor = parseFloat(altura.value);
  let pesoValor = parseFloat(peso.value);

  if (isNaN(alturaValor) || isNaN(pesoValor) || alturaValor <= 0) {
    painel.innerHTML = "Por favor, insira valores válidos para altura e peso.";
    return;
  }

  let imc = peso.value / (altura.value * altura.value);
  painel.innerHTML = "Seu IMC é: " + imc;
}

botao.addEventListener("click", calcular());
