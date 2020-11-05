import React from "react";

import Item from "./item";

export default (props) => {
  const exibirItem = () => {
    const list = props.items || [];

    const path = "#/orders/";

    return list.map((item) => (
      <Item
        name={item}
      />
    ));
  };

  return <div className="row cart-header">{exibirItem()}</div>;
};

