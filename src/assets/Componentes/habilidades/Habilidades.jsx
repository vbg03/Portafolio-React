import React from 'react'

const Habilidades = () => {
    return (
        <section className="habilidades" id='habilidades'>
            <h2 className="heading">Mis <span>Habilidades</span></h2>

            <div className="habilidades-container">
                <div className="habilidades-box">
                    <i className='bx bx-code-block'></i>
                    <h3>Habilidades Duras</h3>
                    <li><strong>Programación:</strong> Experiencia sólida en el desarrollo de soluciones
                        innovadoras y eficientes.</li>
                    <li><strong>Diseño:</strong> Capacidad para crear interfaces visualmente atractivas y
                        funcionales.</li>
                    <li><strong>Modelado y Animación 3D por computador:</strong> Experiencia en el ambito del
                        modelado 3D de objetos y animación de escenarios y personajes.</li>
                </div>

                <div className="habilidades-box">
                    <i className='bx bx-message-dots' ></i>
                    <h3>Habilidades Blandas</h3>
                    <li><strong>Comunicación efectiva:</strong> Capaz de transmitir ideas de manera clara y
                        concisa, tanto en entornos técnicos como creativos. Facilito la
                        colaboración entre equipos multidisciplinarios, asegurando que todos
                        estén alineados con los objetivos del proyecto.</li>
                    <li><strong>Liderazgo:</strong> Me
                        esfuerzo por crear un ambiente de trabajo positivo y motivador,
                        guiando al equipo hacia el cumplimiento de metas y fomentando el
                        crecimiento profesional de cada miembro.</li>
                    <li><strong>Paciencia:</strong> Mantengo la calma en situaciones desafiantes, lo que me
                        permite tomar decisiones bien pensadas.</li>
                </div>
            </div>
        </section>
    )
}

export default Habilidades