import React from 'react'

const SobreMi = () => {
  return (
    <section className="sobre" id='sobre'>
      <div className="sobre-img">
        <img src="/Imagenes/yo.png" alt="Mi Imagen" />
      </div>

      <div className="sobre-content">
        <h2 className="heading">Sobre <span>Mi</span></h2>
        <h3>Estudiante de ingeniería Multimedia</h3>
        <p>Soy estudiante de séptimo semestre de Ingeniería Multimedia en la Universidad Autónoma de Occidente.
          Apasionada por la tecnología y el diseño, estoy en constante aprendizaje para integrar la creatividad y la ingeniería en soluciones innovadoras.
          A lo largo de mi formación, he desarrollado habilidades en programación, diseño y trabajo en equipo, destacando mi paciencia y capacidad para gestionar el estrés en proyectos exigentes.</p>
        <a href="#" className="btn">Leer Más</a>
      </div>
    </section>
  )
}

export default SobreMi