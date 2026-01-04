import React from 'react';
import '../styles/slider.css';
import Pet_food from '../product_image/slider.png';

const Slider = () => {
  return (
    <section className="slider-section">
      <div className="slider-container">
        <div className="slider-image">
          <img 
            src={Pet_food} 
          />
        </div>
      </div>
    </section>
  );
};

export default Slider;
