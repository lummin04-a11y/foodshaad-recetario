// src/components/layout/CategoryNav.jsx
import { getCategoryIcon, formatCategoryName } from '../../utils/helpers';
import { CATEGORIES } from '../../data/constants';

const CategoryNav = ({ activeCategory, setActiveCategory, setActiveSubcategory }) => {
  return (
    <nav className="categories-nav">
      <div className="categories-container">
        {CATEGORIES.map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(category);
              setActiveSubcategory('todas');
            }}
          >
            {getCategoryIcon(category)} {formatCategoryName(category)}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;