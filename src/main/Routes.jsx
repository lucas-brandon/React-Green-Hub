import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from '../pages/home/Index';
//import About from '../about/About';

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home}></Route>
        <Redirect from='*' to='/home'></Redirect>
    </Router>
)