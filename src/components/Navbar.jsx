import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar({
  money,
  cart,
  theme,
  toggleTheme,
  toggleCart,
  switchView,
  activeView,
}) {
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => switchView('products')}>
        eShop React
      </div>
      <div className="navbar-nav">
        <button
          className={activeView === 'products' ? 'active' : ''}
          onClick={() => switchView('products')}
        >
          Produits
        </button>
        <button
          className={activeView === 'liked' ? 'active' : ''}
          onClick={() => switchView('liked')}
        >
          Favoris
        </button>
        <button onClick={toggleCart}>
          Panier {cartItemCount > 0 && `(${cartItemCount})`}
        </button>
      </div>
      <div className="navbar-actions">
        <button onClick={toggleTheme}>Changer thème ({theme})</button>
      </div>
      <div className="money-display">Argent : {money.toFixed(2)} €</div>
    </nav>
  );
}
