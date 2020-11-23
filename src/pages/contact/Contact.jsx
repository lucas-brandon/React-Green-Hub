import React, {Component} from 'react';
import './contact.css';
import Titulo from '../../template/titulo/titulo';
import axios from "axios";
import { browserHistory } from 'react-router';

//const URL_CONTATOS_GET = 'http://modelagem.test/api/contato/listarContatos/'

//const URL_CLIENTE_GET = 'http://modelagem.test/api/clientes/buscarNome/';

const URL_MENSAGEM_POST = 'http://modelagem.test/api/clientes/enviarMensagem';

const URL_EMAIL = 'http://modelagem.test/api/sendmail';

export default class Contact extends Component {

    constructor(props){
        super(props)
        this.state = {
            assunto: "",
            nome: "",
            email: "",
            telefone: "",
            estado: "",
            cidade: "",
            mensagem: "",
        }
    }

    changeAssunto = (event) => {
        this.setState({assunto: event.target.value})
    }

    changeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    changeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    changeTel = (event) => {
        this.setState({telefone: event.target.value})
    }

    changeUF = (event) => {
        this.setState({estado: event.target.value})
    }

    changeCidade = (event) => {
        this.setState({cidade: event.target.value})
    }

    changeMensagem = (event) => {
        this.setState({mensagem: event.target.value})
        console.log(this.state.mensagem)
    }

    postEmail = () => {
     
        axios.post(URL_MENSAGEM_POST, { 
            name: this.state.mensagem.nome,
            email: "green.hub.suplementos@gmail.com",
            msg: this.state.mensagem,
            assunto: this.state.assunto,
        })
        .then(resp => {
            console.log(resp)
            //localStorage.setItem('msg', "Testes");
            browserHistory.push('#/home');
            document.location.reload(true); 
        })
        alert("Mensagem enviada com sucesso");
    }

    //getContatos = () => {
    //    let self = this
    //    let cliente = localStorage.getItem('Cliente');
    //    cliente = JSON.parse(cliente);

    //    if(cliente == null || cliente == undefined){
    //        browserHistory.push('#/login');
    //        document.location.reload(true); 
    //    }

    //    axios.get(`${URL_CONTATOS_GET}`+cliente.id)
    //    .then(resp => {
    //        this.setState({contatosCliente: resp.data});
    //        let listEmail = [];
    //        let listTel = [];
    //        resp.data.forEach(contato => {
    //            if(contato.tipo == 'email'){
    //                listEmail.push(contato);
    //            }
    //            else if(contato.tipo == 'telefone'){
    //                listTel.push(contato);
    //            }
    //        });
    //        this.setState({listEmail: listEmail, listTel: listTel});
    //    });
    //}

    //listarEmail(){
    //    let div = [];
    //    if(this.state.listEmail){            
    //        this.state.listEmail.forEach((email, index) => {
    //            div.push(<option value={email.ds_contato}>{email.ds_contato}</option>)
    //        });
    //    }
    //    return div;
    //}


    //listarTel(){
    //    let div = [];
    //    if(this.state.listTel){            
    //        this.state.listTel.forEach((tel, index) => {
    //            div.push(<option value={tel.ds_contato}>{tel.ds_contato}</option>)
    //        });
    //    }
    //    return div;
    //}
    
    render() {
        return (
            <>
            <Titulo titulo="Formulário de Contato"/>
                    
                <form name="formulario">
                    {/*container retangular*/}
                    <section class="container col-12">
                        <div class="row">
                            {/*primeira metade do container*/}
                            <div class="container col-12 col-md-6 mx-0" >
                                {/*alinhando o container*/}
                                <div class="container col-12 mx-12 mt-5">
                                    <div class="row">
                                        {/*textos*/}
                                        <div class="col-12">
                                            <div class= "form-group">
                                                <label>Assunto*</label>
                                                <input type="text" class="form-control assuntoContact" onChange={this.changeAssunto} required></input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Nome*</label>
                                                <input type="text" class="form-control nomeContact" onChange={this.changeNome}required></input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Email*</label>
                                                <input class="form-control" id="email" onChange={this.changeEmail} required>
                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*segunda metade do container*/}
                            <div class="container col-12 col-md-6 mx-0">
                                {/*alinhando o container*/}
                                <div class="container col-12 mt-5">
                                    <div class="row">
                                        {/*textos*/}
                                        <div class="col-12 col-md-12">
                                            <div class= "form-group">
                                                <label>Telefone</label>
                                                <input class="form-control" id="email" onChange={this.changeTel} required>
                                                </input>
                                            </div>
                                        </div>
                                        {/*
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>Celular</label>
                                                <input type="text" class="form-control celContact" placeholder="DDD + Telefone"></input>
                                            </div>
                                        </div>
                                        */}
                                        <div class="col-12 col-md-12">
                                            <label for="state">Estado*</label>
                                            <select class="form-control" id="state" onChange={this.changeUF}required>    
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
                                            {/*
                                            <div class="form-group">
                                                <label>Estado*</label>
                                                <input type="text" class="form-control estadoContact" required></input>
                                            </div>
                                            */}
                                        </div>
                                        <div class="col-12 col-md-12">
                                            <div class="form-group">
                                                <label>Cidade*</label>
                                                <input type="text" class="form-control cidadeContact" onChange={this.changeCidade} required></input>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>  
                        </div>
                    </section>
                    <section class="container col-12">
                        <div class="row">
                            <div class="container col-12 col-md-6 mx-0">
                                <div class="container col-12">
                                    <div class="row">
                                        <div class="col-12">
                                        <label>Mensagem*</label>
                                    </div>
                                    <div class="col-12 containerText">
                                        <textarea class="form-control area" onChange={this.changeMensagem}></textarea>
                                    </div>
                                    <div class="col-12 col-md-6 containerBotao" id="botao1">
                                        <button class="limparContact">Limpar</button>
                                    </div>
                                    <div class="col-12 col-md-6 containerBotao">
                                        <button class="enviarContact" onClick={this.postEmail}>Enviar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </>
        )
    }
}