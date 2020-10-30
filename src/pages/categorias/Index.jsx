import React, { Component } from "react";
import "./categorias.css";
import axios from "axios";
import GridCard from "../../template/card/gridCard";

const URL_PRODUTO_LISTA = "http://modelagem.test/api/categoria/buscarProdutos/";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
    };
  }
  componentDidMount() {
    this.getProdutos();
  }

  getProdutos = () => {
    axios
      .get(`${URL_PRODUTO_LISTA}` + this.props.params.id)
      .then((resp) => this.setState({ produtos: resp.data }));
  };

  render() {
    const produtos = new Object(this.state.produtos);
    console.log("teste");
    console.log(produtos);

    return (
      <div className="row">
        <div className="filtro column col-md-2 col-12">
          <h4>Marca</h4>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="marca"
              id="marca1"
              value="option1"
            />
            <label className="form-check-label" for="marca1">
              Marca um
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="marca"
              id="marca2"
              value="option2"
            />
            <label className="form-check-label" for="marca2">
              Marca dois
            </label>
          </div>
          <h4>Preço</h4>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="preco"
              id="preco1"
              value="option3"
            />
            <label className="form-check-label" for="preco1">
              Preço x a x
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="preco"
              id="preco2"
              value="option4"
            />
            <label className="form-check-label" for="preco2">
              Preço x a x
            </label>
          </div>
          <h4>ClassNamee</h4>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="classNamee"
              id="classNamee1"
              value="option5"
            />
            <label className="form-check-label" for="classNamee1">
              ClassNamee um
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="classNamee"
              id="classNamee2"
              value="option6"
            />
            <label className="form-check-label" for="classNamee2">
              ClassNamee dois
            </label>
          </div>
        </div>
        <div
          className="cartoes row col-md-10 col-12"
          style={{ marginTop: "60px" }}
        >
          <div className="container">
            {/*<!--Cards-->*/}
            <GridCard produtos={produtos} />
            <GridCard />
          </div>
        </div>
      </div>
    );
  }
}
