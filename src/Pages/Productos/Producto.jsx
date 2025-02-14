import './Producto.css';
import ProductosItem from './../../Componentes/ProductoModal/ProductoModal.jsx';
import Img1 from './../../assets/ProductImg/img1.png';
import Img2 from './../../assets/ProductImg/img2.png';
import SectionIntro from './../../Componentes/SectionIntro/sectionIntro.jsx';
import ImgInicial from './../../assets/ProductImg/imgProductoInicial.jpeg';
export default function Producto() {

  const products = [
    {
      id: 1,
      name: "Parches de Hidrogel Mary Kay",
      price: "49,50 $",
      rating: "5.0",
      image: Img2,
      description: "Es el momento de despertar tu mirada. Los Parches de Hidrogel para Ojos Mary Kay® aportan un refrescante impulso de hidratación y luminosidad al instante. Perfecto para revitalizar una mirada cansada. Descubre los beneficios de aplicarte los parches durante solo 20 minutos dos veces por semana o cuando tu piel necesite un impulso añadido. ¡Mímate en cualquier momento y en cualquier lugar",
      Beneficio: [
        "Hidrata",
        "Refresca",
        "Calma",
        "Descongestiona"
      ]
    },
    {
      id: 2,
      name: "Sérum Reafirmante Avanzado TimeWise Repair",
      price: "80,00 $",
      rating: "5.0",
      image: Img1,
      description: "El Sérum Reafirmante Avanzado TimeWise Repair® Volu-Firm® es nuestro sérum más preciso y potente que hemos creado hasta la fecha. Ha sido clínicamente testado desde cada ángulo y los resultados hablan por sí mismos",
      Beneficio: [
        "Un triángulo de la juventud más firme: Ayuda a las mejillas, línea de la mandíbula y cuello a tener un aspecto más firme.",
        "Un efecto más firme: Recupera el contorno facial, y la piel en general tiene un aspecto y sensación más firmes.",
        "Renueva la juventud del rostro: Suaviza el aspecto de las líneas de expresión y arrugas en el rostro y cuello, y mejora el aspecto de los pliegues que pueden aparecer en el área del cuello"

      ]
    }
  ];


  return (
    <>
      <div className='containerProductSection'>
        <SectionIntro
          title="Descubre tu mejor versión"
          textIntro="En Salón Xanadu, te ofrecemos productos de alta calidad para realzar tu belleza y cuidar tu cabello y piel. Explora nuestra selección y encuentra los aliados perfectos para tu rutina de belleza."
          ImgIntro={ImgInicial}
        />
        <ProductosItem
          products={products} />

      </div>
    </>
  );

}
