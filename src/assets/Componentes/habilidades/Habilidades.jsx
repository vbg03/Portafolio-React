import React from 'react'

const Habilidades = () => {
    const habilidadesDuras = [
        {
            id: 1,
            categoria: "Desarrollo y Programación Web",
            icono: "bx-code-alt",
            tecnologias: ["HTML", "CSS", "JavaScript", "React", "Vite", "TailwindCSS", "GSAP"],
            descripcion: "Desarrollo de aplicaciones web modernas con diseño responsivo y animaciones fluidas. Experiencia en consumo de APIs REST, arquitectura por capas en Node.js e integración de microservicios.",
            color: "#a855f7"
        },
        {
            id: 2,
            categoria: "Diseño UX/UI y Prototipado",
            icono: "bx-palette",
            tecnologias: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
            descripcion: "Diseño de interfaces centradas en el usuario, prototipado interactivo y branding. Especializada en experiencias inmersivas y gamificadas con enfoque en usabilidad.",
            color: "#c084fc"
        },
        {
            id: 3,
            categoria: "Producción Audiovisual",
            icono: "bx-video",
            tecnologias: ["Adobe Premiere Pro", "After Effects"],
            descripcion: "Edición de video profesional y creación de efectos visuales. Producción de contenido multimedia para redes sociales, trailers y presentaciones corporativas.",
            color: "#d946ef"
        },
        {
            id: 4,
            categoria: "Desarrollo de Videojuegos y Realidad Virtual",
            icono: "bx-joystick",
            tecnologias: ["Unity", "Blender", "C#"],
            descripcion: "Desarrollo de experiencias VR y 3D, modelado y animación en Blender. Diseño narrativo y desarrollo de historias interactivas con físicas realistas y NPCs inteligentes.",
            color: "#7c3aed"
        },
        {
            id: 5,
            categoria: "Procesamiento de Imágenes e IA",
            icono: "bx-brain",
            tecnologias: ["Python", "PyTorch", "CNN", "GAN", "U-Net"],
            descripcion: "Implementación de redes neuronales para procesamiento digital de imágenes. Experiencia en segmentación, clasificación y transferencia de estilo usando deep learning.",
            color: "#b946ef"
        },
        {
            id: 6,
            categoria: "Gestión de Sistemas y Plataformas",
            icono: "bx-server",
            tecnologias: ["Freshdesk", "DNS", "Servidores Web"],
            descripcion: "Configuración y administración de sistemas multimedia aplicados a diferentes sectores: gastronomía, turismo, educación y salud mental.",
            color: "#8b5cf6"
        }
    ];

    const habilidadesBlandas = [
        {
            id: 1,
            titulo: "Creatividad e innovación",
            icono: "bx-bulb",
            descripcion: "Soy una persona muy creativa. Me encanta explorar ideas nuevas, ya sea desarrollando videojuegos, diseñando experiencias interactivas o contando historias. Siempre busco soluciones originales que conecten con las personas y que aporten valor visual, emocional y funcional a mis proyectos."
        },
        {
            id: 2,
            titulo: "Pensamiento crítico y resolución de problemas",
            icono: "bx-brain",
            descripcion: "Me gusta analizar cada reto con calma y lógica. Cuando algo se complica (como un bug o un tema técnico que no domino), busco alternativas, investigo y lo enfrento sin rendirme. Sé adaptarme y resolver problemas, incluso bajo presión."
        },
        {
            id: 3,
            titulo: "Trabajo en equipo y colaboración",
            icono: "bx-group",
            descripcion: "Disfruto trabajar con personas de diferentes disciplinas. Me gusta escuchar, proponer, ayudar y aprender de los demás. Valoro el trabajo colaborativo y sé cómo construir relaciones de confianza dentro de un equipo, manteniendo siempre el respeto y la buena comunicación."
        },
        {
            id: 4,
            titulo: "Comunicación asertiva y empática",
            icono: "bx-chat",
            descripcion: "Sé expresar mis ideas con claridad y sensibilidad. Me esfuerzo por que mis mensajes lleguen de forma auténtica, tanto en lo técnico como en lo emocional. Siempre intento ponerme en el lugar del otro, y eso me ha ayudado a conectar con mis compañeros, profesores, usuarios y aliados."
        },
        {
            id: 5,
            titulo: "Autenticidad y sensibilidad emocional",
            icono: "bx-heart",
            descripcion: "Me conozco bien y valoro mis emociones. No tengo miedo de hablar de temas delicados como la salud mental o el impacto emocional de ciertos entornos. Me esfuerzo por ser una persona cercana, humana y empática, porque creo que eso también es liderazgo."
        },
        {
            id: 6,
            titulo: "Organización y liderazgo",
            icono: "bx-crown",
            descripcion: "Me gusta tomar la iniciativa y organizar proyectos, aunque sean complejos o con muchos componentes. Sé cómo dividir tareas, priorizar y mantenerme enfocada. Cuando algo me apasiona, soy muy disciplinada y doy lo mejor de mí hasta verlo terminado."
        },
        {
            id: 7,
            titulo: "Aprendizaje continuo",
            icono: "bx-book-open",
            descripcion: "Tengo una curiosidad constante. Me encanta aprender, incluso si al principio algo me asusta o me da pereza. Siempre busco crecer y adquirir nuevas herramientas, porque sé que eso me permite mejorar y aportar más valor a lo que hago."
        }
    ];

    return (
        <section className="habilidades" id='habilidades'>
            <h2 className="heading">Mis <span>Habilidades</span></h2>

            {/* Habilidades Duras */}
            <div className="habilidades-section">
                <h3 className="section-title">
                    <i className='bx bx-code-block'></i>
                    Habilidades Técnicas
                </h3>
                
                <div className="habilidades-grid">
                    {habilidadesDuras.map((habilidad, index) => (
                        <div 
                            key={habilidad.id} 
                            className="habilidad-card gsap-habilidad-card" 
                            data-color={habilidad.color}
                            data-index={index}
                        >
                            <div className="habilidad-icon gsap-habilidad-icon">
                                <i className={`bx ${habilidad.icono} gsap-icon`} style={{color: habilidad.color}}></i>
                            </div>
                            
                            <div className="habilidad-content">
                                <h4 className="habilidad-titulo gsap-titulo">{habilidad.categoria}</h4>
                                
                                <div className="tecnologias-tags">
                                    {habilidad.tecnologias.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex} 
                                            className="tech-tag gsap-tech-tag" 
                                            style={{'--tag-color': habilidad.color}}
                                            data-tech-index={techIndex}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <p className="habilidad-descripcion gsap-descripcion">{habilidad.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Habilidades Blandas */}
            <div className="habilidades-section">
                <h3 className="section-title">
                    <i className='bx bx-message-dots'></i>
                    Habilidades Interpersonales
                </h3>
                
                <div className="habilidades-blandas-grid">
                    {habilidadesBlandas.map((habilidad, index) => (
                        <div key={habilidad.id} className="habilidad-blanda gsap-habilidad-blanda" data-blanda-index={index}>
                            <div className="habilidad-blanda-icon gsap-blanda-icon">
                                <i className={`bx ${habilidad.icono}`}></i>
                            </div>
                            <div className="habilidad-blanda-content gsap-blanda-content">
                                <h4>{habilidad.titulo}</h4>
                                <p>{habilidad.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Habilidades
