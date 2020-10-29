import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
//import Menu from '../template/Menu';
import Header from '../template/header/Header';
import Footer from '../template/footer/Footer';
import Routes from './Routes';
import './app.css'

export default props => {
    return (
        <div className="container">
            <Header></Header>
            
            <Routes></Routes>
            
            <Footer></Footer>
        </div>
    )
}