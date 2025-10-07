# JEN Landing Page

A modern, responsive landing page for JEN - a multi-vendor commerce platform for food and FMCG (Fast-Moving Consumer Goods).

## Features

- **Modern Design**: Clean, professional design with dark colors and shadows (no gradients)
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Elements**: Phone mockups showing app screens
- **Component-Based**: Built with React functional components using ES6
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Tech Stack

- React 18
- Tailwind CSS
- Create React App

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── App.js                 # Main App component
├── index.js              # React entry point
├── index.css             # Tailwind CSS imports
└── JENLandingMockup.js   # Main landing page component
```

## Design System

- **Primary Color**: #acb625 (JEN Green)
- **Dark Color**: #0f172a (Slate)
- **Light Color**: #f8fafc (Light Gray)

## Components

The landing page includes several key sections:

1. **Hero Section**: Main value proposition with phone mockups
2. **Features Section**: Key platform capabilities
3. **Vendors Section**: Restaurant and FMCG examples
4. **Preview Section**: Mobile screen previews
5. **Contact Section**: Call-to-action for next steps

## Customization

The design uses a consistent color palette and component system. All styling is handled through Tailwind CSS classes, making it easy to customize colors, spacing, and typography.

## License

© 2024 JEN • Multi-Vendor Ecommerce
