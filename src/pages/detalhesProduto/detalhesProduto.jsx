import React, { Component } from "react";
import "./detalhesProduto.css";
import Titulo from "../../template/titulo/titulo";
import { Link } from "react-router";

import axios from "axios";

const URL_PRODUTO_BUSCAR = "http://modelagem.test/api/produtos/buscar/";

export default class DetalhesProduto extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    let valor = JSON.stringify(this.state.produto.valor);
    valor = parseFloat(valor).toFixed(2);
    valor = valor.toString();

    valor = valor.replace(".", ",");

    let localCart = localStorage.getItem("produtos");
    localCart = JSON.parse(localCart);

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
        qtd_item: this.state.qtd_item,
        nome_produto: this.state.produto.nome_produto,
        ds_produto: this.state.produto.ds_produto,
        preco_valor: valor,
      });
      //if item doesn't exist, simply add it
    }

    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("produtos", stringCart);
    console.log("teste");
    console.log(stringCart);
  };

  render() {
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
              <img
                src="https://www.gsuplementos.com.br/upload/banner/8aa81255b9340ba8f2eda4edf36ab633.jpg"
                k
                class="cartao-img"
                alt="..."
              />
            </div>
            <div class="col-12 col-md-8">
              <div class="card-body">
                <p class="marcaItem">{produto.nm_marca}</p>
                <a class="a-detalhes" href="./detalhesDoProduto.php">
                  <h3 class="nomeItem">{produto.nome_produto}</h3>
                </a>
                <h4 class="preco">
                  R$ {valor}
                  <button type="submit" class="retirar">
                    -
                  </button>
                  <input
                    onChange={this.changeEstado}
                    class="quantidade"
                    placeholder="1"
                  />
                  <button type="submit" class="adicionar">
                    +
                  </button>
                </h4>
                <p class="descricaoItem">{produto.ds_produto}</p>
                <Link to={`/shoppingCart/`}>
                  <button type="submit" class="comprar" onClick={this.addItem}>
                    Comprar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script src="assets/scripts/detalhesDoProduto.js"></script>
        <script src="assets/js/detalhesDoProduto.js"></script>
      </>
    );
  }
}
