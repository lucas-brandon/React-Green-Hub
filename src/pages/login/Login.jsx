import React, { Component } from "react";
import "./login.css";

import Titulo from "../../template/titulo/titulo";
import axios from 'axios';
const URL_PRODUTO_LISTA = 'http://modelagem.test/api/produtos/listar';


export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }

  componentDidMount() {
    this.getProdutos();
  }

  getProdutos = () => {
    axios
      .get(`${URL_PRODUTO_LISTA}`)
      .then((resp) => this.setState({ produtos: resp.data }));
      
  };

  render() {
    const produtos = new Object(this.state.produtos);
    console.log('teste');
    console.log(produtos);

    return (
  
      <>
      <Titulo titulo="Entrar" />
        <div class="container" id="box">
          <form class="form-signin">
            {/*<img class="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">*/}
            <h1 class="h3 mb-3 font-weight-normal" id="Titulo">Entre na sua conta</h1>
            <label for="inputEmail" class="sr-only">exemplo@email.com</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="exemplo@email.com" required autofocus></input>
            <br></br>
            <label for="inputPassword" class="sr-only">Senha</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required></input>
            {/*
            <a href="https://www.google.com.br/"> <span class="psw">Esqueci minha senha </span>
            </a>
            <br></br>
            */}
            <button class="btn btn-lg btn-primary btn-block" type="submit" id="Entrar">Entrar</button>
            <br></br>
            <a href="#/register" class="btn btn-lg btn-primary btn-block Cadastrar" type="submit"> Não tem conta? Cadastrar</a>

          </form>
        </div>
      </>
    );
  }
}
