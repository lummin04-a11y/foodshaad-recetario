import { useState, useCallback } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = useCallback((ingredient, calculatedQuantity, recipe) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item =>
        item.name === ingredient.name && item.package === ingredient.package
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.name === ingredient.name
            ? { ...item, quantity: item.quantity + calculatedQuantity }
            : item
        );
      } else {
        return [...prevCart, {
          ...ingredient,
          quantity: calculatedQuantity,
          recipe: recipe.title,
          originalQuantity: ingredient.quantity
        }];
      }
    });
  }, []);

  const removeFromCart = useCallback((index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));
  }, []);

  const calculateTotal = useCallback(() => {
    return cart.reduce((total, item) => {
      const pricePerUnit = item.price / item.originalQuantity;
      return total + (pricePerUnit * item.quantity);
    }, 0).toFixed(2);
  }, [cart]);

  const groupCartByPackage = useCallback(() => {
    const grouped = {};
    cart.forEach(item => {
      if (!grouped[item.package]) grouped[item.package] = [];
      grouped[item.package].push(item);
    });
    return grouped;
  }, [cart]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return {
    cart,
    showCart,
    setShowCart,
    addToCart,
    removeFromCart,
    calculateTotal,
    groupCartByPackage,
    clearCart
  };
};