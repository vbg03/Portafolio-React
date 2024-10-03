import React from 'react'

const Inicio = () => {
    return (
        <section class="inicio" id='inicio'>
            <div class="inicio-content">
                <h3>Hola, soy yo</h3>
                <h1>Valeria Bowers Gutierrez</h1>
                <h3>Y soy una <span>Ingeniera Multimedia</span></h3>
                <p>Apasionada por la
                    programación y el diseño. Me especializo en crear experiencias
                    interactivas y productos digitales innovadores.</p>
                <div class="social-media">
                    <a href="#"><i class='bx bxl-instagram-alt' ></i></a>
                    <a href="#"><i class='bx bxl-facebook-square' ></i></a>
                    <a href="#"><i class='bx bxl-github' ></i></a>
                    <a href="#"><i class='bx bxl-linkedin-square' ></i></a>
                </div>
            </div>

            <div class="inicio-img">
                <img src="public/Imagenes/yo.png" alt="yo" />
            </div>
        </section>
    )
}

export default Inicio