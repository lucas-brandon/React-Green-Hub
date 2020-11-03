import React, { Component } from "react";
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
    browserHistory
  } from "react-router";
import ItensMenu from './itensMenu';
import './header.css';

const URL_CATEGORIA_LISTA = 'http://modelagem.test/api/categoria/listar'

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
          categorias: []
        };
        //this.getProdutos();
  
    }

    componentDidMount = () => {
        axios.get(`${URL_CATEGORIA_LISTA}`)
            .then((resp) => {
                this.setState({ categorias: resp.data })
                console.log(`${URL_CATEGORIA_LISTA}`);
        });
    }

    
    deslogar = () => {
        localStorage.removeItem("Cliente");
        browserHistory.push('#/home');
        document.location.reload(true);
    }

    goCategoria(id){
        console.log("categoria"+id);
        browserHistory.push('#/categorias/'+id);
        document.location.reload(true);
    }
    render(){

        let divLogado;
        let logado = localStorage.getItem('Cliente');
        if(logado){
            logado = JSON.parse(logado);
            divLogado = (
                <div className="row col-6 col-md-3  mx-auto  top-bar-item">
                    <ul className="list-unstyled">
                        <li>
                            <a href="#/profile" className="a-ps a-custom">
                                <img src="images/user.png" alt="some text" id="user" style={{width: '30px', height: '30px'}}></img>
                            </a>
                        </li>
                        <li>{logado.nome}</li>
                        <li>
                            <a onClick={this.deslogar}>sair</a>
                        </li>
                    </ul>
                </div>
            )
        }
        else {
            divLogado = (
                <div className="row col-6 col-md-3  mx-auto  top-bar-item">
                    <ul className="list-unstyled">
                        <li>
                            <a href="#/login" className="a-ps a-custom">
                                <img src="images/user.png" alt="some text" id="user" style={{width: '30px', height: '30px'}}></img> Entre
                            </a>
                        </li>
                        <li>
                            <a href="#/register" className="a-ps a-custom">
                                Cadastre-se</a>
                        </li>
                    </ul>
                </div>
            )
        }


        return (
            <>
            <header className="container-fluid headerCustom">
            <div className="row top-bar align-content-center">
                <div className="col-4 col-md-2 mx-auto  top-bar-item">
                    <a href="#/home" className="a-ps a-custom">
                        <img className="logo" src="images/logo.png" alt="Logo"></img>
                    </a>
                </div>
                <div className="col-8 col-md-4 mx-auto  search top-bar-item">
                    <h1  style={{color: "green" }}>Green Hub</h1>
                </div>
                {divLogado}
                <div className="col-6 col-md-3  mx-auto top-bar-item">
                    <a href="#/shoppingCart" className="a-ps a-custom"><br></br>
                        <img src="images/cesta.png" alt="Cesta do Carrinho" style={{width: '40px', height: '40px'}}></img>
                    </a>
                </div>
            </div>
        </header>
        <input type="checkbox" id="bt-navbar-m"></input>
        <label className=".bmd-label-static" htmlFor="bt-navbar-m">&#9776;</label>
        <nav className="navbar-m navbar-expand{-sm|-md|-lg|-xl} menu ">
            <ul className="nav-m row">
                <ItensMenu categorias={this.state.categorias} onClick={this.goCategoria}></ItensMenu>
            </ul>
        </nav>
        </>
        )
    }
}