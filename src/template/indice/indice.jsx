import React from "react";

import Item from "./item";

export default (props) => {
  const exibirItem = () => {
    const list = props.items || [];

    const path = "#/orders/";

    return list.map((item) => (
      <Item
        name={item}
        class="col-xl-3 col-lg-3 col-md-3 col-sm-12"
      />
    ));
  };

  //return <div className="row cart-header">{exibirItem()}</div>;
  return (
    <div className="row cart-header">
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
        <span>Produto</span>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
        <span>Preço</span>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
        <span>Quantidade</span>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
        <span>Total</span>
      </div>
      <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12">
        <span></span>
      </div>
    </div>
  )
};

