# Quick Start Guide

## Setup (5 minutes)

### 1. Install Dependencies
```bash
cd brand-base
npm install
```

### 2. Add Fonts (Optional)
Place your `.woff2` font files in `public/fonts/`:
- NeueHaasGroteskDisplayPro-Regular.woff2
- NeueHaasGroteskDisplayPro-Medium.woff2
- NeueHaasGroteskDisplayPro-Bold.woff2
- NeueHaasGroteskTextPro-Regular.woff2
- NeueHaasGroteskTextPro-Medium.woff2
- NeueHaasGroteskTextPro-Bold.woff2
- Offbit-Regular.woff2
- Offbit-Bold.woff2

The app will use system font fallbacks if fonts are missing.

### 3. Start Development
```bash
npm run dev
```

Visit `http://localhost:5173` to see the app!

## What You'll See

### Main Page (`/`)
- **Header**: Sticky navigation with smooth scroll links
- **Hero**: Bold headline with CTA buttons
- **Main Resources**: Three feature cards
- **Core Section**: Accordion (open by default)
- **Identity Section**: Accordion (closed, lazy-loads on open)
- **System Section**: Accordion (closed, lazy-loads on open)
- **Footer**: Simple copyright notice

### Preview Page (`/preview`)
Visit `http://localhost:5173/preview` to see all components in isolation:
- Button variants (primary, secondary, ghost)
- Accordion component with lazy content
- Card layouts

## Key Interactions

### Accordion Behavior
1. Click title to toggle open/closed
2. Content only loads when opened (performance optimization)
3. Smooth height animation with no layout shift
4. Maintains consistent width in both states

### Lazy Loading
- Sections load content only when:
  - User opens the accordion, OR
  - Section enters viewport (if `lazyLoad` prop is true)
- Reduces initial JavaScript execution

### Smooth Scrolling
- Click nav links in header
- Browser smoothly scrolls to sections
- Anchors: `#core`, `#identity`, `#system`

## Customization

### Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  brand: {
    charcoal: '#191919',  // Background
    vanilla: '#FFFAEE',   // Text
    aperol: '#FE5102',    // Accent
  },
}
```

### Content
- **Hero**: `src/components/sections/Hero.tsx`
- **Resources**: `src/components/sections/MainResources.tsx`
- **Sections**: `src/components/sections/{Core,Identity,System}Section.tsx`

### Add New Section
```tsx
import Accordion from '@components/common/Accordion'
import { useRef, useState } from 'react'
import useIntersectionObserver from '@hooks/useIntersectionObserver'

export default function MySection({ defaultOpen = false, lazyLoad = true }) {
  const ref = useRef(null)
  const inView = useIntersectionObserver(ref)
  const [open, setOpen] = useState(defaultOpen)
  const shouldLoad = !lazyLoad || inView || open

  return (
    <div ref={ref} className="container-responsive py-8">
      <Accordion title="My Section" isOpen={open} onOpenChange={setOpen}>
        {shouldLoad ? <div>Content here</div> : null}
      </Accordion>
    </div>
  )
}
```

## Next Steps

1. **Add Real Content**: Replace placeholder text with your brand guidelines
2. **Extend Components**: Add more variants to Button, create new components
3. **Sync Tokens**: Run `npm run tokens:sync` to integrate design system tokens
4. **Deploy**: `npm run build` generates production build in `dist/`

## Troubleshooting

### Port Already in Use
```bash
# Vite will automatically try next available port (5174, 5175, etc.)
```

### Fonts Not Loading
- Check files are in `public/fonts/` directory
- Verify filenames match `src/styles/fonts.css`
- Clear browser cache and hard refresh

### TypeScript Errors
```bash
npm run build  # Check for type errors
```

## Development Tips

### Hot Reload
- Edit any component → browser auto-updates
- CSS changes → instant update without page reload
- Component state preserved during updates

### Path Aliases
```tsx
import Button from '@components/common/Button'
import useIntersectionObserver from '@hooks/useIntersectionObserver'
```

### Preview Mode
Use `/preview` route to test components in isolation before integrating them into main app.

---

**Ready to build?** Start with the Accordion component—it's the foundation of the section system. Test different states in `/preview`, then integrate into your app structure.
