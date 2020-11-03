import React, { useState, useEffect } from "react";
import "./itemCarrinho.css";
import { browserHistory } from "react-router";

export default (props) => {
  const [cont, setCont] = useState(1);

  useEffect(() => {
    loadProducts();
  });

  let total = parseInt(props.valor) * cont;
  total = JSON.stringify(total);
  total = parseFloat(total).toFixed(2);
  total = total.toString();

  total = total.replace(".", ",");

  const loadProducts = () => {
    let localCart = localStorage.getItem("produtos");
    localCart = JSON.parse(localCart);

    localCart.forEach((item) => {
      if (item.id === props.identificador) {
        item.qtd_item = cont;
        item.valor_total = parseFloat(total);
      }
    });
    let stringCart = JSON.stringify(localCart);
    localStorage.setItem("produtos", stringCart);
  };

  const dellProducts = () => {
    let localCart = localStorage.getItem("produtos");
    localCart = JSON.parse(localCart);

    localCart.forEach((item, indice) => {
      if (item.id === props.identificador) {
        localCart.splice(indice, 1);
      }
    });
    localStorage.clear("produtos");
    let stringCart = JSON.stringify(localCart);
    localStorage.setItem("produtos", stringCart);
    browserHistory.push("#/shoppingCart");
    document.location.reload(true);
  };

  const minusDell = ()=>{
    if(cont >= 0){
      dellProducts()
      // browserHistory.push("#/shoppingCart");
      // document.location.reload(true);
    }
  }
  return (
    <div id="item" class="row cart-item img">
      <div class="col-xl-1 col-lg-1 col-md-1 col-sm-12">
        <img src={props.img} alt="suplemento" style={{ height: "90px" }}></img>
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

      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
        <div class="input-group">
          <div class="input-group-prepend">
            <button
              onClick={() => {
                setCont(cont - 1);
                loadProducts();
                minusDell();
              }}
              class="color-qtd btn-minus"
              type="button"
            >
              <img
                src="minus.png"
                style={{ width: "32px", height: "32px" }}
                alt=""
              />
            </button>
          </div>

          <div class="quantidade" onChange={props.onChange}>
            {cont}
          </div>

          <div class="input-group-prepend">
            <button
              onClick={() => {
                setCont(cont + 1);
                loadProducts();
              }}
              class="color-qtd btn-plus"
              type="button"
            >
              <img
                src="plus.webp"
                style={{ width: "32px", height: "32px" }}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">
        <span
          id="item-price-total"
          class="item-main item-price-total"
          style={{ color: "#056608" }}
        >
          R$:{total}
        </span>
      </div>

      <div class="col-xl-1 col-lg-1 col-md-1 col-sm-12">
        <button
          className="dellProducts"
          onClick={() => {
            dellProducts();
          }}
          type="button"
        >
          <img
            id="btn-cancel"
            class="btn-cart-cancel img-custom"
            src="images/cancel-icon.svg"
            alt="cancel-icon"
          ></img>
        </button>
      </div>
    </div>
  );
};
