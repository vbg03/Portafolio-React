import React from 'react';
import Header from "./assets/Componentes/header/Header.jsx";
import './App.css'
import Footer from './assets/Componentes/footer/Footer.jsx';
import Inicio from './assets/Componentes/inicio/Inicio.jsx';
import SobreMi from './assets/Componentes/sobre-mi/SobreMi.jsx';
import Habilidades from './assets/Componentes/habilidades/Habilidades.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <Inicio />
      <SobreMi />
      <Habilidades />
      <Footer />
      {/* Aquí puedes agregar más componentes como Habilidades, Proyectos, Footer, etc. */}
    </div>
  );
}

export default App;
