import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import Header from '../template/header/Header';
import Footer from '../template/footer/Footer';
import Routes from './Routes';
import './app.css';


export default props => {
    return (
        <div className="container">
            <Header></Header>
            
            <Routes></Routes>
            
            <Footer></Footer>
        </div>
    )
}