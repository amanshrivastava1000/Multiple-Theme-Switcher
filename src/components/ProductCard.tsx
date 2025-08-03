import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { themeConfig } = useTheme();

  return (
    <div
      className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
        themeConfig.layout === 'grid' ? 'bg-gradient-to-br from-pink-50 to-purple-50' : ''
      }`}
      style={{
        backgroundColor: themeConfig.layout === 'grid' ? undefined : themeConfig.colors.surface,
        border: `1px solid ${themeConfig.colors.border}`,
      }}
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain p-4"
        />
      </div>
      
      <div className="p-6">
        <h3
          className={`font-semibold mb-2 line-clamp-2 ${
            themeConfig.layout === 'grid' ? 'text-lg' : 'text-base'
          }`}
          style={{
            color: themeConfig.colors.text,
            fontFamily: themeConfig.fontFamily,
          }}
        >
          {product.title}
        </h3>
        
        <p
          className="text-sm mb-4 line-clamp-3"
          style={{ color: themeConfig.colors.textSecondary }}
        >
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-xl font-bold"
            style={{ color: themeConfig.colors.primary }}
          >
            ${product.price}
          </span>
          
          <div className="flex items-center space-x-1">
            <Star
              size={16}
              className="fill-current"
              style={{ color: themeConfig.colors.accent }}
            />
            <span
              className="text-sm"
              style={{ color: themeConfig.colors.textSecondary }}
            >
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        </div>
        
        <button
          className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 hover:opacity-90 ${
            themeConfig.layout === 'grid' ? 'text-white' : ''
          }`}
          style={{
            backgroundColor: themeConfig.colors.primary,
            color: themeConfig.layout === 'grid' ? '#FFFFFF' : themeConfig.colors.background,
          }}
        >
          <ShoppingCart size={18} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;