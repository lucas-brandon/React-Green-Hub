import React from "react";
import "./titulo.css";

export default (props) => (
  <div class="container-fluid">
    <div class="row title">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <p>{props.titulo}</p>
      </div>
    </div>
  </div>
);
