import { useState } from "react";

export default function AuthSystem({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validaciones básicas
    if (!formData.username || !formData.password) {
      setError("Usuario y contraseña son obligatorios");
      return;
    }

    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        setError("Las contraseñas no coinciden");
        return;
      }
      if (formData.password.length < 6) {
        setError("La contraseña debe tener al menos 6 caracteres");
        return;
      }
      if (!formData.email) {
        setError("El correo electrónico es obligatorio");
        return;
      }
    }

    // Sistema de autenticación con roles
    if (isLogin) {
      // Credenciales de prueba
      if (formData.username === "foodshaad" && formData.password === "1234") {
        onLogin(formData.username, "cliente");
      } else if (formData.username === "admin" && formData.password === "admin123") {
        onLogin(formData.username, "admin");
      } else {
        setError("Usuario y/o contraseña incorrecta");
      }
    } else {
      // Registro - siempre como cliente
      onLogin(formData.username, "cliente");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <div className="logo">🍔</div>
        <h2 className="auth-title">
          {isLogin ? 'Bienvenido a FoodShaad' : 'Únete a FoodShaad'}
        </h2>
        <p className="auth-subtitle">
          {isLogin ? 'Ingresa a tu cuenta' : 'Crea tu cuenta para comenzar'}
        </p>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="👤 Nombre de usuario"
            className="form-input"
            required
          />
        </div>

        {!isLogin && (
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="📧 Correo electrónico"
              className="form-input"
              required
            />
          </div>
        )}

        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="🔒 Contraseña"
            className="form-input"
            required
          />
        </div>

        {!isLogin && (
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="🔒 Confirmar contraseña"
              className="form-input"
              required
            />
          </div>
        )}

        <button type="submit" className="submit-button">
          {isLogin ? '🎯 Ingresar a la App' : '🚀 Crear Cuenta'}
        </button>
      </form>

      <div className="toggle-container">
        <button
          onClick={() => {
            setIsLogin(!isLogin);
            setError("");
            setFormData({
              username: "",
              email: "",
              password: "",
              confirmPassword: ""
            });
          }}
          className="toggle-button"
        >
          {isLogin
            ? '¿Primera vez aquí? Regístrate gratis'
            : '¿Ya tienes cuenta? Inicia sesión'
          }
        </button>
      </div>



    </div>
  );
}