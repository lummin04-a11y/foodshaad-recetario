// src/components/FeaturedCarousel.jsx

import { 
  getSubcategoryIcon, 
  formatSubcategoryName, 
  getDifficultyBadge 
} from '../../utils/helpers';

const FeaturedCarousel = ({ 
  featuredRecipes, 
  currentSlide, 
  nextSlide, 
  prevSlide, 
  goToSlide, 
  setSelectedRecipe, 
  setServings 
}) => {
  return (
    <div className="featured-carousel-container">
      <div className="carousel-header">
        <h1 className="carousel-title">🍽️ Las Mejores Recetas de FoodShaad</h1>
        <p className="carousel-subtitle">
          Descubre nuestras recetas más populares, cuidadosamente seleccionadas para una experiencia culinaria excepcional
        </p>
      </div>
      <div className="featured-carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {featuredRecipes.map((recipe, index) => (
            <div key={recipe.id} className="carousel-slide">
              <div className="slide-content">
                <div className="slide-image">
                  <img src={recipe.image.src} alt={recipe.image.alt} />
                  <div className="recipe-badge">
                    <span className="badge-icon">
                      {getSubcategoryIcon(recipe.subcategory)}
                    </span>
                    <span className="badge-text">
                      {formatSubcategoryName(recipe.subcategory)}
                    </span>
                  </div>
                </div>
                <div className="slide-info">
                  <h2 className="recipe-title">{recipe.title}</h2>
                  <p className="recipe-description">{recipe.description}</p>
                  <div className="recipe-stats">
                    <div className="stat">
                      <span className="stat-icon">⏱️</span>
                      <span>{recipe.prepTime + recipe.cookTime} min</span>
                    </div>
                    <div className="stat">
                      <span className="stat-icon">👥</span>
                      <span>{recipe.servings} porciones</span>
                    </div>
                    <div className="stat">
                      <span className="stat-icon">🔥</span>
                      <span>{recipe.calories} cal</span>
                    </div>
                  </div>
                  <div className="difficulty-badge">
                    {getDifficultyBadge(recipe.difficulty)}
                  </div>
                  <button
                    className="view-recipe-btn"
                    onClick={() => {
                      setSelectedRecipe(recipe);
                      setServings(recipe.servings);
                    }}
                  >
                    Ver Receta Completa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          ›
        </button>

        <div className="carousel-indicators">
          {featuredRecipes.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
      <div className="marketing-message">
        <h2>✨ Delicias Caseras con Sabor Profesional</h2>
        <p>
          Cada receta ha sido diseñada para brindarte el equilibrio perfecto entre sabor, practicidad y calidad. Desde entradas irresistibles hasta postres que roban suspiros.
        </p>
        <div className="marketing-highlights">
          <div className="highlight">
            <span className="highlight-icon">👨‍🍳</span>
            <h3>Recetas Probadas</h3>
            <p>Técnicas garantizadas para resultados perfectos</p>
          </div>
          <div className="highlight">
            <span className="highlight-icon">🛒</span>
            <h3>Ingredientes Accesibles</h3>
            <p>Encuentra todo en tu supermercado local</p>
          </div>
          <div className="highlight">
            <span className="highlight-icon">⏱️</span>
            <h3>Tiempos Optimizados</h3>
            <p>Preparación eficiente sin sacrificar sabor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;