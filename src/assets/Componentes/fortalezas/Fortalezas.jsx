import React from 'react';
import './Fortalezas.css';

const fortalezas = [
  { nombre: 'UI/UX', icono: 'bx-desktop' },
  { nombre: 'Branding', icono: 'bx-pencil' },
  { nombre: 'Desarrollo Web', icono: 'bx-code-alt' },
  { nombre: 'Creatividad', icono: 'bx-bulb' },
  { nombre: 'Trabajo en equipo', icono: 'bx-group' },
];

const Fortalezas = () => {
  return (
    <aside id="fortalezas" className="fortalezas-bridge" aria-labelledby="fortalezas-title">
      <div className="fortalezas-card">
        <div className="fortalezas-heading">
          <p><span aria-hidden="true">✦</span> Mis fortalezas</p>
          <h2 id="fortalezas-title">Lo que me define</h2>
        </div>

        {fortalezas.map(({ nombre, icono }) => (
          <div className="fortaleza-item" key={nombre}>
            <span className="fortaleza-icon" aria-hidden="true">
              <i className={`bx ${icono}`}></i>
            </span>
            <span className="fortaleza-name">{nombre}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Fortalezas;
