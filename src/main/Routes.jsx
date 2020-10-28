import React from 'react';
import { Router, Route, Redirect, hashHistory, Switch } from 'react-router';

import Home from '../pages/home/Index';
import Login from '../pages/login/Login'
//import Categorias from '../pages/categorias/Index';
import Categorias from '../pages/categorias/categoriaHeader';
import ShoppingCart from '../pages/shoppingCart/ShoppingCart';
import Contact from '../pages/contact/Contact';
import Checkout from '../pages/checkout/Checkout';
import Finished from '../pages/finished/Finished';
import Register from '../pages/register/register';
import DetalhesProduto from '../pages/detalhesProduto/detalhesProduto';
import Profile from '../pages/profile/profile';
import Pedidos from '../pages/pedidos/Pedidos';
//import About from '../about/About';

export default props => (
    <Router history={hashHistory}>
        {/* <Switch>
            <>
            <Route path='/home' component={Home}></Route>
            <Route path='/Categorias' component={Categorias}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/shopping_cart' component={ShoppingCart}></Route>
            <Route path='/checkout' component={Checkout}></Route>
            <Route path='/finished' component={Finished}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/detalhesProduto/:id' component={DetalhesProduto}></Route>
            <Route path='/profile' component={Profile}></Route>
            </>
            <Route path='/login' component={Login}></Route>
        </Switch> */}
        <Route path='/home' component={Home}></Route>
        <Route path='/categorias' component={Categorias}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/shoppingCart/' component={ShoppingCart}></Route>
        <Route path='/checkout' component={Checkout}></Route>
        <Route path='/finished' component={Finished}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/detalhesProduto/:id' component={DetalhesProduto}></Route>
        <Route path='/profile' component={Profile}></Route>
        <Route path='/pedidos' component={Pedidos}></Route>
        <Redirect from='*' to='/home'></Redirect>
    
    </Router>
)