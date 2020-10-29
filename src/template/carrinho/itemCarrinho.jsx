import React from "react";
import "./itemCarrinho.css";
import Input from "../inputQuantidade/input";

export default (props) => {
  return (
    <div id="item" class="row cart-item">
      <div class="col-xl-1 col-lg-1 col-md-1 col-sm-12">
        <img class="img-custom" src={props.img} alt="Omega 3" style={{width: "70px", height: "90px"}}></img>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
        <span id="item-name" class="item-main">
          {props.nome}
        </span>
        <br></br>
        <span id="item-desc" class="item-desc-column">
          {props.descricao}
        </span>
      </div>
      <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
        <span id="item-price" class="item-main">
          R$: <span class="itemValue">{props.valor}</span>
        </span>
      </div>
      <Input quantidade={props.quantidade} />
      <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
        <span
          id="item-price-total"
          class="item-main item-price-total"
          style={{ color: "#056608" }}
        >
          R$:{props.total}
        </span>
      </div>
      <div class="col-xl-1 col-lg-1 col-md-1 col-sm-12">
        <img
          id="btn-cancel"
          class="btn-cart-cancel img-custom"
          src="images/cancel-icon.svg"
          alt="cancel-icon"
        ></img>
      </div>
    </div>
  );
};
