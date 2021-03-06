import React, { Component } from "react";
import "./detalhesProduto.css";
import Titulo from "../../template/titulo/titulo";
import { Link, browserHistory } from "react-router";
import Input from "../../template/inputQuantidade/input";

import axios from "axios";

const URL_PRODUTO_BUSCAR = "http://modelagem.test/api/produtos/buscar/";

export default class DetalhesProduto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: null,
      quantidade: 1,
      id_produto: 0,
      produto: undefined,
    };
  }

  componentDidMount() {
    this.getProduto();
  }

  getProduto = () => {

    axios
      .get(`${URL_PRODUTO_BUSCAR}` + this.props.params.id)
      .then((resp) => this.setState({ produto: resp.data }));

    let cliente = localStorage.getItem("Cliente");
    cliente = JSON.parse(cliente);
  
    console.log("existe cliente?\n\n"+cliente);

    if (cliente) {
      this.setState({ cliente: cliente })
    }

    // axios
    //   .get(`${URL_PRODUTO_BUSCAR}` + this.props.params.id)
    //   .then((resp) =>
    //     console.log(
    //       "teste\n\n\n\n\n" + `${URL_PRODUTO_BUSCAR}` + this.props.params.id
    //     )
    //   );
  };
  changeEstado = (event) => {
    this.setState({ quantidade: event.target.value });
  };

  addItem = () => {

    let cliente = localStorage.getItem("Cliente");
    cliente = JSON.parse(cliente);

    console.log("existe cliente?\n\n"+cliente)

    
    console.log("teste");
    console.log(this.state.produto);
    let valor = JSON.stringify(this.state.produto.valor);
    valor = parseFloat(valor).toFixed(2);
    valor = valor.toString();

    valor = valor.replace(".", ",");

    let localCart = localStorage.getItem("produtos");
    localCart = JSON.parse(localCart);

    console.log("print do estado")
    console.log(this.state)

    //create a copy of our cart state, avoid overwritting existing state
    let cartCopy = localCart;

    //assuming we have an ID field in our item
    let id = this.props.params.id;

    let existingItem;
    //look for item in cart array
    if (cartCopy) {
      existingItem = cartCopy.find((cartItem) => cartItem.id === id);
    }

    //if item already exists
    if (existingItem) {
      existingItem.qtd_item += this.state.quantidade; //update item
    } else {
      if (!cartCopy) {
        cartCopy = [];
      }
      cartCopy.push({
        id: this.props.params.id,
        qtd_item: this.state.quantidade,
        nome_produto: this.state.produto.nome_produto,
        ds_produto: this.state.produto.ds_produto,
        preco_valor: valor,
        imagem: this.state.produto.imagem,
      });
  
    }
    
      
      //make cart a string and store in local space
      let stringCart = JSON.stringify(cartCopy);
      localStorage.setItem("produtos", stringCart);
      localStorage.setItem('msg', "Produto "+this.state.produto.nome_produto+" adicionado no carrinho");
      
      
      browserHistory.push('#/shoppingCart/');
      document.location.reload(true); 
  };

  
  render() {
   
    // eslint-disable-next-line no-new-object
    const produto = new Object(this.state.produto);

    let valor = JSON.stringify(produto.valor);
    valor = parseFloat(valor).toFixed(2);
    valor = valor.toString();

    valor = valor.replace(".", ",");

    return (
      <>
        <Titulo name="Detalhes do Produto" />
        <div class="cartao">
          <div class="row">
            <div class="col-12 col-md-4">
              <img src={produto.imagem} style={{width:'210px', height: '280px'}}class="cartao-img" alt="..." />
            </div>
            <div class="col-12 col-md-8">
              <div class="card-body">
                <p class="marcaItem">{produto.nm_marca}</p>
                <a class="a-detalhes" href="#/details">
                  <h3 class="nomeItem">{produto.nome_produto}</h3>
                </a>
                <h4 class="preco">R$ {valor}</h4>
                <p class="descricaoItem">{produto.ds_produto}</p>
                
                
                <button type="submit" class="comprar" onClick={this.addItem}>
                  Comprar
                </button>
                
              </div>
            </div>
          </div>
        </div>
        <script src="assets/scripts/detalhesDoProduto.js"></script>
        <script src="assets/js/detalhesDoProduto.js"></script>
      </>
    );
  }
}
