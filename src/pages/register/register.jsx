import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import './register.css';
import Titulo from '../../template/titulo/titulo';
import axios from "axios";

const URL_CLIENTE_SALVAR = 'http://modelagem.test/api/clientes/salvar';

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
        }
    }
    //-----------Cliente-----------
    changeClienteNome = (event) => {
        this.setState({nome: event.target.value})

        //this.getCliente();
    }

    changeClienteSobrenome = (event) => {
        this.setState({sobrenome: event.target.value})
    }

    changeCPF = (event) => {
        this.setState({cpf: event.target.value})
    }

    changeData = (event) => {
        this.setState({dt_nascimento: event.target.value})
    }

    changeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    changeTelefone = (event) => {
        this.setState({telefone: event.target.value})
    }

    changeSenha = (event) => {
        this.setState({senha: event.target.value})
    }

    postCliente = () => {
        console.log(this.state)

        axios.post(URL_CLIENTE_SALVAR, {
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            dt_nascimento: this.state.dt_nascimento,
            cpf: this.state.cpf,
            senha: this.state.senha,
            email: this.state.email,
            telefone: this.state.telefone 
        })
        .then(resp => {
            console.log(resp.data)
            alert("Cadastro concluído com sucesso!")
        });
        document.location.reload('#/register');
        browserHistory.push('#/login');
    }



    render() {
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
                                                <input type="text" onChange={this.changeCPF} className="form-control cpf"  placeholder="ex: 123.456.789-10" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label>Data de Nascimento</label>
                                                <input type="date" onChange={this.changeData} className="form-control data-nascimento" required/>
                                            </div>
                                        </div>
                                        {/*
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label>Celular*</label>
                                                <input type="text" className="form-control celular" placeholder="DDD + Telefone" required/>
                                            </div>
                                        </div>
                                        */}
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label>Telefone</label>
                                                <input type="text" onChange={this.changeTelefone} className="form-control telefone" placeholder="DDD + Telefone" required/>
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
                                                <input type="password" onChange={this.changeSenha} className="form-control senha" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label>Confirmar senha*</label>
                                                <input type="password" className="form-control senha" required/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-12 col-md-12">
                                            
                                        {/*
                                            <div className="form-group">    
                                                <div className="form-check">
                                                    <input className="form-check-input ofertas" type="checkbox" name="envio-ofertas" value="ofertas" id="check_ofertas"/>
                                                    <label className="form-check-label" for="check_ofertas">Desejo receber informações e ofertas  de produtos</label>
                                                </div>
                                            </div>
                                        */}
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