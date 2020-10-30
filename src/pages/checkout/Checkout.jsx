import React, {Component} from 'react';
import './checkout.css';
import './checkout.js';
import Titulo from '../../template/titulo/titulo';
import axios from 'axios';

const URL_CLIENTE_GET = 'http://modelagem.test/api/clientes/buscarNome/';

const URL_ENDERECO_POST = 'http://modelagem.test/api/endereco/salvar';

const URL_ENDERECO_CLIENTE_POST = 'http://modelagem.test/api/enderecoCliente/salvar/';

const URL_PAGAMENTO_POST = 'http://modelagem.test/api/pagamento/salvar/';

const URL_CARTAO_POST = 'http://modelagem.test/api/cartao/cadastrar/';

const URL_PEDIDO_POST = 'http://modelagem.test/api/pedidos/salvar';

const URL_CONTATO_POST = 'http://modelagem.test/api/contato/salvar';


export default class Checkout extends Component {

    constructor(props){
        super(props)
        this.state = {
            produto: [],
            pedidos: [],
            cliente_id: 0,
            cliente_nome_1: "",
            cliente_nome_2: "",
            status_pedido_id: 0,
            ds_status: "", 
            pagamento_id: 0,
            nr_pedido: 0,
            dt_pedido: "",
            valor: 0,
            teste: 0,

            email: "",
            telefone: "",

            endereco_id: 0,
            ds_endereco: "",
            cep: "",
            numero: "",
            bairro: "",
            cidade: "",
            estado: "",
            complemento: "",

            tipo_pagamento: "",

            nr_cartao: "",
            nome_cartao: "",
            cd_seguranca: "",
            dt_expiracao: ""

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
        //console.log("estado mudança: \n\n"+event.target.value)
    }

    changeComplemento = (event) => {
        this.setState({complemento: event.target.value})
    }

    //-----------Tipo de Pagamento-----------
    changeTipoPagamento = (event) => {
        this.setState({tipo_pagamento: event.target.value})
        //console.log("select pagamento: \n\n"+event.target.value)
    }

    //-----------Cartão-----------
    changeNrCartao = (event) => {
        this.setState({nr_cartao: event.target.value})
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
        let pedidoCart = localStorage.getItem("pedido");
        pedidoCart = JSON.parse(pedidoCart);

        let cliente = localStorage.getItem("Cliente");
        cliente = JSON.parse(cliente);

        if ((cliente)){
            if (!pedidoCart) {
                pedidoCart = {};
            }

            pedidoCart.cliente_id = cliente.id;

            let submitCart = JSON.stringify(pedidoCart);
            localStorage.setItem("pedido", submitCart);
            this.postContato();


        }
        else{
            //alert("teste")
            window.location.href = '#/login'
        }

        /*
        let self = this
        axios.get(`${URL_CLIENTE_GET}` + self.state.cliente_nome_1)
        .then( (resp) => {
            let pedidoCart = localStorage.getItem("pedido");
            pedidoCart = JSON.parse(pedidoCart);

            if (!pedidoCart) {
                pedidoCart = {};
            }

            pedidoCart.cliente_id = resp.data.id;

            let submitCart = JSON.stringify(pedidoCart);
            localStorage.setItem("pedido", submitCart);
            self.postContato();
            
              
        });
        */
        /*
        let pedidoCart = localStorage.getItem("pedido");
        pedidoCart = JSON.parse(pedidoCart);

        let cliente = localStorage.getItem("Cliente");
        cliente = JSON.parse(cliente);

        if (!is_null(cliente)){
            if (!pedidoCart) {
                pedidoCart = {};
            }

            pedidoCart.cliente_id = cliente.id;

            let submitCart = JSON.stringify(pedidoCart);
            localStorage.setItem("pedido", submitCart);
            self.postContato();


        }
        */
    }

    componentDidMount(){
        //this.getCliente();
    }

    getProduto = () => {
        //axios.get(`${URL_PRODUTO_BUSCAR}`+this.props.params.id)
        //.then(resp => this.setState({produto: resp.data}))

        //axios.get(`${URL_PRODUTO_BUSCAR}`+this.props.params.id)
        //.then(resp => console.log('teste\n\n\n\n\n'+`${URL_PRODUTO_BUSCAR}`+this.props.params.id))
    }

    //-----------POST-----------
    postContato = () => {
        let pedidoCart = localStorage.getItem("pedido");
        pedidoCart = JSON.parse(pedidoCart);

        if (!pedidoCart) {
            pedidoCart = {};
        }

        axios.post(URL_CONTATO_POST, { 
            cliente_id: pedidoCart.cliente_id,
            ds_contato: this.state.telefone,
            tipo: "telefone"
        })
        .then(resp => {

            pedidoCart.telefone =  { 
                cliente_id: pedidoCart.cliente_id,
                ds_contato: this.state.telefone,
                tipo: "telefone"
            };

            axios.post(URL_CONTATO_POST, { 
                cliente_id: pedidoCart.cliente_id,
                ds_contato: this.state.email,
                tipo: "email"
            })
            .then(resp => {
                pedidoCart.email =  { 
                    cliente_id: pedidoCart.cliente_id,
                    ds_contato: this.state.email,
                    tipo: "email"
                };

                let submitCart = JSON.stringify(pedidoCart);

                localStorage.setItem("pedido", submitCart);
                this.postEndereco();
            })

        });
    }

    postEndereco = () => {
        let self = this
        axios.post(URL_ENDERECO_POST, { 
            ds_endereco: this.state.ds_endereco,
            cep: this.state.cep,
            numero: this.state.numero,
            bairro: this.state.bairro,
            cidade: this.state.cidade,
            estado: this.state.estado 
            //complemento: this.state.complemento,
        })
        .then(resp => {

            let pedidoCart = localStorage.getItem("pedido");
            pedidoCart = JSON.parse(pedidoCart);

            if (!pedidoCart) {
                pedidoCart = {};
            }

            let endereco = new Object({
                endereco_id: resp.data.id,
                ds_endereco: this.state.ds_endereco,
                cep: this.state.cep,
                numero: this.state.numero,
                bairro: this.state.bairro,
                cidade: this.state.cidade,
                estado: this.state.estado 
            });

            pedidoCart.endereco = endereco;

            let submitCart = JSON.stringify(pedidoCart);

            localStorage.setItem("pedido", submitCart);

            //localStorage.setItem("endereco_id", resp.data.id);
            self.postCartao();
        });
    }
    postCartao = () => {
        let self = this
        //let cliente = localStorage.getItem('cliente_id');

        let pedidoCart = localStorage.getItem("pedido");
        pedidoCart = JSON.parse(pedidoCart);

        if (!pedidoCart) {
            pedidoCart = {};
        }

        axios.post(URL_CARTAO_POST+pedidoCart.cliente_id, { 
            nr_cartao: this.state.nr_cartao,
            nome: this.state.nome_cartao,
            //cd_seguranca: this.state.cd_seguranca,
            bandeira: this.state.tipo_pagamento,
            validade: this.state.dt_expiracao
            //complemento: this.state.complemento,
        })
        .then(resp => {

            let cartao = new Object({
                cliente_id: pedidoCart.cliente_id,
                nr_cartao: this.state.nr_cartao,
                nome_cartao: this.state.nome_cartao,
                bandeira: this.state.tipo_pagamento,
                //cd_seguranca: this.state.cd_seguranca,
                validade: this.state.dt_expiracao
            })


            pedidoCart.cartao = (cartao);

            let submitCart = JSON.stringify(pedidoCart);

            localStorage.setItem("pedido", submitCart);

            self.postPedido();
        });
    }
    postPedido = () => {

        //console.log('configurando endereco cliente\n\n\n\n');     
        
        let localCartCliente = localStorage.getItem("cliente_id");
        let localCartEndereco = localStorage.getItem("endereco");
        let localCartProdutos = localStorage.getItem("produtos");
        localCartProdutos = JSON.parse(localCartProdutos);

        let pedidoCart = localStorage.getItem("pedido");
        pedidoCart = JSON.parse(pedidoCart);


        axios.post(URL_ENDERECO_CLIENTE_POST, { 
            cliente_id: pedidoCart.cliente_id,
            endereco_id: pedidoCart.endereco.endereco_id
        })
        .then(resp => {
            //console.log("resposta\n\n\n\n\n\n\n")
            console.log(resp)
            pedidoCart.pagamento = (this.state.tipo_pagamento);
            pedidoCart.status_pedido_id = 1;
            pedidoCart.nr_pedido = 10+pedidoCart.cliente_id
            pedidoCart.dt_pedido = "2020-10-10"
            pedidoCart.produtos = localCartProdutos;

            let submitCart = JSON.stringify(pedidoCart);

            localStorage.setItem("pedido", submitCart);

            axios.post(URL_PEDIDO_POST, { 
                cliente_id: pedidoCart.cliente_id,
                pagamento_id: pedidoCart.pagamento,
                nr_pedido: pedidoCart.nr_pedido,
                dt_pedido: pedidoCart.dt_pedido,
                produtos: localCartProdutos
            })
            .then(resp2 => {
                console.log(resp2)
                //alert("finish");
            })
        });

    }


    render() {
        let pedidoCart = localStorage.getItem("produtos");
        pedidoCart = JSON.parse(pedidoCart);

        let valorTotal = 0.0;
        pedidoCart.forEach((produto, index) => {
            valorTotal += produto.valor_total   ;
        });

        let frete = 15;

        let valorTotalFrete = valorTotal + frete;

        valorTotal = parseFloat(valorTotal).toFixed(2);
        valorTotal = valorTotal.toString();
        valorTotal = valorTotal.replace(".", ",");

        frete = parseFloat(frete).toFixed(2);
        frete = frete.toString();
        frete = frete.replace(".", ",");

        valorTotalFrete = parseFloat(valorTotalFrete).toFixed(2);
        valorTotalFrete = valorTotalFrete.toString();
        valorTotalFrete = valorTotalFrete.replace(".", ",");


        return (
            <>
    <Titulo titulo="Checkout"/>

    <Titulo titulo="Informações"/>

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
                            <input id="address" type="text" onChange={this.changeEndereco} class="form-control" placeholder="ex: Av. Corifeu de Azevedo Marques, 3097" required></input>
                        </div>

                        <div class="col-md-4 col-sm-12">
                            <label for="complement">Numero</label>
                            <input id="complement" type="text" onChange={this.changeNumEndereco}class="form-control"></input>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <label for="city">Cidade*</label>
                            <input id="city" type="text" 
                            onChange={this.changeCidade}class="form-control" required></input>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <label for="bairro">Bairro*</label>
                            <input id="bairro" type="text" 
                            onChange={this.changeBairro}class="form-control" required></input>
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
                                <option value="AC">AC</option>
                                <option value="AL">AL</option>
                                <option value="AP">AP</option>
                                <option value="AM">AM</option>
                                <option value="BA">BA</option>
                                <option value="CE">CE</option>
                                <option value="ES">ES</option>
                                <option value="GO">GO</option>
                                <option value="MA">MA</option>
                                <option value="MT">MT</option>
                                <option value="MS">MS</option>
                                <option value="MG">MG</option>
                                <option value="PA">PA</option>
                                <option value="PB">PB</option>
                                <option value="PR">PR</option>
                                <option value="PE">PE</option>
                                <option value="PI">PI</option>
                                <option value="RJ">RJ</option>
                                <option value="RN">RN</option>
                                <option value="RS">RS</option>
                                <option value="RO">RO</option>
                                <option value="RR">RR</option>
                                <option value="SC">SC</option>
                                <option value="SP">SP</option>
                                <option value="SE">SE</option>
                                <option value="TO">TO</option>
                                <option value="DF">DF</option>
                            </select>
                        </div>

                        <div class="col-md-3 col-sm-12">
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
                <Titulo titulo="Forma de Pagamento"/>
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
                                onClick={this.changeTipoPagamento}aria-label="opção de cartão master card" name="payOption" value="1"></input>
                            </div>
                            <img class="img-custom"src="images/mc_vrt_pos.svg" alt="master card"></img>
                        </div>
                        <div class="input-group-prepend itemRadio">
                            <div class="input-group">
                                <input type="radio" 
                                onClick={this.changeTipoPagamento} aria-label="opção de cartão visa" name="payOption" value="2"></input>
                            </div>
                            <img class="img-custom"src="images/visa.svg" alt="visa"></img>
                        </div>
                        <div class="input-group-prepend itemRadio">
                            <div class="input-group">
                                <input type="radio" 
                                onChange={this.changeTipoPagamento} aria-label="opção de cartão american express" name="payOption" value="3"></input>
                            </div>
                            <img class="img-custom"src="images/american-express.svg" alt="american express'"></img>
                        </div>
                        <div class="input-group-prepend itemRadio">
                            <div class="input-group">
                                <input type="radio" 
                                onChange={this.changeTipoPagamento}aria-label="opção de cartão diners club" name="payOption" value="4"></input>
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
                                onChange={this.changeNomeCartao}class="form-control" required></input>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            {/*
                            <div class="col-md-6 col-sm-12">
                                <label for="cvv">Código de segurança</label>
                                <input id="cvv" type="text" onChange={this.changeCdCartao} class="form-control" required></input>
                            </div>
                            */}
                            <div class="col-md-6 col-sm-12">
                                <label for="expiryDate">Data de expiração</label>
                                <input id="expiryDate" type="date"  onChange={this.changeDtCartao} class="form-control" required></input>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Fim da forma de pagamento*/}

                {/*Resumo do Pedido*/}
                <Titulo titulo="Resumo do Pedido"></Titulo>
                <div class="conteainer-fluid">
                    <div class="row">
                        <div class="col-8">
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
                                    <td>R$ {valorTotal}</td>
                                </tr>
                                <tr class="tableDescontoPedido">
                                    <th scope="row"></th>
                                    <td>Custo do Frete</td>
                                    <td>R$ {frete}</td>
                                </tr>
                                <tr class="tableTotalPedido">
                                    <th scope="row"></th>
                                    <td>Total</td>
                                    <td>R$ {valorTotalFrete}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <a ><button type="submit" class="btn-finalizar-compra col-12" onClick={this.getCliente}>Confirmar</button></a>
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