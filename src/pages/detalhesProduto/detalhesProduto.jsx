import React, {Component} from 'react';
import './detalhesProduto.css';
import Titulo from '../../template/titulo/titulo';

export default class DetalhesProduto extends Component {
    render() {
        return (
            <>
                <Titulo name="Detalhes do Produto" />
                <div class="cartao">
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <img src="https://www.gsuplementos.com.br/upload/banner/8aa81255b9340ba8f2eda4edf36ab633.jpg"k class="cartao-img" alt="..."/>
                        </div>
                        <div class="col-12 col-md-8">
                            <div class="card-body">
                                <p class="marcaItem">Marca do item</p>
                                <a class="a-detalhes" href="./detalhesDoProduto.php"><h3 class="nomeItem">nome Item</h3></a>
                                <h4 class="preco">R$ 39.90
                                    <button type="submit" class="retirar">-</button>
                                    <input class="quantidade" placeholder="1"/>
                                    <button type="submit" class="adicionar">+</button>
                                </h4>
                                <p class="descricaoItem">Descrição do item.</p>
                                <a href="./shopping_cart.php"><button type="submit" class="comprar">Comprar</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
                <script src="assets/scripts/detalhesDoProduto.js"></script>
                <script src="assets/js/detalhesDoProduto.js"></script>
            </>
        )
    }
}