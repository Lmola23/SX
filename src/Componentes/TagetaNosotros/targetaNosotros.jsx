import './targetaNosotros.css';
import './../../Style/fonts.css';


export default function targetaNosotros({ imgUrl, Title, description }) {
  return (
    <div className='container' style={{ fontFamily: "Comorant" }}>
      <div className='containerImg'>
        <img src={imgUrl} alt="" />
      </div>
      <div className='containerDescrip'>
        <h3 className='titleEscogerno' style={{ fontWeight: 800, fontStyle: "italic" }}>{Title}</h3>
        <p className='descriptionEscogerno'>{description}</p>


      </div>
    </div>


  )






}
