import React, { ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { themeConfig, isTransitioning } = useTheme();

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isTransitioning ? 'opacity-50' : 'opacity-100'
      }`}
      style={{
        backgroundColor: themeConfig.colors.background,
        fontFamily: themeConfig.fontFamily,
      }}
    >
      <Header />
      
      <main className="pt-16">
        {themeConfig.layout === 'sidebar' ? (
          <div className="flex">
            {/* Sidebar for Theme 2 */}
            <aside
              className="w-64 min-h-screen p-6 hidden lg:block"
              style={{
                backgroundColor: themeConfig.colors.surface,
                borderRight: `1px solid ${themeConfig.colors.border}`,
              }}
            >
              <div className="space-y-4">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: themeConfig.colors.text }}
                >
                  Navigation
                </h3>
                <div className="space-y-2">
                  {['Dashboard', 'Analytics', 'Reports', 'Settings'].map((item) => (
                    <div
                      key={item}
                      className="p-3 rounded-lg cursor-pointer transition-all duration-200 hover:opacity-75"
                      style={{
                        backgroundColor: themeConfig.colors.background,
                        color: themeConfig.colors.textSecondary,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
            
            {/* Main content */}
            <div className="flex-1">
              {children}
            </div>
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
};

export default Layout;