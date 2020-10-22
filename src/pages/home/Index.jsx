import React, { Component } from "react";
import "./index.css";
import GridCard from "../../template/card/gridCard";
import axios from 'axios';

const URL_PRODUTO_LISTA = 'http://modelagem.test/api/produtos/listar';

export default class Index extends Component {

    constructor(props){
        super(props)
        this.state = {
            produtos: []
        }
    }

    componentDidMount(){
        this.getProdutos();
    }

    getProdutos = () => {
        axios.get(`${URL_PRODUTO_LISTA}`)
        .then(resp => this.setState({produtos: resp.data}))
    }


  render() {
    const produtos = new Object(this.state.produtos);
    console.log(produtos);

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
            </div>
          </div>
        </div>

        {/*<!--Cards-->*/}
        <div className="container">
          <GridCard produtos={produtos}/>

          <GridCard />
        </div>

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
