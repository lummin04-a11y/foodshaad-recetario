import { useState } from 'react';
import { getPackageIcon, formatPackageName, calculateItemPrice } from '../../utils/helpers';

export default function CartModal({ cart, groupedCart, total, onClose, onRemove, onCheckout }) {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: ''
  });

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <div className="cart-header">
          <div className="cart-title-section">
            <div className="cart-icon-header">🛒</div>
            <div>
              <h2>Tu Carrito de Compra</h2>
              <p className="cart-subtitle">{cart.length} {cart.length === 1 ? 'producto' : 'productos'}</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <h3>Tu carrito está vacío</h3>
              <p>¡Explora nuestras recetas y añade ingredientes!</p>
              <button className="continue-shopping-btn" onClick={onClose}>
                Explorar Recetas
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items-container">
                {Object.entries(groupedCart).map(([packageType, items]) => (
                  <div key={packageType} className="package-group">
                    <div className="package-header">
                      <span className="package-icon">{getPackageIcon(packageType)}</span>
                      <h3 className="package-title">{formatPackageName(packageType)}</h3>
                      <span className="package-count">{items.length} {items.length === 1 ? 'producto' : 'productos'}</span>
                    </div>
                    <div className="package-items">
                      {items.map((item, index) => (
                        <div key={`${item.name}-${index}`} className="cart-item">
                          <div className="item-image-placeholder">
                            {getPackageIcon(item.package)}
                          </div>
                          <div className="item-info">
                            <span className="item-name">{item.name}</span>
                            <span className="item-recipe">de {item.recipe}</span>
                            <div className="item-details">
                              <span className="item-quantity">{item.quantity.toFixed(1)} {item.unit}</span>
                              <span className="item-price">${calculateItemPrice(item).toFixed(2)}</span>
                            </div>
                          </div>
                          <button
                            className="remove-btn"
                            onClick={() => onRemove(cart.findIndex(cartItem =>
                              cartItem.name === item.name &&
                              cartItem.package === item.package &&
                              cartItem.recipe === item.recipe
                            ))}
                            title="Eliminar producto"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="currentColor"/>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-summary">
                <h3>Resumen de tu pedido</h3>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${total}</span>
                </div>
                <div className="summary-row">
                  <span>Envío</span>
                  <span className="free-shipping">Gratis</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-total">
                  <span>Total</span>
                  <span className="total-price">${total}</span>
                </div>
              </div>

              <div className="customer-info">
                <div className="section-header">
                  <span className="section-icon">📋</span>
                  <h3>Información de Envío</h3>
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="customer-name">Nombre completo</label>
                    <input
                      id="customer-name"
                      type="text"
                      placeholder="Ingresa tu nombre completo"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="customer-email">Correo electrónico</label>
                    <input
                      id="customer-email"
                      type="email"
                      placeholder="ejemplo@correo.com"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="customer-address">Dirección de envío</label>
                    <textarea
                      id="customer-address"
                      placeholder="Ingresa tu dirección completa para el envío"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                      rows="3"
                    />
                  </div>
                </div>
              </div>

              <div className="cart-actions">
                <button className="continue-shopping" onClick={onClose}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Seguir Comprando
                </button>
                <button
                  className="checkout-btn"
                  onClick={onCheckout}
                  disabled={!customerInfo.name || !customerInfo.email || !customerInfo.address}
                >
                  <span className="checkout-text">
                    <span className="checkout-main">Finalizar Compra</span>
                    <span className="checkout-price">${total}</span>
                  </span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}