import React, { Component } from "react";
import "./finalizarCompra.css";

export default class FinalizarCompra extends Component {
//export default (props) => {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
      total: 0,
    };
    //this.handler = this.handler.bind(this);
  }

  componentDidMount(){

    this.setState({ interval: 
      setInterval(() => {
        let produtos = localStorage.getItem('produtos');
        produtos = JSON.parse(produtos);
        
        let total = 0;
        produtos.forEach(produto => {
          total += produto.total;
        });

        this.setState({total: total});
      }, 100)
    })
    //this.forceUpdate();

  }

  componentWillUpdate(){
    //console.log("change no finalizar")

  }

  componentWillUnmount(){
    clearInterval(this.state.interval);
  }

  converteValor(){
    let t = this.state.total.toFixed(2);
    t = t.toString()
    t = t.replace('.', ',')
    //console.log(t)
    return t;
  }

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

  total = () => {
    let produtos = localStorage.getItem('produtos');
    produtos = JSON.parse(produtos);
    
    let total = 0;
    produtos.forEach(produto => {
      total += produto.total;
    });

    return total;
  }

  render(){

    return (
      <div class="row cart-item">
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12"></div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          {/*
          <span id="cart-price-total" class="cart-total col-12">
            Total: R$: <span id="totalValue">{this.props.total}</span>
          </span>
          */}
          <span id="cart-price-total" class="cart-total col-12">
            Total: R$: <span id="totalValue">{this.converteValor()}</span>
          </span>
          <a href={this.login()}>
            <button type="submit"  class="btn-finalizar-compra col-12">
              Finalizar Compra
            </button>
          </a>
        </div>
      </div>
    );
  }
};
