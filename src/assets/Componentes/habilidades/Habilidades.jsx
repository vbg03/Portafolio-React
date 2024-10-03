import React from 'react'

const Habilidades = () => {
    return (
        <section className="habilidades" id='habilidades'>
            <h2 className="heading">Mis <span>Habilidades</span></h2>

            <div className="habilidades-container">
                <div className="habilidades-box">
                    <i className='bx bx-code-block'></i>
                    <h3>Habilidades Duras</h3>
                    <p>hola</p>
                </div>

                <div className="habilidades-box">
                    <i className='bx bx-message-dots' ></i>
                    <h3>Habilidades Blandas</h3>
                    <p>hola</p>
                </div>
            </div>
        </section>
    )
}

export default Habilidades