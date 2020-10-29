import React, { Component } from "react";
import "./categorias.css";
{
  /*import axios from 'axios';*/
}

const API = "http://localhost:8081/categorias";

export default class Index extends Component {
  render() {
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
        <div className="cartoes row col-md-10 col-12">
          <div className="col-md-4 col-12">
            <div className="cartao">
              <div className="imgCartao col-12">
                <img
                  src="https://www.gsuplementos.com.br/upload/banner/8aa81255b9340ba8f2eda4edf36ab633.jpg"
                  className="cartao-img"
                  alt="..."
                />
              </div>
              <div className="nomeProdutoCartao col-12">
                <a className="a-categoria" href="#/detalhesProduto/{id}">
                  <h3 className="nomeItem">nome Item</h3>
                </a>
              </div>
              <div className="btnCartao col-12">
                <a className="a-categoria" href="#/shopping_cart">
                  <button type="submit" className="btnCartao comprar">
                    Comprar
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="cartao">
              <div className="imgCartao col-12">
                <img
                  src="https://www.gsuplementos.com.br/upload/banner/8aa81255b9340ba8f2eda4edf36ab633.jpg"
                  k
                  className="cartao-img"
                  alt="..."
                />
              </div>
              <div className="nomeProdutoCartao col-12">
                <h3 className="nomeItem">nome Item</h3>
              </div>
              <div className="btnCartao col-12">
                <a className="a-categoria" href="#/shopping_cart">
                  <button type="submit" className="btnCartao comprar">
                    Comprar
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="cartao">
              <div className="imgCartao col-12">
                <img
                  src="https://www.gsuplementos.com.br/upload/banner/8aa81255b9340ba8f2eda4edf36ab633.jpg"
                  k
                  className="cartao-img"
                  alt="..."
                />
              </div>
              <div className="nomeProdutoCartao col-12">
                <h3 className="nomeItem">nome Item</h3>
              </div>
              <div className="btnCartao col-12">
                <a className="a-categoria" href="#/shopping_cart">
                  <button type="submit" className="btnCartao comprar">
                    Comprar
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="cartao">
              <div className="imgCartao col-12">
                <img
                  src="https://www.gsuplementos.com.br/upload/banner/8aa81255b9340ba8f2eda4edf36ab633.jpg"
                  k
                  className="cartao-img"
                  alt="..."
                />
              </div>
              <div className="nomeProdutoCartao col-12">
                <h3 className="nomeItem">nome Item</h3>
              </div>
              <div className="btnCartao col-12">
                <a className="a-categoria" href="#/shopping_cart">
                  <button type="submit" className="btnCartao comprar">
                    Comprar
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="cartao">
              <div className="imgCartao col-12">
                <img
                  src="https://www.gsuplementos.com.br/upload/banner/8aa81255b9340ba8f2eda4edf36ab633.jpg"
                  k
                  className="cartao-img"
                  alt="..."
                />
              </div>
              <div className="nomeProdutoCartao col-12">
                <h3 className="nomeItem">nome Item</h3>
              </div>
              <div className="btnCartao col-12">
                <a className="a-categoria" href="#/shopping_cart">
                  <button type="submit" className="btnCartao comprar">
                    Comprar
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="cartao">
              <div className="imgCartao col-12">
                <img
                  src="https://www.gsuplementos.com.br/upload/banner/8aa81255b9340ba8f2eda4edf36ab633.jpg"
                  k
                  className="cartao-img"
                  alt="..."
                />
              </div>
              <div className="nomeProdutoCartao col-12">
                <h3 className="nomeItem">nome Item</h3>
              </div>
              <div className="btnCartao col-12">
                <a className="a-categoria" href="#/shopping_cart">
                  <button
                    type="submit"
                    className="btnCartao comprar"
                    href="#/shopping_cart"
                  >
                    Comprar
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
