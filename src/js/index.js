const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) {
    return;
  }

  cartaoAtual++;
  console.log(cartaoAtual);
  cartoes[cartaoAtual].classList.add("selecionado");

  const cartaoSelecionado = document.querySelector(".selecionado");

  cartaoSelecionado.classList.remove("selecionado");
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 3) {
    return;
  }

  const cartaoSelecionado = document.querySelector(".selecionado");
  
  cartaoSelecionado.classList.remove("selecionado");

  cartaoAtual--;
  console.log(cartaoAtual);
  cartoes[cartaoAtual].classList.add("selecionado");
});
