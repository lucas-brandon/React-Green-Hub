import React from "react";
//import "./header.css";

export default (props) => {

  const exibirCategorias = () => {
    const list = props.categorias || [];
    return list.map(item => {
    
        return ( 
            <li className="col-12 col-md-2 nav-item nav-item-custom" key={item.id}>
                <a onClick={() => props.onClick(item.id)} className="nav-link nav-link-custom a-custom">{item.descricao}</a>
            </li>
        )
    })
  }



  return (
    <>
      {exibirCategorias()}
    </>
  );
};
