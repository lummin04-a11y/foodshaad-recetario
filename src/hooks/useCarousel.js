import { useState, useEffect, useCallback, useMemo } from 'react';

export const useCarousel = (sampleRecipes, activeCategory) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const featuredRecipes = useMemo(() => [
    sampleRecipes.find(recipe => recipe.id === 2),
    sampleRecipes.find(recipe => recipe.id === 31),
    sampleRecipes.find(recipe => recipe.id === 1),
    sampleRecipes.find(recipe => recipe.id === 17),
    sampleRecipes.find(recipe => recipe.id === 47),
    sampleRecipes.find(recipe => recipe.id === 23),
    sampleRecipes.find(recipe => recipe.id === 14),
    sampleRecipes.find(recipe => recipe.id === 15),
  ].filter(recipe => recipe !== undefined), [sampleRecipes]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % featuredRecipes.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  }, [featuredRecipes.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + featuredRecipes.length) % featuredRecipes.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  }, [featuredRecipes.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  }, []);

  useEffect(() => {
    if (autoPlay && activeCategory === 'principal') {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % featuredRecipes.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, activeCategory, featuredRecipes.length]);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    featuredRecipes,
  };
};