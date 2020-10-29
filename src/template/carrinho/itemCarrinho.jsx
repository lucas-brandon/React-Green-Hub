import React, { useState , useEffect} from "react";
import "./itemCarrinho.css";



export default (props) => {
  const [cont, setCont] = useState(1);

  let total = cont * props.valor

 
//   useEffect(() => {
   
//     let localCart = localStorage.getItem("produtos");
//     localCart = JSON.parse(localCart);

//     localCart.forEach((element) => {
//       if (element.id === props.id) {
//         element.preco_valorTotal = total;
//       }
//     });
//     let stringCart = JSON.stringify(localCart);
//     localStorage.setItem("produtos", stringCart);
//     console.log()
//     console.log(stringCart)
  
// })

  return (
    <div id="item" class="row cart-item">
      <div class="col-xl-1 col-lg-1 col-md-1 col-sm-12">
        <img class="img-custom" src={props.img} alt="Omega 3"></img>
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
            onClick={() => setCont(cont - 1)}
            class="color-qtd btn-minus"
            type="button"
          >
           <img src="https://cdn.icon-icons.com/icons2/1244/PNG/512/1492790963-7remove_84188.png" style={{width: '35px', height: '35px'}} alt=""/>
          </button>
        </div>

        <div class="quantidade">{cont}</div>

        <div class="input-group-prepend">
          <button
            onClick={() => setCont(cont + 1)}
            class="color-qtd btn-plus"
            type="button"
          >
           <img src="https://cdn.icon-icons.com/icons2/1993/PNG/512/add_circle_create_expand_new_plus_icon_123218.png" style={{width: '40px', height: '40px'}} alt=""/>
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
