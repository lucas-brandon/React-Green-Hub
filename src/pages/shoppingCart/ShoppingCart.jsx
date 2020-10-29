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
