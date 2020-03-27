
import React from 'react';
import '../assets/style/Carrusel.scss';



const Carrusel = (children) => {
<section class="carousel">
  <div class="carousel_container">
    {children}
  </div>
</section>
   }

export default Carrusel;
