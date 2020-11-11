import React from "react";
import "../../template/profile/cardCartao.css";
import { browserHistory } from 'react-router';
import axios from 'axios';
const DELETAR_CARTAO = 'http://modelagem.test/api/cartao/deletar/';

export default props => {
    const deletar = () => {
        axios.delete(`${DELETAR_CARTAO}` + props.id)
        .then(resp => {
            console.log(resp.data);
            browserHistory.push('#/profile');
            }
        )
    }

    return (
        <div class="col-3" style={{marginBottom:"50px"}}>
            <div class="card-m">
                <div class="card-body">
                    <h5 class="valor">{props.bandeira}</h5>
                    <p><mark>{props.nrCartao}</mark></p>
                    <p><mark>{props.validade}</mark></p>
                    <button type="submit" onClick={deletar()}>DELETAR</button>
                </div>
            </div>
        </div>
    )
}