import React from 'react';
import './header.css';

export default props => {
    return (
        <>
        <header class="container-fluid headerCustom">
        <div class="row top-bar align-content-center">
            <div class="col-4 col-md-2 mx-auto  top-bar-item">
                <a href="#/home" class="a-ps a-custom">
                    <img class="logo" src="images/logo.png" alt="Logo"></img>
                </a>
            </div>
            <div class="col-8 col-md-4 mx-auto  search top-bar-item">
                <input class="form-control form-control-custom" type="search" placeholder="Search " aria-label="Search"></input>
                <a href="#/detalhesProduto/{id}" class=" a-custom">
                    <img src="images/search.png" id="search" style={{width: '20px', height: '20px'}}></img>
                </a>
            </div>
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
            <div class="col-6 col-md-3  mx-auto top-bar-item">
                <a href="#/shopping_cart" class="a-ps a-custom"> <span class="badge badge-pill">2</span><br></br>
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
                <a href="#/categorias" class="nav-link nav-link-custom a-custom">Aminoácidos</a>
            </li>
            <li class="col-12 col-md-4 nav-item nav-item-custom">
                <a href="#/categorias" class="nav-link nav-link-custom a-custom">Suplementos-alimentares</a>
            </li>
            <li class="col-12 col-md-2 nav-item nav-item-custom">
                <a href="#/categorias" class="nav-link nav-link-custom a-custom">Vitaminas</a>
            </li>
            <li class="col-12 col-md-2 nav-item nav-item-custom">
                <a href="#/categorias" class="nav-link nav-link-custom a-custom">Fitoterápicos</a>
            </li>
            <li class="col-12 col-md-2 nav-item nav-item-custom">
                <a href="#/categorias" class="nav-link nav-link-custom a-custom">Proteinas</a>
            </li>
        </ul>
    </nav>
    </>
    )
}