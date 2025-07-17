const painel = document.querySelector(".painel");
const botao = document.querySelector(".botao");

function calcular() {
  const peso = document.getElementById("Peso").value;
  const altura = document.getElementById("Altura").value;
  const nome = document.getElementById("Nome").value;

  let imc = peso / (altura * altura);

  imc = imc.toFixed(2);

  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Acima do peso";
  } else if (imc < 35) {
    classificacao = "Obesidade grau 1";
  } else if (imc < 40) {
    classificacao = "Obesidade grau 2";
  } else {
    classificacao = "Obesidade grau 3";
  }

  if (nome !== "" && peso !== "" && altura !== "") {
    painel.textContent = `Olá ${nome}, seu IMC é ${imc} e você está ${classificacao}`;
  } else {
    painel.textContent = "Preencha todos os campos";
  }
}
botao.addEventListener("click", calcular);
