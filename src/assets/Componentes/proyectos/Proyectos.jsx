import React, { useState, useRef, useEffect } from 'react';

const Proyectos = () => {
    const [proyectoActivo, setProyectoActivo] = useState(null);
    const videoRefs = useRef({});

    const proyectos = [
        {
            id: 1,
            nombre: "Sistema Web Responsivo",
            categoria: "Desarrollo Web",
            descripcion: "Página web completamente responsiva desarrollada con HTML5, CSS3 y JavaScript vanilla. Incluye animaciones CSS, grid layout y diseño mobile-first.",
            tecnologias: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
            videoUrl: "/videos/proyecto1-preview.mp4", // Agrega tus videos aquí
            imagenFallback: "/Imagenes/proyecto1-thumb.jpg",
            githubUrl: "https://github.com/vbg03/Clase-3-web",
            demoUrl: null, // Si tienes demo en vivo
            duracion: "2 semanas",
            año: "2024"
        },
        {
            id: 2,
            nombre: "Sistema de Autenticación",
            categoria: "Frontend",
            descripcion: "Interfaz de login moderna con validación de formularios, animaciones CSS y diseño UX/UI centrado en la experiencia del usuario.",
            tecnologias: ["HTML", "CSS", "JavaScript", "Form Validation"],
            videoUrl: "/videos/proyecto2-preview.mp4",
            imagenFallback: "/Imagenes/proyecto2-thumb.jpg",
            githubUrl: "https://github.com/edwinmgallego/clase-practica-css-jueves/tree/main/vbowers2215684",
            demoUrl: null,
            duracion: "1 semana",
            año: "2024"
        },
        {
            id: 3,
            nombre: "Contador Interactivo React",
            categoria: "React App",
            descripcion: "Mi primera aplicación en React con hooks, gestión de estado y componentes funcionales. Incluye animaciones y efectos visuales.",
            tecnologias: ["React", "Hooks", "JavaScript", "CSS Modules"],
            videoUrl: "/videos/proyecto3-preview.mp4",
            imagenFallback: "/Imagenes/proyecto3-thumb.jpg",
            githubUrl: "https://github.com/vbg03/Mi-primer-proyecto-react/tree/main",
            demoUrl: null,
            duracion: "3 días",
            año: "2024"
        },
        {
            id: 4,
            nombre: "Reproductor de Video React",
            categoria: "Media Player",
            descripcion: "Componente de reproductor de video personalizado en React con controles customizados, playlist y funciones avanzadas de reproducción.",
            tecnologias: ["React", "Video API", "Custom Controls", "State Management"],
            videoUrl: "/videos/proyecto4-preview.mp4",
            imagenFallback: "/Imagenes/proyecto4-thumb.jpg",
            githubUrl: "https://github.com/vbg03/Clase-10/tree/main",
            demoUrl: null,
            duracion: "1 semana",
            año: "2024"
        },
        {
            id: 5,
            nombre: "Algoritmo de Comparación",
            categoria: "Lógica de Programación",
            descripcion: "Implementación de algoritmos para encontrar el número menor en un array, con optimizaciones de rendimiento y visualización de resultados.",
            tecnologias: ["JavaScript", "Algorithms", "Performance", "DOM Manipulation"],
            videoUrl: "/videos/proyecto5-preview.mp4",
            imagenFallback: "/Imagenes/proyecto5-thumb.jpg",
            githubUrl: "https://github.com/vbg03/Clase-8",
            demoUrl: null,
            duracion: "2 días",
            año: "2024"
        },
        {
            id: 6,
            nombre: "Plataforma Virtual de Clases",
            categoria: "Web Application",
            descripcion: "Sistema web para gestión de clases virtuales con interfaz intuitiva, navegación fluida y diseño responsive para dispositivos móviles.",
            tecnologias: ["HTML", "CSS", "JavaScript", "Responsive", "UX/UI"],
            videoUrl: "/videos/proyecto6-preview.mp4",
            imagenFallback: "/Imagenes/proyecto6-thumb.jpg",
            githubUrl: "https://github.com/vbg03/Clase-7",
            demoUrl: null,
            duracion: "1 semana",
            año: "2024"
        }
    ];

    // Manejar reproducción de video al hacer hover
    const handleVideoHover = (proyectoId, play) => {
        const video = videoRefs.current[proyectoId];
        if (video) {
            if (play) {
                video.currentTime = 0;
                video.play().catch(() => {
                    // Si el video no se puede reproducir, mostrar imagen
                    console.log('Video no disponible, mostrando imagen fallback');
                });
            } else {
                video.pause();
                video.currentTime = 0;
            }
        }
    };

    // Manejar click en proyecto
    const handleProyectoClick = (proyecto) => {
        setProyectoActivo(proyecto);
    };

    const cerrarModal = () => {
        setProyectoActivo(null);
    };

    return (
        <section className="proyectos" id='proyectos'>
            <h2 className="heading">Mis <span>Proyectos</span></h2>
            <p className="proyectos-subtitle">
                Una selección de mis trabajos más destacados en desarrollo web y programación
            </p>

            <div className="proyectos-container-mejorado">
                {proyectos.map((proyecto) => (
                    <div 
                        key={proyecto.id} 
                        className="proyecto-card"
                        onMouseEnter={() => handleVideoHover(proyecto.id, true)}
                        onMouseLeave={() => handleVideoHover(proyecto.id, false)}
                        onClick={() => handleProyectoClick(proyecto)}
                    >
                        <div className="proyecto-media">
                            <video
                                ref={el => videoRefs.current[proyecto.id] = el}
                                className="proyecto-video"
                                muted
                                loop
                                playsInline
                                poster={proyecto.imagenFallback}
                            >
                                <source src={proyecto.videoUrl} type="video/mp4" />
                            </video>
                            <img 
                                src={proyecto.imagenFallback} 
                                alt={proyecto.nombre}
                                className="proyecto-imagen-fallback"
                                onError={(e) => {
                                    e.target.src = "/Imagenes/github.png"; // Imagen por defecto
                                }}
                            />
                            <div className="proyecto-overlay">
                                <div className="proyecto-categoria">{proyecto.categoria}</div>
                                <div className="proyecto-año">{proyecto.año}</div>
                            </div>
                        </div>

                        <div className="proyecto-info">
                            <h3 className="proyecto-titulo">{proyecto.nombre}</h3>
                            <p className="proyecto-descripcion">{proyecto.descripcion}</p>
                            
                            <div className="proyecto-tecnologias">
                                {proyecto.tecnologias.slice(0, 3).map((tech, index) => (
                                    <span key={index} className="tech-badge">{tech}</span>
                                ))}
                                {proyecto.tecnologias.length > 3 && (
                                    <span className="tech-badge-more">+{proyecto.tecnologias.length - 3}</span>
                                )}
                            </div>

                            <div className="proyecto-acciones">
                                <a 
                                    href={proyecto.githubUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="proyecto-link github-link"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <i className='bx bxl-github'></i>
                                    Código
                                </a>
                                {proyecto.demoUrl && (
                                    <a 
                                        href={proyecto.demoUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="proyecto-link demo-link"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <i className='bx bx-link-external'></i>
                                        Demo
                                    </a>
                                )}
                                <button 
                                    className="proyecto-link details-link"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleProyectoClick(proyecto);
                                    }}
                                >
                                    <i className='bx bx-info-circle'></i>
                                    Detalles
                                </button>
                            </div>

                            <div className="proyecto-meta">
                                <span className="proyecto-duracion">
                                    <i className='bx bx-time'></i>
                                    {proyecto.duracion}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal de detalles del proyecto */}
            {proyectoActivo && (
                <div className="proyecto-modal-overlay" onClick={cerrarModal}>
                    <div className="proyecto-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={cerrarModal}>
                            <i className='bx bx-x'></i>
                        </button>
                        
                        <div className="modal-content">
                            <div className="modal-media">
                                <video
                                    className="modal-video"
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    poster={proyectoActivo.imagenFallback}
                                >
                                    <source src={proyectoActivo.videoUrl} type="video/mp4" />
                                </video>
                            </div>
                            
                            <div className="modal-info">
                                <div className="modal-header">
                                    <h2>{proyectoActivo.nombre}</h2>
                                    <span className="modal-categoria">{proyectoActivo.categoria}</span>
                                </div>
                                
                                <p className="modal-descripcion">{proyectoActivo.descripcion}</p>
                                
                                <div className="modal-tecnologias">
                                    <h4>Tecnologías utilizadas:</h4>
                                    <div className="modal-tech-grid">
                                        {proyectoActivo.tecnologias.map((tech, index) => (
                                            <span key={index} className="modal-tech-badge">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="modal-meta">
                                    <div className="meta-item">
                                        <strong>Duración:</strong> {proyectoActivo.duracion}
                                    </div>
                                    <div className="meta-item">
                                        <strong>Año:</strong> {proyectoActivo.año}
                                    </div>
                                </div>
                                
                                <div className="modal-acciones">
                                    <a 
                                        href={proyectoActivo.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="modal-btn github-btn"
                                    >
                                        <i className='bx bxl-github'></i>
                                        Ver en GitHub
                                    </a>
                                    {proyectoActivo.demoUrl && (
                                        <a 
                                            href={proyectoActivo.demoUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="modal-btn demo-btn"
                                        >
                                            <i className='bx bx-link-external'></i>
                                            Ver Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Proyectos;