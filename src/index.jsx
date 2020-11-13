import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './main/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(  
  <React.StrictMode>
    <App /> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossOrigin="anonymous"></script> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();