
export default function ServingSelector({ servings, onServingsChange, baseServings }) {
  return (
    <div className="serving-selector">
      <label htmlFor="servings">👥 Porciones:</label>
      <select 
        id="servings"
        value={servings} 
        onChange={(e) => onServingsChange(Number(e.target.value))}
      >
        {[1, 2, 4, 6, 8, 10, 12].map(num => (
          <option key={num} value={num}>
            {num} {num === 1 ? 'persona' : 'personas'}
          </option>
        ))}
      </select>
      <span className="serving-note">
        (Base: {baseServings} porciones)
      </span>
    </div>
  );
}