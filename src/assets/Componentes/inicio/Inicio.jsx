import React from 'react'
import './Inicio.css'

const Inicio = () => {
    return (
        <section className="inicio" id='inicio'>
            <div className="inicio-content">
                <p className="inicio-eyebrow">Diseñadora <span>•</span> Creadora <span>•</span> Desarrolladora</p>

                <h1 className="inicio-title">
                    Hola, soy{' '}
                    <span className="inicio-name">
                        Valeria
                        <span className="inicio-heart" aria-hidden="true">♡</span>
                    </span>
                </h1>

                <p className="inicio-description">
                    Ingeniera Multimedia apasionada por el diseño,
                    la tecnología y la creatividad. Me encanta transformar ideas en soluciones
                    digitales con propósito.
                </p>

                <div className="inicio-actions">
                    <a className="inicio-button inicio-button-primary" href="#proyectos">
                        <span aria-hidden="true">↗</span>
                        Ver proyectos
                    </a>
                    <a
                        className="inicio-button inicio-button-secondary"
                        href="https://www.linkedin.com/in/valeria-bowers-gutierrez-a9a77a334/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bx bx-send" aria-hidden="true"></i>
                        Contáctame
                    </a>
                </div>
            </div>

            <div className="inicio-img">
                <img src="/Imagenes/YO2.png" alt="yo" />
            </div>

            <a
                className="inicio-scroll-hint"
                href="#fortalezas"
                aria-label="Descubrir mis fortalezas"
            >
                <span className="inicio-scroll-mouse" aria-hidden="true"></span>
                <span className="inicio-scroll-text">Desliza para descubrir</span>
                <i className="bx bx-chevron-down inicio-scroll-arrow" aria-hidden="true"></i>
            </a>
        </section>
    )
}

export default Inicio
