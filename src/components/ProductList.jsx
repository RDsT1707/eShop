import React from 'react';

export default function ProductList({ products, cart, setCart, likedProducts, setLikedProducts }) {
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const toggleLike = (product) => {
    if (likedProducts.find((p) => p.id === product.id)) {
      setLikedProducts(likedProducts.filter((p) => p.id !== product.id));
    } else {
      setLikedProducts([...likedProducts, product]);
    }
  };

  return (
    <div className="product-list">
  {products.length === 0 && <p>Aucun produit</p>}
  {products.map((product) => (
    <div key={product.id} className="product-card">
      <img src={product.image || 'https://via.placeholder.com/150'} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">{product.price.toFixed(2)} €</p>

      <div className="product-actions">
        <button onClick={() => addToCart(product)}>Ajouter au panier</button>
        <button onClick={() => toggleLike(product)}>
          {likedProducts.find((p) => p.id === product.id) ? '♥' : '♡'}
        </button>
      </div>
    </div>
  ))}
</div>

  );
}
