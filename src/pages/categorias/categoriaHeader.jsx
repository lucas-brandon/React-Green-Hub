import React, { Component } from "react";
import Axios from 'axios';
import "./categorias.css";

const URL_Produtos = 'http://modelagem.test/api/produtos/listar';

export default class Categorias extends Component {
        state = {
            produtos: []
        } 

    componentDidMount(){
        this.getProdutos();
    }
    
	getProdutos = () => {
		Axios.get(`${URL_Produtos}`).then(resp => {
			this.setState({produtos: resp.data});
        });
    }

    listarProdutos= () => {
		return this.state.produtos.map((produto => {
			return <li><a href={"#/" + produto.nome_produto}>{produto.nome_produto}</a></li>
		}))
	};

    render() {
        
        const produtos = new Object(this.state.produtos);
        console.log(produtos);
        return (
            <div className="home">
                <div className="wrap">
                    {this.listarProdutos()}        		
                    <div className="clear"></div>
                </div>
            </div>
        );
    };
};  