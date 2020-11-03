import React, { Component } from "react";
import "./finalizarCompra.css";

export default class FinalizarCompra extends Component {
//export default (props) => {


  login = () => {
  //function login(){
    let cliente = localStorage.getItem('Cliente');
    if(cliente){
      return '#/checkout'
    }
    else {
      return '#/login'
    }
  }

  render(){

    return (
      <div class="row cart-item">
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12"></div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          {/* <span id="cart-price-total" class="cart-total col-12">
            Total: R$: <span id="totalValue">{this.props.total}</span>
          </span> */}
          <a href={ this.login()}>
            <button type="submit"  class="btn-finalizar-compra col-12">
              Finalizar Compra
            </button>
          </a>
        </div>
      </div>
    );
  }
};
