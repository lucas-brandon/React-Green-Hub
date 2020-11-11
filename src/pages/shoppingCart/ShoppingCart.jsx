import React, { Component } from "react";

import "./shoppingCart.css";

import ItemCart from "../../template/carrinho/itemCarrinho";
import Finalizar from "../../template/carrinho/finalizarCompra";
import Titulo from "../../template/titulo/titulo";
import Indice from "../../template/indice/indice";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
      total: 0,
    };
    //this.handler = this.handler.bind(this);
  }

  //handler(newValue) {
    //return this.setState({total: newValue});
    //setValue(newValue);
  //}

  handler = (event) => {
    this.setState({total: event.target.value});
  }

  componentDidMount() {
    this.loadProducts();
  }

  componentDidUpdate(){
    
  }

  loadProducts = () => {
    let localCart = localStorage.getItem("produtos");
    localCart = JSON.parse(localCart);
    this.setState({ produtos: localCart });

    let todo = 0;
    console.log("map estranho")
    localCart.map((item)=>{
      console.log(item)
      todo += parseFloat(item.valor_total)
    })
    //alert(todo)
   this.setState({total: todo})
  }

  exibirProdutos = () => {
    const list = this.state.produtos;

    if (list != null && list !== undefined) {
      return list.map((id) => {
        return (
          <ItemCart
            divClass="col-md-4 "
            img={id.imagem}
            nome={id.nome_produto}
            descricao={id.ds_Produto}
            quantidade={id.qtd_item}
            valor={id.preco_valor}
            identificador={id.id}
            onChange={this.handler}
          />
        );
      });
    } else {
      return <Titulo titulo="Carrinho Vazio."></Titulo>;
    }
  };
  // calculaTotal = () => {
  //     let list = localStorage.getItem("produtos");
  //     list = JSON.parse(list);
  //     let ctotal = 0;
  //     list.forEach((item) => {
  //       ctotal += parseFloat(item.valor_total);
  //       item.totalCart = parseFloat(ctotal);
  //     });
  //     // this.setState({ total: ctotal });

  //     let stringCart = JSON.stringify(list);
  //     localStorage.setItem("produtos", stringCart);
  //   };
  render() {
    
    return (
      <div class="shopping_cart">
        <Titulo titulo="Carrinho" />
        <Indice items={["Produto", "Preço", "Quantidade", "Total"]} />
        <div>{this.exibirProdutos()}</div>
        <Finalizar total={this.state.total} />
      </div>
    );
  }
}
