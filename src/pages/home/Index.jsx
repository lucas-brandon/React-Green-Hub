<<<<<<< HEAD
import React, { Component } from "react";
import "./index.css";
import GridCard from "../../template/card/gridCard";

export default class Index extends Component {
  render() {
    return (
      <>
        {/* Caursel  */}
        <div className="container carousel-c">
          <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a href="#/detalhesDoProduto" className="a-ps">
                  {" "}
                  <img
                    src="https://evolutionnutritionlab.com.br/media/wysiwyg/BANNER_ONE_MOBILE.png"
                    width="1253px"
                    height="250px"
                    className="d-block w-100"
                  ></img>
                </a>
              </div>
              <div className="carousel-item">
                <a href="#/detalhesDoProduto" className="a-ps">
                  {" "}
                  <img
                    src="https://images.tcdn.com.br/img/img_prod/798964/1591900464_banner.jpg"
                    width="1253px"
                    height="250px"
                    className="d-block w-100"
                  ></img>
                </a>
              </div>
              <div className="carousel-item">
                <a href="#/detalhesDoProduto" className="a-ps">
                  {" "}
                  <img
                    src="https://evolutionnutritionlab.com.br/media/wysiwyg/BANNERS_SITE_-_DESKTOP_-_KIT_IMUNIDADE.png"
                    width="1253px"
                    height="250px"
                    className="d-block w-100"
                  ></img>
                </a>
              </div>
              <div className="carousel-item">
                <a href="#/detalhesDoProduto" className="a-ps">
                  {" "}
                  <img
                    src="https://evolutionnutritionlab.com.br/media/wysiwyg/Hair_Skin_Nails_Mobile.jpg"
                    width="1253px"
                    height="250px"
                    className="d-block w-100"
                  ></img>
                </a>
              </div>
=======
import React, {Component} from 'react';
import './index.css';
import axios from 'axios';

const URLGET = 'http://modelagem.test/api/produtos/listar';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {produtos: []}

    }

    componentDidMount() {
        
        this.handle()
    }

    handle = () => {
        console.log("testewrqwrqwe");
        axios.get(`${URLGET}`)
        .then(resp => console.log(resp.data));

        axios.get(`${URLGET}`)
        .then(resp => this.setState({produtos: resp.data}));

    }

    render() {
        const produtos = (new Object(this.state.produtos));
        
        console.log("print do produto aqui\n"+produtos);
        return produtos.map(item => (
            <>
                {/* Caursel  */}
                
    <div class="container carousel-c">
        <div>
                    <h1>{item.nm_produto}</h1>
                    
                </div>
        <div id="carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <a href="#/detalhesDoProduto" class="a-ps"> <img src="https://evolutionnutritionlab.com.br/media/wysiwyg/BANNER_ONE_MOBILE.png" width="1253px" height="250px" class="d-block w-100"></img></a>
                </div>
                <div class="carousel-item">
                    <a href="#/detalhesDoProduto" class="a-ps"> <img src="https://images.tcdn.com.br/img/img_prod/798964/1591900464_banner.jpg" width="1253px" height="250px" class="d-block w-100"></img></a>
                </div>
                <div class="carousel-item">
                    <a href="#/detalhesDoProduto" class="a-ps"> <img src="https://evolutionnutritionlab.com.br/media/wysiwyg/BANNERS_SITE_-_DESKTOP_-_KIT_IMUNIDADE.png" width="1253px" height="250px" class="d-block w-100"></img></a>

                </div>
                <div class="carousel-item">
                    <a href="#/detalhesDoProduto" class="a-ps"> <img src="https://evolutionnutritionlab.com.br/media/wysiwyg/Hair_Skin_Nails_Mobile.jpg" width="1253px" height="250px" class="d-block w-100"></img>
                    </a>
                </div>
            </div>
        </div>
    </div>

    {/*<!--Cards-->*/}
    <div class="container">
        <div class="row mb-5">
            <div class="col-md-4 ">
                <div class="card-m">
                    <img src="data:image/png;base64,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" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="valor">R$39:90</h5>
                            <p><mark>{item.nm_produto}</mark></p>
                            <p><mark>{item.nm_marca}</mark></p>
                        <a href="#/detalhesDoProduto" class="btn-m">Ver Produto</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 ">
                <div class="card-m">
                    <img src="data:image/png;base64,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" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="valor">R$39:90</h5>
                        <p><mark>NomeProduto</mark></p>
                        <a href="#/detalhesDoProduto" class="btn-m">Ver Produto</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 ">
                <div class="card-m">
                    <img src="data:image/png;base64,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" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="valor">R$39:90</h5>
                        <p><mark>NomeProduto</mark></p>
                        <a href="#/detalhesDoProduto" class="btn-m">Ver Produto</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-5 ">
            <div class="col-md-4">
                <div class="card-m">
                    <img src="data:image/png;base64,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" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="valor">R$39:90</h5>
                        <p><mark>NomeProduto</mark></p>
                        <a href="#/detalhesDoProduto" class="btn-m">Ver Produto</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card-m">
                    <img src="data:image/png;base64,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" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="valor">R$39:90</h5>
                        <p><mark>NomeProduto</mark></p>
                        <a href="#/detalhesDoProduto" class="btn-m">Ver Produto</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card-m">
                    <img src="data:image/png;base64,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" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="valor">R$39:90</h5>
                        <p><mark>NomeProduto</mark></p>
                        <a href="#/detalhesDoProduto" class="btn-m">Ver Produto</a>
                    </div>
                </div>
>>>>>>> 4a8e32e4347a7c1ba70e8b6b00817f37b312ffa9
            </div>
          </div>
        </div>

        {/*<!--Cards-->*/}
        <div className="container">
          <GridCard />

          <GridCard />
        </div>

<<<<<<< HEAD
        {/*<!-- Banner bottom -->*/}
        <div className=" botton-barr col12">
          <img
            src="https://evolutionnutritionlab.com.br/media/wysiwyg/Hair_Skin_Nails_Mobile.jpg"
            width="1253px"
            height="250px"
            className="d-block w-100"
          ></img>
        </div>
        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
      </>
    );
  }
}
=======
    {/*<!-- Banner bottom -->*/}
    <div class=" botton-barr col12">
        <img src="https://evolutionnutritionlab.com.br/media/wysiwyg/Hair_Skin_Nails_Mobile.jpg" width="1253px" height="250px" class="d-block w-100"></img>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            </>
        )
        )
    }
}
>>>>>>> 4a8e32e4347a7c1ba70e8b6b00817f37b312ffa9
