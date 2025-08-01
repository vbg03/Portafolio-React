import React, { useState, useRef, useEffect } from 'react';

const Proyectos = () => {
    const [proyectoActivo, setProyectoActivo] = useState(null);
    const videoRefs = useRef({});

    const proyectos = [
        {
            id: 1,
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
            id: 2,
            nombre: "ENSAM",
            categoria: "Game Development",
            descripcion: "Videojuego desarrollado en Unity. Proyecto colaborativo que incluye diseño de niveles, programación de mecánicas de juego, sistema de puntuación y efectos visuales.",
            tecnologias: ["Unity", "C#", "Game Design", "2D/3D Graphics", "Audio Integration"],
            videoUrl: "/videos/ENSAM.mp4",
            imagenFallback: "/Imagenes/ENSAM.png",
            githubUrl: null,
            demoUrl: "https://web-vd.vercel.app/",
            duracion: "14 semanas",
            año: "2024",
            colaboradores: [
                {
                    nombre: "Manuel Alejandro Cortes Castillo",
                    linkedin: "https://www.linkedin.com/in/manuel-cortes-24c/"
                },
                {
                    nombre: "Natalia Andrea Hernández Piedrahita",
                    linkedin: "https://www.linkedin.com/in/natalia-hernandez-322056247/",
                    portfolio: "https://portafolioprofesional.vercel.app/"
                },
                {
                    nombre: "Juan Pablo Hurtado",
                }
            ],
        },
        {
            id: 3,
            nombre: "NeuroLearn",
            categoria: "VR Development",
            descripcion: "Aplicación de realidad virtual terapéutica diseñada para ayudar a estudiantes universitarios en el manejo de emociones como estrés, ansiedad y enojo. Incluye múltiples actividades interactivas, entornos inmersivos de relajación y técnicas de mindfulness adaptadas al contexto académico universitario.",
            tecnologias: ["Unity 3D", "C#", "VR Development", "XR Toolkit", "UI/UX Design", "3D Modeling", "Audio Spatial"],
            videoUrl: "/videos/NeuroLearn.mp4",
            imagenFallback: "/Imagenes/NeuroLearn.png",
            githubUrl: null,
            demoUrl: "https://uao-my.sharepoint.com/personal/manuel_ale_cortes_uao_edu_co/_layouts/15/stream.aspx?id=%2Fpersonal%2Fmanuel%5Fale%5Fcortes%5Fuao%5Fedu%5Fco%2FDocuments%2FDemoV2NeuroLearn%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E24ba9660%2D8680%2D4b62%2D9996%2Dbe758c0effdc&mode=Edit",
            duracion: "16 semanas",
            año: "2025",
            colaboradores: [
                {
                    nombre: "Manuel Alejandro Cortes Castillo",
                    linkedin: "https://www.linkedin.com/in/manuel-cortes-24c/"
                },
                {
                    nombre: "Natalia Andrea Hernández Piedrahita",
                    linkedin: "https://www.linkedin.com/in/natalia-hernandez-322056247/",
                    portfolio: "https://portafolioprofesional.vercel.app/"
                },
                {
                    nombre: "Juan Pablo Hurtado",
                },
                {
                    nombre: "Dalin Arturo Grisales Castaño",
                },
                {
                    nombre: "Victor Camilo Iragorri Diaz",
                }
            ],
        },
        {
            id: 4,
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

    // Efecto para manejar scroll del body y cursor cuando se abre el modal
    useEffect(() => {
        if (proyectoActivo) {
            // Deshabilitar scroll del body
            document.body.style.overflow = 'hidden';
            
            // Ocultar cursor personalizado
            const customCursor = document.querySelector('.custom-cursor');
            if (customCursor) {
                customCursor.style.display = 'none';
            }
            
            // Agregar clase al body para restaurar cursor nativo
            document.body.style.cursor = 'auto';
            document.body.classList.add('modal-open');
        } else {
            // Rehabilitar scroll del body
            document.body.style.overflow = 'unset';
            
            // Mostrar cursor personalizado nuevamente
            const customCursor = document.querySelector('.custom-cursor');
            if (customCursor) {
                customCursor.style.display = 'block';
            }
            
            // Remover cursor nativo y clase
            document.body.style.cursor = 'none';
            document.body.classList.remove('modal-open');
        }

        // Limpiar al desmontar el componente
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.cursor = 'none';
            document.body.classList.remove('modal-open');
            
            const customCursor = document.querySelector('.custom-cursor');
            if (customCursor) {
                customCursor.style.display = 'block';
            }
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
                            {/* Overlay fijo - SIN parallax que cause problemas */}
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

                                {/* Sección de colaboradores CORREGIDA */}
                                {proyectoActivo.colaboradores && proyectoActivo.colaboradores.length > 0 && (
                                    <div className="modal-colaboradores">
                                        <h4>Colaboradores:</h4>
                                        <div className="colaboradores-grid">
                                            {proyectoActivo.colaboradores.map((colaborador, index) => (
                                                <div key={index} className="colaborador-card">
                                                    <h5>{colaborador.nombre}</h5>
                                                    <div className="colaborador-links">
                                                        {colaborador.linkedin && (
                                                            <a
                                                                href={colaborador.linkedin}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="colaborador-link linkedin"
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

                                <div className="modal-acciones">
                                    {proyectoActivo.githubUrl && (
                                        <a
                                            href={proyectoActivo.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="modal-btn github-btn"
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