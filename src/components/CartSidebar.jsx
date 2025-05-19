import React from 'react';

export default function CartSidebar({ cart, setCart, money, setMoney }) {
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const checkout = () => {
    if (money < total) {
      alert("T'as pas assez d'argent !");
      return;
    }
    setMoney(money - total);
    setCart([]);
    alert('Achat effectué, merci !');
  };

  return (
    <aside className="cart-sidebar">
      <h2>Panier</h2>
      {cart.length === 0 && <p>Panier vide</p>}
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div>{item.name}</div>
          <div>Qté: {item.quantity}</div>
          <div>{(item.price * item.quantity).toFixed(2)} €</div>
          <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
        </div>
      ))}
      <div className="cart-total">Total : {total.toFixed(2)} €</div>
      <button onClick={checkout} disabled={cart.length === 0}>
        Valider l'achat
      </button>
    </aside>
  );
}
