import { useState } from 'react'
import './Habilidades.css'

const habilidades = [
    {
        id: 'ux-ui-producto',
        titulo: 'UX/UI y producto digital',
        tono: 'rosa',
        tecnologias: ['UX Research', 'Figma', 'Prototipado', 'Design Systems'],
        icono: 'bx-vector',
        progreso: 90,
        descripcion: 'Diseño productos digitales centrados en el usuario, desde la investigación y la definición del problema hasta el prototipado, la evaluación y la iteración.',
        indicadores: [
            { valor: 'Research', etiqueta: 'descubrimiento' },
            { valor: 'SUS', etiqueta: 'evaluación' },
            { valor: 'Responsive', etiqueta: 'adaptabilidad' }
        ],
        especialidades: [
            'Identificación de necesidades',
            'Arquitectura de información y user flows',
            'Wireframes y prototipos de alta fidelidad',
            'Pruebas de usabilidad y accesibilidad',
            'Diseño iterativo'
        ],
        evidencias: [
            'Investigación, arquitectura visual y flujos de navegación para El viaje del agua.',
            'Wireframes, prototipo de alta fidelidad y sistema visual de Sabor Cali.',
            'Evaluación de El viaje del agua con una valoración de 4,75/5 y una puntuación SUS de 83,75/100.'
        ]
    },
    {
        id: 'frontend',
        titulo: 'Frontend',
        tono: 'violeta',
        tecnologias: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
        icono: 'bx-code-alt',
        progreso: 85,
        descripcion: 'Desarrollo interfaces web responsive con React y JavaScript, integrando navegación, autenticación, contenido dinámico y componentes reutilizables.',
        indicadores: [
            { valor: 'React', etiqueta: 'framework' },
            { valor: 'API REST', etiqueta: 'integraciones' },
            { valor: 'PWA', etiqueta: 'experiencias web' }
        ],
        especialidades: [
            'React Router',
            'Firebase Authentication',
            'Consumo de API REST',
            'localStorage y PWA',
            'Componentes reutilizables y Vercel'
        ],
        evidencias: [
            'SPA responsive de El viaje del agua desarrollada con React y Vite, con contenido multimedia y herramientas de accesibilidad.',
            'CineLuxe con React Router, API de TMDB, Firebase Authentication y una interfaz adaptable.',
            'Portafolio profesional diseñado y desarrollado con React, Vite, JavaScript y CSS.'
        ]
    },
    {
        id: 'backend-bases-datos',
        titulo: 'Backend y bases de datos',
        tono: 'rosa',
        tecnologias: ['Node.js', 'Express', 'Python', 'Flask', 'MySQL'],
        icono: 'bx-code-curly',
        progreso: 78,
        descripcion: 'Construyo servicios web y soluciones orientadas a datos mediante API REST, autenticación y comunicación entre servicios.',
        indicadores: [
            { valor: 'REST', etiqueta: 'servicios web' },
            { valor: 'JWT', etiqueta: 'autenticación' },
            { valor: 'SQL', etiqueta: 'persistencia' }
        ],
        especialidades: [
            'Node.js y Express',
            'Python y Flask',
            'PHP y C#',
            'SQL y MySQL',
            'Comunicación entre microservicios'
        ],
        evidencias: [
            'API REST independientes con Node.js y Express para una red social basada en microservicios.',
            'Autenticación JWT, roles de usuario, validaciones y bases de datos MySQL separadas por servicio.',
            'Microservicios de usuarios, productos y órdenes desarrollados con Flask y MySQL para una plataforma e-commerce.'
        ]
    },
    {
        id: 'herramientas-arquitectura',
        titulo: 'Herramientas y arquitectura',
        tono: 'violeta',
        tecnologias: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Firebase', 'Vercel'],
        icono: 'bx-wrench',
        progreso: 82,
        descripcion: 'Trabajo con control de versiones, contenerización, despliegue y orquestación para construir y mantener arquitecturas distribuidas.',
        indicadores: [
            { valor: 'Git', etiqueta: 'versionado' },
            { valor: 'Docker', etiqueta: 'contenedores' },
            { valor: 'K8s', etiqueta: 'orquestación' }
        ],
        especialidades: [
            'Git y GitHub',
            'Docker y Minikube',
            'Kubernetes e Istio',
            'Arquitectura de microservicios',
            'Firebase y Vercel'
        ],
        evidencias: [
            'Contenerización y orquestación de una plataforma e-commerce mediante Docker, Minikube y Kubernetes.',
            'Configuración de health checks, HPA, self-healing, circuit breaker, retry policies y pruebas de fallos.',
            'Monitoreo de microservicios con Prometheus, Grafana y Kiali.'
        ]
    }
]

const Habilidades = () => {
    const [habilidadAbierta, setHabilidadAbierta] = useState(null)

    const alternarHabilidad = (id) => {
        setHabilidadAbierta((actual) => actual === id ? null : id)
    }

    return (
        <section
            className={`habilidades${habilidadAbierta ? ' has-open-card' : ''}`}
            id="habilidades"
            aria-labelledby="habilidades-title"
        >
            <div className="habilidades-content">
                <div className="habilidades-heading">
                    <p className="habilidades-eyebrow">
                        <span aria-hidden="true">✦</span>
                        Lo que mejor sé hacer
                    </p>
                    <h2 className="heading habilidades-title" id="habilidades-title">
                        Mis <span>Habilidades</span>
                        <span className="habilidades-corazon" aria-hidden="true">♡</span>
                    </h2>
                </div>
                <p>
                    Combino investigación UX, diseño de producto y desarrollo web para crear
                    experiencias digitales accesibles, responsive y centradas en el usuario.
                </p>
            </div>

            <div className="habilidades-card" aria-label="Áreas de habilidades">
                {habilidades.map((habilidad) => {
                    const estaAbierta = habilidadAbierta === habilidad.id
                    const panelId = `detalle-${habilidad.id}`
                    const botonId = `boton-${habilidad.id}`

                    return (
                        <article
                            className={`habilidad-item habilidad-item--${habilidad.tono}${estaAbierta ? ' is-open' : ''}`}
                            key={habilidad.id}
                        >
                            <button
                                className="habilidad-trigger"
                                id={botonId}
                                type="button"
                                aria-expanded={estaAbierta}
                                aria-controls={panelId}
                                onClick={() => alternarHabilidad(habilidad.id)}
                            >
                                <span className="habilidad-icon" aria-hidden="true">
                                    <i className={`bx ${habilidad.icono}`}></i>
                                </span>

                                <span className="habilidad-resumen">
                                    <h3>{habilidad.titulo}</h3>
                                    <span className="habilidad-tecnologias">
                                        {habilidad.tecnologias.join(' · ')}
                                    </span>
                                </span>

                                <span className="habilidad-chevron" aria-hidden="true">
                                    <i className="bx bx-chevron-right"></i>
                                </span>

                                <span className="habilidad-progreso" aria-hidden="true">
                                    <span style={{ '--habilidad-progreso': `${habilidad.progreso}%` }}></span>
                                </span>
                            </button>

                            <div
                                className={`habilidad-detalle${estaAbierta ? ' is-visible' : ''}`}
                                id={panelId}
                                role="region"
                                aria-labelledby={botonId}
                                aria-hidden={!estaAbierta}
                            >
                                <div className="habilidad-detalle-contenido">
                                    <div className="habilidad-divisor" aria-hidden="true"></div>

                                    <p className="habilidad-descripcion">{habilidad.descripcion}</p>

                                    <div className="habilidad-indicadores" aria-label={`Datos clave de ${habilidad.titulo}`}>
                                        {habilidad.indicadores.map(({ valor, etiqueta }) => (
                                            <div className="habilidad-indicador" key={etiqueta}>
                                                <strong>{valor}</strong>
                                                <span>{etiqueta}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="habilidad-especialidades">
                                        <ul>
                                            {habilidad.especialidades.map((especialidad) => (
                                                <li key={especialidad}>{especialidad}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="habilidad-evidencia">
                                        <h4>// Experiencia aplicada</h4>
                                        <ul>
                                            {habilidad.evidencias.map((evidencia) => (
                                                <li key={evidencia}>
                                                    <span aria-hidden="true">→</span>
                                                    <span>{evidencia}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Habilidades
