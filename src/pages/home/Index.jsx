import React, { Component } from "react";
import "./index.css";
import GridCard from "../../template/card/gridCard";
import axios from 'axios';
import Carousel from '../../template/banner/carousel';
import Banner from '../../template/banner/banner';
const URL_PRODUTO_LISTA = 'http://modelagem.test/api/produtos/listar';


export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
      cont: 0
    };

  }

  refreshPage = () => {
    window.location.reload(false);
    if (window.location.reload(true)){
      window.location.reload(true);
      this.cont ++;
    }
  }

  componentDidMount() {
    if(this.cont < 1){
      this.refreshPage();
    }
    this.getProdutos();
  }

  getProdutos = () => {
    axios
      .get(`${URL_PRODUTO_LISTA}`)
      .then((resp) => this.setState({ produtos: resp.data }));
      
  };

  render() {
    let produtos = new Object(this.state.produtos);
    console.log('teste');
    console.log(produtos);

    return (
  
      <>
        <Carousel name="container carousel-c" />

        {/*<!--Cards-->*/}
        <div className="container">
          <GridCard produtos={produtos} />
          <GridCard />
        </div>

        {/*<!-- Banner bottom -->*/}
        <Banner name="botton-barr" />
        
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