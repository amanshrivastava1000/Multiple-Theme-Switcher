# ThemeSwitch - Multi-Theme React Application

A modern React application demonstrating advanced theme switching capabilities with three distinct themes, each featuring unique layouts, typography, and user experiences.

## 🌟 Features

### Core Functionality
- **Dynamic Theme Switching**: Three completely different themes with unique layouts and designs
- **Persistent Storage**: Theme preferences saved in localStorage and restored on page reload
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Subtle transitions when switching between themes
- **API Integration**: Real product data from Fake Store API
- **Multi-page Navigation**: React Router implementation across Home, About, and Contact pages

### Theme Variations

#### Theme 1: Minimalist
- Clean, light design with simple sans-serif typography (Inter)
- Traditional layout with centered content
- Light color palette with blue accents
- Perfect for professional and clean interfaces

#### Theme 2: Dark Elite
- Sophisticated dark mode with sidebar navigation
- Elegant serif typography (Playfair Display)
- Premium feel with gold and purple accents
- Sidebar layout for enhanced navigation experience

#### Theme 3: Colorful Fun
- Vibrant, playful design with card-based grid layout
- Fun typography using Pacifico font
- Bright color gradients and playful interactions
- Grid-based layout for dynamic content presentation

## 🛠 Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS with custom theme system
- **State Management**: React Context API
- **Build Tool**: Vite
- **Icons**: Lucide React
- **API**: Fake Store API for product data
- **Fonts**: Google Fonts (Inter, Playfair Display, Pacifico)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with theme switcher
│   ├── Layout.tsx      # Main layout wrapper
│   └── ProductCard.tsx # Product display component
├── contexts/           # React Context providers
│   └── ThemeContext.tsx # Theme management context
├── pages/              # Route components
│   ├── Home.tsx        # Homepage with products
│   ├── About.tsx       # About page
│   └── Contact.tsx     # Contact form page
├── services/           # API services
│   └── api.ts          # Fake Store API integration
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared interfaces and types
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and utilities
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd multi-theme-switcher
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server


## 🎨 Theme System

The application uses a sophisticated theme system built with React Context API:

### Theme Configuration
Each theme includes:
- **Layout Type**: Default, sidebar, or grid-based
- **Color Palette**: Primary, secondary, background, surface, text, and accent colors
- **Typography**: Font family, sizes, and weights
- **Spacing**: Margins, padding, and component spacing

### Theme Switching
- Dropdown in the header allows instant theme switching
- Smooth transition animations provide visual feedback
- Theme preference persists across browser sessions
- All components automatically adapt to the selected theme

## 📱 Responsive Design

The application is fully responsive with:
- **Mobile-first approach** with progressive enhancement
- **Flexible grid systems** that adapt to different screen sizes
- **Touch-friendly interactions** for mobile devices
- **Optimized typography** scaling across devices


## 📄 Pages Overview

### Home Page
- Hero section with theme-specific messaging
- Statistics showcase
- Featured products from API
- Responsive product grid

### About Page
- Company information and mission
- Feature highlights
- Technology stack showcase
- Team information

### Contact Page
- Contact form with validation
- Company contact information
- Interactive elements
- Form submission handling

## 🎯 Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Responsive images with proper loading
- **Font Loading**: Optimized Google Fonts loading
- **Bundle Optimization**: Tree shaking and minification
- **Caching**: Efficient browser caching strategies


## 🚀 Deployment Link
```bash
[https://multi-themes-switcher-app.netlify.app](https://multi-themes-switcher-app.netlify.app)

```

**Built with ❤️ using React, TypeScript, and modern web technologies**