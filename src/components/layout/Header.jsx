import { getCategoryIcon, formatCategoryName } from '../../utils/helpers';

export default function Header({
  isScrolled,
  currentUser,
  userRole,
  cart,
  setShowCart,
  handleLogout,
  setShowAdminPanel
}) {

  return (
    <header className={`foodshaad-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="brand">
          <div className="logo">🍔</div>
          <div className="brand-text">
            <h1 className="brand-title">FoodShaad</h1>
            {!isScrolled && (
              <p className="brand-subtitle">Recetas de Comida Rápida</p>
            )}
          </div>
        </div>

        <div className="header-actions">
          <div className="user-info">
            <span className="welcome-text">
              {userRole === 'admin' ? '👑' : '👋'} Hola, <strong>{currentUser}</strong>
              {userRole === 'admin' && <span style={{marginLeft: '8px'}}>(Admin)</span>}
            </span>
          </div>

          {userRole === 'admin' && (
            <button
              className="admin-button-header"
              onClick={() => setShowAdminPanel(true)}
            >
              👑 Panel Admin
            </button>
          )}

          <button
            className="cart-button-header"
            onClick={() => setShowCart(true)}
          >
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cart.length}</span>
          </button>

          <button onClick={handleLogout} className="logout-button">
            🚪 Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
}