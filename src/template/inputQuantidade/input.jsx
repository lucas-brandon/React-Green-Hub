import React, { useState , useEffect} from "react";
import "./input.css";

export default (props) => {
  const [cont, setCont] = useState(1);

 

  // const loadProducts = () => {
  //   let localCart = localStorage.getItem("produtos");
  //   localCart = JSON.parse(localCart);

  //   localCart.forEach((element) => {
  //     if (element.id === props.id) {
  //       element.qtd_item = cont;
  //     }
  //   });
  //   let stringCart = JSON.stringify(localCart);
  //   localStorage.setItem("produtos", stringCart);
  // };

  return (
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
      <div class="input-group">
        <div class="input-group-prepend">
          <button
            onClick={() => setCont(cont - 1)}
            class="color-qtd btn-minus"
            type="button"
          >
            -
          </button>
        </div>

        <div class="quantidade">{cont}</div>

        <div class="input-group-prepend">
          <button
            onClick={() => setCont(cont + 1)}
            class="color-qtd btn-plus"
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
