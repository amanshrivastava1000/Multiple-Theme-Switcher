import React, { useState, useEffect } from 'react';
import { Sparkles, TrendingUp, Users, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Product } from '../types';
import { apiService } from '../services/api';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const { themeConfig } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await apiService.getProducts();
        setProducts(data.slice(0, 6)); // Show first 6 products
      } catch (err) {
        setError('Failed to load products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const stats = [
    { icon: Users, label: 'Happy Customers', value: '10,000+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: TrendingUp, label: 'Growth Rate', value: '150%' },
    { icon: Sparkles, label: 'Products', value: '500+' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2"
          style={{ borderColor: themeConfig.colors.primary }}
        ></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="text-center p-8 rounded-lg"
          style={{
            backgroundColor: themeConfig.colors.surface,
            color: themeConfig.colors.text,
          }}
        >
          <p className="text-lg font-semibold mb-2">Oops! Something went wrong</p>
          <p style={{ color: themeConfig.colors.textSecondary }}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          themeConfig.layout === 'grid' ? 'bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600' : ''
        }`}
        style={{
          backgroundColor: themeConfig.layout === 'grid' ? undefined : themeConfig.colors.surface,
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className={`mb-6 ${
              themeConfig.layout === 'grid' ? 'text-5xl md:text-7xl text-white' : 'text-4xl md:text-6xl'
            } font-bold`}
            style={{
              color: themeConfig.layout === 'grid' ? '#FFFFFF' : themeConfig.colors.text,
              fontFamily: themeConfig.fontFamily,
            }}
          >
            {themeConfig.layout === 'sidebar' ? 'Premium Experience Awaits' : 
             themeConfig.layout === 'grid' ? 'Fun Shopping Adventure!' : 
             'Welcome to ThemeSwitch'}
          </h1>
          
          <p
            className={`mb-8 text-lg max-w-3xl mx-auto ${
              themeConfig.layout === 'grid' ? 'text-white' : ''
            }`}
            style={{
              color: themeConfig.layout === 'grid' ? '#FFFFFF' : themeConfig.colors.textSecondary,
              fontFamily: themeConfig.fontFamily,
            }}
          >
            {themeConfig.layout === 'sidebar' ? 
              'Experience the finest collection of curated products with our elegant interface.' :
             themeConfig.layout === 'grid' ? 
              'Discover amazing products in our colorful and playful shopping experience!' :
              'Discover the power of dynamic theming with our modern, responsive design system.'}
          </p>
          
          <button
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:opacity-90 transform hover:scale-105 ${
              themeConfig.layout === 'grid' ? 'text-gray-800 bg-white' : 'text-white'
            }`}
            style={{
              backgroundColor: themeConfig.layout === 'grid' ? '#FFFFFF' : themeConfig.colors.primary,
              color: themeConfig.layout === 'grid' ? themeConfig.colors.text : '#FFFFFF',
            }}
          >
            {themeConfig.layout === 'grid' ? 'Start Shopping!' : 'Explore Products'}
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${
            themeConfig.layout === 'grid' ? 'mb-16' : 'mb-12'
          }`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-lg transition-all duration-200 hover:shadow-lg ${
                  themeConfig.layout === 'grid' ? 'bg-gradient-to-br from-yellow-200 to-pink-200' : ''
                }`}
                style={{
                  backgroundColor: themeConfig.layout === 'grid' ? undefined : themeConfig.colors.surface,
                  border: `1px solid ${themeConfig.colors.border}`,
                }}
              >
                <stat.icon
                  size={32}
                  className="mx-auto mb-3"
                  style={{ color: themeConfig.colors.primary }}
                />
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ color: themeConfig.colors.text }}
                >
                  {stat.value}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: themeConfig.colors.textSecondary }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${
              themeConfig.layout === 'grid' ? 'text-4xl' : ''
            }`}
            style={{
              color: themeConfig.colors.text,
              fontFamily: themeConfig.fontFamily,
            }}
          >
            {themeConfig.layout === 'grid' ? 'Amazing Products!' : 'Featured Products'}
          </h2>
          
          <div className={`grid gap-6 ${
            themeConfig.layout === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
            themeConfig.layout === 'sidebar' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' :
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;