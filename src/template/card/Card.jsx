
import React from 'react';
import './card.css'

export default props => {
    const path = "#/detalhesProduto/";
    return (
            <div class={props.divClass} style={{marginBottom:"50px"}}>
                <div class="card-m">
                    <img src={props.img} class="card-img-top" alt="..." style={{ height: "190px", marginTop:"25px"}}></img>
                    <div class="card-body">
                        <h5 class="valor">R$ {props.valor}</h5>
                        <p><mark>{props.nome}</mark></p>
                        <p><mark>{props.marca}</mark></p>
                        <a href={path + props.link} class="btn-m">{props.msg}</a>
                    </div>
                </div>
            </div>
    )
}

