import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './pages/header'
import Footer from './pages/footer'
import Product from './pages/product'
import Collection from './pages/colloection'
import Slider from './pages/slider'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Category from './pages/category'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={
          <div style={{ minHeight: '100vh' }}>
            <Slider />
            <Product />
            <Collection />
          </div>
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
