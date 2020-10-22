import React, {Component} from 'react';
import './register.css';

export default class Register extends Component {
    render() {
        return (
            <>
                <div class="tituloRegister">
                    <h1>Cadastro</h1>
                </div>
    
                {/*container retangular*/}
                <form class="container col-12 col-md-12" name="formulario" >
                    <div class="row">
                        {/*primeira metade do container*/}
                        <div class="container col-12 col-md-6 mx-0" >
                            <div class="row">
                                {/*alinhando o container*/}
                                <div class="container col-12 col-md-12 mx-12 mt-5">
                                    <div class="row">
                                        {/*textos*/}
                                        <div class="col-12 col-md-6">
                                            <div class= "form-group">
                                                <label>Nome*</label>
                                                <input type="text" class="form-control nome" required/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>Sobrenome*</label>
                                                <input type="text" class="form-control sobrenome" required/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>CPF*</label>
                                                <input type="text" class="form-control cpf"  placeholder="ex: 123.456.789-10" required/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label>Data de Nascimento</label>
                                                <input type="date" class="form-control data-nascimento" required/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>Celular*</label>
                                                <input type="text" class="form-control celular" placeholder="DDD + Telefone" required/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>Telefone</label>
                                                <input type="text" class="form-control telefone" placeholder="DDD + Telefone" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        {/*segunda metade do container*/}
                        <div class="container col-12 col-md-6 mx-0">
                            <div class="row">
                                {/*alinhando o container*/}
                                <div class="container col-12 col-md-12 mt-5">
                                    <div class="row">
                                        {/*textos*/}
                                        <div class="col-12 col-md-12">
                                            <div class= "form-group">
                                                <label>Email*</label>
                                                <input type="email" class="form-control email" placeholder="exemplo@email.com" required/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>Senha*</label>
                                                <input type="password" class="form-control senha" required/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="form-group">
                                                <label>Confirmar senha*</label>
                                                <input type="password" class="form-control senha" required/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12">
                                            <div class="form-group">    
                                                <div class="form-check">
                                                    <input class="form-check-input ofertas" type="checkbox" name="envio-ofertas" value="ofertas" id="check_ofertas"/>
                                                    <label class="form-check-label" for="check_ofertas">Desejo receber informações e ofertas  de produtos</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-12">
                                            <div class="form-group"> 
                                                <button type="button submit" class="btn-block botaoRegister">Cadastrar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                     
                        </div>
                    </div>
                </form>
            </>
        )
    }
}