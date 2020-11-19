import React, {Component} from 'react';
import './checkout.css';
import './checkout.js';
import Titulo from '../../template/titulo/titulo';
import {cepMask, numMask, codMask} from '../mask';
import axios from 'axios';
import { browserHistory } from 'react-router';

const URL_CLIENTE_GET = 'http://modelagem.test/api/clientes/buscarNome/';

const URL_CONTATOS_GET = 'http://modelagem.test/api/contato/listarContatos/'

const URL_ENDERECO_POST = 'http://modelagem.test/api/endereco/salvar';

const URL_ENDERECO_CLIENTE_POST = 'http://modelagem.test/api/enderecoCliente/salvar/';

const URL_PAGAMENTO_POST = 'http://modelagem.test/api/pagamento/salvar/';

const URL_CARTAO_POST = 'http://modelagem.test/api/cartao/cadastrar/';

const URL_PEDIDO_POST = 'http://modelagem.test/api/pedidos/salvar';

const URL_PEDIDOS_LISTA = 'http://modelagem.test/api/pedidos/listarCliente/';

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
            //dt_expiracao: "",
            mes_validade: "",
            ano_validade: "",

            mascaraCEP: "",
            mascaraNumeros: "",
            mascaraCodigo: "",
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
        //console.log(event.target.value);
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
        this.setState({mascaraCEP: cepMask(event.target.value)})
        fetch('https://viacep.com.br/ws/'+ event.target.value + '/json/')
        .then((respostaDoServer) => {
            return respostaDoServer.json()
        })
        .then((dadosCep) => {
            //console.log(dadosCep);
            document.getElementById('bairro').value = dadosCep.bairro;
            document.getElementById('city').value = dadosCep.localidade;
            document.getElementById('address').value = dadosCep.logradouro;
            document.getElementById('state').value = dadosCep.uf;
        })
    }

    changeTelefone = (event) => {
        this.setState({telefone: event.target.value})
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
        this.setState({mascaraNumeros: numMask(event.target.value)})
        this.setState({nr_cartao: event.target.value})
    }

    changeNomeCartao = (event) => {
        this.setState({nome_cartao: event.target.value})
    }

    changeCdCartao = (event) => {
        this.setState({mascaraCodigo: codMask(event.target.value)})
        this.setState({cd_seguranca: event.target.value})
    }

    //changeDtCartao = (event) => {
    //    this.setState({dt_expiracao: event.target.value})
    //}

    changeMes = (event) => {
        this.setState({mes_validade: event.target.value})
    }

    changeAno = (event) => {
        this.setState({ano_validade: event.target.value})
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
            this.postEndereco();
            //this.postContato();
        }

        else{
            //alert("teste")
            window.location.href = '#/login'
        }
    }

    componentDidMount(){
        //this.getCliente();
        let cliente = localStorage.getItem('Cliente');
        cliente = JSON.parse(cliente);

        if(cliente == null || cliente == undefined){
            browserHistory.push('#/login');
            document.location.reload(true); 
        }


        console.log("pedidoooo")
        axios.get(`${URL_PEDIDOS_LISTA}`+cliente.id)
        .then(resp => {
            this.setState({ numPedidos: resp.data })
        });

        this.getContatos();

    }

    getContatos = () => {
        let self = this
        let cliente = localStorage.getItem('Cliente');
        cliente = JSON.parse(cliente);

        if(cliente == null || cliente == undefined){
            browserHistory.push('#/login');
            document.location.reload(true); 
        }

        let produtos = localStorage.getItem('produtos')
        produtos = JSON.parse(produtos);

        if(produtos == null || produtos == undefined){
            browserHistory.push('#/home');
            document.location.reload(true); 
        }
        


        console.log("get contatos")
        console.log(URL_CONTATOS_GET+cliente.id)
        axios.get(`${URL_CONTATOS_GET}`+cliente.id)
        .then(resp => {
            this.setState({contatosCliente: resp.data});
            let listEmail = [];
            let listTel = [];
            resp.data.forEach(contato => {
                if(contato.tipo == 'email'){
                    listEmail.push(contato);
                }
                else if(contato.tipo == 'telefone'){
                    listTel.push(contato);
                }
            });
            this.setState({listEmail: listEmail, listTel: listTel});
            console.log(listEmail)
            console.log(listTel)
            //console.log("teste random")
            //console.log(this.testaRandom());
        });
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
            self.conferePagamento();
        });
    }

    conferePagamento = () => {
        let self = this
        //console.log(this.state.tipo_pagamento)
        let pagamento = this.state.tipo_pagamento;
        if ((pagamento == 'Boleto') || (pagamento == 'boleto')){
        self.postPedido();
        }  else if ((pagamento == 'Cartao') || (pagamento == 'cartao')){
            self.confereData();
        }
    }


    confereData = () => {
        let self = this

        let dataAtual = new Date;
        let anoAtual = dataAtual.getFullYear();
        let mesAtual = dataAtual.getMonth();
        console.log(dataAtual);
        console.log(anoAtual);
        console.log(mesAtual + 1 );
        //console.log(this.state.ano_validade)
        let ano = this.state.ano_validade;
        if (ano <= 2020){
            alert("Digite um ano válido");
        }  else{
            self.postCartao()
        }
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
            //validade: this.state.dt_expiracao
            mes_validade: this.state.mes_validade,
            ano_validade: this.state.ano_validade,
            //complemento: this.state.complemento,
        })
        .then(resp => {
            console.log("TESTE-RESP")
            console.log(resp)
            let cartao = new Object({
                cliente_id: pedidoCart.cliente_id,
                nr_cartao: this.state.nr_cartao,
                nome_cartao: this.state.nome_cartao,
                bandeira: this.state.tipo_pagamento,
                //cd_seguranca: this.state.cd_seguranca,
                //validade: this.state.dt_expiracao
                mes_validade: this.state.mes_validade,
                ano_validade: this.state.ano_validade,
            })
    
            pedidoCart.cartao = (cartao);

            let submitCart = JSON.stringify(pedidoCart);

            localStorage.setItem("pedido", submitCart);

            self.postPedido();
        });
    }
    
    testaRandom = () => {
        let cond = true;
        let num;
        while(cond){
            num = (10000 + (Math.random() * 10000)).toFixed(0);
            let cond2 = true;
            this.state.numPedidos.forEach(pedido => {
                if(num == pedido.nr_pedido){
                    cond2 = false;
                    //break;
                }
            });
            if(cond2){
                cond = false
            }
        }
        return num;
    }
    postPedido = () => {

        //console.log('configurando endereco cliente\n\n\n\n');     
        
        let localCartCliente = localStorage.getItem("Cliente");
        let clienteCart = JSON.parse(localCartCliente);
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

            let rand = (10000 + (Math.random() * 10000)).toFixed(0);

            pedidoCart.status_pedido_id = 1;
            //pedidoCart.nr_pedido = rand;
            pedidoCart.nr_pedido = this.testaRandom();
            let d = new Date();
            let f = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();

            pedidoCart.dt_pedido = f;
            pedidoCart.produtos = localCartProdutos;

            let submitCart = JSON.stringify(pedidoCart);
            localStorage.setItem("pedido", submitCart);

            let localCartCliente = localStorage.getItem("Cliente");
            clienteCart = JSON.parse(localCartCliente);


            axios.post(URL_PEDIDO_POST, { 
                cliente_id: pedidoCart.cliente_id,
                pagamento: pedidoCart.pagamento,
                nr_pedido: pedidoCart.nr_pedido,
                dt_pedido: pedidoCart.dt_pedido,
                produtos: localCartProdutos,
                telefone: this.state.telefone,
                name: clienteCart.nome+" "+clienteCart.sobrenome,
                email: this.state.email,
                msg: "Pedido "+rand+" está em andamento",
                assunto: "Green Hub - Pedido "+rand
            })
            .then(resp2 => {
                console.log("pedidooo")
                console.log(resp2)
                //if(resp.data.id){
                    localStorage.removeItem('produtos');
                    localStorage.setItem("pedido", submitCart);
                    //localStorage.setItem('msg', "Pedido realizado com sucesso!");
                    browserHistory.push('#/success');
                    document.location.reload(true);    
                //}
                //else{
                    //localStorage.setItem('msg', "Erro ao realizar o pedido. Tente novamente.");
                //}
                
                //alert("finish");
            })
        });

    }

    listarEmail(){
        let div = [];
        if(this.state.listEmail){            
            this.state.listEmail.forEach((email, index) => {
                //if(index == 0){
                    //div.push(<option selected></option>)    
                //}
                //else{
                    div.push(<option value={email.ds_contato}>{email.ds_contato}</option>)
                //}
                
            });
        }
        return div;
    }

    listarTel(){
        let div = [];
        if(this.state.listTel){            
            this.state.listTel.forEach((tel, index) => {
                //if(index == 0){
                    //div.push(<option selected></option>)
                //}
                //else {
                    div.push(<option value={tel.ds_contato}>{tel.ds_contato}</option>)
                //}
            });
        }
        return div;
    }

    state = {exibe: true};

    render() {

        const {exibe} = this.state;

        let pedidoCart = localStorage.getItem("produtos");
        pedidoCart = JSON.parse(pedidoCart);

        let valorTotal = 0.0;
        pedidoCart.forEach((produto, index) => {
            valorTotal += produto.total   ;
        });

        console.log('testePedidoCart ' +  pedidoCart)

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

        //Máscaras
        const {mascaraCEP} = this.state  
        const {mascaraNumeros} = this.state
        const {mascaraCodigo} = this.state
        
        return (
            <>
                <Titulo titulo="Checkout"/>
                <Titulo titulo="Informações"/>

                <section class="container-fluid container-fluid-checkout col-12">
                    <div class="row">
                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12">
                            {/*Informações do cliente*
                            {/*}
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
                                        <input id="lastName" type="text" onChange={this.changeClienteSobrenome} class="form-control" required></input>
                                    </div>
                                </div>
                            </div>*/}

                            <div class="form-group">
                                <div class="row">
                                    <div className="col-md-3 col-sm-12">
                                        <label for="cep">CEP*</label>
                                        <input id="cep" type="text" 
                                        onChange={this.changeCEP}
                                        value={mascaraCEP}
                                        className="form-control cep" maxLength="9" placeholder="ex: 05339-900" required></input>
                                    </div>
                                    <div class="col-md-7 col-sm-12">
                                        <label for="address">Endereço*</label>
                                        <input id="address" type="text" onChange={this.changeEndereco} class="form-control" placeholder="ex: Av. Corifeu de Azevedo Marques, 3097" required></input>
                                    </div>
                                    <div class="col-md-2 col-sm-12">
                                        <label for="complement">Número*</label>
                                        <input id="complement" type="text" onChange={this.changeNumEndereco}class="form-control"></input>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-5 col-sm-12">
                                        <label for="bairro">Bairro*</label>
                                        <input id="bairro" type="text" 
                                        onChange={this.changeBairro}class="form-control" required></input>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <label for="city">Cidade*</label>
                                        <input id="city" type="text" 
                                        onChange={this.changeCidade}class="form-control" required></input>
                                    </div>
                        
                                    {/*
                                    <div class="col-md-2 col-sm-12">
                                    <label for="state">Estado*</label>
                                    <input id="state" type="text" class="form-control" required></input>
                                    </div>*/}

                                    <div class="col-md-3 col-sm-12">
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
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-8 col-sm-12">
                                        <label for="email">E-mail*</label>
                                        {/*
                                        <input id="email" type="text" 
                                        onChange={this.changeEmail} class="form-control"    placeholder="ex: exemplo@email.com" required></input>
                                        */}
                                        <select class="form-control" id="email" onChange={this.changeEmail} required>
                                            <option selected></option>
                                            {this.listarEmail()}
                                        </select>
                                    </div>

                                    <div class="col-md-4 col-sm-12">
                                        <label for="phone">Telefone*</label>
                                        {/*
                                        <input id="phone" type="text" onChange={this.changeTelefone}    class="form-control" placeholder="ex: DDD + Telefone"   required></input>
                                        */}
                                        <select class="form-control" id="telefone" onChange={this.changeTelefone} required>
                                            <option selected></option>
                                            {this.listarTel()}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/*Fim das informações do cliente*/}

                            {/*Forma de pagamento*/}
                            <Titulo titulo="Forma de Pagamento"/>

                            <div class="container-fluid container-fluid-checkout">
                                <div class="input-group payment">

                                    <div class="input-group-prepend itemRadio">
                                        <input type="radio" 
                                        aria-label="opção de boleto bancário" 
                                        name="payOption"
                                        value="Boleto"
                                        onFocus={() => this.setState({exibe: false})}
                                        onClick={this.changeTipoPagamento}
                                        ></input>
                                        <img class="img-custom dd"src="images/boletos.png" alt="boleto  bancário"></img>
                                    </div>
                                                        
                                    <div class="input-group-prepend itemRadio">
                                        <input type="radio" 
                                        aria-label="opção de cartão master card" 
                                        name="payOption" 
                                        value="Cartao"
                                        onFocus={() => this.setState({exibe: true})}
                                        onClick={this.changeTipoPagamento}
                                        ></input>
                                        <img class="img-custom imagemCartao"src="images/cartao-icon.png" alt="master  card"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div class="row">
                                    <div>
                                        <label className="labelBoleto">Boleto</label>
                                    </div>
                                    <div>
                                        <label className="labelCartao" >Cartão de Crédito</label>
                                    </div>
                                </div>
                            </div>
                            { exibe 
                                ?<div>
                                    <div class="form-group">
                                        <div class="row">
                                        <div class="col-sm-12 col-md-7">
                                                <label for="cardName">Nome no cartão</label>
                                                <input id="cardName" type="text" 
                                                onChange={this.changeNomeCartao}class="form-control"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-7">
                                                <label for="cardNumber">Número do cartão</label>
                                                <input id="cardNumber" 
                                                type="text" 
                                                value={mascaraNumeros}
                                                onChange={this.changeNrCartao} 
                                                className="form-control nmrCartao" 
                                                minLength="18" maxLength="19"></input>
                                            </div>
                                        </div>
                                    </div>                   
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-3 col-sm-12">
                                                <label for="cvv">Código de segurança</label>
                                                <input id="cvv" type="text" class="form-control"
                                                value={mascaraCodigo}
                                                maxLength="3" minLength="3"
                                                onChange={this.changeCdCartao} ></input>
                                            </div>                                  
                                            <div class="col-md-4 col-sm-12">
                                                <label for="expiryDate">Data de expiração</label>
                                                <div className="row">
                                                    <div class="col-md-5">
                                                        <select class="form-control" id="state" onChange={this.changeMes}required>    
                                                            <option value="janeiro">Jan</option>
                                                            <option value="fevereiro">Fev</option>
                                                            <option value="março">Mar</option>
                                                            <option value="abril">Abr</option>
                                                            <option value="maio">Mai</option>
                                                            <option value="junho">Jun</option>
                                                            <option value="julho">Jul</option>
                                                            <option value="agosto">Ago</option>
                                                            <option value="setembro">Set</option>
                                                            <option value="outubro">Out</option>
                                                            <option value="novembro">Nov</option>
                                                            <option value="dezembro">Dez</option>
                                                        </select>
                                                    </div>
                                                        {/*<input type="number" onChange={this.changeMes} min="1" max="12" class="form-control expiryDate" placeholder="MM"></input>
                                                    </div>*/}
                                                    <div class="col-md-7">
                                                        <input type="number" onChange={this.changeAno} class="form-control expiryDate" min="2020" max="2099" placeholder="AAAA" required></input> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                    {/*Fim da forma de pagamento*/}
                                </div>
                                :null
                            }
                       
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
                                        <a><button type="submit" class="btn-finalizar-compra col-12" onClick={this.getCliente}>Confirmar</button></a>
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