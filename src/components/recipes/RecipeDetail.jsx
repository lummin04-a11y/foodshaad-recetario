// src/components/recipes/RecipeDetail.jsx
import { useState } from 'react';
import IngredientList from '../common/IngredientList.jsx';
import StepList from '../common/StepList.jsx';
import ServingSelector from '../common/ServingSelector.jsx';
import { getSubcategoryIcon, formatSubcategoryName } from '../../utils/helpers';

const RecipeDetail = ({ 
  selectedRecipe, 
  setSelectedRecipe, 
  servings, 
  setServings, 
  addToCart,
  setShowCart 
}) => {
  return (
    <div className="recipe-detail">
      <button onClick={() => setSelectedRecipe(null)} className="back-btn">
        ← Volver a recetas
      </button>
      <div className="recipe-hero">
        <div className="recipe-media">
          {selectedRecipe.video ? (
            <video
              controls
              poster={selectedRecipe.image.src}
              className="recipe-video"
            >
              <source src={selectedRecipe.video} type="video/mp4" />
              Tu navegador no soporta el elemento video.
            </video>
          ) : (
            <img
              src={selectedRecipe.image.src}
              alt={selectedRecipe.image.alt}
              className="recipe-image"
            />
          )}
        </div>
        <div className="recipe-header-info">
          <h2>{selectedRecipe.title}</h2>
          <p className="recipe-description">{selectedRecipe.description}</p>
          <div className="recipe-stats">
            <div className="stat">
              <span className="stat-icon">⏱️</span>
              <div>
                <strong>{selectedRecipe.prepTime + selectedRecipe.cookTime} min</strong>
                <small>Total</small>
              </div>
            </div>
            <div className="stat">
              <span className="stat-icon">👥</span>
              <div>
                <strong>{selectedRecipe.servings}</strong>
                <small>Porciones</small>
              </div>
            </div>
            <div className="stat">
              <span className="stat-icon">🔥</span>
              <div>
                <strong>{selectedRecipe.calories}</strong>
                <small>Calorías</small>
              </div>
            </div>
            <div className="stat">
              <span className="stat-icon">📊</span>
              <div>
                <strong>{selectedRecipe.difficulty}</strong>
                <small>Dificultad</small>
              </div>
            </div>
            <div className="stat">
              <span className="stat-icon">
                {getSubcategoryIcon(selectedRecipe.subcategory)}
              </span>
              <div>
                <strong>{formatSubcategoryName(selectedRecipe.subcategory)}</strong>
                <small>Tipo</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recipe-controls">
        <ServingSelector
          servings={servings}
          onServingsChange={setServings}
          baseServings={selectedRecipe.servings}
        />
      </div>
      <div className="recipe-content">
        <div className="ingredients-section">
          <h3>📝 Ingredientes Necesarios</h3>
          <IngredientList
            ingredients={selectedRecipe.ingredients}
            baseServings={selectedRecipe.servings}
            currentServings={servings}
            onAddToCart={(ingredient, calculatedQuantity) =>
              addToCart(ingredient, calculatedQuantity, selectedRecipe)
            }
          />
          <button
            className="buy-all-btn"
            onClick={() => {
              selectedRecipe.ingredients.forEach(ingredient => {
                const calculatedQuantity = (ingredient.quantity * servings) / selectedRecipe.servings;
                addToCart(ingredient, calculatedQuantity, selectedRecipe);
              });
              setShowCart(true);
            }}
          >
            🛒 Comprar Kit Completo
          </button>
        </div>
        <div className="steps-section">
          <h3>👨‍🍳 Preparación Paso a Paso</h3>
          <StepList steps={selectedRecipe.steps} />
          <div className="action-buttons">
            <button className="print-btn" onClick={() => window.print()}>
              🖨️ Imprimir Receta
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;