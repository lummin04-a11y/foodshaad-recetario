import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [useState, useEffect, useMemo ] = useState('default');

  const themes = {
    default: {
      name: 'Tema Predeterminado',
      background: '/imagenes/hola.jpg',
      colors: {
        primary: '#FF6B35',
        primaryDark: '#E55A2B',
        secondary: '#FFA726',
        accent: '#FF4081',
        dark: '#2D3748',
        background: '#F8F9FA',
        cardBg: '#FFFFFF'
      }
    },
    reyes: {
      name: 'Día de Reyes',
      background: '/imagenes/reyes.jpeg',
      colors: {
        primary: '#C41E3A', // Rojo navideño
        primaryDark: '#A51C2A',
        secondary: '#1E792C', // Verde navideño
        accent: '#D4AF37', // Dorado
        dark: '#2D3748',
        background: '#FFF5F5',
        cardBg: '#FFFFFF'
      }
    },
    muertos: {
      name: 'Día de Muertos',
      background: '/imagenes/muertos.webp',
      colors: {
        primary: '#FF6B00', // Naranja
        primaryDark: '#E55A00',
        secondary: '#7B1FA2', // Morado
        accent: '#FFD600', // Amarillo
        dark: '#37474F',
        background: '#FFF8E1',
        cardBg: '#FFFFFF'
      }
    },
    navidad: {
      name: 'Navidad',
      background: '/imagenes/navidad.jpg',
      colors: {
        primary: '#C41E3A', // Rojo navideño
        primaryDark: '#A51C2A',
        secondary: '#1E792C', // Verde navideño
        accent: '#D4AF37', // Dorado
        dark: '#2D3748',
        background: '#F0F8F0',
        cardBg: '#FFFFFF'
      }
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('foodshaad-theme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
    localStorage.setItem('foodshaad-theme', themeName);
  };

  const getCurrentTheme = () => {
    return themes[currentTheme] || themes.default;
  };

  return {
    currentTheme,
    themes,
    changeTheme,
    getCurrentTheme
  };
};