import React, { Component } from "react";
import { browserHistory } from 'react-router';
import "./categorias.css";
import axios from "axios";
import GridCard from "../../template/card/gridCard";
import Titulo from "../../template/titulo/titulo";


const URL_PRODUTO_LISTA = "http://modelagem.test/api/produtos/listar";
const URL_CATEGORIA_BUSCA = "http://modelagem.test/api/categoria/buscar/";
const URL_PRODUTO_BUSCA = "http://modelagem.test/api/categoria/buscarProdutos/";
const URL_CATEGORIA_PRODUTO = "http://modelagem.test/api/categoria/buscarTermo/";

export default class Index extends Component {
    constructor(props) {
      super(props);
      this.state = {
        produtos: [],
        produtosCategoria: [],
        categoria: null
      };
      //this.getProdutos();

    }
    componentDidMount(){
        let test = parseFloat(this.props.params.id);
        if(!isNaN(test)){
            this.getProdutos();
        }
        else{
            this.getSearch();
        }
    }

    getSearch = () => {
        //alert("search!")
        axios.get(`${URL_CATEGORIA_PRODUTO}` + this.props.params.id)
        .then(resp => {
            this.setState({ produtosCategoria: resp.data })
            this.setState({ categoria: "Busca por \""+this.props.params.id+"\"" })
            //console.log("categorias\n\n\n")
            //console.log(resp.data)
        });
        
    }

    getProdutos = () => {
        /*
        axios.get(`${URL_PRODUTO_LISTA}`)
            .then((resp) => {
                this.setState({ produtos: resp.data })
                console.log(`${URL_PRODUTO_LISTA}`);
        });

        axios.get(`${URL_CATEGORIA_BUSCA}`+this.props.params.id)
            .then((resp) => {
                this.setState({ categoria: resp.data.descricao })
                //console.log("categoria do resp")
                //console.log(resp.data);
        });
        */
        axios.get(`${URL_PRODUTO_BUSCA}` + this.props.params.id)
        .then((resp) => {this.setState({ produtosCategoria: resp.data })
            console.log("categorias\n\n\n")
            console.log(resp.data)
        });

        axios.get(`${URL_CATEGORIA_BUSCA}` + this.props.params.id)
        .then((resp) => {this.setState({ categoria: resp.data.descricao })
            console.log("categorias\n\n\n")
            console.log(resp.data)
        });
        
    }

    buscaProdutos(){
        let array = [];
        //console.log("busca produtos:")
        //console.log(this.state.produtos)
        this.state.produtos.forEach(produto => {
            if(produto.categoria === this.state.categoria){
                array.push(produto);
            }
        });

        return array;
    };
    
    render() {
        //let produtos = this.buscaProdutos();
        const produtos = new Object(this.state.produtosCategoria);
        const categoria = this.state.categoria;

        console.log("search no render")
        console.log(produtos)
        let div;
        //alert(this.state.produtosCategoria.length)
        if(this.state.produtosCategoria.length > 0){
            div = (
                <div className="container grid">
                    {/*<!--Cards-->*/}
                    <GridCard produtos={produtos} /><GridCard />
                </div>
            )
        }
        else {
            div = (
                <Titulo titulo="Nenhum produto encontrado."></Titulo>
            )
        }

        return (
          <div className="row">
              <Titulo titulo={categoria}></Titulo>
              {/*
              <div className="filtro column col-md-2 col-12">
                  <h4>Marca</h4>
                  <div className="form-check">
                      <input
                          className="form-check-input"
                          type="radio"
                          name="marca"
                          id="marca1"
                          value="option1"
                      />
                      <label className="form-check-label" for="marca1">
                          Marca um
                      </label>
                  </div>
                  <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="marca"
                        id="marca2"
                        value="option2"
                      />
                      <label className="form-check-label" for="marca2">
                          Marca dois
                      </label>
                  </div>
                  <h4>Preço</h4>
                  <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="preco"
                        id="preco1"
                        value="option3"
                      />
                      <label className="form-check-label" for="preco1">
                          Preço x a x
                      </label>
                  </div>
                  <div className="form-check">
                      <input
                          className="form-check-input"
                          type="radio"
                          name="preco"
                          id="preco2"
                          value="option4"
                      />
                      <label className="form-check-label" for="preco2">
                          Preço x a x
                      </label>
                  </div>
                  <h4>ClassNamee</h4>
                  <div className="form-check">
                      <input
                          className="form-check-input"
                          type="radio"
                          name="classNamee"
                          id="classNamee1"
                          value="option5"
                      />
                      <label className="form-check-label" for="classNamee1">
                          ClassNamee um
                      </label>
                  </div>
                  <div className="form-check">
                      <input
                          className="form-check-input"
                          type="radio"
                          name="classNamee"
                          id="classNamee2"
                          value="option6"
                      />
                      <label className="form-check-label" for="classNamee2">
                          ClassNamee dois
                      </label>
                  </div>
              </div>
              
              
                <div className="container grid">
                    <GridCard produtos={produtos} /><GridCard />
                </div>
                */}
                {div}
            </div>
          
        
    );
  }
}
