import React, {Component} from 'react';
import './register.css';
import Titulo from '../../template/titulo/titulo';
import { cpfMask, telMask } from './mask';
import axios from "axios";
import { browserHistory } from 'react-router';


const URL_CLIENTE_SALVAR = 'http://modelagem.test/api/clientes/salvar';

const URL_EMAIL = 'http://modelagem.test/api/sendmail';

export default class Register extends Component {

    constructor(props){
        super(props)
        this.state = {
            nome: "",
            sobrenome: "",
            dt_nascimento: "",
            senha: "",
            email: "",
            telefone: "",
            mascaraCPF: "",
            mascaraTel: "",
        }
        //this.handlechange = this.handlechange.bind(this)
    }

    //handlechange(e){
    //    this.setState({documentId: cpfMask(e.target.value)})
    //}
    
    //-----------Cliente-----------
    changeClienteNome = (event) => {
        this.setState({nome: event.target.value})

        //this.getCliente();
    }

    changeClienteSobrenome = (event) => {
        this.setState({sobrenome: event.target.value})
    }

    changeCPF = (event) => {
        this.setState({mascaraCPF: cpfMask(event.target.value)})
        this.setState({cpf: event.target.value})
    }

    changeData = (event) => {
        this.setState({dt_nascimento: event.target.value})
    }

    changeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    changeTelefone = (event) => {
        this.setState({mascaraTel: telMask(event.target.value)})
        this.setState({telefone: event.target.value})
    }

    changeSenha = (event) => {
        this.setState({senha: event.target.value})
    }

    postCliente = () => {
        //console.log(this.state)

        axios.post(URL_CLIENTE_SALVAR, {
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            dt_nascimento: this.state.dt_nascimento,
            cpf: this.state.cpf,
            senha: this.state.senha,
            email: this.state.email,
            telefone: this.state.telefone,
            name: this.state.nome,
            //email: this.state.email,
            msg: "Parabéns pelo cadastro no site Green Hub! Aproveite nossas ofertas!",
            assunto: "Green Hub - Bem Vindo!"
        })
        .then(resp => {

            console.log("then do post cliente")
            console.log(this.state.email)
            console.log(URL_EMAIL)
            console.log(resp)
            /*
            axios.get(URL_EMAIL, {
                name: this.state.nome,
                email: this.state.email,
                msg: "Parabéns pelo cadastro no site Green Hub! Aproveite nossas ofertas!",
                assunto: "Green Hub - Bem Vindo!"
            }).then(resp => {
                console.log("email resp")
                console.log(resp.data)
                localStorage.setItem('msg', "Cadastro realizado com sucesso! Um e-mail de boas-vindas foi enviado");
                alert("Cadastro concluído com sucesso!")
                //browserHistory.push('#/login');
                //document.location.reload(true); 
            })

            */
            localStorage.setItem('msg', "Cadastro realizado com sucesso! Um e-mail de boas-vindas foi enviado");
            //alert("Cadastro concluído com sucesso!")
            //browserHistory.push('#/login');
            //document.location.reload(true);  
        })

    }



    render() {
        const {mascaraCPF} = this.state
        const {mascaraTel} = this.state
        return (
            
            <>
                <Titulo titulo="Cadastro"/>
    
                {/*container retangular*/}
                <form className="container col-12 col-md-12" name="formulario" >
                    <div className="row">
                        {/*primeira metade do container*/}
                        <div className="container col-12 col-md-6 mx-0" >
                            <div className="row">
                                {/*alinhando o container*/}
                                <div className="container col-12 col-md-12 mx-12 mt-5">
                                    <div className="row">
                                        {/*textos*/}
                                        <div className="col-12 col-md-6">
                                            <div className= "form-group">
                                                <label>Nome*</label>
                                                <input type="text" onChange={this.changeClienteNome} className="form-control nome" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label>Sobrenome*</label>
                                                <input type="text" onChange={this.changeClienteSobrenome} className="form-control sobrenome" required/>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label>CPF*</label>
                                                <input type="text" 
                                                onChange={this.changeCPF}
                                                className="form-control mascaraCPF cpf"   value={mascaraCPF} id="cpf"
                                                placeholder="ex: 123.456.789-10" maxLength="14" minLength="14" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required/>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label>Data de Nascimento</label>
                                                <input type="date" onChange={this.changeData} className="form-control data-nascimento" id="dt-nascimento" required/>
                                            </div>
                                            <div class="alert alert-warning" id="aviso-data" style={{display:'none'}} role="alert">
                                                Desculpe, pessoas com menos de 18 anos não podem se cadastrar.
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label>Telefone</label>
                                                <input type="text" onChange={this.changeTelefone} className="form-control mascaraTel telefone" value={mascaraTel} placeholder="DDD + Telefone" maxLength="15" minLength="15" pattern="\(\d{2}\)\s*\d{5}-\d{4}" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6"></div>

                                    </div>
                                </div>
                            </div>
                        </div> 
                        {/*segunda metade do container*/}
                        <div className="container col-12 col-md-6 mx-0">
                            <div className="row">
                                {/*alinhando o container*/}
                                <div className="container col-12 col-md-12 mt-5">
                                    <div className="row">
                                        {/*textos*/}
                                        <div className="col-12 col-md-12">
                                            <div className= "form-group">
                                                <label>Email*</label>
                                                <input type="email" onChange={this.changeEmail} className="form-control email" placeholder="exemplo@email.com" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label>Senha*</label>
                                                <input type="password" onChange={this.changeSenha} className="form-control senha" minLength="8" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label>Confirmar senha*</label>
                                                <input type="password" className="form-control senha" required/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-12 col-md-12">
                                        </div>
                                        
                                        <div className="col-12 col-md-12">
                                            <div className="form-group"> 
                                            <a href="#/home">
                                                <button type="button submit" onClick={this.postCliente} className="btn-block botaoRegister">Cadastrar</button>
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                     
                        </div>
                    </div>
                </form>
            </>
        )
    }
}