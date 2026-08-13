import React, { useEffect, useRef, useState } from 'react'
import './SobreMi.css'

const videoPreviews = [
  {
    src: '/Imagenes/sobre-mi-preview-valores.webp',
    alt: 'Vista previa del video sobre valores personales',
    label: 'Valores'
  },
  {
    src: '/Imagenes/sobre-mi-preview-habilidades.webp',
    alt: 'Vista previa del video sobre habilidades profesionales',
    label: 'Habilidades'
  },
  {
    src: '/Imagenes/sobre-mi-preview-proyectos.webp',
    alt: 'Vista previa del video sobre el proyecto ENSAM',
    label: 'Proyectos'
  },
  {
    src: '/Imagenes/sobre-mi-preview-diseno.webp',
    alt: 'Vista previa del video sobre diseño de experiencias',
    label: 'Diseño UX/UI'
  }
]

const SobreMi = () => {
  const videoRef = useRef(null)
  const [activePreview, setActivePreview] = useState(0)
  const [isVideoActive, setIsVideoActive] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isVideoActive || prefersReducedMotion) return undefined

    const intervalId = window.setInterval(() => {
      setActivePreview((current) => (current + 1) % videoPreviews.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [isVideoActive])

  const showPreviousPreview = () => {
    setActivePreview((current) =>
      current === 0 ? videoPreviews.length - 1 : current - 1
    )
  }

  const showNextPreview = () => {
    setActivePreview((current) => (current + 1) % videoPreviews.length)
  }

  const playVideo = async () => {
    const video = videoRef.current

    if (!video) return

    if (video.ended) video.currentTime = 0

    setIsVideoActive(true)

    try {
      await video.play()
    } catch {
      setIsVideoActive(false)
    }
  }

  return (
    <section className="sobre" id="sobre" aria-labelledby="sobre-title">

      <div className="sobre-content">
        <div className="sobre-heading">
          <p className="sobre-eyebrow">
            <span aria-hidden="true">✦</span>
            Conóceme
          </p>
          <h2 className="heading sobre-title" id="sobre-title">
            Sobre <span>Mí</span>
            <span className="sobre-corazon" aria-hidden="true">♡</span>
          </h2>
          <p className="sobre-profesion">
            <span aria-hidden="true"></span>
            Ingeniera Multimedia
          </p>
        </div>

        <p>Soy Ingeniera Multimedia en proceso de grado de la Universidad Autónoma de Occidente, con
          formación técnica en Programación de Software del SENA. Me apasiona el desarrollo de software y la
          creación de soluciones tecnológicas innovadoras que integren creatividad e ingeniería.</p>

        <div className="sobre-valores">
          <div className="valor-item">
            <span className="valor-icon">
              <i className="bx bx-bulb"></i>
            </span>

            <p>
              <strong>Creatividad</strong> que transforma ideas en
              experiencias digitales.
            </p>
          </div>

          <div className="valor-item">
            <span className="valor-icon">
              <i className="bx bx-code-alt"></i>
            </span>

            <p>
              <strong>Tecnología</strong> aplicada para construir
              soluciones eficientes.
            </p>
          </div>

          <div className="valor-item">
            <span className="valor-icon">
              <i className="bx bx-user"></i>
            </span>

            <p>
              <strong>Diseño centrado en el usuario</strong> para generar
              impacto real.
            </p>
          </div>
        </div>

        <div className="stats-container">
          <article className="info-card stat-card">
            <span className="stat__icon">
              <i className="bx bx-line-chart"></i>
            </span>

            <div>
              <strong>
                3<span>+</span>
              </strong>
              <p>años aprendiendo</p>
            </div>
          </article>

          <article className="info-card stat-card">
            <span className="stat__icon">
              <i className="bx bx-folder"></i>
            </span>

            <div>
              <strong>
                10<span>+</span>
              </strong>
              <p>proyectos realizados</p>
            </div>
          </article>
        </div>
      </div>

      <div className="sobre-img">
        <div className={`sobre-media${isVideoActive ? ' is-video-active' : ''}`}>
          <video
            ref={videoRef}
            className="sobre-video"
            controls={isVideoActive}
            playsInline
            preload="metadata"
            poster={videoPreviews[activePreview].src}
            onEnded={() => setIsVideoActive(false)}
            aria-label="Video de presentación sobre mí"
          >
            <source src="/videos/sobre-mi-video.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>

          {!isVideoActive && (
            <div className="video-preview" aria-label="Vistas previas del video">
              <img
                key={videoPreviews[activePreview].src}
                className="video-preview__image"
                src={videoPreviews[activePreview].src}
                alt={videoPreviews[activePreview].alt}
              />

              <div className="video-preview__shade" aria-hidden="true"></div>

              <span className="video-preview__label">
                Vista previa · {videoPreviews[activePreview].label}
              </span>

              <button
                className="video-preview__play"
                type="button"
                onClick={playVideo}
                aria-label="Reproducir video de presentación"
              >
                <span className="video-preview__play-icon" aria-hidden="true">
                  <i className="bx bx-play"></i>
                </span>
                <span>Ver presentación</span>
              </button>

              <button
                className="video-preview__arrow video-preview__arrow--previous"
                type="button"
                onClick={showPreviousPreview}
                aria-label="Mostrar vista previa anterior"
              >
                <i className="bx bx-chevron-left" aria-hidden="true"></i>
              </button>

              <button
                className="video-preview__arrow video-preview__arrow--next"
                type="button"
                onClick={showNextPreview}
                aria-label="Mostrar vista previa siguiente"
              >
                <i className="bx bx-chevron-right" aria-hidden="true"></i>
              </button>

              <div className="video-preview__dots" aria-label="Seleccionar vista previa">
                {videoPreviews.map((preview, index) => (
                  <button
                    key={preview.src}
                    className={index === activePreview ? 'is-active' : ''}
                    type="button"
                    onClick={() => setActivePreview(index)}
                    aria-label={`Mostrar vista previa: ${preview.label}`}
                    aria-pressed={index === activePreview}
                  ></button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

    </section>
  )
}

export default SobreMi
