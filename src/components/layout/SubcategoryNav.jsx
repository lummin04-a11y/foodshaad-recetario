// src/components/SubcategoryNav.jsx

import { SUBCATEGORIES } from '../../data/constants';

const SubcategoryNav = ({ activeCategory, activeSubcategory, setActiveSubcategory }) => {
  if (!['entrada', 'fuerte', 'postre', 'bebidas'].includes(activeCategory)) {
    return null;
  }

  return (
    <nav className="subcategories-nav">
      <div className="subcategories-container">
        {SUBCATEGORIES[activeCategory].map(subcategory => (
          <button
            key={subcategory.id}
            className={`subcategory-btn ${activeSubcategory === subcategory.id ? 'active' : ''}`}
            onClick={() => setActiveSubcategory(subcategory.id)}
          >
            {subcategory.icon} {subcategory.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SubcategoryNav;