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
      total:0,
    };
  }
  
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    let localCart = localStorage.getItem("produtos");
    localCart = JSON.parse(localCart);
    this.setState({ produtos: localCart });
  };
  calculaTotal = () => {
    const list = this.state.produtos;

  let total = 0
  list.forEach(produto => {
    total += produto.valor_total 

  });
  this.setState({total: total});
   
  };

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
            onChange={this.calculaTotal}
            
           
          />
        );
      });
    } else {
      return "Carrinho Vazio.";
    }
  };

  render() {
    return (
      <div class="shopping_cart">
        <Titulo titulo="carrinho" />
        <Indice items={["Produto", "Preço", "Quantidade", "Total"]} />
        <div>
          {this.exibirProdutos()}
          <Finalizar />
        </div>
      </div>
    );
  }
}
