// src/components/RecipeApp.jsx

import { useState, useEffect, useMemo } from 'react';
import AuthSystem from './auth/AuthSystem.jsx';
import Header from './layout/Header.jsx';
import CategoryNav from './layout/CategoryNav.jsx';
import SubcategoryNav from './layout/SubcategoryNav.jsx';
import FeaturedCarousel from './recipes/FeaturedCarousel.jsx';
import RecipeGrid from './recipes/RecipeGrid.jsx';
import RecipeDetail from './recipes/RecipeDetail.jsx';
import CartModal from './cart/CartModal.jsx';
import AdminPanel from './admin/AdminPanel.jsx';
import { useAuth } from '../hooks/useAuth.js';
import { useCart } from '../hooks/useCart.js';
import { useCarousel } from '../hooks/useCarousel.js';
import { useScroll } from '../hooks/useScroll.js';
import { sampleRecipes } from '../data/sampleRecipes.js';
import { CATEGORIES, SUBCATEGORIES } from '../data/constants.js';
import { getCategoryTitle, getCategoryDescription, getFeaturedRecipes } from '../utils/helpers.js';

export default function RecipeApp() {
  const { isAuthenticated, currentUser, userRole, handleLogin, handleLogout } = useAuth();
  const { cart, showCart, setShowCart, addToCart, removeFromCart, calculateTotal, groupCartByPackage, clearCart } = useCart();
  const { isScrolled } = useScroll();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [servings, setServings] = useState(4);
  const [activeCategory, setActiveCategory] = useState('principal');
  const [activeSubcategory, setActiveSubcategory] = useState('todas');
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [recipesData, setRecipesData] = useState(sampleRecipes);
  const [currentTheme, setCurrentTheme] = useState('normal');

  const { currentSlide, nextSlide, prevSlide, goToSlide } = useCarousel(recipesData, activeCategory);

  const featuredRecipes = useMemo(() => getFeaturedRecipes(recipesData), [recipesData]);

  const filteredRecipes = useMemo(() => {
    if (activeCategory === 'principal') return [];
    if (activeCategory === 'todas') return recipesData;
    return recipesData.filter(recipe => {
      const categoryMatch = recipe.subcategory === activeCategory;
      const subcategoryMatch = activeSubcategory === 'todas' || recipe.recipeType === activeSubcategory;
      return categoryMatch && subcategoryMatch;
    });
  }, [activeCategory, activeSubcategory, recipesData]);

  const handleCheckout = () => {
    clearCart();
    alert('¡Pedido realizado con éxito! Gracias por tu compra.');
  };

  const handleUpdateRecipes = (updatedRecipes) => {
    setRecipesData(updatedRecipes);
  };

  // Función para cambiar el tema
  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    // Guardar en localStorage para persistencia
    localStorage.setItem('foodshaad-theme', theme);
    // Aplicar la clase del tema al body
    document.body.className = `theme-${theme}`;
  };

  // Efecto para cargar el tema guardado al inicio
  useEffect(() => {
    const savedTheme = localStorage.getItem('foodshaad-theme') || 'normal';
    setCurrentTheme(savedTheme);
    document.body.className = `theme-${savedTheme}`;
  }, []);

  if (!isAuthenticated) {
    return <AuthSystem onLogin={handleLogin} />;
  }

  return (
    <div className="recipe-app">
      <Header
        isScrolled={isScrolled}
        currentUser={currentUser}
        userRole={userRole}
        cart={cart}
        setShowCart={setShowCart}
        handleLogout={handleLogout}
        setShowAdminPanel={setShowAdminPanel}
      />
      <CategoryNav
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setActiveSubcategory={setActiveSubcategory}
      />
      <SubcategoryNav
        activeCategory={activeCategory}
        activeSubcategory={activeSubcategory}
        setActiveSubcategory={setActiveSubcategory}
      />
      {!selectedRecipe ? (
        <main className="recipes-main">
          {activeCategory === 'principal' ? (
            <FeaturedCarousel
              featuredRecipes={featuredRecipes}
              currentSlide={currentSlide}
              nextSlide={nextSlide}
              prevSlide={prevSlide}
              goToSlide={goToSlide}
              setSelectedRecipe={setSelectedRecipe}
              setServings={setServings}
            />
          ) : (
            <>
              <div className="hero-section">
                <h2>{getCategoryTitle(activeCategory, activeSubcategory)}</h2>
                <p>{getCategoryDescription(activeCategory, activeSubcategory)}</p>
              </div>
              <RecipeGrid
                filteredRecipes={filteredRecipes}
                setSelectedRecipe={setSelectedRecipe}
                setServings={setServings}
              />
            </>
          )}
        </main>
      ) : (
        <RecipeDetail
          selectedRecipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
          servings={servings}
          setServings={setServings}
          addToCart={addToCart}
          setShowCart={setShowCart}
        />
      )}
      {showAdminPanel && userRole === 'admin' && (
        <AdminPanel
          recipes={recipesData}
          onUpdateRecipes={handleUpdateRecipes}
          onClose={() => setShowAdminPanel(false)}
          currentTheme={currentTheme}
          onThemeChange={handleThemeChange}
        />
      )}
      {showCart && (
        <CartModal
          cart={cart}
          groupedCart={groupCartByPackage()}
          total={calculateTotal()}
          onClose={() => setShowCart(false)}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
        />
      )}
    </div>
  );
}