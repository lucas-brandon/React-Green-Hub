import React, { Component } from "react";
import "./password.css";
import axios from 'axios';
import Msg from '../../template/mensagem/Mensagem';
import Titulo from '../../template/titulo/titulo';
import { cpfMask, telMask } from '../mask';
import { browserHistory } from 'react-router';
//import { BrowserRouter, useHistory } from 'react-router-dom';
const URL_VERIFICAR = 'http://modelagem.test/api/clientes/verificar/'//453.123.678-34/felipe_silva@hotmail.com';
const URL_UPDATE_CLIENTE = 'http://modelagem.test/api/clientes/atualizar/'



export default class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            cliente_id: 0,
            cpf: '',
            mascaraCPF: "",
            msgFail: false,
            verificado: 0

        }
    }

    changeEmail = event => {
        this.setState({email: event.target.value});
    }

    changeSenha = event => {
        this.setState({senha: event.target.value});
    }

    changeCPF = (event) => {
        this.setState({mascaraCPF: cpfMask(event.target.value)})
        this.setState({cpf: event.target.value})
    }

    verificarSenha = () => {
            axios.get(`${URL_VERIFICAR}` + this.state.cpf + '/' + this.state.email)
            .then(resp => {
                console.log(resp.data)
                if(resp.data){
                    this.setState({msg: "Uma mensagem com a sua nova senha foi enviada para o e-mail informado", verificado: 1, cliente_id: resp.data});
                }
                else {
                    this.setState({msg: "Informações inválidas"});
                }
                
                
            })
            .catch(err => {
                console.log(err.response)
                localStorage.setItem('msg', "Ocorreu um erro interno. Tente novamente mais tarde.");
                //document.location.reload(true); 
            })
            //window.location.href = '#/home';
            
    }

    goBack = () => {
        //browserHistory.goBack()
        browserHistory.push('#/login/#header');
        document.location.reload(true); 
      }

    toggleM = (msg) => {
        //let msg = document.getElementsByClassName("mensagem");
        console.log("toggleeeeee")
        console.log(msg)
        if(msg){
            if(msg.classList.contains("show")){
                console.log("show pra hide")
                msg.classList.replace("show", "hide");
            }
            else{
                console.log("hide pra show")
                msg.classList.replace("hide", "show");
            }
        }
        
        
    }

    updateCliente = () => {
        axios.put(`${URL_UPDATE_CLIENTE}` + this.state.cliente_id, {
            senha: this.state.senha,
        })
        .then(resp => {
            console.log(resp)
            localStorage.setItem('msg', "Senha alterada com sucesso.");
            browserHistory.push('#/login');
            document.location.reload(true); 
        })
    }

    render () {
        const {mascaraCPF} = this.state;
        let div;

        if(this.state.verificado){
            div = (
                <>
                <h1 className="h3 mb-3 font-weight-normal titulo-login">Digite sua nova senha</h1>
                <br></br>
                <input type="password" className="form-control" onChange={this.changeSenha}></input>
                </>
            )
            //document.getElementById("verificar").onclick = function() { this.verific; }
            let btn = document.getElementById("verificar");
            btn.onclick = this.updateCliente;
            btn.innerText = "Alterar Senha"
        }
        
        return (
            <>
            <Titulo titulo="Recuperação de Senha"></Titulo>
            <div className='row'> 
                <div className="login-container col-6" id="box">
                    <form className="form-signin col-8">
                        <h1 className="h3 mb-3 font-weight-normal titulo-login">Digite seu e-mail e CPF</h1>
                        <input type="email" id="email" className="form-control" placeholder="exemplo@email.com" value={this.email} onChange={this.changeEmail} required/>
                        {/*<input type="password" id="senha" className="form-control" placeholder="Senha" value={this.senha} onChange={this.changeSenha} required/>
                        */}
                        <input type="text" 
                            onChange={this.changeCPF}
                            className="form-control cpf" 
                            value={mascaraCPF} 
                            id="cpf"
                            placeholder="ex: 123.456.789-10" maxLength="14" minLength="14" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                        required/>
                        {/*
                        <span className="psw"><a href="#">Esqueci minha senha </a></span>
                        */}
                        <br></br>
                        {div}
                        <br></br>
                        <div className="col-12" style={{paddingLeft: "0px", paddingRight: "0px"}}>
                            <div className="row" style={{justifyContent: "space-between"}}>
                                <button className="btn btn-primary col-4" id="voltar" onClick={this.goBack}>Voltar</button>
                                
                                <button className="btn btn-primary col-4" id="verificar" onClick={this.verificarSenha}>Verificar</button>
                                

                            </div>

                        </div>
                
                    </form>
                </div>
            </div>
            </> 
        )
    }
}
