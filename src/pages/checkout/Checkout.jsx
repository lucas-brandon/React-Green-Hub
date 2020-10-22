import React, {Component} from 'react';
import './checkout.css';
import './checkout.js';
import Titulo from '../../template/titulo/titulo';

export default class Checkout extends Component {


    render() {
        return (
            <>
    <Titulo name="Checkout"/>

    <Titulo name="Informações"/>

    <section class="container-fluid container-fluid-checkout col-12">
        <div class="row">
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                {/*Informações do cliente*/}
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <label for="firstName">Nome*</label>
                            <input id="firstName" type="text" class="form-control" required></input>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <label for="lastName">Sobrenome*</label>
                            <input id="lastName" type="text" class="form-control" required></input>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row">
                        <div class="col-md-8 col-sm-12">
                            <label for="address">Endereço*</label>
                            <input id="address" type="text" class="form-control" placeholder="ex: Av. Corifeu de Azevedo Marques, 3097" required></input>
                        </div>

                        <div class="col-md-4 col-sm-12">
                            <label for="complement">Complemento</label>
                            <input id="complement" type="text" class="form-control"></input>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <label for="city">Cidade*</label>
                            <input id="city" type="text" class="form-control" required></input>
                        </div>
                        {/*
                        <div class="col-md-2 col-sm-12">
                            <label for="state">Estado*</label>
                            <input id="state" type="text" class="form-control" required></input>
                        </div>
                        */}
                        <div class="col-md-2 col-sm-12">
                            <label for="state">Estado*</label>
                            <select class="form-control" id="state" required>    
                                <option>AC</option>
                                <option>AL</option>
                                <option>AP</option>
                                <option>AM</option>
                                <option>BA</option>
                                <option>CE</option>
                                <option>ES</option>
                                <option>GO</option>
                                <option>MA</option>
                                <option>MT</option>
                                <option>MS</option>
                                <option>MG</option>
                                <option>PA</option>
                                <option>PB</option>
                                <option>PR</option>
                                <option>PE</option>
                                <option>PI</option>
                                <option>RJ</option>
                                <option>RN</option>
                                <option>RS</option>
                                <option>RO</option>
                                <option>RR</option>
                                <option>SC</option>
                                <option>SP</option>
                                <option>SE</option>
                                <option>TO</option>
                                <option>DF</option>
                            </select>
                        </div>

                        <div class="col-md-4 col-sm-12">
                            <label for="cep">CEP*</label>
                            <input id="cep" type="text" class="form-control" placeholder="ex: 05339-900" required></input>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row">
                        <div class="col-md-8 col-sm-12">
                            <label for="email">E-mail*</label>
                            <input id="email" type="text" class="form-control" placeholder="ex: exemplo@email.com" required></input>
                        </div>

                        <div class="col-md-4 col-sm-12">
                            <label for="phone">Telefone*</label>
                            <input id="phone" type="text" class="form-control" placeholder="ex: DDD + Telefone" required></input>
                        </div>
                    </div>
                </div>
                {/*Fim das informações do cliente*/}

                {/*Forma de pagamento*/}
                <div class="container-fluid container-fluid-checkout">
                    <div class="row title">
                        <div class="col-12">
                            <p>Forma de Pagamento</p>
                        </div>
                    </div>
                </div>
                <div class="container-fluid container-fluid-checkout">
                    <div class="input-group payment">
                        {/* 
                        <div class="input-group-prepend itemRadio">
                            <input type="radio" aria-label="opção de boleto bancário" name="payOption"></input>
                            
                            <img class="img-custom"src="images/boleto-bancario-48.png" alt="boleto bancário"></img>
                        
                        </div>
                        */}
                        <div class="input-group-prepend itemRadio">
                            <div class="input-group">
                                <input type="radio" aria-label="opção de cartão master card" name="payOption"></input>
                            </div>
                            <img class="img-custom"src="images/mc_vrt_pos.svg" alt="master card"></img>
                        </div>
                        <div class="input-group-prepend itemRadio">
                            <div class="input-group">
                                <input type="radio" aria-label="opção de cartão visa" name="payOption"></input>
                            </div>
                            <img class="img-custom"src="images/visa.svg" alt="visa"></img>
                        </div>
                        <div class="input-group-prepend itemRadio">
                            <div class="input-group">
                                <input type="radio" aria-label="opção de cartão american express" name="payOption"></input>
                            </div>
                            <img class="img-custom"src="images/american-express.svg" alt="american express'"></img>
                        </div>
                        <div class="input-group-prepend itemRadio">
                            <div class="input-group">
                                <input type="radio" aria-label="opção de cartão diners club" name="payOption"></input>
                            </div>
                            <img class="img-custom"src="images/diners-club.svg" alt="diners club"></img>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-12">
                                <label for="cardNumber">Número do cartão</label>
                                <input id="cardNumber" type="text" class="form-control" required></input>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-12">
                                <label for="cardName">Nome no cartão</label>
                                <input id="cardName" type="text" class="form-control" required></input>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <label for="cvv">Código de segurança</label>
                                <input id="cvv" type="text" class="form-control" required></input>
                            </div>

                            <div class="col-md-6 col-sm-12">
                                <label for="expiryDate">Data de expiração</label>
                                <input id="expiryDate" type="text" class="form-control" required></input>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Fim da forma de pagamento*/}

                {/*Resumo do Pedido*/}
                <div class="container-fluid container-fluid-checkout">
                    <div class="row title">
                        <div class="col-12">
                            <p>Resumo do Pedido</p>
                        </div>
                    </div>
                </div>
                <div class="conteainer-fluid">
                    <div class="row">
                        <div class="col-6">
                            <table class="table table-checkout">
                                {/*
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                                </thead>
                                */}
                                <tbody>
                                <tr class="tableItemPedido">
                                    <th scope="row"></th>
                                    <td>Itens</td>
                                    <td>R$ 39,90</td>
                                </tr>
                                <tr class="tableDescontoPedido">
                                    <th scope="row"></th>
                                    <td>Descontos</td>
                                    <td>R$ -9,90</td>
                                </tr>
                                <tr class="tableTotalPedido">
                                    <th scope="row"></th>
                                    <td>Total</td>
                                    <td>R$ 30,00</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <a href="#/finished"><button type="submit" class="btn-finalizar-compra col-12">Confirmar</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>

            </>
        )
    }
}