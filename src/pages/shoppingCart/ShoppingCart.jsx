import React, { Component } from "react";

import "./shoppingCart.css";
//import "./shoppingCart.js";
import ItemCart from "../../template/carrinho/itemCarrinho";
import Finalizar from "../../template/carrinho/finalizarCompra";

import axios from "axios";
import itemCarrinho from "../../template/carrinho/itemCarrinho";
const URL_PRODUTO_BUSCAR = "http://modelagem.test/api/produtos/buscar/";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
      total: [],
    };
  }
  componentDidMount() {
    this.loadProducts();
  }
  loadProducts = () => {
    let localCart = localStorage.getItem("produtos");
    localCart = JSON.parse(localCart);
    this.setState({ produtos: localCart });
    console.log("carrinho teste");
    console.log(localCart);
  };

  exibirProdutos = () => {
    let localCart = localStorage.getItem("produtos");
    localCart = JSON.parse(localCart);



    const path = "#/detalhesProduto/";

    return localCart.map(item => (
        <itemCarrinho/>
         ))
}

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
            <Finalizar />
          </div>
        </div>
      </>
    );
  }
}
