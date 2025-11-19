// src/constants.js

export const CATEGORIES = ['principal', 'todas', 'entrada', 'fuerte', 'postre', 'bebidas'];

export const SUBCATEGORIES = {
  entrada: [
    { id: 'todas', name: 'Todas las Entradas', icon: '🥗' },
    { id: 'banderillas', name: 'Banderillas', icon: '🌭' },
    { id: 'dedos', name: 'Deditos', icon: '🧀' },
    { id: 'nachos', name: 'Nachos', icon: '🌮' },
    { id: 'sopa', name: 'Sopas', icon: '🍲' },
    { id: 'ensalada', name: 'Ensaladas', icon: '🥗' },
    { id: 'sopes', name: 'Sopes', icon: '🥮' },
    { id: 'molletes', name: 'Molletes', icon: '🍞' }
  ],
  fuerte: [
    { id: 'todas', name: 'Todos los Platos', icon: '🍖' },
    { id: 'hamburguesa', name: 'Hamburguesas', icon: '🍔' },
    { id: 'hotdog', name: 'Hot Dogs', icon: '🌭' },
    { id: 'pizza', name: 'Pizzas', icon: '🍕' },
    { id: 'tostadas', name: 'Tostadas', icon: '🥑' },
    { id: 'tacos', name: 'Tacos', icon: '🌮' },
    { id: 'enchiladas', name: 'Enchiladas', icon: '🌯' },
    { id: 'chiles-rellenos', name: 'Chiles Rellenos', icon: '🫑' },
    { id: 'arroz', name: 'Arroces', icon: '🍚' },
    { id: 'frijoles', name: 'Frijoles', icon: '🥘' }
  ],
  postre: [
    { id: 'todas', name: 'Todos los Postres', icon: '🍰' },
    { id: 'helados', name: 'Helados', icon: '🍦' },
    { id: 'frutas', name: 'Postres de Fruta', icon: '🍓' },
    { id: 'pasteles', name: 'Pasteles y Pies', icon: '🥧' },
    { id: 'flanes', name: 'Flanes', icon: '🍮' },
    { id: 'fritos', name: 'Postres Fritos', icon: '🍩' }
  ],
  bebidas: [
    { id: 'todas', name: 'Todas las Bebidas', icon: '🥤' },
    { id: 'aguas', name: 'Aguas Frescas', icon: '💧' },
    { id: 'leches', name: 'Bebidas de Leche', icon: '🥛' },
    { id: 'cafes', name: 'Cafés', icon: '☕' },
    { id: 'tes', name: 'Tés e Infusiones', icon: '🍵' },
    { id: 'jugos', name: 'Jugos Naturales', icon: '🧃' }
  ]
};