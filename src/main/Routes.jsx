import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from '../pages/home/Index';
import ShoppingCart from '../pages/shoppingCart/ShoppingCart';
import Contact from '../pages/contact/Contact';
import Checkout from '../pages/checkout/Checkout';
import Finished from '../pages/finished/Finished';
//import About from '../about/About';

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/shopping_cart' component={ShoppingCart}></Route>
        <Route path='/checkout' component={Checkout}></Route>
        <Route path='/finished' component={Finished}></Route>
        <Redirect from='*' to='/home'></Redirect>
    </Router>
)