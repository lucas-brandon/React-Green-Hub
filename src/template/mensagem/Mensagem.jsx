import React, { Component } from "react";
import './mensagem.css'
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
    browserHistory
  } from "react-router";


const URL_CATEGORIA_LISTA = 'http://modelagem.test/api/categoria/listar'

export default class Mensagem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: true
        };
        //this.getProdutos();
  
    }

    componentDidUpdate(){
        /*
        console.log("update msg")
        if(this.state.show === true){
            console.log("in msg")
            setTimeout(() => {
                this.setState({show: false})
              }, 5000);
            //  setTimeout(this.setState({show: false}), 5000);
        }
        */
    }

    click = (t) => {
        let div = document.getElementById(this.props.id);
        console.log(div)
        if(this.state.show){
            this.setState({show: false})
            div.classList.replace("show", "hide")
            localStorage.removeItem("msg")
        }
        else {
            //this.setState({show: true})
            //div.classList.replace("hide", "show")
        }
        if(this.props.clear){
            this.props.clear();
        }
    }

    render(){
        let div;
        if(this.props.msg != ""){
            div = (
                <div className="mensagem show" id={this.props.id}>
                    <span>{this.props.msg+"   "}</span>
                    <button className="btn-msg" onClick={this.click}>Ok</button>
                </div>
            )
        }
        else {
            div = (
                <div className="mensagem hide" id={this.props.id}>
                    {/*
                    <span>{this.props.msg+"   "}</span>
                    <button className="btn-msg" onClick={this.click}>Ok</button>
                    */}
                </div>
                
            )
        }

        return (
            <div style={{
                height: "50px",
                display: "flex", 
                justifyContent: "center", 
                alignContent: "center",
                marginTop: "30px"}}>
                {div}
            </div>
        )
    }

}