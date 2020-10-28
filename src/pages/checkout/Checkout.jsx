import React, {Component} from 'react';
import './checkout.css';
import './checkout.js';
import Titulo from '../../template/titulo/titulo';
import axios from 'axios';

const URL_CLIENTE_GET = 'http://modelagem.test/api/clientes/buscarNome/';
const URL_ENDERECO_POST = 'http://modelagem.test/api/endereco/salvar/';

const URL_PAGAMENTO_POST = 'http://modelagem.test/api/pagamento/salvar/';

const URL_CARTAO_POST = 'http://modelagem.test/api/pagamento/salvar/';

export default class Checkout extends Component {


    constructor(props){
        super(props)
        this.state = {
            produto: [],
            cliente_id: null,
            cliente_nome_1: null,
            cliente_nome_2: null,
            status_pedido_id: null,
            ds_status: null, 
            pagamento_id: null,
            nr_pedido: null,
            dt_pedido: null,
            valor: null,
            teste: null,

            email: null,
            telefone: null,

            ds_endereco: null,
            cep: null,
            numero: null,
            bairro: null,
            cidade: null,
            estado: null,
            complemento: null,

            tipo_pagamento: null,

            nr_cartao: null,
            nome_cartao: null,
            cd_seguranca: null,
            dt_expiracao: null

        }
    }
    //-----------Cliente-----------
    changeClienteNome = (event) => {
        this.setState({cliente_nome_1: event.target.value})

        //this.getCliente();
    }

    changeClienteSobrenome = (event) => {
        this.setState({cliente_nome_2: event.target.value})
    }

    changeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    changeTelefone = (event) => {
        this.setState({telefone: event.target.value})
    }
    //-----------Endereco-----------
    changeEndereco = (event) => {
        this.setState({ds_endereco: event.target.value})
    }

    changeCEP = (event) => {
        this.setState({cep: event.target.value})
    }

    changeNumEndereco = (event) => {
        this.setState({numero: event.target.value})
    }

    changeBairro = (event) => {
        this.setState({bairro: event.target.value})
    }

    changeCidade = (event) => {
        this.setState({cidade: event.target.value})
    }

    changeEstado = (event) => {
        this.setState({estado: event.target.value})
    }

    changeComplemento = (event) => {
        this.setState({complemento: event.target.value})
    }

    //-----------Tipo de Pagamento-----------
    changeTipoPagamento = (event) => {
        this.setState({tipo_pagamento: event.target.value})
        console.log("select pagamento: \n\n"+event.target.value)
    }

    //-----------Cartão-----------
    changeNrCartao = (event) => {
        this.setState({tipo_pagamento: event.target.value})
    }

    changeNomeCartao = (event) => {
        this.setState({nome_cartao: event.target.value})
    }

    changeCdCartao = (event) => {
        this.setState({cd_seguranca: event.target.value})
    }

    changeDtCartao = (event) => {
        this.setState({dt_expiracao: event.target.value})
    }

    //-----------GET-----------

    getCliente = () => {
        console.log("\n\n\n\n\nnome cliente antes: \n"+`${URL_CLIENTE_GET}`+this.state.cliente_nome_1);

        axios.get(`${URL_CLIENTE_GET}` + this.state.cliente_nome_1)
        .then(resp => console.log("\n\n\n\n\nid cliente: "+resp.data.id));

        axios.get(`${URL_CLIENTE_GET}` + this.state.cliente_nome_1)
        .then(resp => this.setState({cliente_id: resp.data.id,
                                     cliente_nome_1: resp.data.nome,
                                     cliente_nome_2: resp.data.sobrenome}));


        //axios.get(`${URL}`+this.state.cliente_nome_1)
        //.then(resp => this.setState({cliente_id: resp.data.id}))
    }

    componentDidMount(){
        this.getCliente();
    }

    getProduto = () => {
        //axios.get(`${URL_PRODUTO_BUSCAR}`+this.props.params.id)
        //.then(resp => this.setState({produto: resp.data}))

        //axios.get(`${URL_PRODUTO_BUSCAR}`+this.props.params.id)
        //.then(resp => console.log('teste\n\n\n\n\n'+`${URL_PRODUTO_BUSCAR}`+this.props.params.id))
    }

    //-----------POST-----------
    postPedido = () => {

        axios.post(URL, { description: this.state.description, done: false })
        .then(resp => {
            alert(`${this.state.description} cadastrado com sucesso`);
            this.refresh();
        })
    }


    render() {
        return (
            <>
    <Titulo name="Checkout"/>

    <Titulo name="Informações"/>

    <section class="container-fluid container-fluid-checkout col-12">
        <div class="row">
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                {/*Informações do cliente*/}
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <label for="firstName">Nome*</label>
                            <input id="firstName" type="text" class="form-control" onChange={this.changeClienteNome}
                            on
                            onMouseOut={this.changeClienteNome} required></input>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <label for="lastName">Sobrenome*</label>
                            <input id="lastName" type="text" onChange={this.changeClienteSobrenome}class="form-control" required></input>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row">
                        <div class="col-md-8 col-sm-12">
                            <label for="address">Endereço*</label>
                            <input id="address" type="text" onChange={this.changeEndereco}class="form-control" placeholder="ex: Av. Corifeu de Azevedo Marques, 3097" required></input>
                        </div>

                        <div class="col-md-4 col-sm-12">
                            <label for="complement">Complemento</label>
                            <input id="complement" type="text" onChange={this.changeComplemento}class="form-control"></input>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <label for="city">Cidade*</label>
                            <input id="city" type="text" 
                            onChange={this.changeCidade}class="form-control" required></input>
                        </div>
                        {/*
                        <div class="col-md-2 col-sm-12">
                            <label for="state">Estado*</label>
                            <input id="state" type="text" class="form-control" required></input>
                        </div>
                        */}
                        <div class="col-md-2 col-sm-12">
                            <label for="state">Estado*</label>
                            <select class="form-control" id="state" onChange={this.changeEstado}required>    
                                <option>AC</option>
                                <option>AL</option>
                                <option>AP</option>
                                <option>AM</option>
                                <option>BA</option>
                                <option>CE</option>
                                <option>ES</option>
                                <option>GO</option>
                                <option>MA</option>
                                <option>MT</option>
                                <option>MS</option>
                                <option>MG</option>
                                <option>PA</option>
                                <option>PB</option>
                                <option>PR</option>
                                <option>PE</option>
                                <option>PI</option>
                                <option>RJ</option>
                                <option>RN</option>
                                <option>RS</option>
                                <option>RO</option>
                                <option>RR</option>
                                <option>SC</option>
                                <option>SP</option>
                                <option>SE</option>
                                <option>TO</option>
                                <option>DF</option>
                            </select>
                        </div>

                        <div class="col-md-4 col-sm-12">
                            <label for="cep">CEP*</label>
                            <input id="cep" type="text" 
                            onChange={this.changeCEP}class="form-control" placeholder="ex: 05339-900" required></input>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row">
                        <div class="col-md-8 col-sm-12">
                            <label for="email">E-mail*</label>
                            <input id="email" type="text" 
                            onChange={this.changeEmail}class="form-control" placeholder="ex: exemplo@email.com" required></input>
                        </div>

                        <div class="col-md-4 col-sm-12">
                            <label for="phone">Telefone*</label>
                            <input id="phone" type="text" onChange={this.changeTelefone}class="form-control" placeholder="ex: DDD + Telefone" required></input>
                        </div>
                    </div>
                </div>
                {/*Fim das informações do cliente*/}

                {/*Forma de pagamento*/}
                <div class="container-fluid container-fluid-checkout">
                    <div class="row title">
                        <div class="col-12">
                            <p>Forma de Pagamento</p>
                        </div>
                    </div>
                </div>
                <div class="container-fluid container-fluid-checkout">
                    <div class="input-group payment">
                        {/* 
                        <div class="input-group-prepend itemRadio">
                            <input type="radio" aria-label="opção de boleto bancário" name="payOption"></input>
                            
                            <img class="img-custom"src="images/boleto-bancario-48.png" alt="boleto bancário"></img>
                        
                        </div>
                        */}
                        <div class="input-group-prepend itemRadio">
                            <div class="input-group">
                                <input type="radio" 
                                onClick={this.changeTipoPagamento}aria-label="opção de cartão master card" name="payOption" value="Cartão de crédito MasterCard"></input>
                            </div>
                            <img class="img-custom"src="images/mc_vrt_pos.svg" alt="master card"></img>
                        </div>
                        <div class="input-group-prepend itemRadio">
                            <div class="input-group">
                                <input type="radio" 
                                onClick={this.changeTipoPagamento}aria-label="opção de cartão visa" name="payOption" value="Cartão de crédito Visa"></input>
                            </div>
                            <img class="img-custom"src="images/visa.svg" alt="visa"></img>
                        </div>
                        <div class="input-group-prepend itemRadio">
                            <div class="input-group">
                                <input type="radio" 
                                onChange={this.changeTipoPagamento}aria-label="opção de cartão american express" name="payOption" value="Cartão de crédito American Express"></input>
                            </div>
                            <img class="img-custom"src="images/american-express.svg" alt="american express'"></img>
                        </div>
                        <div class="input-group-prepend itemRadio">
                            <div class="input-group">
                                <input type="radio" 
                                onChange={this.changeTipoPagamento}aria-label="opção de cartão diners club" name="payOption" value="Cartão de crédito Diners Club"></input>
                            </div>
                            <img class="img-custom"src="images/diners-club.svg" alt="diners club"></img>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-12">
                                <label for="cardNumber">Número do cartão</label>
                                <input id="cardNumber" type="text" onChange={this.changeNrCartao} class="form-control" required></input>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-12">
                                <label for="cardName">Nome no cartão</label>
                                <input id="cardName" type="text" 
                                onChange={this.changeCEP}class="form-control" required></input>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <label for="cvv">Código de segurança</label>
                                <input id="cvv" type="text" onChange={this.changeCdCartao} class="form-control" required></input>
                            </div>

                            <div class="col-md-6 col-sm-12">
                                <label for="expiryDate">Data de expiração</label>
                                <input id="expiryDate" type="text"  onChange={this.changeDtCartao} class="form-control" required></input>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Fim da forma de pagamento*/}

                {/*Resumo do Pedido*/}
                <div class="container-fluid container-fluid-checkout">
                    <div class="row title">
                        <div class="col-12">
                            <p>Resumo do Pedido</p>
                        </div>
                    </div>
                </div>
                <div class="conteainer-fluid">
                    <div class="row">
                        <div class="col-6">
                            <table class="table table-checkout">
                                {/*
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                                </thead>
                                */}
                                <tbody>
                                <tr class="tableItemPedido">
                                    <th scope="row"></th>
                                    <td>Itens</td>
                                    <td>R$ 39,90</td>
                                </tr>
                                <tr class="tableDescontoPedido">
                                    <th scope="row"></th>
                                    <td>Descontos</td>
                                    <td>R$ -9,90</td>
                                </tr>
                                <tr class="tableTotalPedido">
                                    <th scope="row"></th>
                                    <td>Total</td>
                                    <td>R$ 30,00</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <a href="#/finished"><button type="submit" class="btn-finalizar-compra col-12" onClick={this.getCliente}>Confirmar</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>

            </>
        )
    }
}