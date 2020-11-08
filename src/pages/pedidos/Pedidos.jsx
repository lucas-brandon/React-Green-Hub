import React, { Component } from "react";
import "./pedidos.css";
import ItemCart from "../../template/carrinho/itemPedido";
import Finalizar from "../../template/carrinho/finalizarCompra";
import Titulo from "../../template/titulo/titulo";
import Indice from "../../template/indice/indice";
import axios from "axios";

const URL_PEDIDOS_LISTA = 'http://modelagem.test/api/pedidos/listar';

export default class Pedidos extends Component {

    constructor(props) {
        super(props);
        this.state = {
          pedidos: [],
          total: [],
        };
    }
    componentDidMount() {
        this.listarPedidos();
    }
    listarPedidos = () => {
        axios.get(`${URL_PEDIDOS_LISTA}`)
        .then((resp) => this.setState({ pedidos: resp.data }));
        console.log("listar pedidos\n\n\n\n")
    };
    changeEstado = (event) => {
        this.setState({ quantidade: event.target.value });
    };

    exibirPedidos = () => {
        console.log("dentro da exibição de pedidos\n")
        console.log(this.state.pedidos)
        const list = this.state.pedidos
        
        
        if (list != null && list !== undefined) {
          
          return list.map(item => {
    
            item.valor = parseFloat(item.valor).toFixed(2);
            item.valor = item.valor.toString();
    
            item.valor = item.valor.replace(".", ",");

            let status = "Em Andamento";
            if(item.status_pedido_id == 1)
            {
                status = "Em Andamento"
            }
         
            return (<><ItemCart
              divClass="col-md-3 "
              status= {status}
              codigo={item.nr_pedido}
              valor={item.valor}
              data={item.dt_pedido}
              key={item.id}
            />
            </>
            )
          });
        } else {
          return "Carrinho Vazio.";
        }
      };


    render() {
        //const produtos = new Object(this.state.produtos);
        //console.log(produtos);

        return (
                <>

            {/*}
            <div class="container pedidos">
                <div class="row">
                    <div class="col-12" id="historico">
                        <h2>Histórico de Pedidos</h2>
                    </div>
                </div>

                <div class="container" id="lista">
                    <div class="row">
                        <div class="col-3">
                            <h3>Data</h3>
                        </div>
                        <div class="col-4">
                            <h3>Descrição</h3>
                        </div>
                        <div class="col-3">
                            <h3>Quantidade</h3>
                        </div>
                        <div class="col-2">
                            <h3>Total</h3>
                        </div>
                    </div>
                </div>

                <div class="container" id="produto1">
                    <div class="row">
                        <div class="col-3">
                            <h3>15/01/2019</h3>
                        </div>
                        <div class="col-4">
                            <h3>Produto 1-Pedido 1234567</h3>
                        </div>
                        <div class="col-3">
                            <h3>3</h3>
                        </div>
                        <div class="col-2">
                            <h3>R$ 500</h3>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-3">
                                    <h3>20/03/2020</h3>
                                </div>
                                <div class="col-4">
                                    <h3>Produto 2-Pedido 12344</h3>
                                </div>
                                <div class="col-3">
                                    <h3>5</h3>
                                </div>
                                <div class="col-2">
                                    <h3>R$ 700</h3>
                                </div>
                            </div>

                            <nav aria-label="navigation">
                                <ul class="pagination justify-content-center my">
                                    <li class="page-item" >
                                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true" id="paginas">Páginas:</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#" style={{color: 'darkgreen', border: 'solid'}} >1</a></li>
                                    
                                    <li class="page-item"><a class="page-link" href="#" style={{color: 'darkgreen'}} >2</a></li>

                                    <li class="page-item">
                                        <a class="page-link" href="#" >Próxima</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            </>

            {*/}
      <div class="shopping_cart">
        <Titulo titulo="Pedidos" />
        <Indice items={["Status", "Código", "Data", "Total"]} />
        <div>
          {this.exibirPedidos()}
        </div>
      </div>
      </>
        )
    }
}