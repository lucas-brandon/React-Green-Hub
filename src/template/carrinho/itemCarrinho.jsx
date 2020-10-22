import React from 'react';
import './itemCarrinho.css'

export default props => {
    return (

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

    )
}