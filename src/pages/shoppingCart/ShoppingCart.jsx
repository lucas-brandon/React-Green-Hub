import React, { Component } from "react";
import "./shoppingCart.css";
import "./shoppingCart.js";
import Finalizar from "../../template/carrinho/Finalizar";
import ItemCarrinho from "../../template/carrinho/ItemCarrinho";

export default class ShoppingCart extends Component {
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
            <ItemCarrinho />
            <ItemCarrinho />
            <Finalizar />
          </div>
        </div>
      </>
    );
  }
}
