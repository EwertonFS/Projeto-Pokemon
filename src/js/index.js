/*
Obejetivo 1- Quando clicarmos na seta avançar temos que mostror o proximo cartao da lista

-passo1 - dar um jeito de pegar o elemento HTML da seta avancar 
-passo 2 -dar um jeito de identificar o clique do ususario na seta avançar 
-passo 3 - fazer aparecer o proxmo cartão da lista
-passo4- Buscar o proximo cartão selecionado e esconder HTML

Objetivo 2 -  Quando clicarmos na seta avançar temos que mostror o anterior cartao da lista

-passo1 - dar um jeito de pegar o elemento HTML da seta votar 
-passo 2 -dar um jeito de identificar o clique do ususario na seta voltar
-passo 3 - fazer aparecer o cartão anterior  da lista
-passo4- Buscar o  cartão anterior  selecionado e esconder HTML

*/
// window.alert("vamos jogar ")

// Obejetivo 1- Quando clicarmos na seta avançar temos que mostror o proximo cartao da lista
// console.log(document.getElementById("btn-avancar"));

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
// -passo 3 - fazer aparecer o cartão anterior  da lista
const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0;
// passo 2 -dar um jeito de identificar o clique do ususario na seta avançar

btnAvancar.addEventListener("click", function () {
  
    // ou escrever if(cartaoAtual===[2])return
  
    if(cartaoAtual===cartoes.length -1){    
    return 
  };
  
  
  //   const cartaoAtual= cartaoAtual +1; ou
  cartaoAtual++;
  console.log(cartaoAtual)
  cartoes[cartaoAtual].classList.add("selecionado");
  //
  //   4-Buscar o proximo cartão selecionado e esconder HTML
  const cartaoSelecionado = document.querySelector(".selecionado");
  // console.log(cartaoSelecionado)
  cartaoSelecionado.classList.remove("selecionado");
});


btnVoltar.addEventListener("click", function () {
   
    if(cartaoAtual===cartoes.length -3){    
        return 
      };
   
   
    const cartaoSelecionado = document.querySelector(".selecionado");
    // console.log(cartaoSelecionado)
    cartaoSelecionado.classList.remove("selecionado");

  
  //   const cartaoAtual= cartaoAtual +1; ou
  cartaoAtual--;
  console.log(cartaoAtual)
  cartoes[cartaoAtual].classList.add("selecionado");
  //
  //   4-Buscar o proximo cartão selecionado e esconder HTML
});
