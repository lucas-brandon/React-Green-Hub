import React, {Component} from 'react';
import './contact.css';
import Titulo from '../../template/titulo/titulo';


export default class Contact extends Component {


    render() {
        return (
            <>
            <Titulo titulo="Formulário de Contato"/>
                    
                <form name="formulario">
                    {/*container retangular*/}
                    <section class="container col-12">
                        <div class="row">
                            {/*primeira metade do container*/}
                            <div class="container col-12 col-md-6 mx-0" >
                                {/*alinhando o container*/}
                                <div class="container col-12 mx-12 mt-5">
                                    <div class="row">
                                        {/*textos*/}
                                        <div class="col-12">
                                            <div class= "form-group">
                                                <label>Assunto*</label>
                                                <input type="text" class="form-control assuntoContact" required></input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Nome*</label>
                                                <input type="text" class="form-control nomeContact" required></input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Email*</label>
                                                <input type="email" class="form-control emailContact"  placeholder="exemplo@email.com" required></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*segunda metade do container*/}
                            <div class="container col-12 col-md-6 mx-0">
                                {/*alinhando o container*/}
                                <div class="container col-12 mt-5">
                                    <div class="row">
                                        {/*textos*/}
                                        <div class="col-12 col-md-12">
                                            <div class= "form-group">
                                                <label>Telefone</label>
                                                <input type="text" class="form-control telContact" placeholder="DDD + Telefone"></input>
                                            </div>
                                        </div>
                                        {/*
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>Celular</label>
                                                <input type="text" class="form-control celContact" placeholder="DDD + Telefone"></input>
                                            </div>
                                        </div>
                                        */}
                                        <div class="col-12 col-md-12">
                                            <label for="state">Estado*</label>
                                            <select class="form-control" id="state" onChange={this.changeEstado}required>    
                                                <option value="AC">AC</option>
                                                <option value="AL">AL</option>
                                                <option value="AP">AP</option>
                                                <option value="AM">AM</option>
                                                <option value="BA">BA</option>
                                                <option value="CE">CE</option>
                                                <option value="ES">ES</option>
                                                <option value="GO">GO</option>
                                                <option value="MA">MA</option>
                                                <option value="MT">MT</option>
                                                <option value="MS">MS</option>
                                                <option value="MG">MG</option>
                                                <option value="PA">PA</option>
                                                <option value="PB">PB</option>
                                                <option value="PR">PR</option>
                                                <option value="PE">PE</option>
                                                <option value="PI">PI</option>
                                                <option value="RJ">RJ</option>
                                                <option value="RN">RN</option>
                                                <option value="RS">RS</option>
                                                <option value="RO">RO</option>
                                                <option value="RR">RR</option>
                                                <option value="SC">SC</option>
                                                <option value="SP">SP</option>
                                                <option value="SE">SE</option>
                                                <option value="TO">TO</option>
                                                <option value="DF">DF</option>
                                            </select>
                                            {/*
                                            <div class="form-group">
                                                <label>Estado*</label>
                                                <input type="text" class="form-control estadoContact" required></input>
                                            </div>
                                            */}
                                        </div>
                                        <div class="col-12 col-md-12">
                                            <div class="form-group">
                                                <label>Cidade*</label>
                                                <input type="text" class="form-control cidadeContact" required></input>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>  
                        </div>
                    </section>
                    <section class="container col-12">
                        <div class="row">
                            <div class="container col-12 col-md-6 mx-0">
                                <div class="container col-12">
                                    <div class="row">
                                        <div class="col-12">
                                        <label>Mensagem*</label>
                                    </div>
                                    <div class="col-12 containerText">
                                        <textarea class="form-control area"></textarea>
                                    </div>
                                    <div class="col-12 col-md-6 containerBotao" id="botao1">
                                        <button class="limparContact">Limpar</button>
                                    </div>
                                    <div class="col-12 col-md-6 containerBotao">
                                        <button class="enviarContact">Enviar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </>
        )
    }
}