import React, {Component} from 'react';
import './register.css';
import Titulo from '../../template/titulo/titulo';

export default class Register extends Component {
    render() {
        return (
            <>
                <Titulo name="Cadastro"/>
    
                {/*container retangular*/}
                <form className="container col-12 col-md-12" name="formulario" >
                    <div className="row">
                        {/*primeira metade do container*/}
                        <div className="container col-12 col-md-6 mx-0" >
                            <div className="row">
                                {/*alinhando o container*/}
                                <div className="container col-12 col-md-12 mx-12 mt-5">
                                    <div className="row">
                                        {/*textos*/}
                                        <div className="col-12 col-md-6">
                                            <div className= "form-group">
                                                <label>Nome*</label>
                                                <input type="text" className="form-control nome" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label>Sobrenome*</label>
                                                <input type="text" className="form-control sobrenome" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label>CPF*</label>
                                                <input type="text" className="form-control cpf"  placeholder="ex: 123.456.789-10" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label>Data de Nascimento</label>
                                                <input type="date" className="form-control data-nascimento" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label>Celular*</label>
                                                <input type="text" className="form-control celular" placeholder="DDD + Telefone" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label>Telefone</label>
                                                <input type="text" className="form-control telefone" placeholder="DDD + Telefone" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        {/*segunda metade do container*/}
                        <div className="container col-12 col-md-6 mx-0">
                            <div className="row">
                                {/*alinhando o container*/}
                                <div className="container col-12 col-md-12 mt-5">
                                    <div className="row">
                                        {/*textos*/}
                                        <div className="col-12 col-md-12">
                                            <div className= "form-group">
                                                <label>Email*</label>
                                                <input type="email" className="form-control email" placeholder="exemplo@email.com" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label>Senha*</label>
                                                <input type="password" className="form-control senha" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label>Confirmar senha*</label>
                                                <input type="password" className="form-control senha" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12">
                                            <div className="form-group">    
                                                <div className="form-check">
                                                    <input className="form-check-input ofertas" type="checkbox" name="envio-ofertas" value="ofertas" id="check_ofertas"/>
                                                    <label className="form-check-label" for="check_ofertas">Desejo receber informações e ofertas  de produtos</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12">
                                            <div className="form-group"> 
                                                <button type="button submit" className="btn-block botaoRegister">Cadastrar</button>
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