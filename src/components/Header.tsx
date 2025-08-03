import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeType } from '../types';

const Header: React.FC = () => {
  const { currentTheme, themeConfig, switchTheme } = useTheme();
  const location = useLocation();

  const themes: { value: ThemeType; label: string }[] = [
    { value: 'theme1', label: 'Minimalist' },
    { value: 'theme2', label: 'Dark Elite' },
    { value: 'theme3', label: 'Colorful Fun' },
  ];

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: themeConfig.colors.surface,
        borderBottom: `1px solid ${themeConfig.colors.border}`,
        fontFamily: themeConfig.fontFamily,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 transition-all duration-200 hover:opacity-75"
          >
            <Palette
              size={24}
              style={{ color: themeConfig.colors.primary }}
            />
            <span
              className="text-xl font-bold"
              style={{
                color: themeConfig.colors.text,
                fontFamily: themeConfig.fontFamily,
              }}
            >
              ThemeSwitch
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-all duration-200 hover:opacity-75 ${
                  isActive(item.path) ? 'font-semibold' : ''
                }`}
                style={{
                  color: isActive(item.path)
                    ? themeConfig.colors.primary
                    : themeConfig.colors.text,
                  fontFamily: themeConfig.fontFamily,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Theme Switcher */}
          <div className="relative group">
            <button
              className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-75"
              style={{
                backgroundColor: themeConfig.colors.background,
                color: themeConfig.colors.text,
                border: `1px solid ${themeConfig.colors.border}`,
                fontFamily: themeConfig.fontFamily,
              }}
            >
              <span className="text-sm font-medium">
                {themes.find((t) => t.value === currentTheme)?.label}
              </span>
              <ChevronDown size={16} />
            </button>

            {/* Dropdown */}
            <div
              className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              style={{
                backgroundColor: themeConfig.colors.surface,
                border: `1px solid ${themeConfig.colors.border}`,
              }}
            >
              {themes.map((theme) => (
                <button
                  key={theme.value}
                  onClick={() => switchTheme(theme.value)}
                  className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 hover:opacity-75 first:rounded-t-lg last:rounded-b-lg ${
                    currentTheme === theme.value ? 'font-semibold' : ''
                  }`}
                  style={{
                    color: currentTheme === theme.value
                      ? themeConfig.colors.primary
                      : themeConfig.colors.text,
                    backgroundColor: currentTheme === theme.value
                      ? themeConfig.colors.background
                      : 'transparent',
                    fontFamily: themeConfig.fontFamily,
                  }}
                >
                  {theme.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-all duration-200 hover:opacity-75 ${
                  isActive(item.path) ? 'font-semibold' : ''
                }`}
                style={{
                  color: isActive(item.path)
                    ? themeConfig.colors.primary
                    : themeConfig.colors.text,
                  fontFamily: themeConfig.fontFamily,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;