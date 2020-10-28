import React, { Component, useState } from "react";
import "./Login.css";
import axios from 'axios';
const URL_BUSCAR_EMAIL = 'http://modelagem.test/api/contato/buscar-email/';
const URL_BUSCAR_CLIENTE = 'http://modelagem.test/api/clientes/buscar/';



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            id: '',
            cliente: []
        }
    }

    changeEmail = event => {
        this.setState({email: event.target.value});
    }

    changeSenha = event => {
        this.setState({senha: event.target.value});
    }

    handleSubmit = values => {
        // axios.get(URL_BUSCAR_EMAIL + this.state.email, values).then(resp => {
        //     localStorage.setItem('Cliente', this.state.cliente)
        // })
        this.getEmail();
        this.getCliente();
    }

    getEmail = () => {
		axios.get(`${URL_BUSCAR_EMAIL}` + this.state.email)
		.then(resp => {
            this.setState({email: resp.data.ds_contato});
            this.setState({id: resp.data.cd_cliente});
		});
    }

    getId = () => {
        axios.get(`${URL_BUSCAR_EMAIL}` + this.state.email)
		.then(resp => {
            this.setState({id: resp.data.cd_cliente});
		});
    }

    getCliente = () => {
        axios.get(`${URL_BUSCAR_CLIENTE}` + this.id)
        .then(resp => {
            this.setState({cliente: resp.data});
            localStorage.setItem('Cliente', this.state.cliente);
        })
    }

    render () {
        return (   
            <div className='row'>
                <div className="login-container " id="box">
                    <form className="form-signin" onSubmit={this.handleSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal titulo-login">Entre na sua conta</h1>
                        <label htmlFor="inputEmail" className="sr-only">exemplo@email.com</label>
                        <input type="email" id="email" className="form-control" placeholder="exemplo@email.com" value={this.email} onChange={this.changeEmail} required autofocus/>
                        <label htmlFor="inputPassword" className="sr-only">Senha</label>
                        <input type="password" id="senha" className="form-control" placeholder="Senha" value={this.senha} onChange={this.changeSenha} required/>
                        <span className="psw"><a href="#">Esqueci minha senha </a></span>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" id="Entrar">Entrar</button>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" id="Cadastrar">Cadastre-se aqui.</button>
                    </form>
                </div>
            </div> 
        )
    }
}