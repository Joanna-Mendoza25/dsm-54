import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import Footer from '../src/components/Footer';
//import Header from '../src/components/Header';
//import Search from '../src/components/Search';
import Registrar from '../src/components/Registrar';
//import Carrusel from '../src/components/Carrusel';
//import CarouselItem from '../src/components/CarruselItem';
//import Login from '../src/components/Login';

//import Layout from '../src/container/App';
//ReactDOM.render(<Layout/>, document.getElementById('root'));

//ReactDOM.render(<Carrusel />, document.getElementById('root'));
//ReactDOM.render(<CarruselItem />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Header />, document.getElementById('root'));
//ReactDOM.render(<Footer />, document.getElementById('root'));
//ReactDOM.render(<Search />, document.getElementById('root'));
ReactDOM.render(<Registrar />, document.getElementById('root'));

//import JMM from '../src/container/App';
//ReactDOM.render(<Login/>, document.getElementById('root'));
//ReactDOM.render(<JMM/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
