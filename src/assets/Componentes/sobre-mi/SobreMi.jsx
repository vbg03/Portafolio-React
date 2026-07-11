import React from 'react'
import './SobreMi.css'

const SobreMi = () => {
  return (
    <section className="sobre" id='sobre'>
      <div className="sobre-img">
        <img src="/Imagenes/YO2.png" alt="Mi Imagen" />
      </div>

      <div className="sobre-content">
        <h2 className="heading">Sobre <span>Mi</span></h2>
        <h3 className="shimmer-text">Ingeniera Multimedia</h3>
        <p>Soy Ingeniera Multimedia en proceso de grado de la Universidad Autónoma de Occidente, con formación técnica en Programación de Software del SENA. Me apasiona el desarrollo de software y la creación de soluciones tecnológicas innovadoras que integren creatividad e ingeniería.</p>
        {/*<a href="#" className="btn">Ver CV</a>*/}
      </div>
    </section>
  )
}

export default SobreMi
