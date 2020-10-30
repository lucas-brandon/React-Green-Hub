import React, { Component } from "react";
import "./Login.css";
import axios from 'axios';
const URL_LOGAR = 'http://modelagem.test/api/clientes/logar/';



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            cliente: []
        }
    }

    changeEmail = event => {
        this.setState({email: event.target.value});
    }

    changeSenha = event => {
        this.setState({senha: event.target.value});
    }

    setCliente = () => {
            axios.get(`${URL_LOGAR}` + this.state.senha + '/' + this.state.email)
            .then(resp => {
                if (resp.data == ''){
                    alert('Usuário ou senha incorreto')
                }else {
                    localStorage.setItem('Cliente', JSON.stringify(resp.data));
                    window.location.href = "http://localhost:3002/#/home";
                }  
            })
    }

    render () {
        return (   
            <div className='row'>
                <div className="login-container " id="box">
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal titulo-login">Entre na sua conta</h1>
                        <label htmlFor="inputEmail" className="sr-only">exemplo@email.com</label>
                        <input type="email" id="email" className="form-control" placeholder="exemplo@email.com" value={this.email} onChange={this.changeEmail} required/>
                        <label htmlFor="inputPassword" className="sr-only">Senha</label>
                        <input type="password" id="senha" className="form-control" placeholder="Senha" value={this.senha} onChange={this.changeSenha} required/>
                        <span className="psw"><a href="#">Esqueci minha senha </a></span>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" id="Entrar" onClick={this.setCliente}>Entrar</button>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" id="Cadastrar" href='#/register'>Cadastre-se aqui.</button>
                    </form>
                </div>
            </div> 
        )
    }
}
