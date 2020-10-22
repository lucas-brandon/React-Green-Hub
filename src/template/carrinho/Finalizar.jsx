import React from 'react';

export default props => {
    return (
 <div class="row cart-item">
 <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12"></div>
 <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
     <span id="cart-price-total" class="cart-total col-12">Total: R$: <span id="totalValue">39.90</span></span>
     <a href="#/checkout"><button type="submit" class="btn-finalizar-compra col-12">Finalizar Compra</button></a>
 </div>
</div>
)
}