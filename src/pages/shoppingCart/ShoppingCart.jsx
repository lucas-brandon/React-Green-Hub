import React, { Component } from "react";
import "./shoppingCart.css";
import "./shoppingCart.js";

import ItemCart from "../../template/carrinho/itemCarrinho";
import Finalizar from "../../template/carrinho/finalizarCompra";
export default class ShoppingCart extends Component {
  AddCarrinho(produto, qtd, valor, posicao) {
    localStorage.setItem("produto" + posicao, produto);
    localStorage.setItem("qtd" + posicao, qtd);
    valor = valor * qtd;
    localStorage.setItem("valor" + posicao, valor);
    alert("Produto adicionado ao carrinho!");
  }

//   var total = 0; // variável que retorna o total dos produtos que estão na LocalStorage.
//  var i = 0;     // variável que irá percorrer as posições
//  var valor = 0; // variável que irá receber o preço do produto convertido em Float.
 
//  for(i=1; i<=99; i++) // verifica até 99 produtos registrados na localStorage
//  {
// 	 var prod = localStorage.getItem("produto" + i + ""); // verifica se há recheio nesta posição. 
// 	 if(prod != null) 
// 	 {	
// 		 // exibe os dados da lista dentro da div itens
// 		 document.getElementById("itens").innerHTML += localStorage.getItem("qtd" + i) + " x ";
// 		 document.getElementById("itens").innerHTML += localStorage.getItem("produto" + i);
// 		 document.getElementById("itens").innerHTML += " ";
// 		 document.getElementById("itens").innerHTML += "R$: " + localStorage.getItem("valor" + i) + "<hr>";
		 
// 		 // calcula o total dos recheios
// 		 valor = parseFloat(localStorage.getItem("valor" + i)); // valor convertido com o parseFloat()
// 		 total = (total + valor); // arredonda para 2 casas decimais com o .toFixed(2)
// 	 }
//  } 
//  // exibe o total dos recheios
//  document.getElementById("total").innerHTML = total.toFixed(2); 

// <button type="button" onclick=" localStorage.clear(); location.reload();"> Limpar carrinho </button>


  render() {
    return (
      <>
        <div class="shopping_cart">
          <div class="container-fluid">
            <div class="row title">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <p>Carrinho</p>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row cart-header">
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <span>Produto</span>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                <span>Preço</span>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <span>Quantidade</span>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                <span>Total</span>
              </div>
              <div class="col-xl-1 col-lg-1 col-md-1 col-sm-12">
                <span></span>
              </div>
            </div>

            <ItemCart />
            <ItemCart />
            <Finalizar/>

                 
          </div>
        </div>
      </>
    );
  }
}
