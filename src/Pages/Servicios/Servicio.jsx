import TargeServicio from './../../Componentes/TargetaServicio/TargetaServicio.jsx';
import './../../Style/fonts.css';
import Img from './../../Utiles/imgService.js';
import './Servicio.css';
import ServicioIntro from './../../Componentes/ServicioIntro/servicioIntro.jsx';
export default function Servicio() {
  return (
    <>
      <ServicioIntro />
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
    </>
  );
}
