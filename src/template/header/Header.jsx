import React from 'react';
import './header.css';

export default props => {
    let logado = localStorage.getItem('Cliente');
    logado = JSON.parse(logado);
    let naologado = localStorage.getItem('Cliente');
    function deslogar () {
        localStorage.removeItem("Cliente");
        window.location.href = "http://localhost:3002/#/home";
    }
    return (
        <><header class="container-fluid headerCustom">
            <div class="row top-bar align-content-center">
                <div class="col-4 col-md-2 mx-auto  top-bar-item">
                    <a href="#/home" class="a-ps a-custom">
                        <img class="logo" src="images/logo.png" alt="Logo"></img>
                    </a>
                </div>
                <div class="col-8 col-md-4 mx-auto  search top-bar-item">
                    <h1  style={{color: "green" }}>Green Hub</h1>
                </div>
                {logado  && 
                    <div class="row col-6 col-md-3  mx-auto  top-bar-item">
                    <ul class="list-unstyled">
                    <a href="#/profile" class="a-ps a-custom">
                        <li>
                            <img src="images/user.png" alt="some text" id="user" style={{width: '30px', height: '30px'}}></img>    
                        </li>
                        <li>{logado.nome}</li></a>
                        <li><a href="#/home" onClick={deslogar()}>sair</a></li>
                    </ul>
                </div>
                }
                {!naologado && 
                <div class="row col-6 col-md-3  mx-auto  top-bar-item">
                    <ul class="list-unstyled">
                        <li>
                            <a href="#/login" class="a-ps a-custom">
                                <img src="images/user.png" alt="some text" id="user" style={{width: '30px', height: '30px'}}></img> Entre
                            </a>
                        </li>
                        <li>
                            <a href="#/register" class="a-ps a-custom">
                                Cadastre-se</a>
                        </li>
                    </ul>
                </div>
                } 
                <div class="col-6 col-md-3  mx-auto top-bar-item">
                    <a href="#/shoppingCart" class="a-ps a-custom"><br></br>
                        <img src="images/cesta.png" alt="Cesta do Carrinho" style={{width: '40px', height: '40px'}}></img>
                    </a>
                </div>
            </div>
        </header>
        <input type="checkbox" id="bt-navbar-m"></input>
        <label class=".bmd-label-static" for="bt-navbar-m">&#9776;</label>
        <nav class="navbar-m navbar-expand{-sm|-md|-lg|-xl} menu ">    
            <ul class="nav-m row">
                <li class="col-12 col-md-2 nav-item nav-item-custom">
                    <a href="#/categorias/1" class="nav-link nav-link-custom a-custom">Aminoácidos</a>
                </li>
                <li class="col-12 col-md-4 nav-item nav-item-custom">
                    <a href="#/categorias/2" class="nav-link nav-link-custom a-custom">Suplementos-alimentares</a>
                </li>
                <li class="col-12 col-md-2 nav-item nav-item-custom">
                    <a href="#/categorias/3" class="nav-link nav-link-custom a-custom">Vitaminas</a>
                </li>
                <li class="col-12 col-md-2 nav-item nav-item-custom">
                    <a href="#/categorias/4" class="nav-link nav-link-custom a-custom">Fitoterápicos</a>
                </li>
                <li class="col-12 col-md-2 nav-item nav-item-custom">
                    <a href="#/categorias/5" class="nav-link nav-link-custom a-custom">Proteinas</a>
                </li>
            </ul>
        </nav></>
    )
}