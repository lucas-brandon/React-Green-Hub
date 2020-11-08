import React from "react";
import "./button.css";

export default (props) => {
  return (
<button
  type="button"
  id="adicionar1"
  id="produto1"
  onclick="AddCarrinho('Sabão', document.getElementById('qtd1').value, '2.00', 1)"
>
  {" "}
  Comprar{" "}
</button>
  )
}
