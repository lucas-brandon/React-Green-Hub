import React from "react";



export default (props) => {

//   let btnMinus = document.getElementsByClassName("btn-minus");
//   let btnPlus = document.getElementsByClassName("btn-plus");
//   let btnCancel = document.getElementsByClassName("btn-cart-cancel");

//   for(let i = 0; i < btnMinus.length; i++){
//     //console.log("valor: "+btnMinus[i]+" no indice: "+i);
//     let input = this.props.quantidade;
//     //console.log("valor: "+input[0]);
//     btnMinus[i].addEventListener("click", function(){
//         //input[0].setAttribute("value", "0");
//         let value = parseInt(input[0].value);
//         value -=1;
//         input[0].value = String(value);
//         if(value == 0){
//             input[0].parentNode.parentNode.parentNode.remove();
//         }
//     });
// }





  return (
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
      <div class="input-group">
        <div class="input-group-prepend">
          <button id="btn-minus" class="color-qtd btn-minus" type="button">
            -
          </button>
        </div>
        {props.quantidade}
        <div class="input-group-prepend">
          <button id="btn-plus" class="color-qtd btn-plus" type="button">
            +
          </button>
        </div>
      </div>
    </div>
  );
};
