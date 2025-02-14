import { useEffect, useState } from "react";
import "./servicioIntro.css";
import './../../Style/fonts.css';

export default function ServiciosIntro() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 800);
  }, []);

  return (
    <div className="servicios-container" style={{ fontFamily: "Comorant" }}>
      {/* Fondo con imagen opaca */}
      <div className="background"></div>

      {/* Contenido con animación */}
      <div className={`texto ${isVisible ? "visible" : ""}`}>
        <h2 className="titleServicioSection">Realza tu Belleza con Nuestros Tratamientos Exclusivos</h2>
        <p className="textIntroServicioSection">
          En  Salón Xanadu , combinamos técnicas innovadoras con un toque personalizado
          para brindarte una experiencia única. Descubre nuestros servicios diseñados para hacerte brillar
          en cada ocasión.
        </p>
      </div>
    </div>
  );
}

