import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import '../assets/styles/App.scss';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Carrusel from '../components/Carrusel';
import CarouselItem from '../components/CarouselItem';

import '../assets/style/Header.scss';



const App= () =>{
    return (
        <div className="App">
          <Header />
          <Search />
          <Categories/>
         <Carusel />
         <CaruselItem />

          <Footer />


        </div>
    );

}
export default App;
