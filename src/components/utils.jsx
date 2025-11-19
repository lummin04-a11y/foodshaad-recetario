// src/components/utils.jsx

import { 
  CATEGORY_CONFIG, 
  SUBCATEGORY_CONFIG, 
  PACKAGE_ICONS, 
  PACKAGE_NAMES,
  FEATURED_RECIPE_IDS,
  SERVING_OPTIONS,
  DIFFICULTY_CONFIG,
  SUBCATEGORY_TYPES
} from '../data/constants';

// =============================================
// FUNCIONES DE UTILIDAD - CATEGORÍAS
// =============================================

/**
 * Obtiene el ícono de una categoría
 */
export const getCategoryIcon = (category) => {
  return CATEGORY_CONFIG[category]?.icon || '🍽️';
};

/**
 * Formatea el nombre de una categoría
 */
export const formatCategoryName = (category) => {
  return CATEGORY_CONFIG[category]?.name || category;
};

/**
 * Obtiene el título para una categoría/subcategoría
 */
export const getCategoryTitle = (category, subcategory) => {
  if (category === 'principal') return CATEGORY_CONFIG.principal.title;
  if (category === 'todas') return CATEGORY_CONFIG.todas.title;
  if (subcategory !== 'todas') {
    return SUBCATEGORY_CONFIG[subcategory]?.title || `${formatCategoryName(category)} Especiales`;
  }
  return CATEGORY_CONFIG[category]?.title || 'Recetas';
};

/**
 * Obtiene la descripción para una categoría/subcategoría
 */
export const getCategoryDescription = (category, subcategory) => {
  if (category === 'principal') return CATEGORY_CONFIG.principal.description;
  if (category === 'todas') return CATEGORY_CONFIG.todas.description;
  if (subcategory !== 'todas') {
    return SUBCATEGORY_CONFIG[subcategory]?.description || `Selección especial de ${formatCategoryName(category).toLowerCase()}`;
  }
  return CATEGORY_CONFIG[category]?.description || 'Recetas seleccionadas para ti';
};

// =============================================
// FUNCIONES DE UTILIDAD - SUBCATEGORÍAS
// =============================================

/**
 * Obtiene el ícono de una subcategoría
 */
export const getSubcategoryIcon = (subcategory) => {
  return SUBCATEGORY_TYPES[subcategory]?.icon || '🍽️';
};

/**
 * Formatea el nombre de una subcategoría
 */
export const formatSubcategoryName = (subcategory) => {
  return SUBCATEGORY_TYPES[subcategory]?.name || subcategory;
};

// =============================================
// FUNCIONES DE UTILIDAD - PAQUETES
// =============================================

/**
 * Obtiene el ícono de un tipo de paquete
 */
export const getPackageIcon = (packageType) => {
  return PACKAGE_ICONS[packageType] || '📦';
};

/**
 * Formatea el nombre de un tipo de paquete
 */
export const formatPackageName = (packageType) => {
  return PACKAGE_NAMES[packageType] || packageType;
};

// =============================================
// FUNCIONES DE UTILIDAD - RECETAS
// =============================================

/**
 * Obtiene el badge de dificultad con ícono
 */
export const getDifficultyBadge = (difficulty) => {
  return DIFFICULTY_CONFIG[difficulty]?.badge || difficulty;
};

/**
 * Obtiene el color de la dificultad
 */
export const getDifficultyColor = (difficulty) => {
  return DIFFICULTY_CONFIG[difficulty]?.color || 'gray';
};

/**
 * Filtra recetas por categoría y subcategoría
 */
export const filterRecipes = (recipes, category, subcategory) => {
  if (category === 'principal') return [];
  if (category === 'todas') return recipes;
  
  return recipes.filter(recipe => {
    const categoryMatch = recipe.subcategory === category;
    const subcategoryMatch = subcategory === 'todas' || recipe.recipeType === subcategory;
    return categoryMatch && subcategoryMatch;
  });
};

/**
 * Obtiene recetas destacadas
 */
export const getFeaturedRecipes = (recipes) => {
  return FEATURED_RECIPE_IDS
    .map(id => recipes.find(recipe => recipe.id === id))
    .filter(recipe => recipe !== undefined);
};

/**
 * Formatea el tiempo total de preparación
 */
export const formatTotalTime = (prepTime, cookTime) => {
  return prepTime + cookTime;
};

/**
 * Formatea el texto de porciones
 */
export const formatServingText = (servings) => {
  return `${servings} ${servings === 1 ? 'persona' : 'personas'}`;
};

// =============================================
// FUNCIONES DE UTILIDAD - CARRITO
// =============================================

/**
 * Calcula el precio de un item del carrito
 */
export const calculateItemPrice = (item) => {
  if (!item.originalQuantity || item.originalQuantity === 0) return 0;
  return (item.price / item.originalQuantity) * item.quantity;
};

/**
 * Calcula el precio total del carrito
 */
export const calculateCartTotal = (cart) => {
  return cart.reduce((total, item) => {
    return total + calculateItemPrice(item);
  }, 0).toFixed(2);
};

/**
 * Agrupa items del carrito por tipo de paquete
 */
export const groupCartItemsByPackage = (cart) => {
  const grouped = {};
  cart.forEach(item => {
    if (!grouped[item.package]) grouped[item.package] = [];
    grouped[item.package].push(item);
  });
  return grouped;
};

// =============================================
// FUNCIONES DE UTILIDAD - AUTENTICACIÓN
// =============================================

/**
 * Valida si un usuario está autenticado
 */
export const isAuthenticated = (user) => {
  return user && user !== '';
};

/**
 * Valida los datos del formulario de autenticación
 */
export const validateAuthForm = (formData, isLogin) => {
  const errors = [];

  if (!formData.username.trim()) {
    errors.push('Usuario y contraseña son obligatorios');
  }

  if (!formData.password.trim()) {
    errors.push('Usuario y contraseña son obligatorios');
  }

  if (!isLogin) {
    if (formData.password !== formData.confirmPassword) {
      errors.push('Las contraseñas no coinciden');
    }

    if (formData.password.length < 6) {
      errors.push('La contraseña debe tener al menos 6 caracteres');
    }

    if (!formData.email.trim()) {
      errors.push('El correo electrónico es obligatorio');
    }
  }

  return errors;
};

// =============================================
// FUNCIONES DE UTILIDAD - INGREDIENTES
// =============================================

/**
 * Calcula la cantidad de ingredientes basado en las porciones
 */
export const calculateIngredientQuantity = (ingredient, baseServings, currentServings) => {
  return (ingredient.quantity * currentServings) / baseServings;
};

/**
 * Formatea la cantidad de ingredientes
 */
export const formatIngredientQuantity = (quantity, unit) => {
  const formattedQuantity = quantity % 1 === 0 ? quantity : quantity.toFixed(1);
  return `${formattedQuantity} ${unit}`;
};

// =============================================
// FUNCIONES DE UTILIDAD - VALIDACIONES
// =============================================

/**
 * Valida la información del cliente para el checkout
 */
export const validateCustomerInfo = (customerInfo) => {
  const { name, email, address } = customerInfo;
  return name.trim() && email.trim() && address.trim();
};

/**
 * Valida si un email es válido
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// =============================================
// FUNCIONES DE UTILIDAD - MISCELÁNEOS
// =============================================

/**
 * Genera un ID único
 */
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

/**
 * Capitaliza la primera letra de un texto
 */
export const capitalizeFirst = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

/**
 * Formatea un precio a moneda
 */
export const formatPrice = (price) => {
  return `$${parseFloat(price).toFixed(2)}`;
};

// =============================================
// EXPORTACIÓN POR DEFECTO PARA IMPORTACIONES MÚLTIPLES
// =============================================

export default {
  // Categorías
  getCategoryIcon,
  formatCategoryName,
  getCategoryTitle,
  getCategoryDescription,
  
  // Subcategorías
  getSubcategoryIcon,
  formatSubcategoryName,
  
  // Paquetes
  getPackageIcon,
  formatPackageName,
  
  // Recetas
  getDifficultyBadge,
  getDifficultyColor,
  filterRecipes,
  getFeaturedRecipes,
  formatTotalTime,
  formatServingText,
  
  // Carrito
  calculateItemPrice,
  calculateCartTotal,
  groupCartItemsByPackage,
  
  // Autenticación
  isAuthenticated,
  validateAuthForm,
  
  // Ingredientes
  calculateIngredientQuantity,
  formatIngredientQuantity,
  
  // Validaciones
  validateCustomerInfo,
  isValidEmail,
  
  // Misceláneos
  generateId,
  capitalizeFirst,
  formatPrice
};