import { useState, useEffect } from 'react';

export default function AdminPanel({ recipes, onUpdateRecipes, onClose, currentTheme, onThemeChange }) {
  const [editableRecipes, setEditableRecipes] = useState([]);
  const [activeTab, setActiveTab] = useState('recipes');
  const [editingRecipe, setEditingRecipe] = useState(null);

  useEffect(() => {
    setEditableRecipes([...recipes]);
  }, [recipes]);

  const handleRecipeUpdate = (index, field, value) => {
    const updatedRecipes = [...editableRecipes];
    updatedRecipes[index] = {
      ...updatedRecipes[index],
      [field]: value
    };
    setEditableRecipes(updatedRecipes);
  };

  const saveChanges = () => {
    onUpdateRecipes(editableRecipes);
    alert('Cambios guardados exitosamente!');
  };

  const addNewRecipe = () => {
    const newRecipe = {
      id: Date.now(),
      slug: "nueva-receta",
      title: "Nueva Receta",
      description: "Descripción de la nueva receta",
      prepTime: 15,
      cookTime: 20,
      servings: 4,
      difficulty: "Fácil",
      category: "Principales",
      subcategory: "fuerte",
      recipeType: "hamburguesa",
      ingredients: [],
      steps: [],
      image: { src: "/imagenes/default.jpg", alt: "Nueva receta" },
      calories: 300
    };
    setEditableRecipes([...editableRecipes, newRecipe]);
    setEditingRecipe(editableRecipes.length);
  };

  const deleteRecipe = (index) => {
    if (confirm('¿Estás seguro de eliminar esta receta?')) {
      const updatedRecipes = editableRecipes.filter((_, i) => i !== index);
      setEditableRecipes(updatedRecipes);
    }
  };

  return (
    <div className="admin-modal-overlay">
      <div className="admin-modal">
        <div className="admin-header">
          <div className="admin-title-section">
            <div className="admin-icon-header">👑</div>
            <div>
              <h2>Panel de Administración</h2>
              <p className="admin-subtitle">Gestiona el contenido de FoodShaad</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="admin-content">
          <div className="admin-tabs">
            <button
              className={`tab-btn ${activeTab === 'recipes' ? 'active' : ''}`}
              onClick={() => setActiveTab('recipes')}
            >
              📝 Recetas
            </button>
            <button
              className={`tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
              onClick={() => setActiveTab('stats')}
            >
              📊 Estadísticas
            </button>
            <button
              className={`tab-btn ${activeTab === 'themes' ? 'active' : ''}`}
              onClick={() => setActiveTab('themes')}
            >
              🎨 Temas
            </button>
          </div>

          {activeTab === 'recipes' && (
            <div className="recipes-management">
              <div className="management-header">
                <h3>Gestión de Recetas ({editableRecipes.length})</h3>
                <button className="add-recipe-btn" onClick={addNewRecipe}>
                  ➕ Agregar Receta
                </button>
              </div>
              <div className="recipes-list">
                {editableRecipes.map((recipe, index) => (
                  <div key={recipe.id} className="recipe-item-editable">
                    <div className="recipe-header-editable">
                      <input
                        type="text"
                        value={recipe.title}
                        onChange={(e) => handleRecipeUpdate(index, 'title', e.target.value)}
                        className="recipe-title-input"
                      />
                      <div className="recipe-actions">
                        <button
                          className="edit-btn"
                          onClick={() => setEditingRecipe(editingRecipe === index ? null : index)}
                        >
                          {editingRecipe === index ? '📂' : '✏️'}
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => deleteRecipe(index)}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                    {editingRecipe === index && (
                      <div className="recipe-details-editable">
                        <div className="form-row">
                          <label>Descripción:</label>
                          <textarea
                            value={recipe.description}
                            onChange={(e) => handleRecipeUpdate(index, 'description', e.target.value)}
                            rows="2"
                          />
                        </div>
                        <div className="form-row">
                          <label>Tiempo preparación (min):</label>
                          <input
                            type="number"
                            value={recipe.prepTime}
                            onChange={(e) => handleRecipeUpdate(index, 'prepTime', parseInt(e.target.value))}
                          />
                        </div>
                        <div className="form-row">
                          <label>Tiempo cocción (min):</label>
                          <input
                            type="number"
                            value={recipe.cookTime}
                            onChange={(e) => handleRecipeUpdate(index, 'cookTime', parseInt(e.target.value))}
                          />
                        </div>
                        <div className="form-row">
                          <label>Porciones:</label>
                          <input
                            type="number"
                            value={recipe.servings}
                            onChange={(e) => handleRecipeUpdate(index, 'servings', parseInt(e.target.value))}
                          />
                        </div>
                        <div className="form-row">
                          <label>Dificultad:</label>
                          <select
                            value={recipe.difficulty}
                            onChange={(e) => handleRecipeUpdate(index, 'difficulty', e.target.value)}
                          >
                            <option value="Fácil">Fácil</option>
                            <option value="Medio">Medio</option>
                            <option value="Difícil">Difícil</option>
                          </select>
                        </div>
                        <div className="form-row">
                          <label>Categoría:</label>
                          <select
                            value={recipe.subcategory}
                            onChange={(e) => handleRecipeUpdate(index, 'subcategory', e.target.value)}
                          >
                            <option value="entrada">Entrada</option>
                            <option value="fuerte">Plato Fuerte</option>
                            <option value="postre">Postre</option>
                            <option value="bebidas">Bebida</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="stats-panel">
              <h3>Estadísticas del Sitio</h3>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">{editableRecipes.length}</div>
                  <div className="stat-label">Total Recetas</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">
                    {editableRecipes.filter(r => r.subcategory === 'entrada').length}
                  </div>
                  <div className="stat-label">Entradas</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">
                    {editableRecipes.filter(r => r.subcategory === 'fuerte').length}
                  </div>
                  <div className="stat-label">Platos Fuertes</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">
                    {editableRecipes.filter(r => r.subcategory === 'postre').length}
                  </div>
                  <div className="stat-label">Postres</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'themes' && (
            <div className="themes-management">
              <h3>🎨 Gestión de Temas</h3>
              <p className="admin-subtitle">Personaliza la apariencia de FoodShaad</p>
              
              <div className="themes-grid">
                <div 
                  className={`theme-card ${currentTheme === 'normal' ? 'active' : ''}`}
                  onClick={() => onThemeChange('normal')}
                >
                  <div className="theme-preview normal-theme"></div>
                  <div className="theme-info">
                    <h4>Tema Normal</h4>
                    <p>Apariencia estándar de la aplicación</p>
                  </div>
                </div>
                
                <div 
                  className={`theme-card ${currentTheme === 'navidad' ? 'active' : ''}`}
                  onClick={() => onThemeChange('navidad')}
                >
                  <div className="theme-preview navidad-theme"></div>
                  <div className="theme-info">
                    <h4>Tema Navidad</h4>
                    <p>Decoración navideña festiva</p>
                  </div>
                </div>
                
                <div 
                  className={`theme-card ${currentTheme === 'muertos' ? 'active' : ''}`}
                  onClick={() => onThemeChange('muertos')}
                >
                  <div className="theme-preview muertos-theme"></div>
                  <div className="theme-info">
                    <h4>Tema Día de Muertos</h4>
                    <p>Celebración tradicional mexicana</p>
                  </div>
                </div>
                
                <div 
                  className={`theme-card ${currentTheme === 'reyes' ? 'active' : ''}`}
                  onClick={() => onThemeChange('reyes')}
                >
                  <div className="theme-preview reyes-theme"></div>
                  <div className="theme-info">
                    <h4>Tema Reyes Magos</h4>
                    <p>Celebración de los tres reyes magos</p>
                  </div>
                </div>
              </div>
              
              <div className="theme-preview-full">
                <h4>Vista previa del tema actual:</h4>
                <div className={`full-preview ${currentTheme}-preview`}>
                  <div className="preview-header">
                    <div className="preview-brand">FoodShaad</div>
                  </div>
                  <div className="preview-content">
                    <div className="preview-hero">
                      <h3>Sección de contenido</h3>
                      <p>Este es el color de fondo que se aplicará</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="admin-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancelar
          </button>
          <button className="save-btn" onClick={saveChanges}>
            💾 Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}