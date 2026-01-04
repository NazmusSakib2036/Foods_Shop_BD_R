import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/header.css";
import logoImage from "../images/foodsshopbd.png";
import { productsData } from "./productView";
import ProductView from "./productView";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { getCartCount } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Show header when scrolling up or at the top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = productsData.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
    setShowSearchResults(false);
    setSearchQuery("");
  };

  const closeProductView = () => {
    setSelectedProductId(null);
  };

  return (
    <>
    <header
      className={`header ${visible ? "header-visible" : "header-hidden"}`}
    >
      {/* Top Banner */}
      <div className="top-banner">
        <p className="banner-text">
          আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুনঃ
          <span className="phone-icon">📞</span>
          <strong>+8801321208940</strong> |
          <span className="phone-icon">📞</span>
          হট লাইনঃ <strong>09642-922922</strong>
        </p>
      </div>

      {/* Middle Section with Logo */}
      <div className="header-middle">
        <div className="header-container">
          {/* Hamburger Menu Icon (Mobile Only) */}
          <div className="hamburger-menu" onClick={toggleSidebar}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-input-wrapper">
              <svg
                className="search-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            
            {/* Search Results Dropdown */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="search-results">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    className="search-result-item"
                    onClick={() => handleProductClick(product.id)}
                  >
                    <img src={product.image} alt={product.name} />
                    <div className="search-result-info">
                      <p className="search-result-name">{product.name}</p>
                      <p className="search-result-price">Tk {product.currentPrice}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {showSearchResults && searchResults.length === 0 && searchQuery.trim() && (
              <div className="search-results">
                <div className="search-no-results">No products found</div>
              </div>
            )}
          </div>

          {/* Logo */}
          <div className="logo-container">
            <Link to="/">
              <img
                src={logoImage}
                alt="Foods Shop BD"
                className="header_logo"
              />
            </Link>
          </div>

          {/* Right Icons */}
          <div className="header-icons">
            {/* User Icon */}
            <div className="icon user-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>

            {/* Cart Icon */}
            <Link to="/cart" className="icon cart-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {getCartCount() > 0 && (
                <span className="cart-count">{getCartCount()}</span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="navigation">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#offer-zone">OFFER ZONE</a>
          </li>
          <li className="nav-item">
            <a href="#best-seller">Best Seller</a>
          </li>
          <li className="nav-item">
            <Link to="/category/Cat Food">Cat Food</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Dog Food">Dog Food</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Fish Food">Fish Food</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Bird Food">Bird Food</Link>
          </li>
          <li className="nav-item">
            <a href="#pet-food">Pet Food</a>
          </li>
          <li className="nav-item">
            <a href="#pet-dress">Pet Dress</a>
          </li>
          <li className="nav-item">
            <a href="#tea-nasta">Accessories</a>
          </li>
          <li className="nav-item">
            <a href="#snacks">Toys</a>
          </li>
          <li className="nav-item">
            <a href="#organic-oil">Supplements</a>
          </li>
        </ul>
      </nav>
    </header>

    {/* Sidebar Overlay */}
    {isSidebarOpen && (
      <div className="sidebar-overlay sidebar-overlay-visible" onClick={closeSidebar}></div>
    )}

    {/* Sidebar Menu */}
    <div className={`sidebar-menu ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="sidebar-header">
        <h3>Categories</h3>
        <button className="sidebar-close_b" onClick={closeSidebar}>
          ✕
        </button>
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-nav-item" onClick={closeSidebar}>
          <a href="#offer-zone">OFFER ZONE</a>
        </li>
        <li className="sidebar-nav-item" onClick={closeSidebar}>
          <a href="#best-seller">Best Seller</a>
        </li>
        <li className="sidebar-nav-item" onClick={closeSidebar}>
          <Link to="/category/Cat Food">Cat Food</Link>
        </li>
        <li className="sidebar-nav-item" onClick={closeSidebar}>
          <Link to="/category/Dog Food">Dog Food</Link>
        </li>
        <li className="sidebar-nav-item" onClick={closeSidebar}>
          <Link to="/category/Fish Food">Fish Food</Link>
        </li>
        <li className="sidebar-nav-item" onClick={closeSidebar}>
          <Link to="/category/Bird Food">Bird Food</Link>
        </li>
        <li className="sidebar-nav-item" onClick={closeSidebar}>
          <a href="#pet-food">Pet Food</a>
        </li>
        <li className="sidebar-nav-item" onClick={closeSidebar}>
          <a href="#pet-dress">Pet Dress</a>
        </li>
        <li className="sidebar-nav-item" onClick={closeSidebar}>
          <a href="#tea-nasta">Accessories</a>
        </li>
        <li className="sidebar-nav-item" onClick={closeSidebar}>
          <a href="#snacks">Toys</a>
        </li>
        <li className="sidebar-nav-item" onClick={closeSidebar}>
          <a href="#organic-oil">Supplements</a>
        </li>
      </ul>
    </div>
    
    {/* Product View Modal */}
    {selectedProductId && (
      <ProductView
        productId={selectedProductId}
        onClose={closeProductView}
      />
    )}
    </>
  );
};

export default Header;
