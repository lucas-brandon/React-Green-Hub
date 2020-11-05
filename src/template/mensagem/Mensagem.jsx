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
          categorias: []
        };
        //this.getProdutos();
  
    }

    click = (t) => {
        console.log("click mensagem")
        //console.log(t.target)
        //t.target.classList.toggle("show");
        //alert(t)
    }

    render(){
        return (
            <>
            <div className="container mensagem" className={this.props.status}>
                <span onClick={() => this.props.onClick()}>{this.props.msg}</span>
            </div>
            </>
        )
    }

}