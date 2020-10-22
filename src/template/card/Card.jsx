
import React from 'react';
import './card.css'

export default props => {
    return (
            <div class={props.divClass}>
                <div class="card-m">
                    <img src={props.img} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="valor">{props.valor}</h5>
                        <p><mark>{props.nome}</mark></p>
                        <a href={props.link} class="btn-m">{props.msg}</a>
                    </div>
                </div>
            </div>
    )
}

