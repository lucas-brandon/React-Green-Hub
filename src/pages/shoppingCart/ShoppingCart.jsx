import React, {Component} from 'react';
import './shoppingCart.css';
import './shoppingCart.js';

export default class ShoppingCart extends Component {


    render() {
        return (
            <>
            <div class="shopping_cart">
                <div class="container-fluid">
                    <div class="row title">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <p>Carrinho</p>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row cart-header">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <span>Produto</span>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                            <span>Preço</span>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                            <span>Quantidade</span>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                            <span>Total</span>
                        </div>
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-12">
                            <span></span>
                        </div>
                    </div>

                    {/*div para mensagem quando não existe item no carrinho*/}
                    {/*
                    <div class="row cart-item">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <span>Nenhum produto no carrinho.</span>
                        </div>
                    </div>
                    */}

                    {/*div para item do carrinho*/}
                    <div id = "item" class="row cart-item">
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-12">
                            <img class="img-custom" src="images/omega3.png" alt="Omega 3"></img>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <span id="item-name" class="item-main">Nome Produto</span><br></br>
                            <span id="item-desc" class="item-desc-column">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales tempor sapien id euismod. Integer nec erat vitae libero efficitur imperdiet.</span>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
                            <span id="item-price" class="item-main">R$: <span class="itemValue">39.90</span></span>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <button id="btn-minus" class="color-qtd btn-minus" type="button">-</button>
                                </div>
                                <input type="text" class="input color-qtd" placeholder="" aria-label="" maxlength="2" size="2" value="1"></input>
                                <div class="input-group-prepend">
                                    <button id="btn-plus" class="color-qtd btn-plus" type="button">+</button>
                                </div>
                            
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                            <span id="item-price-total" class="item-main item-price-total" style={{color: '#056608'}}>R$: <span class="itemTotalValue">39.90</span></span>
                        </div>
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-12">
                            <img id="btn-cancel" class="btn-cart-cancel img-custom" src="images/cancel-icon.svg" alt="cancel-icon"></img>
                        </div>
                    </div>
                    {/*fim da div para item do carrinho*/}

                    {/*div para item do carrinho*/}
                    <div class="row cart-item">
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-12">
                            <img class="img-custom" src="images/omega3.png" alt="Omega 3"></img>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <span id="item-name" class="item-main">Nome Produto</span><br></br>
                            <span id="item-desc" class="item-desc-column">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales tempor sapien id euismod. Integer nec erat vitae libero efficitur imperdiet.</span>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
                            <span id="item-price" class="item-main">R$: <span class="itemValue">39.90</span></span>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <button id="btn-minus" class="color-qtd btn-minus" type="button">-</button>
                                </div>
                                <input type="text" class="input color-qtd" placeholder="" aria-label="" maxlength="2" size="2" value="1" disabled></input>
                                <div class="input-group-prepend">
                                    <button id="btn-plus" class="color-qtd btn-plus" type="button">+</button>
                                </div>
                            
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                            <span id="item-price-total" class="item-main item-price-total" style={{color: '#056608'}}>R$: <span class="itemTotalValue">39.90</span></span>
                        </div>
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-12">
                            <img id="btn-cancel" class="btn-cart-cancel img-custom" src="images/cancel-icon.svg" alt="cancel-icon"></img>
                        </div>
                    </div>
                    {/*fim da div para item do carrinho*/}

                    {/*div para finalizar compra do carrinho*/}
                    <div class="row cart-item">
                        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12"></div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <span id="cart-price-total" class="cart-total col-12">Total: R$: <span id="totalValue">39.90</span></span>
                            <a href="#/checkout"><button type="submit" class="btn-finalizar-compra col-12">Finalizar Compra</button></a>
                        </div>
                    </div>
                    {/*fim da div para finalizar compra do carrinho*/}
                </div>
            </div>
            </>
        )
    }
}