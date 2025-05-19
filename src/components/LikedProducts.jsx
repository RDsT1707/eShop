import React from 'react';
import { useShop } from '../context/ShopContext';

export default function LikedProducts() {
  const { products, likedProducts, buyProduct, money, toggleLike } = useShop();

  const likedList = products.filter(p => likedProducts.includes(p.id));

  if (likedList.length === 0) return <p>Tu n'as aucun produit favori.</p>;

  return (
    <div>
      <h2>Produits favoris</h2>
      <ul>
        {likedList.map(prod => (
          <li key={prod.id} style={{ marginBottom: 10 }}>
            <img src={prod.image} alt={prod.name} width="80" />
            <strong>{prod.name}</strong> - {prod.price} € - Stock: {prod.stock} {" "}
            <button onClick={() => toggleLike(prod.id)} style={{ color: 'red' }}>♥</button>
            <br />
            {prod.stock === 0 ? (
              <button disabled>Rupture</button>
            ) : money < prod.price ? null : (
              <button onClick={() => buyProduct(prod.id)}>Acheter</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
