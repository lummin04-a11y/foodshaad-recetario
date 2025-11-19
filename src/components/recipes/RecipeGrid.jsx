// src/components/RecipeGrid.jsx

import { getDifficultyBadge } from '../../utils/helpers';

const RecipeGrid = ({ filteredRecipes, setSelectedRecipe, setServings }) => {
  return (
    <div className="recipes-grid">
      {filteredRecipes.map(recipe => (
        <div
          key={recipe.id}
          className="recipe-card"
          onClick={() => {
            setSelectedRecipe(recipe);
            setServings(recipe.servings);
          }}
        >
          <div className="recipe-card-image">
            {recipe.video && (
              <div className="video-badge">🎥 VIDEO</div>
            )}
            <img src={recipe.image.src} alt={recipe.image.alt} />
          </div>
          <div className="recipe-card-content">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div className="recipe-meta">
              <span>⏱️ {recipe.prepTime + recipe.cookTime} min</span>
              <span>👨‍👩‍👧‍👦 {recipe.servings} porciones</span>
              <span>🔥 {recipe.calories} cal</span>
            </div>
            <div className="difficulty-badge">
              {getDifficultyBadge(recipe.difficulty)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeGrid;