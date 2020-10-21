import React, {Component} from 'react';
import './finished.css';

export default class Finished extends Component {


    render() {
        return (
            <>
<div class="containerFinished">
        <p class="text-center tituloFinished">Compra finalizada com sucesso!</p>
    </div>
            
    <div class="testeFinished">
        <div class="text-center" id="item1">Anote o número do pedido!</div>
        <div class="text-center" id="item2">Pedido n° 12345</div>
        <div class="text-center" id="item3">Agradecemos a preferência</div>
        <div class="text-center" id="item4">Após o pagamento confirmaremos o envio por email</div>
        <div class="itemFinished">
            <a href="#/historico"><button type="button submit" class="button botaoPedidos">Histórico de pedidos</button></a>
        </div>
     </div>
            </>
        )
    }
}