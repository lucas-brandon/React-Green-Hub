import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from '../pages/home/Index';
import Login from '../pages/login/Login'
//import Categorias from '../pages/categorias/Index';
import Categorias from '../pages/categorias/Index';
import ShoppingCart from '../pages/shoppingCart/ShoppingCart';
import Contact from '../pages/contact/Contact';
import Checkout from '../pages/checkout/Checkout';
import Finished from '../pages/finished/Finished';
import Register from '../pages/register/register';
import DetalhesProduto from '../pages/detalhesProduto/detalhesProduto';
import Profile from '../pages/profile/profile';
import Pedidos from '../pages/pedidos/Pedidos';
import Password from '../pages/password/Password';
//import About from '../about/About';

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home}></Route>
        <Route path='/categories/:id' component={Categorias}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/shoppingCart' component={ShoppingCart}></Route>
        <Route path='/checkout' component={Checkout}></Route>
        <Route path='/success' component={Finished}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/details/:id' component={DetalhesProduto}></Route>
        <Route path='/profile' component={Profile}></Route>
        <Route path='/orders' component={Pedidos}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/password' component={Password}></Route>
        <Redirect from='*' to='/home'></Redirect>
    </Router>
)