import './ProductoModal.css';
import { useState } from 'react';
import './../../Style/fonts.css';

const ProductGrid = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCloseModal = () => {
    setSelectedProduct(null);
    document.body.classList.remove('modal-open');
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    document.body.classList.add('modal-open');
  };

  return (
    <div className="product-grid" style={{ fontFamily: "Comorant" }}>
      {products && products.length > 0 ? ( // Verifica si hay productos antes de mapear
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className='nameProduct'>{product.name}</h3>
            <p className="priceProduct" >{product.price}</p>
            <p className="rating" style={{ fontFamily: "sans-serif" }}>⭐⭐⭐⭐⭐ {product.rating}</p>
            <button className="details-button" style={{ fontFamily: "Comorant" }} onClick={() => handleOpenModal(product)}>
              Ver detalles
            </button>
          </div>
        ))
      ) : (
        <p>No se encontraron productos.</p> // Mensaje si no hay productos
      )}

      {
        selectedProduct && (
          <div className="modal-overlay" style={{ fontFamily: "Comorant" }}>
            <div className="modal-content">
              <button className="close-button" onClick={handleCloseModal}>✖</button>
              <div className="product-details">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image" />
                <div className="details-text">
                  <h2>{selectedProduct.name}</h2>
                  <p style={{ fontFamily: "sans-serif" }} className="price">{selectedProduct.price}</p>
                  <p>{selectedProduct.description}</p>
                  <ul className="descriptionBeneficioProduct">
                    {selectedProduct.Beneficio.map((beneficio, index) => (
                      <li key={index}>{beneficio}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
};

export default ProductGrid;
