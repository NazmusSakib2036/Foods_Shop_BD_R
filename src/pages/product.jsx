import React, { useState } from 'react';
import '../styles/product.css';
import ProductView from './productView';

// product images import
import Dog_F from '../product_image/Lahxm4BWDuaUkX8u19bup0q3aKEUEHgZhPc9U4c3.jpg';
import Cat_F from '../product_image/UQCXp1v685yumZj0MhX5Pd1FaAoqN0erh9FkoqZh.jpg';
import Fish_F from '../product_image/uQo2el4YRcLP1O6a8xTJ25OatDRzcN7ElTaJhQij.jpg';
import Bird_F from '../product_image/yVHIcK8fCsoxEF4qE6ADnbofEAcrLUQcx1OZPuZn.jpg';

const Product = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Dummy product data matching the image
  const products = [
    {
      id: 1,
      name: 'Dog Food (কুকুরের খাবার)',
        image: Dog_F,
        currentPrice: 1500,
        originalPrice: 2000,
        onSale: true,
        discount: '25% OFF',
    },
    {
      id: 2,
        name: 'Cat Food (বিড়ালের খাবার)',
        image: Cat_F,
        currentPrice: 1200,
        originalPrice: 1500,
        onSale: false,
        discount: null,
    },
    {
        id: 3,
        name: 'Fish Food (মাছের খাবার)',
        image: Fish_F,
        currentPrice: 800,
        originalPrice: 1000,
        onSale: true,
        discount: '20% OFF',
    },
    {
        id: 4,
        name: 'Bird Food (পাখির খাবার)',
        image: Bird_F,
        currentPrice: 600,
        originalPrice: 750,
        onSale: false,
        discount: null,
    }

    
  ];

  return (
    <>
      <section className="product-section">
        <div className="product-container">
          <h2 className="product-title">ALL PRODUCT</h2>
          
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card" onClick={() => setSelectedProductId(product.id)}>
                {/* Checkmark Icon */}
                <div className="product-check">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>

                {/* On Sale Badge */}
                {product.onSale && (
                  <div className="product-sale-badge">ON SALE</div>
                )}

                {/* Discount Badge */}
                {product.discount && (
                  <div className="product-discount-badge">{product.discount}</div>
                )}

                {/* Product Image */}
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                {/* Product Name */}
                <h3 className="product-name">{product.name}</h3>

                {/* Badge */}
                {/* <div className="product-badge">{product.badge}</div> */}

                {/* Price Section */}
                <div className="product-price">
                  <span className="current-price_p">Tk {product.currentPrice.toFixed(2)}</span>
                  <span className="original-price_p">Tk {product.originalPrice.toFixed(2)}</span>
                </div>

                {/* Quick Add Button */}
                <button className="quick-add-btn" onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProductId(product.id);
                }}>Quick Add</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product View Modal */}
      {selectedProductId && (
        <ProductView 
          productId={selectedProductId} 
          onClose={() => setSelectedProductId(null)} 
        />
      )}
    </>
  );
};

export default Product;
