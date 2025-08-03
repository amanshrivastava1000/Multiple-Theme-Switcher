import React from 'react';
import { Palette, Code, Zap, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { themeConfig } = useTheme();

  const features = [
    {
      icon: Palette,
      title: 'Dynamic Theming',
      description: 'Switch between beautiful themes instantly with persistent storage.',
    },
    {
      icon: Code,
      title: 'Modern Technology',
      description: 'Built with React, TypeScript, and modern web standards.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed with smooth animations and transitions.',
    },
    {
      icon: Heart,
      title: 'User-Centered',
      description: 'Designed with accessibility and user experience in mind.',
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className={`mb-6 ${
              themeConfig.layout === 'grid' ? 'text-5xl' : 'text-4xl'
            } font-bold`}
            style={{
              color: themeConfig.colors.text,
              fontFamily: themeConfig.fontFamily,
            }}
          >
            {themeConfig.layout === 'grid' ? 'About Our Fun App!' : 'About ThemeSwitch'}
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{
              color: themeConfig.colors.textSecondary,
              fontFamily: themeConfig.fontFamily,
            }}
          >
            {themeConfig.layout === 'sidebar' ?
              'A sophisticated application showcasing the power of dynamic theming and premium user experience.' :
             themeConfig.layout === 'grid' ?
              'We created this colorful and fun app to make theme switching an exciting experience!' :
              'A modern React application demonstrating advanced theme switching capabilities with persistent storage and responsive design.'}
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid gap-8 mb-16 ${
          themeConfig.layout === 'grid' ? 'grid-cols-1 md:grid-cols-2' :
          themeConfig.layout === 'sidebar' ? 'grid-cols-1 lg:grid-cols-2' :
          'grid-cols-1 md:grid-cols-2'
        }`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg transition-all duration-200 hover:shadow-lg ${
                themeConfig.layout === 'grid' ? 'bg-gradient-to-br from-purple-100 to-pink-100' : ''
              }`}
              style={{
                backgroundColor: themeConfig.layout === 'grid' ? undefined : themeConfig.colors.surface,
                border: `1px solid ${themeConfig.colors.border}`,
              }}
            >
              <feature.icon
                size={32}
                className="mb-4"
                style={{ color: themeConfig.colors.primary }}
              />
              <h3
                className="text-xl font-semibold mb-3"
                style={{
                  color: themeConfig.colors.text,
                  fontFamily: themeConfig.fontFamily,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{ color: themeConfig.colors.textSecondary }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div
          className={`p-8 rounded-lg ${
            themeConfig.layout === 'grid' ? 'bg-gradient-to-r from-yellow-200 to-orange-200' : ''
          }`}
          style={{
            backgroundColor: themeConfig.layout === 'grid' ? undefined : themeConfig.colors.surface,
            border: `1px solid ${themeConfig.colors.border}`,
          }}
        >
          <h2
            className="text-2xl font-bold mb-6 text-center"
            style={{
              color: themeConfig.colors.text,
              fontFamily: themeConfig.fontFamily,
            }}
          >
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['React', 'TypeScript', 'Tailwind CSS', 'React Router'].map((tech) => (
              <div
                key={tech}
                className="py-3 px-4 rounded-lg"
                style={{
                  backgroundColor: themeConfig.colors.background,
                  color: themeConfig.colors.text,
                  border: `1px solid ${themeConfig.colors.border}`,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-16">
          <blockquote
            className={`text-xl italic ${
              themeConfig.layout === 'grid' ? 'text-2xl' : ''
            }`}
            style={{
              color: themeConfig.colors.textSecondary,
              fontFamily: themeConfig.fontFamily,
            }}
          >
            {themeConfig.layout === 'sidebar' ?
              '"Elegance is the ultimate sophistication in digital experiences."' :
             themeConfig.layout === 'grid' ?
              '"Making the web more colorful and fun, one theme at a time!"' :
              '"Creating beautiful, accessible, and performant web experiences for everyone."'}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;