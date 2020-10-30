import React, {Component} from 'react';
import './finished.css';
import Titulo from '../../template/titulo/titulo';

export default class Finished extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nr_pedido: 0
        };
    }

    componentDidMount() {
        this.getPedido();
      }

    getPedido = () => {
        let pedidoCart = localStorage.getItem("pedido");
        pedidoCart = JSON.parse(pedidoCart);

        this.setState({nr_pedido: pedidoCart.nr_pedido});

    }


    render() {
        return (
            <>
        <Titulo name="Compra finalizada com sucesso!"/>
            
    <div class="testeFinished">
        <div class="text-center" id="item1">Anote o número do pedido!</div>
        <div class="text-center" id="item2">Pedido n° {this.state.nr_pedido}</div>
        <div class="text-center" id="item3">Agradecemos a preferência</div>
        <div class="text-center" id="item4">Após o pagamento confirmaremos o envio por email</div>
        <div class="itemFinished">
            <a href="#/Pedidos"><button type="button submit" class="button botaoPedidos">Histórico de pedidos</button></a>
        </div>
     </div>
            </>
        )
    }
}