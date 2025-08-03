import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeType, ThemeConfig } from '../types';

interface ThemeContextType {
  currentTheme: ThemeType;
  themeConfig: ThemeConfig;
  switchTheme: (theme: ThemeType) => void;
  isTransitioning: boolean;
}

const themes: Record<ThemeType, ThemeConfig> = {
  theme1: {
    name: 'theme1',
    displayName: 'Minimalist',
    layout: 'default',
    fontFamily: 'Inter, system-ui, sans-serif',
    colors: {
      primary: '#3B82F6',
      secondary: '#6B7280',
      background: '#FFFFFF',
      surface: '#F9FAFB',
      text: '#111827',
      textSecondary: '#6B7280',
      accent: '#10B981',
      border: '#E5E7EB',
    },
  },
  theme2: {
    name: 'theme2',
    displayName: 'Dark Elite',
    layout: 'sidebar',
    fontFamily: 'Playfair Display, serif',
    colors: {
      primary: '#F59E0B',
      secondary: '#8B5CF6',
      background: '#0F172A',
      surface: '#1E293B',
      text: '#F1F5F9',
      textSecondary: '#94A3B8',
      accent: '#EF4444',
      border: '#334155',
    },
  },
  theme3: {
    name: 'theme3',
    displayName: 'Colorful Fun',
    layout: 'grid',
    fontFamily: 'Pacifico, cursive',
    colors: {
      primary: '#EC4899',
      secondary: '#8B5CF6',
      background: '#FEF3C7',
      surface: '#FFFFFF',
      text: '#1F2937',
      textSecondary: '#6B7280',
      accent: '#10B981',
      border: '#F59E0B',
    },
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('theme1');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const switchTheme = (theme: ThemeType) => {
    if (theme === currentTheme) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentTheme(theme);
      localStorage.setItem('selectedTheme', theme);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 150);
  };

  const themeConfig = themes[currentTheme];

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themeConfig,
        switchTheme,
        isTransitioning,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};