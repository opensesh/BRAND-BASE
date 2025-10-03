# BRAND-BASE

A modern React + Vite + Tailwind CSS single-page application focused on component-driven development and performance optimization.

## Features

- **⚡ Vite + React 19 + TypeScript**: Fast development with modern tooling
- **🎨 Tailwind CSS**: Utility-first styling with custom brand tokens
- **🧩 Component Library**: Reusable Accordion, Button, and Card components
- **🚀 Performance Optimized**: Lazy-loaded sections and intersection observer
- **📱 Responsive Design**: Mobile-first approach with smooth scroll behavior
- **🎯 Controlled Accordion**: No layout shift, smooth height animations
- **🔧 Developer Experience**: ESLint, Prettier, path aliases, hot reload

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Sync design tokens from OS_Brand-Design-System
npm run tokens:sync
```

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   │   ├── Accordion.tsx
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── layout/          # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/        # Page sections
│       ├── Hero.tsx
│       ├── MainResources.tsx
│       ├── CoreSection.tsx
│       ├── IdentitySection.tsx
│       └── SystemSection.tsx
├── hooks/
│   └── useIntersectionObserver.ts
├── styles/
│   ├── fonts.css        # @font-face declarations
│   ├── tokens.css       # CSS custom properties
│   └── globals.css      # Tailwind + global styles
├── utils/
│   └── tokenTransformer.ts  # Design token sync script
├── preview/
│   └── Preview.tsx      # Component showcase (/preview route)
└── main.tsx             # App entry with routing
```

## Design Tokens

### Brand Colors
- **Charcoal**: `#191919` - Primary background
- **Vanilla**: `#FFFAEE` - Primary text
- **Aperol**: `#FE5102` - Accent color

### Typography
- **Display**: Neue Haas Grotesk Display Pro
- **Text**: Neue Haas Grotesk Text Pro
- **Mono**: Offbit

### Fonts Setup
Place your `.woff2` font files in `public/fonts/` directory. See `public/fonts/README.md` for details.

## Key Components

### Accordion
Controlled accordion with lazy content loading and smooth height animations. Maintains consistent width (flex: 1) in both open and closed states.

```tsx
<Accordion title="Section Title" defaultOpen>
  <div>Lazy-loaded content</div>
</Accordion>
```

### useIntersectionObserver
Custom hook for lazy-loading sections as they enter the viewport.

```tsx
const ref = useRef(null)
const inView = useIntersectionObserver(ref, { threshold: 0.2 })
```

## Routes

- `/` - Main single-page application
- `/preview` - Component showcase for testing

## Path Aliases

- `@components/*` → `src/components/*`
- `@styles/*` → `src/styles/*`
- `@utils/*` → `src/utils/*`
- `@hooks/*` → `src/hooks/*`

## Design System Integration

This project integrates with [OS_Brand-Design-System](https://github.com/opensesh/OS_Brand-Design-System). Run `npm run tokens:sync` to fetch and transform tokens into Tailwind configuration.

## License

MIT