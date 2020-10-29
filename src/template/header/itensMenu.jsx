import React from "react";
import "./header.css";

export default (props) => {
  return (
    <li class="col-12 col-md-2 nav-item nav-item-custom">
      <a href="#/categorias" class="nav-link nav-link-custom a-custom">
        {props.item}
      </a>
    </li>
  );
};
