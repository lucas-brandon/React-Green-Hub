import React from "react";

export default (props) => {
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
