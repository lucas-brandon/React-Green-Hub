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
                    this.setState({msg: "Informações validadas com sucesso!", verificado: 1, cliente_id: resp.data});
                }
                else {
                    console.log("resp data = 0")
                    this.setState({msg: "Informações inválidas"});
                }
                
                
            })
            .catch(err => {
                console.log(err)
                localStorage.setItem('msg', "Ocorreu um erro interno. Tente novamente mais tarde."); 
            })
            
    }
    clearStateMsg = () => {
        this.setState({msg: ""})
    }
    goBack = () => {
        browserHistory.goBack()
        browserHistory.push('#/login/#header');
        document.location.reload(true); 
      }


    updateCliente = () => {
        
        console.log("aquiii update cliente")
        //localStorage.setItem('msg', "teste update cliente."); 

        localStorage.setItem('msg', "Aguarde um momento.");
        
        axios.put(`${URL_UPDATE_CLIENTE}` + this.state.cliente_id, {
            senha: this.state.senha,
        })
        .then(resp => {
            console.log(resp)
            localStorage.setItem('msg', "Senha alterada com sucesso.");
            this.setState({msg: "Senha alterada com sucesso."});
            browserHistory.push('#/login');
            document.location.reload(true); 
        });

        this.setState({msg: "Aguarde um momento."});
        
    }

    render () {
        const {mascaraCPF} = this.state;
        let div;

        console.log("verificado: ");
        console.log(this.state.verificado);

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
            btn.innerText = "Confirmar"
        }

        let msgLogin ;
        console.log("estado msg: "+this.state.msg)
        if(this.state.msg != undefined){
            msgLogin = (<Msg msg={this.state.msg} id="msgPassword" clear={this.clearStateMsg}></Msg>)
        }
        else {
            msgLogin = (<Msg msg="" id="msgPassword" clear={this.clearStateMsg}></Msg>)
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
                        
                        {msgLogin}
                        <br></br>
                        {div}
                        <br></br>
                        <div className="col-12" style={{paddingLeft: "0px", paddingRight: "0px"}}>
                            <div className="row" style={{justifyContent: "space-between"}}>
                                <span className="btn btn-primary col-4" id="voltar" onClick={this.goBack}>Voltar</span>
                                
                                <span className="btn btn-primary col-4" id="verificar" onClick={this.verificarSenha}>Verificar</span>
                                

                            </div>

                        </div>
                
                    </form>
                </div>
            </div>
            </> 
        )
    }
}
