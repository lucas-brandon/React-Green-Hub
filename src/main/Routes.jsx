import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from '../pages/home/Index';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Categorias from '../pages/categorias/Index';
>>>>>>> c6c42282a0f879fb35f92ce5895e77795632c56a
import ShoppingCart from '../pages/shoppingCart/ShoppingCart';
import Contact from '../pages/contact/Contact';
import Checkout from '../pages/checkout/Checkout';
import Finished from '../pages/finished/Finished';
=======
import Register from '../pages/register/register';
import DetalhesProduto from '../pages/detalhesProduto/detalhesProduto';
>>>>>>> 4401686d20e490721b03181bca91b65d2ea7792b
//import About from '../about/About';

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home}></Route>
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <Route path='/Categorias' component={Categorias}></Route>
>>>>>>> c6c42282a0f879fb35f92ce5895e77795632c56a
        <Route path='/contact' component={Contact}></Route>
        <Route path='/shopping_cart' component={ShoppingCart}></Route>
        <Route path='/checkout' component={Checkout}></Route>
        <Route path='/finished' component={Finished}></Route>
=======
        <Route path='/register' component={Register}></Route>
        <Route path='/detalhesProduto' component={DetalhesProduto}></Route>
>>>>>>> 4401686d20e490721b03181bca91b65d2ea7792b
        <Redirect from='*' to='/home'></Redirect>
    </Router>
)