// src/utils/helpers.js

// Configuraciones de categorías (si no están en constants.js, las ponemos aquí)
const CATEGORY_CONFIG = {
  principal: { 
    icon: '🏠', 
    name: 'Principal', 
    title: 'Bienvenido a FoodShaad',
    description: 'Tu destino para recetas de comida rápida deliciosas y fáciles de preparar' 
  },
  todas: { 
    icon: '🍽️', 
    name: 'Todas', 
    title: 'Todas Nuestras Recetas',
    description: 'Descubre todas nuestras recetas de comida rápida' 
  },
  entrada: { 
    icon: '🥗', 
    name: 'Entradas', 
    title: 'Entradas Deliciosas',
    description: 'Aperitivos y entradas para comenzar tu comida' 
  },
  fuerte: { 
    icon: '🍖', 
    name: 'Platos Fuertes', 
    title: 'Platos Fuertes',
    description: 'Platos principales llenos de sabor' 
  },
  postre: { 
    icon: '🍰', 
    name: 'Postres', 
    title: 'Postres Deliciosos',
    description: 'Dulces delicias para terminar tu comida' 
  },
  bebidas: { 
    icon: '🥤', 
    name: 'Bebidas', 
    title: 'Bebidas Refrescantes',
    description: 'Bebidas refrescantes para acompañar tus platillos' 
  }
};

const SUBCATEGORY_CONFIG = {
  // Entradas
  banderillas: { 
    title: 'Banderillas Deliciosas', 
    description: 'Crujientes banderillas para comenzar tu comida' 
  },
  dedos: { 
    title: 'Deditos de Queso', 
    description: 'Deditos de queso empanizados y dorados' 
  },
  nachos: { 
    title: 'Nachos Crujientes', 
    description: 'Nachos con queso y toppings deliciosos' 
  },
  sopa: { 
    title: 'Sopas Reconfortantes', 
    description: 'Sopas calientes y reconfortantes' 
  },
  ensalada: { 
    title: 'Ensaladas Frescas', 
    description: 'Ensaladas frescas y saludables' 
  },
  sopes: { 
    title: 'Sopes Mexicanos', 
    description: 'Sopes mexicanos con ingredientes tradicionales' 
  },
  molletes: { 
    title: 'Molletes Caseros', 
    description: 'Molletes caseros con frijoles y queso' 
  },

  // Platos Fuertes
  hamburguesa: { 
    title: 'Hamburguesas Jugosas', 
    description: 'Hamburguesas jugosas con los mejores ingredientes' 
  },
  hotdog: { 
    title: 'Hot Dogs Clásicos', 
    description: 'Hot dogs clásicos con todos los toppings' 
  },
  pizza: { 
    title: 'Pizzas Caseras', 
    description: 'Pizzas caseras con ingredientes frescos' 
  },
  tostadas: { 
    title: 'Tostadas Mexicanas', 
    description: 'Tostadas crujientes con sabores mexicanos' 
  },
  tacos: { 
    title: 'Tacos Auténticos', 
    description: 'Tacos auténticos con diferentes rellenos' 
  },
  enchiladas: { 
    title: 'Enchiladas Verdes', 
    description: 'Enchiladas bañadas en salsa verde o roja' 
  },
  'chiles-rellenos': { 
    title: 'Chiles Rellenos', 
    description: 'Chiles poblanos rellenos de queso' 
  },
  arroz: { 
    title: 'Arroces Especiales', 
    description: 'Arroces esponjosos y sabrosos' 
  },
  frijoles: { 
    title: 'Frijoles Charros', 
    description: 'Frijoles charros con chorizo y tocino' 
  },

  // Postres
  helados: { 
    title: 'Helados Deliciosos', 
    description: 'Helados cremosos y refrescantes' 
  },
  frutas: { 
    title: 'Postres de Fruta', 
    description: 'Postres naturales con frutas frescas' 
  },
  pasteles: { 
    title: 'Pasteles y Pies', 
    description: 'Pasteles, pays y postres horneados' 
  },
  flanes: { 
    title: 'Flanes Cremosos', 
    description: 'Flanes suaves y cremosos' 
  },
  fritos: { 
    title: 'Postres Fritos', 
    description: 'Postres fritos crujientes y dulces' 
  },

  // Bebidas
  aguas: { 
    title: 'Aguas Frescas', 
    description: 'Aguas frescas de diferentes sabores' 
  },
  leches: { 
    title: 'Bebidas de Leche', 
    description: 'Bebidas cremosas a base de leche' 
  },
  cafes: { 
    title: 'Cafés Especiales', 
    description: 'Cafés tradicionales y especiales' 
  },
  tes: { 
    title: 'Tés e Infusiones', 
    description: 'Tés e infusiones relajantes' 
  },
  jugos: { 
    title: 'Jugos Naturales', 
    description: 'Jugos naturales de frutas frescas' 
  }
};

const PACKAGE_ICONS = {
  'pasta': '🍝',
  'carnes': '🥩',
  'conservas': '🥫',
  'lácteos': '🥛',
  'verduras': '🥬',
  'panadería': '🥖',
  'aderezos': '🧴',
  'especias': '🌶️',
  'embutidos': '🌭',
  'harinas': '🌾',
  'aceites': '🫒',
  'granos': '🌽',
  'legumbres': '🫘',
  'encurtidos': '🥒',
  'utensilios': '🔪',
  'endulzantes': '🍯',
  'salsas': '🍅',
  'condimentos': '🧂',
  'frutas': '🍓',
  'grasas': '🥓',
  'galletas': '🍪',
  'dulces': '🍬',
  'bebidas': '☕',
  'hierbas': '🌿',
  'básicos': '💧'
};

const PACKAGE_NAMES = {
  'pasta': 'Pastas y Granos',
  'carnes': 'Carnes y Pescados',
  'conservas': 'Conservas y Enlatados',
  'lácteos': 'Lácteos y Huevos',
  'verduras': 'Frutas y Verduras',
  'panadería': 'Panadería',
  'aderezos': 'Aderezos y Condimentos',
  'especias': 'Especias',
  'embutidos': 'Embutidos',
  'harinas': 'Harinas',
  'aceites': 'Aceites',
  'granos': 'Granos',
  'legumbres': 'Legumbres',
  'encurtidos': 'Encurtidos',
  'utensilios': 'Utensilios',
  'endulzantes': 'Endulzantes',
  'salsas': 'Salsas',
  'condimentos': 'Condimentos',
  'frutas': 'Frutas',
  'grasas': 'Grasas',
  'galletas': 'Galletas',
  'dulces': 'Dulces',
  'bebidas': 'Bebidas',
  'hierbas': 'Hierbas',
  'básicos': 'Básicos'
};

// Funciones de utilidad

export const getCategoryIcon = (category) => {
  return CATEGORY_CONFIG[category]?.icon || '🍽️';
};

export const formatCategoryName = (category) => {
  return CATEGORY_CONFIG[category]?.name || category;
};

export const getSubcategoryIcon = (subcategory) => {
  const icons = { 
    'todas': '🍽️', 
    'entrada': '🥗', 
    'fuerte': '🍖', 
    'postre': '🍰', 
    'bebidas': '🥤' 
  };
  return icons[subcategory] || '🍽️';
};

export const formatSubcategoryName = (subcategory) => {
  const names = { 
    'todas': 'Todos', 
    'entrada': 'Entrada', 
    'fuerte': 'Plato Fuerte', 
    'postre': 'Postre', 
    'bebidas': 'Bebidas' 
  };
  return names[subcategory] || subcategory;
};

export const getDifficultyBadge = (difficulty) => {
  const badges = { 
    'Fácil': '🟢 Fácil', 
    'Medio': '🟡 Medio', 
    'Difícil': '🔴 Difícil' 
  };
  return badges[difficulty] || difficulty;
};

export const getCategoryTitle = (category, subcategory) => {
  if (category === 'principal') return CATEGORY_CONFIG.principal.title;
  if (category === 'todas') return CATEGORY_CONFIG.todas.title;
  if (subcategory !== 'todas') {
    return SUBCATEGORY_CONFIG[subcategory]?.title || `${formatCategoryName(category)} Especiales`;
  }
  return CATEGORY_CONFIG[category]?.title || 'Recetas';
};

export const getCategoryDescription = (category, subcategory) => {
  if (category === 'principal') return CATEGORY_CONFIG.principal.description;
  if (category === 'todas') return CATEGORY_CONFIG.todas.description;
  if (subcategory !== 'todas') {
    return SUBCATEGORY_CONFIG[subcategory]?.description || `Selección especial de ${formatCategoryName(category).toLowerCase()}`;
  }
  return CATEGORY_CONFIG[category]?.description || 'Recetas seleccionadas para ti';
};

export const getPackageIcon = (packageType) => {
  return PACKAGE_ICONS[packageType] || '📦';
};

export const formatPackageName = (packageType) => {
  return PACKAGE_NAMES[packageType] || packageType;
};

export const calculateItemPrice = (item) => {
  if (!item.originalQuantity || item.originalQuantity === 0) return 0;
  return (item.price / item.originalQuantity) * item.quantity;
};

// Otras funciones que puedan ser necesarias

export const getFeaturedRecipes = (recipes) => {
  const featuredIds = [2, 31, 1, 17, 47, 23, 14, 15];
  return featuredIds.map(id => recipes.find(recipe => recipe.id === id)).filter(recipe => recipe !== undefined);
};

// Si necesitas más funciones, las agregas aquí.
