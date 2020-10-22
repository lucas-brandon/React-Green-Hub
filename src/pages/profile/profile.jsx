import React, {Component} from 'react';
import './profile.css';

export default class Profile extends Component {
    render() {
        return (
            <>

            <div class="containerProfile">
                <p class="text-center tituloProfile">Dados Pessoais</p>
            </div>
            <div class="container col-12">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class= "form-group">
                                <div class="card">
                                    <h5 class="card-header">Maria da Silva</h5>
                                    <div class="card-body">
                                        <p class="card-text">CPF: 123.456.789-10</p>
                                        <p class="card-text">Celular: (11) 9 9999-8888</p>
                                        <p class="card-text">Telefone: (11) 2000-2000</p>
                                        <p class="card-text">Email: maria.silva@gmail.com</p>
                                        <p class="card-text">Data de Nascimento: 01/01/2001</p>
                                        <a href="#" class="btn btn-lg btnAlterar">Alterar Cadastro</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="containerProfile">
                <p class="text-center tituloProfile">Endereços</p>
            </div>
            <div class="container col-12">
                <div class="row">
                    <div class="container col-12 mx-12">
                        <div class="container">
                            <div class= "form-group">
                                <div class="row">
                                    <div class="col-12 col-md-3 mt-5">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Rua Tal</h5>
                                                <p class="card-text">Bairro, n° ecomplemento</p>
                                                <p class="card-text">Cidade Estado UF</p>
                                                <p class="card-text">País</p>
                                                <a href="#" class="btn btnAlterar">Alterar</a>
                                                <a href="#" class="btn btnCardExcluir">Excluir</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-3 mt-5">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Rua Tal</h5>
                                                <p class="card-text">Bairro, n° e complemento</p>
                                                <p class="card-text">Cidade Estado UF</p>
                                                <p class="card-text">País</p>
                                                <a href="#" class="btn btnAlterar">Alterar</a>
                                                <a href="#" class="btn btnCardExcluir">Excluir</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-3 mt-5">
                                        <div class="card">
                                            <div class="card-body">
                                                <a href="#" class="btn btnCardAdd">Adicionar outro endereço</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                                                
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="containerProfile">
                <p class="text-center tituloProfile">Pedidos</p>
            </div>
            <div class="container col-12">
                <div class="row">
                    <div class="container col-12 mx-12">
                        <div class="container">
                            <div class= "form-group">
                                <div class="row">
                                    <div class="col-12 col-md-4 mt-5">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Em andamento</h5>
                                                <p class="card-text">Data do Pedido: 12 de out de 2020</p>
                                                <p class="card-text">Previsão de Entrega: 21 de out de 2020</p>
                                                <p class="card-text">N° do Pedido: 700-01010101-0202020</p>
                                                <p class="card-text">Total do Pedido: R$ 100,00 (1 item)</p>
                                                <h5>Endereço da entrega</h5>
                                                <p class="card-text">Rua Do Exemplo 800</p>
                                                <p class="card-text">Bl 20 Apt 01B Jardim Exemplar (Zona Leste)
                                                </p>
                                                <p class="card-text">São Paulo</p>
                                                <p class="card-text">SP</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-4 mt-5">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Entregue</h5>
                                                <p class="card-text">Data do Pedido: 4 de set de 2020</p>
                                                <p class="card-text">Entregue em: 11 de set de 2020</p>
                                                <p class="card-text">N° do Pedido: 700-01010121-0222020</p>
                                                <p class="card-text">Total do Pedido: R$ 35,70 (2 itens)</p>
                                                <h5>Endereço da entrega</h5>
                                                <p class="card-text">Rua Da Segunda Opção 100</p>
                                                <p class="card-text">Vl Outra Opção (Zona Leste)
                                                </p>
                                                <p class="card-text">São Paulo</p>
                                                <p class="card-text">SP</p>
                                            </div>
                                        </div>
                                    </div>                                
                                    <div class="col-12 col-md-4 mt-5">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Entregue</h5>
                                                <p class="card-text">Data do Pedido: 24 de ago de 2020</p>
                                                <p class="card-text">Entregue em: 01 de set de 2020</p>
                                                <p class="card-text">N° do Pedido: 700-0303030-015015</p>
                                                <p class="card-text">Total do Pedido: R$ 264,35 (4 itens)</ p>
                                                <h5>Endereço da entrega</h5>
                                                <p class="card-text">Rua Da Segunda Opção 100</p>
                                                <p class="card-text">Vl Outra Opção (Zona Leste)
                                                </p>
                                                <p class="card-text">São Paulo</p>
                                                <p class="card-text">SP</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 mt-5">
                                        <span>Exibindo ultimos três pedidos.</span>
                                        <a href="./historico.php" class="btn btnCardAdd">Veja todos os seus pedidos</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="containerProfile">
                    <p class="text-center tituloProfile">Cartões</p>
                </div>
                <div class="container col-12">
                    <div class="row">
                        <div class="container col-12 mx-12">
                            <div class="container">
                                <div class= "form-group">
                                    <div class="row">
                                        <div class="col-12 col-md-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Cartão</h5>
                                                    <p class="card-text">N° do cartão: ******2345</p>
                                                    <p class="card-text">Bandeira: Maestro</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Cartão</h5>
                                                    <p class="card-text">N° do cartão: *******9090</p>
                                                    <p class="card-text">Bandeira: Elo</p>
                                                </div>
                                            </div>
                                        </div>                                
                                        <div class="col-12 col-md-3 mt-5 end">
                                            <div class="card">
                                                <div class="card-body">
                                                    <a href="#" class="btn btnCardAdd">Adicionar outro  cartão</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    }
}