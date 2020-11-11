import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import Header from '../template/header/Header';
import Footer from '../template/footer/Footer';
import Routes from './Routes';
import './app.css';


export default props => {
    if (Routes.path == '.login'){
        return (
            <Routes></Routes>
        )
    } else {
        return (
            <>
                <Header></Header>
                <div className= 'container-fluid main'>
                <Routes></Routes>
                </div>
                <Footer></Footer>
           </>
        )
    }
}