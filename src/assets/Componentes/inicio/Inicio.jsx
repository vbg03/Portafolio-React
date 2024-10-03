import React from 'react'

const Inicio = () => {
    return (
        <section className="inicio" id='inicio'>
            <div className="inicio-content">
                <h3>Hola, yo soy</h3>
                <h1>Valeria Bowers Gutierrez</h1>
                <h3>Y soy una <span className='multiple-text'></span></h3>
                <p>Apasionada por la
                    programación y el diseño. Me especializo en crear experiencias
                    interactivas y productos digitales innovadores.</p>
                <div className="social-media">
                    <a href="https://www.instagram.com/itzzval__/"><i className='bx bxl-instagram-alt' ></i></a>
                    <a href="https://www.facebook.com/valeria.bowers.7/?locale=es_LA"><i className='bx bxl-facebook-square' ></i></a>
                    <a href="https://github.com/vbg03"><i className='bx bxl-github' ></i></a>
                    <a href="https://www.linkedin.com/in/valeria-bowers-5b7ba9324/"><i className='bx bxl-linkedin-square' ></i></a>
                </div>
            </div>

            <div className="inicio-img">
                <img src="public/Imagenes/yo.png" alt="yo" />
            </div>
        </section>
    )
}

export default Inicio