import React from 'react'

const SobreMi = () => {
  return (
    <section className="sobre" id='sobre'>
        <div className="sobre-img">
            <img src="./public/Imagenes/yo.png" alt="" />
        </div>

        <div className="sobre-content">
            <h2 className="heading">Sobre <span>Mi</span></h2>
            <h3>Ingeniera Multimedia</h3>
            <p>hola</p>
            <a href="#" className="btn">Leer Más</a>
        </div>
    </section>
  )
}

export default SobreMi