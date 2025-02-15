import TargeServicio from './../../Componentes/TargetaServicio/TargetaServicio.jsx';
import './../../Style/fonts.css';
import Img from './../../Utiles/imgService.js';
import './Servicio.css';
import SectionIntro from './../../Componentes/SectionIntro/sectionIntro.jsx';
import ImgIncial from './../../assets/ServicioImg/ImgPresentServicio.png';
export default function Servicio() {
  return (

    <div className='containerServicioSection'>

      <SectionIntro
        title="Realza tu Belleza con Nuestros Tratamientos Exclusivos"
        textIntro="En  Salón Xanadu , combinamos técnicas innovadoras con un toque personalizado
          para brindarte una experiencia única. Descubre nuestros servicios diseñados para hacerte brillar
          en cada ocasión."
        ImgIntro={ImgIncial}

      />
      <TargeServicio
        Title="Limpieza Facial Profunda"
        Img={Img.limpiezaFacialProfunda}
        tiempo="45min"
        Description="Diagnóstico de la piel + Higienización + Exfoliación + Vapor de ozono + Extracción de comedones + cónico + Incluye rostro, cuello y escote + Microdermoabración + Mascarilla + Altafrecuencia + Hidratacion facial + Máscara LED + Protector solar"
        price="800$"
        Beneficios={
          ['Eliminación de impurezas',
            'Mejora la textura de la piel',
            'Prevención de brotes de acné',
            'Estimulación de la circulación sanguínea',
            'Facilita la penetración de principios activos',
            'Reducción de la inflamación facial',
            'Rejuvenecimiento',
            'Relajación',
            'Salud y bienestar']}
        ImgBeneficio={Img.limpiezafacialprofundaBeneficio}
      />
    </div>


  );
}
