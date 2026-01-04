import React, { useState } from 'react';
import '../styles/productView.css';
import { IoClose } from 'react-icons/io5';
import { BsCart3 } from 'react-icons/bs';
import { useCart } from '../context/CartContext';

// Import product images
import Dog_F from '../product_image/Lahxm4BWDuaUkX8u19bup0q3aKEUEHgZhPc9U4c3.jpg';
import Cat_F from '../product_image/UQCXp1v685yumZj0MhX5Pd1FaAoqN0erh9FkoqZh.jpg';
import Fish_F from '../product_image/uQo2el4YRcLP1O6a8xTJ25OatDRzcN7ElTaJhQij.jpg';
import Bird_F from '../product_image/yVHIcK8fCsoxEF4qE6ADnbofEAcrLUQcx1OZPuZn.jpg';

// Product data (same as product page)
export const productsData = [
  {
    id: 1,
    name: 'Dog Food (কুকুরের খাবার)',
    image: Dog_F,
    currentPrice: 1500,
    originalPrice: 2000,
    onSale: true,
    discount: '25% OFF',
    description: 'Premium quality dog food with all essential nutrients for your pet\'s healthy growth and development.',
    category: 'Dog Food',
    weight: '1kg',
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Cat Food (বিড়ালের খাবার)',
    image: Cat_F,
    currentPrice: 1200,
    originalPrice: 1500,
    onSale: false,
    discount: null,
    description: 'Specially formulated cat food with high protein content for your feline friend\'s health.',
    category: 'Cat Food',
    weight: '1kg',
    inStock: true,
    rating: 4.3,
  },
  {
    id: 3,
    name: 'Fish Food (মাছের খাবার)',
    image: Fish_F,
    currentPrice: 800,
    originalPrice: 1000,
    onSale: true,
    discount: '20% OFF',
    description: 'Nutritious fish food that enhances color and promotes healthy growth of your aquarium fish.',
    category: 'Fish Food',
    weight: '500g',
    inStock: true,
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Bird Food (পাখির খাবার)',
    image: Bird_F,
    currentPrice: 600,
    originalPrice: 750,
    onSale: false,
    discount: null,
    description: 'Complete nutrition for all types of pet birds with seeds, grains, and essential vitamins.',
    category: 'Bird Food',
    weight: '500g',
    inStock: true,
    rating: 4.4,
  }
];

const ProductView = ({ productId, onClose }) => {
  const product = productsData.find(p => p.id === productId);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    return <div className="product-view-error">Product not found!</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    onClose();
    window.location.href = '/cart';
  };

  return (
    <div className="product-view-overlay" onClick={onClose}>
      <div className="product-view-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="product-view-close" onClick={onClose}>
          ✕
        </button>

        <div className="product-view-content">
          {/* Left Side - Image */}
          <div className="product-view-image-section">
            {product.onSale && (
              <div className="product-view-sale-badge">ON SALE</div>
            )}
            {product.discount && (
              <div className="product-view-discount-badge">{product.discount}</div>
            )}
            <div className="product-view-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="product-view-details">
            <h1 className="product-view-title">{product.name}</h1>
            
            {/* Category */}
            <div className="product-view-category">
              <span className="category-badge">{product.category}</span>
            </div>

            {/* Rating */}
            <div className="product-view-rating">
              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={index < Math.floor(product.rating) ? 'star filled' : 'star'}>★</span>
                ))}
              </div>
              <span className="rating-text">({product.rating}/5)</span>
            </div>

            {/* Price */}
            <div className="product-view-price">
              <span className="current-price">Tk {product.currentPrice.toFixed(2)}</span>
              <span className="original-price">Tk {product.originalPrice.toFixed(2)}</span>
              {product.discount && (
                <span className="discount-text">Save {product.discount}</span>
              )}
            </div>

            {/* Description */}
            <div className="product-view-description">
              <h3>Product Description</h3>
              <p>{product.description}</p>
            </div>

            {/* Weight */}
            <div className="product-view-info">
              <p><strong>Weight:</strong> {product.weight}</p>
              <p><strong>Availability:</strong> 
                <span className={product.inStock ? 'in-stock' : 'out-stock'}>
                  {product.inStock ? ' In Stock' : ' Out of Stock'}
                </span>
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="product-view-quantity">
              <label>Quantity:</label>
              <div className="quantity-selector">
                <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input 
                  type="number" 
                  value={quantity} 
                  min="1" 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                />
                <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="success-message">
                ✓ Added to cart successfully!
              </div>
            )}

            {/* Action Buttons */}
            <div className="product-view-actions">
              <button className="btn-add-cart" onClick={handleAddToCart}>
                <BsCart3 size={20} />
                Add to Cart
              </button>
              <button className="btn-buy-now" onClick={handleBuyNow}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
