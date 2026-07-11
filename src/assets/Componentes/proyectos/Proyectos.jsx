import React, { useState, useRef, useEffect } from 'react';
import './Proyectos.css';

const Proyectos = () => {
    const [proyectoActivo, setProyectoActivo] = useState(null);
    const videoRefs = useRef({});

    const proyectos = [
        {
            id: 1,
            nombre: "El viaje del agua - Trabajo de grado",
            categoria: "Full Stack",
            descripcion: "Aplicación web completa de streaming de películas con sistema de autenticación, catálogo interactivo, búsqueda avanzada por géneros, reproducción de trailers y diseño responsivo. Incluye carrusel automático, integración con API de películas y gestión de estado de usuario.",
            tecnologias: ["React", "JavaScript", "CSS3", "Firebase Auth", "React Router", "TMDB API", "Materialize CSS", "Font Awesome"],
            videoUrl: "/videos/CineLuxe.mp4",
            imagenFallback: "/Imagenes/CineLuxe.png",
            githubUrl: "https://github.com/vbg03/CineLuxe",
            demoUrl: "https://cine-luxe.vercel.app/",
            duracion: "38 semanas",
            año: "2026",
            colaboradores: [{   
                nombre: "Juliana Mosquera Caicedo",
            }],
        },
        {
            id: 2,
            nombre: "CineLuxe - Plataforma de Streaming",
            categoria: "Full Stack",
            descripcion: "Aplicación web completa de streaming de películas con sistema de autenticación, catálogo interactivo, búsqueda avanzada por géneros, reproducción de trailers y diseño responsivo. Incluye carrusel automático, integración con API de películas y gestión de estado de usuario.",
            tecnologias: ["React", "JavaScript", "CSS3", "Firebase Auth", "React Router", "TMDB API", "Materialize CSS", "Font Awesome"],
            videoUrl: "/videos/CineLuxe.mp4",
            imagenFallback: "/Imagenes/CineLuxe.png",
            githubUrl: "https://github.com/vbg03/CineLuxe",
            demoUrl: "https://cine-luxe.vercel.app/",
            duracion: "3-4 semanas",
            año: "2024",
            colaboradores: [{
                nombre: "Natalia Andrea Hernández Piedrahita",
                linkedin: "https://www.linkedin.com/in/natalia-hernandez-322056247/",
                portfolio: "https://portafolioprofesional.vercel.app/"
            }],
        },
        {
            id: 3,
            nombre: "Sabor Cali - App Gastronómica",
            categoria: "UX/UI Design",
            descripcion: "Prototipo de aplicación móvil para turistas que desean explorar la gastronomía local de Cali, Valle del Cauca. Incluye mapas interactivos, recomendaciones personalizadas, reseñas de restaurantes locales, rutas gastronómicas y guías culturales de platos típicos vallecaucanos.",
            tecnologias: ["Figma", "UI/UX Design", "Prototyping", "User Research", "Information Architecture", "Mobile Design", "Design System"],
            videoUrl: "/videos/SaborCali.mp4",
            imagenFallback: "/Imagenes/SaborCali.png",
            demoUrl: "https://www.figma.com/proto/FGIVibsUZElxBIQUuKZ2oJ/Proyecto?node-id=25-150&p=f&t=oWqg7gWxD6wKAhSK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=32%3A135&show-proto-sidebar=1",
            duracion: "13 semanas",
            año: "2024",
            colaboradores: [
                {
                    nombre: "Natalia Andrea Hernández Piedrahita",
                    linkedin: "https://www.linkedin.com/in/natalia-hernandez-322056247/",
                    portfolio: "https://portafolioprofesional.vercel.app/"
                },
                {
                    nombre: "Andres Felipe Artulo",
                    linkedin: "https://www.linkedin.com/in/andresfelipearturo/",
                },
                {
                    nombre: "Yinela Primero Perez",
                    linkedin: "https://www.linkedin.com/in/yinela/",
                },
                {
                    nombre: "Juan David Ortega Angarita",
                    linkedin: "https://www.linkedin.com/in/juandaortegaa/",
                }
            ]
        }
    ];

    // Manejar reproducción de video al hacer hover
    const handleVideoHover = (proyectoId, play) => {
        const video = videoRefs.current[proyectoId];
        if (video) {
            if (play) {
                video.currentTime = 0;
                video.play().catch(() => {
                    console.log('Video no disponible, mostrando imagen fallback');
                });
            } else {
                video.pause();
                video.currentTime = 0;
            }
        }
    };

    // Manejar click en proyecto - SIMPLIFICADO
    const handleProyectoClick = (proyecto, event) => {
        // Prevenir propagación si viene de un enlace
        if (event && event.target.closest('a')) {
            return;
        }
        
        console.log('Abriendo modal para:', proyecto.nombre); // Debug
        setProyectoActivo(proyecto);
    };

    const cerrarModal = (event) => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        console.log('Cerrando modal'); // Debug
        setProyectoActivo(null);
    };

    // Manejar tecla ESC para cerrar modal
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && proyectoActivo) {
                cerrarModal();
            }
        };

        if (proyectoActivo) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
            
            // Debug
            console.log('Modal abierto para:', proyectoActivo.nombre);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [proyectoActivo]);

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
                        onClick={(e) => handleProyectoClick(proyecto, e)}
                        style={{ cursor: 'pointer' }} // Asegurar que se vea clickeable
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
                                    e.target.src = "/Imagenes/github.png";
                                }}
                            />
                            <div className="proyecto-overlay-fixed">
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
                                {proyecto.githubUrl && (
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
                                )}
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
                                {proyecto.colaboradores && proyecto.colaboradores.length > 0 && (
                                    <span className="proyecto-colaboradores">
                                        <i className='bx bx-group'></i>
                                        {proyecto.colaboradores.length} colaborador{proyecto.colaboradores.length > 1 ? 'es' : ''}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal de detalles del proyecto - MEJORADO */}
            {proyectoActivo && (
                <div 
                    className="proyecto-modal-overlay" 
                    onClick={cerrarModal}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 10000,
                        padding: '2rem',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <div 
                        className="proyecto-modal" 
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            backgroundColor: 'var(--card-bg-color)',
                            borderRadius: '20px',
                            maxWidth: '900px',
                            width: '100%',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            position: 'relative',
                            border: '1px solid var(--border-color)',
                            animation: 'modalSlideIn 0.3s ease-out'
                        }}
                    >
                        <button 
                            className="modal-close" 
                            onClick={cerrarModal}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                width: '40px',
                                height: '40px',
                                border: 'none',
                                background: 'rgba(168, 85, 247, 0.18)',
                                color: 'var(--main-color)',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                zIndex: 10,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem'
                            }}
                        >
                            <i className='bx bx-x'></i>
                        </button>

                        <div className="modal-content">
                            <div className="modal-media" style={{ height: '300px', overflow: 'hidden', background: '#000' }}>
                                <video
                                    className="modal-video"
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    poster={proyectoActivo.imagenFallback}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                >
                                    <source src={proyectoActivo.videoUrl} type="video/mp4" />
                                </video>
                            </div>

                            <div className="modal-info" style={{ padding: '3rem' }}>
                                <div className="modal-header" style={{ marginBottom: '2rem' }}>
                                    <h2 style={{ fontSize: '2.8rem', color: 'var(--text-color)', marginBottom: '1rem' }}>
                                        {proyectoActivo.nombre}
                                    </h2>
                                    <span 
                                        className="modal-categoria"
                                        style={{
                                            background: 'var(--gradient-primary)',
                                            color: 'white',
                                            padding: '0.5rem 1.5rem',
                                            borderRadius: '20px',
                                            fontSize: '1.3rem',
                                            fontWeight: '600'
                                        }}
                                    >
                                        {proyectoActivo.categoria}
                                    </span>
                                </div>

                                <p 
                                    className="modal-descripcion"
                                    style={{
                                        fontSize: '1.6rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: '1.7',
                                        marginBottom: '3rem'
                                    }}
                                >
                                    {proyectoActivo.descripcion}
                                </p>

                                <div className="modal-tecnologias" style={{ marginBottom: '3rem' }}>
                                    <h4 style={{ color: 'var(--text-color)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                                        Tecnologías utilizadas:
                                    </h4>
                                    <div 
                                        className="modal-tech-grid"
                                        style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                                            gap: '1rem'
                                        }}
                                    >
                                        {proyectoActivo.tecnologias.map((tech, index) => (
                                            <span 
                                                key={index} 
                                                className="modal-tech-badge"
                                                style={{
                                                    background: 'rgba(168, 85, 247, 0.12)',
                                                    color: 'var(--main-color)',
                                                    padding: '0.8rem 1.2rem',
                                                    borderRadius: '10px',
                                                    fontSize: '1.3rem',
                                                    fontWeight: '600',
                                                    textAlign: 'center',
                                                    border: '1px solid rgba(168, 85, 247, 0.24)'
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div 
                                    className="modal-meta"
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                        gap: '2rem',
                                        marginBottom: '3rem',
                                        padding: '2rem',
                                        background: 'rgba(168, 85, 247, 0.08)',
                                        borderRadius: '15px',
                                        border: '1px solid rgba(168, 85, 247, 0.16)'
                                    }}
                                >
                                    <div className="meta-item" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                                        <strong style={{ color: 'var(--text-color)' }}>Duración:</strong> {proyectoActivo.duracion}
                                    </div>
                                    <div className="meta-item" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                                        <strong style={{ color: 'var(--text-color)' }}>Año:</strong> {proyectoActivo.año}
                                    </div>
                                </div>

                                {proyectoActivo.colaboradores && proyectoActivo.colaboradores.length > 0 && (
                                    <div 
                                        className="modal-colaboradores"
                                        style={{
                                            margin: '3rem 0',
                                            padding: '2rem',
                                            background: 'rgba(168, 85, 247, 0.08)',
                                            borderRadius: '15px',
                                            border: '1px solid rgba(168, 85, 247, 0.16)'
                                        }}
                                    >
                                        <h4 style={{
                                            color: 'var(--text-color)',
                                            fontSize: '1.8rem',
                                            marginBottom: '1.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <i className='bx bx-group' style={{ color: 'var(--main-color)', fontSize: '2rem' }}></i>
                                            Colaboradores:
                                        </h4>
                                        <div 
                                            className="colaboradores-grid"
                                            style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                                gap: '1.5rem'
                                            }}
                                        >
                                            {proyectoActivo.colaboradores.map((colaborador, index) => (
                                                <div 
                                                    key={index} 
                                                    className="colaborador-card"
                                                    style={{
                                                        background: 'var(--card-bg-color)',
                                                        padding: '1.5rem',
                                                        borderRadius: '12px',
                                                        border: '1px solid var(--border-color)'
                                                    }}
                                                >
                                                    <h5 style={{
                                                        color: 'var(--text-color)',
                                                        fontSize: '1.6rem',
                                                        fontWeight: '600',
                                                        marginBottom: '1rem',
                                                        lineHeight: '1.3'
                                                    }}>
                                                        {colaborador.nombre}
                                                    </h5>
                                                    <div className="colaborador-links" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                                        {colaborador.linkedin && (
                                                            <a
                                                                href={colaborador.linkedin}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="colaborador-link linkedin"
                                                                style={{
                                                                    display: 'inline-flex',
                                                                    alignItems: 'center',
                                                                    gap: '0.5rem',
                                                                    padding: '0.6rem 1.2rem',
                                                                    borderRadius: '8px',
                                                                    fontSize: '1.2rem',
                                                                    fontWeight: '500',
                                                                    textDecoration: 'none',
                                                                    background: '#0077b5',
                                                                    color: 'white'
                                                                }}
                                                            >
                                                                <i className='bx bxl-linkedin'></i>
                                                                LinkedIn
                                                            </a>
                                                        )}
                                                        {colaborador.portfolio && (
                                                            <a
                                                                href={colaborador.portfolio}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="colaborador-link portfolio"
                                                                style={{
                                                                    display: 'inline-flex',
                                                                    alignItems: 'center',
                                                                    gap: '0.5rem',
                                                                    padding: '0.6rem 1.2rem',
                                                                    borderRadius: '8px',
                                                                    fontSize: '1.2rem',
                                                                    fontWeight: '500',
                                                                    textDecoration: 'none',
                                                                    background: 'var(--gradient-primary)',
                                                                    color: 'white'
                                                                }}
                                                            >
                                                                <i className='bx bx-link-external'></i>
                                                                Portfolio
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="modal-acciones" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                    {proyectoActivo.githubUrl && (
                                        <a
                                            href={proyectoActivo.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="modal-btn github-btn"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.8rem',
                                                padding: '1.2rem 2rem',
                                                borderRadius: '10px',
                                                fontSize: '1.4rem',
                                                fontWeight: '600',
                                                textDecoration: 'none',
                                                background: '#333',
                                                color: 'white'
                                            }}
                                        >
                                            <i className='bx bxl-github'></i>
                                            Ver en GitHub
                                        </a>
                                    )}
                                    {proyectoActivo.demoUrl && (
                                        <a
                                            href={proyectoActivo.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="modal-btn demo-btn"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.8rem',
                                                padding: '1.2rem 2rem',
                                                borderRadius: '10px',
                                                fontSize: '1.4rem',
                                                fontWeight: '600',
                                                textDecoration: 'none',
                                                background: 'var(--gradient-primary)',
                                                color: 'white'
                                            }}
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
