import React, { useState, useEffect } from 'react';
import productsData from '../public/data/products.json';
import Navbar from './components/Navbar.jsx';
import ProductList from './components/ProductList.jsx';
import CartSidebar from './components/CartSidebar.jsx';
import AddProductForm from './components/AddProductForm.jsx';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [money, setMoney] = useState(200);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'clair');
  const [showCart, setShowCart] = useState(false);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [activeView, setActiveView] = useState('products'); // produits ou favoris

  useEffect(() => {
  setProducts(productsData);
}, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'clair' ? 'sombre' : theme === 'sombre' ? 'alternatif' : 'clair';
    setTheme(nextTheme);
  };

  const addProduct = (newProduct) => {
    setProducts(prev => [...prev, newProduct]);
  };

  const switchView = (view) => {
    setActiveView(view);
  };

  return (
    <div className="app">
      <Navbar
        money={money}
        cart={cart}
        theme={theme}
        toggleTheme={toggleTheme}
        toggleCart={() => setShowCart(!showCart)}
        toggleAddProductForm={() => setShowAddProductForm(!showAddProductForm)}
        switchView={switchView}
        activeView={activeView}
      />

      {activeView === 'products' && (
        <ProductList
          products={products}
          cart={cart}
          setCart={setCart}
          likedProducts={likedProducts}
          setLikedProducts={setLikedProducts}
        />
      )}

      {activeView === 'liked' && (
        <ProductList
          products={likedProducts}
          cart={cart}
          setCart={setCart}
          likedProducts={likedProducts}
          setLikedProducts={setLikedProducts}
        />
      )}

      {showCart && (
        <CartSidebar cart={cart} setCart={setCart} money={money} setMoney={setMoney} />
      )}

      {showAddProductForm && (
        <AddProductForm addProduct={addProduct} onClose={() => setShowAddProductForm(false)} />
      )}
    </div>
  );
}
