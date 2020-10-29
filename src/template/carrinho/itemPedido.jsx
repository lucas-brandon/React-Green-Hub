import React from "react";
import "./itemPedido.css";

export default (props) => {
  return (
    <div id="item" class="row cart-item">
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
        <span id="item-status" class="item-main">
            {props.status}
        </span>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
        <span id="item-name" class="item-main">
          {props.codigo}
        </span>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
        <span id="item-name" class="item-main">
          {props.data}
        </span>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
        <span
          id="item-price-total"
          class="item-main item-price-total"
          style={{ color: "#056608" }}
        >
          R$:{props.valor}
        </span>
      </div>
      {/*
      <div class="col-xl-1 col-lg-1 col-md-1 col-sm-12">
        <img
          id="btn-cancel"
          class="btn-cart-cancel img-custom"
          src="images/cancel-icon.svg"
          alt="cancel-icon"
        ></img>
      </div>
      */}
    </div>
  );
};
