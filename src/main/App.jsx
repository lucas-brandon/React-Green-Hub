import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
//import Menu from '../template/Menu';
import Header from '../template/header/Header';
import Footer from '../template/footer/Footer';
import Routes from './Routes';

export default props => {
    if (Routes.path == '.login'){
        return (
            <Routes></Routes>
        )
    } else {
        return (
            <div className="container">
                <Header></Header>
                
                <Routes></Routes>
                
                <Footer></Footer>
            </div>
        )
    }
}