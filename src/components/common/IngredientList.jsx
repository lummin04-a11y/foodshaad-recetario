
import { useState, useEffect } from 'react';

export default function IngredientList({ ingredients, baseServings, currentServings, onAddToCart }) {
  const [calculatedIngredients, setCalculatedIngredients] = useState([]);

  useEffect(() => {
    const calculated = ingredients.map(ingredient => ({
      ...ingredient,
      calculatedQuantity: (ingredient.quantity * currentServings) / baseServings
    }));
    setCalculatedIngredients(calculated);
  }, [ingredients, currentServings, baseServings]);

  return (
    <div className="ingredient-section">
      <ul className="ingredient-list">
        {calculatedIngredients.map((ingredient, index) => (
          <li key={index} className="ingredient-item">
            <span className="ingredient-quantity">
              {ingredient.calculatedQuantity.toFixed(1)} {ingredient.unit}
            </span>
            <span className="ingredient-name">{ingredient.name}</span>
            {ingredient.price && (
              <div className="ingredient-actions">
                <span className="ingredient-price">${ingredient.price}</span>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => onAddToCart(ingredient, ingredient.calculatedQuantity)}
                >
                  +
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}