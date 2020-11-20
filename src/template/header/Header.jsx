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
import Msg from '../../template/mensagem/Mensagem';
import './header.css';

const URL_CATEGORIA_LISTA = 'http://modelagem.test/api/categoria/listar'

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
          categorias: [],
          search: "",
          msg: ""
        };
        //this.getProdutos();
  
    }

    componentDidMount = () => {
        axios.get(`${URL_CATEGORIA_LISTA}`)
            .then((resp) => {
                this.setState({ categorias: resp.data })
                console.log(`${URL_CATEGORIA_LISTA}`);
        });
        this.exibirMsg();
    }

    changeSearch = event => {
        this.setState({search: event.target.value});
    }

    search = () => {
        browserHistory.push('#/categories/'+this.state.search);
        document.location.reload(true); 
    }

    exibirMsg = () => {
        let local = localStorage.getItem("msg")
        
        if(local){
            this.setState({ msg: local })
            setTimeout(() => {
                this.setState({msg: ""});
                localStorage.removeItem("msg")
              }, 10000);
        }
    }
    
    deslogar = () => {
        localStorage.setItem('msg', "Logout realizado!");
        localStorage.removeItem("Cliente");
        localStorage.removeItem("produtos");
        localStorage.removeItem("pedido");
        browserHistory.push('#/home');
        document.location.reload(true);
    }

    goCategoria(id){
        console.log("categoria"+id);
        browserHistory.push('#/categories/'+id);
        document.location.reload(true);
    }
    testeF = (t) => {
        console.log("teste")
    }
    render(){

        let divLogado;
        let logado = localStorage.getItem('Cliente');
        if(logado){
            logado = JSON.parse(logado);
            divLogado = (
                <div className="row col-6 col-md-2  mx-auto  top-bar-item">
                    <img src="images/user.png" className="imagem-login" id="user" style={{width: '30px', height: '30px'}}></img>
                    <ul className="list-unstyled list-login">
                        <li>
                            <a href="#/profile" className="nome-usuario">{logado.nome}</a>
                        </li>
                        <li>
                            <a href="#/orders" className="a-login">Pedidos</a>
                        </li>
                        <li>
                            <a onClick={this.deslogar} className="a-login">Sair</a>
                        </li>
                    </ul>
                </div>
            )
        }
        else {
            divLogado = (
                <div className="row col-6 col-md-2  mx-auto  top-bar-item">
                    <img src="images/user.png" className="imagem-login" id="user" style={{width: '30px', height: '30px'}}></img>
                    <ul className="list-unstyled list-login">
                        <li>
                            <a href="#/login" className="a-login">Entre</a>
                        </li>
                        
                        <li>
                            <a href="#/register" className="a-login">
                                Cadastre-se</a>
                        </li>
                    </ul>
                </div>
            )
        }
        let msgLogin = (<Msg msg={this.state.msg} id="msgHeader"></Msg>)
        return (
            <>
            <header className="container-fluid headerCustom" onClick={this.testeF}>
            <div className="row align-content-center">
                <div className="col-4 col-md-2 mx-auto  top-bar-item">
                    <a href="#/home" className="a-ps a-custom">
                        <img className="logo" src="images/logo.png" alt="Logo"></img>
                    </a>
                </div>
                <div className="col-8 col-md-6 mx-auto search top-bar-item">
                    <h1 className="col-12" style={{color: "green" }}>Green Hub</h1>
                    <div className="col-12">
                        <input type="email" onChange={this.changeSearch}  className="form-control input-search col-11" placeholder="buscar produtos..."/>
                        <img className="search-img" src="images/search.png" alt="search" onClick={this.search}></img>
                    </div>
                    
                </div>
                {divLogado}
                <div className="col-12 col-md-2  mx-auto top-bar-item">
                    <a href="#/shoppingCart" className="a-ps a-custom img-carrinho"><br></br>
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
        {msgLogin}
        <a name="header"></a> 
        </>
        )
    }
}