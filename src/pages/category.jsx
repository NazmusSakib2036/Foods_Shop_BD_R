import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/category.css';
import { productsData } from './productView';
import ProductView from './productView';

const Category = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Decode category name from URL
  const decodedCategory = decodeURIComponent(categoryName);

  // Filter products by category
  const categoryProducts = productsData.filter(
    product => product.category === decodedCategory
  );

  return (
    <>
      <section className="category-section">
        <div className="category-container">
          {/* Back Button */}
          <button className="back-button" onClick={() => navigate('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back
          </button>

          {/* Category Header */}
          <div className="category-header">
            <h1 className="category-title">{decodedCategory}</h1>
            <p className="category-count">{categoryProducts.length} Products Found</p>
          </div>

          {/* Products Grid */}
          {categoryProducts.length > 0 ? (
            <div className="category-product-grid">
              {categoryProducts.map((product) => (
                <div key={product.id} className="category-product-card" onClick={() => setSelectedProductId(product.id)}>
                  {/* Checkmark Icon */}
                  <div className="category-product-check">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>

                  {/* Sale Badge */}
                  {product.onSale && (
                    <div className="category-sale-badge">
                      {product.discount}
                    </div>
                  )}

                  {/* Product Image */}
                  <div className="category-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>

                  {/* Product Info */}
                  <div className="category-product-info">
                    <h3 className="category-product-name">{product.name}</h3>
                    <div className="category-product-category">{product.category}</div>
                    
                    <div className="category-product-prices">
                      <span className="category-current-price">Tk {product.currentPrice}</span>
                      {product.originalPrice && (
                        <span className="category-original-price">Tk {product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="category-no-products">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <h3>No Products Available</h3>
              <p>No products found in this category at the moment.</p>
              <p className="category-no-products-sub">Please check back later or browse other categories.</p>
            </div>
          )}
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

export default Category;
