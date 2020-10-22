import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from '../pages/home/Index';
import Register from '../pages/register/register';
import DetalhesProduto from '../pages/detalhesProduto/detalhesProduto';
import Profile from '../pages/profile/profile';
//import About from '../about/About';

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/detalhesProduto' component={DetalhesProduto}></Route>
        <Route path='/profile' component={Profile}></Route>
        <Redirect from='*' to='/home'></Redirect>
    </Router>
)