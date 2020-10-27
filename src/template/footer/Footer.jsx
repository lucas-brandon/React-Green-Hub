import React from 'react';
import './footer.css'

export default props => {
    return (
    <footer class="page-footer font-small ">
        <div class="container-fluid text-center text-md-left">

            <div class="row">
                <div class="col-4 col-md-3 mx-auto footer">
                    <img class="logo" src="images/logo.png" alt="some text"></img>
                </div>

                <div class="col-8 col-md-3 mx-auto footer">
                    <a href="#/contact"><h5 class="h5-custom">Atendimento</h5></a>
                    <ul style={{listStyle: 'none'}} class="contato">
                        <li><img class="contato-icon midia-icon" src="images/24h.png"></img> Telefone: 115567-3490
                        </li>
                        <li> greenhub@green.com.br Rua</li>
                        <li>Minas gerais , 123</li>
                    </ul>

                </div>

                <div class="col-6 col-md-3 mx-auto footer">
                    <h5 class="h5-custom">Formas de pagamento</h5>
                    <a><img class="pay-icon" src="images/pay.webp"></img></a>

                </div>

                <div class="col-6 col-md-3 mx-auto footer">
                    <h5 class="icon-midia h5-custom">Redes Sociais</h5>
                    <a> <img class="midia-icon" src="images/youtube.png"></img></a>
                    <a> <img class="midia-icon" src="images/twitter.png"></img></a>
                    <a><img class="midia-icon" src="images/instagram.png"></img></a>
                    <a><img class="midia-icon" src="images/facebook.png"></img></a>
                </div>

            </div>

        </div>

    </footer>

    )
}