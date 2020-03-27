import React from 'react';

import '../assets/style/Registrar.scss';

const Registrar = () => {
    
    return(
    <>    
        <header className="header">
    <img class="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video"/>
  </header>
  <section class="register">
    <section class="register__container">
      <h2>Regístrate</h2>
      <form class="register__container--form">
        <input class="input"type="text" placeholder="Nombre"/>
        <input class="input" type="text" placeholder="Correo"/>
        <input class="input" type="password" placeholder="Contraseña"/>
        <button class="button">Registrarme</button>
      </form>
      <a href="/">Iniciar sesión</a>
    </section>
  </section>
  <footer class="footer">
    <a href="/">Terminos de uso</a>
    <a href="/">Declaración de privacidad</a>
    <a href="/">Centro de ayuda</a>
  </footer>
        </>
    );
}

export default Registrar;
