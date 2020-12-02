import React, { Component } from "react";
import "./Login.css";
import axios from 'axios';
import Msg from '../../template/mensagem/Mensagem';
import Titulo from '../../template/titulo/titulo';
import { browserHistory } from 'react-router';
//import { BrowserRouter, useHistory } from 'react-router-dom';
const URL_LOGAR = 'http://modelagem.test/api/clientes/logar/';



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            cliente: [],
            msgFail: false

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
                console.log(resp.data)
                if(resp.data.id){
                    localStorage.setItem('Cliente', JSON.stringify(resp.data));
                    localStorage.setItem('msg', "Login realizado com sucesso!");
                    browserHistory.push('#/home');
                    document.location.reload(true);    
                }
                else {
                    localStorage.setItem('msg', "Login não realizado. Usuário ou senha incorreta!");
                    
                }
                
            })
            .catch(err => {
                console.log(err)
                localStorage.setItem('msg', "Login não realizado. Usuário ou senha incorreta!");
                //document.location.reload(true); 
            })
            //window.location.href = '#/home';
            
    }

    goPassword = () => {
        
        //localStorage.setItem('msg', "teste");
        //browserHistory.push('#/password');
        //document.location.reload(true); 

    }

    render () {
        return (
            <>
            <a name="teste"></a> 
            <Titulo titulo="Login"></Titulo>
            <div className='row'> 
                <div className="login-container col-6" id="box">
                    <form className="form-signin col-8">
                        <h1 className="h3 mb-3 font-weight-normal titulo-login">Entre na sua conta</h1>
                        <label htmlFor="inputEmail" className="sr-only">exemplo@email.com</label>
                        <input type="email" id="email" className="form-control" placeholder="exemplo@email.com" value={this.email} onChange={this.changeEmail} />
                        <label htmlFor="inputPassword" className="sr-only">Senha</label>
                        <input type="password" id="senha" className="form-control" placeholder="Senha" value={this.senha} onChange={this.changeSenha} />
                        {/*
                        <span className="psw"><a href="#">Esqueci minha senha </a></span>
                        */}
                        <a href='#/password' className="esqueci-senha" onClick={this.goPassword}>Esqueci minha senha </a>
                        <br></br>
                        <br></br>
                        <button className="btn btn-primary" type="submit" id="Entrar" onClick={this.setCliente}>Entrar</button><br></br>
                        <a href='#/register'>
                            <button className="btn btn-primary" type="submit" id="Cadastrar">Cadastre-se aqui.</button>
                        </a>
                    </form>
                </div>
            </div>
            </> 
        )
    }
}
