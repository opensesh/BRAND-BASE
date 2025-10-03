# Component Documentation

## Common Components

### Accordion

A controlled accordion component with lazy content loading and smooth height animations. **Key Feature**: Maintains consistent width (flex: 1) in both open and closed states—no layout shift.

#### Props

```ts
type AccordionProps = {
  id?: string                          // Optional custom ID
  title: ReactNode                     // Accordion header content
  children: ReactNode | (() => ReactNode)  // Content (can be function for lazy eval)
  defaultOpen?: boolean                // Initial open state (default: false)
  isOpen?: boolean                     // Controlled open state
  onOpenChange?: (open: boolean) => void   // Callback when state changes
  className?: string                   // Additional CSS classes
}
```

#### Usage

**Uncontrolled (default)**
```tsx
<Accordion title="Section Title" defaultOpen>
  <div>Content loads only when open</div>
</Accordion>
```

**Controlled**
```tsx
const [open, setOpen] = useState(false)

<Accordion 
  title="Section Title" 
  isOpen={open} 
  onOpenChange={setOpen}
>
  <div>Content</div>
</Accordion>
```

**With Lazy Function**
```tsx
<Accordion title="Heavy Content">
  {() => <ExpensiveComponent />}  // Only invoked when open
</Accordion>
```

#### Design Decisions

1. **No Layout Shift**: Uses `flex: 1` in both states, preventing width jump
2. **Smooth Height Animation**: Measures content height and animates via inline styles
3. **Lazy Content**: Children only render when accordion is open
4. **Accessibility**: Proper ARIA attributes (aria-expanded, aria-controls)
5. **Visual Feedback**: Rotating chevron icon indicates state

#### UX Notes

- **Transition Duration**: 300ms for smooth feel without sluggishness
- **Ease Function**: `ease-out` makes closing feel snappier than opening
- **Backdrop Blur**: Glass-morphism effect for modern aesthetic
- **Padding**: Responsive (smaller on mobile, larger on desktop)

---

### Button

Flexible button component with three visual variants.

#### Props

```ts
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'  // Visual style
  fullWidth?: boolean                          // Stretch to container width
}
```

#### Variants

**Primary** (default)
- Aperol orange background (`#FE5102`)
- High contrast, primary actions
- Use sparingly (1-2 per page)

**Secondary**
- Semi-transparent white background
- Medium emphasis actions
- Works on dark backgrounds

**Ghost**
- No background, hover shows subtle fill
- Low emphasis, tertiary actions
- Good for "Cancel" or secondary nav

#### Usage

```tsx
<Button>Primary Action</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost" fullWidth>Full Width Ghost</Button>
<Button disabled onClick={() => {}}>Disabled</Button>
```

#### Design Decisions

1. **Focus Visible**: Only shows outline on keyboard focus, not mouse click
2. **Transition**: Quick 150ms color transition on hover
3. **Padding**: Balanced for readability (4px horizontal, 2px vertical)
4. **Font**: Medium weight for emphasis without heaviness

#### UX Notes

- **Primary**: Use for single, most important action per section
- **Secondary**: Supporting actions or alternative paths
- **Ghost**: Destructive actions, cancels, or utility functions
- **Full Width**: Good for mobile CTAs or form submits

---

### Card

Simple container component with consistent styling.

#### Props

```ts
type CardProps = HTMLAttributes<HTMLDivElement> & {
  as?: keyof JSX.IntrinsicElements  // HTML tag (default: 'div')
}
```

#### Usage

```tsx
<Card>
  <h3>Title</h3>
  <p>Content</p>
</Card>

<Card as="article" className="hover:scale-105">
  Interactive card
</Card>
```

#### Design Decisions

1. **Border**: Subtle white/10 opacity for definition without harshness
2. **Background**: Semi-transparent white for depth
3. **Padding**: Responsive (4 on mobile, 6 on desktop)
4. **Polymorphic**: Can render as any HTML element via `as` prop

#### UX Notes

- Great for feature grids, resource lists, or content grouping
- Naturally responsive with grid/flex layouts
- Lightweight—doesn't compete with content

---

## Layout Components

### Header

Sticky navigation bar with smooth scroll links.

#### Features
- Backdrop blur effect when scrolling
- Desktop-only nav links (hidden on mobile)
- Smooth scroll to section anchors

#### Customization
```tsx
// Edit src/components/layout/Header.tsx
<nav>
  <a href="#your-section">Your Link</a>
</nav>
```

---

### Footer

Simple copyright notice.

#### Customization
```tsx
// Edit src/components/layout/Footer.tsx
```

---

## Section Components

### CoreSection / IdentitySection / SystemSection

Section wrappers that combine Accordion with lazy loading and intersection observer.

#### Props

```ts
type Props = {
  defaultOpen?: boolean   // Initial accordion state
  lazyLoad?: boolean      // Use intersection observer
}
```

#### Pattern

Each section follows this structure:
1. **Ref for Intersection Observer**: Track when section enters viewport
2. **State for Accordion**: Control open/closed state
3. **Conditional Loading**: Only load content when `inView || open || !lazyLoad`
4. **Fade-in Animation**: Content smoothly reveals when loaded

#### Usage

```tsx
<CoreSection defaultOpen />                    // Open by default, no lazy load
<IdentitySection defaultOpen={false} lazyLoad />  // Closed, lazy loads on scroll/open
```

#### Creating New Sections

```tsx
import { useRef, useState } from 'react'
import Accordion from '@components/common/Accordion'
import useIntersectionObserver from '@hooks/useIntersectionObserver'

type Props = { defaultOpen?: boolean; lazyLoad?: boolean }

export default function MySection({ defaultOpen = false, lazyLoad = true }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useIntersectionObserver(ref, { threshold: 0.2 })
  const [open, setOpen] = useState(defaultOpen)
  const shouldLoad = !lazyLoad || inView || open

  return (
    <div ref={ref} className="container-responsive py-8 md:py-12">
      <Accordion title="My Section" isOpen={open} onOpenChange={setOpen}>
        {shouldLoad ? (
          <div className="opacity-0 animate-fade-in [animation-fill-mode:forwards]">
            {/* Your content here */}
          </div>
        ) : null}
      </Accordion>
    </div>
  )
}
```

---

## Hooks

### useIntersectionObserver

Detects when an element enters the viewport.

#### Signature

```ts
function useIntersectionObserver<T extends Element>(
  targetRef: RefObject<T>,
  options?: {
    threshold?: number    // 0-1, how much visible before trigger (default: 0.2)
    rootMargin?: string   // CSS margin around viewport (default: '0px')
    once?: boolean        // Only trigger once (default: true)
  }
): boolean  // Returns true when element is in view
```

#### Usage

```tsx
const ref = useRef(null)
const inView = useIntersectionObserver(ref, { 
  threshold: 0.5,      // 50% visible
  once: true           // Don't revert to false
})

return (
  <div ref={ref}>
    {inView && <LazyComponent />}
  </div>
)
```

#### Design Decisions

1. **Default Once**: Most use cases don't need re-observation
2. **20% Threshold**: Feels responsive without triggering too early
3. **Cleanup**: Properly disconnects observer on unmount
4. **TypeScript Generic**: Type-safe ref handling

#### UX Notes

- Use for heavy components (charts, images, videos)
- Combine with skeleton loaders for smooth UX
- Don't lazy-load critical above-the-fold content

---

## Styling Utilities

### Custom Classes

**`.container-responsive`**
```css
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```
Centered container with responsive padding.

**`.animate-fade-in`**
```css
animation: fade-in 0.4s ease-out;
```
Smooth reveal animation (opacity + translateY).

### Arbitrary Values

Tailwind supports arbitrary values for one-off styles:
```tsx
<div className="[animation-delay:120ms]">Delayed animation</div>
<div className="[animation-fill-mode:forwards]">Keeps final state</div>
```

---

## Performance Tips

1. **Lazy Loading**: Use intersection observer for below-fold sections
2. **Code Splitting**: React.lazy() for routes and heavy components
3. **Accordion Content**: Render children only when open
4. **Memoization**: Use React.memo() for expensive renders
5. **Font Loading**: `font-display: swap` prevents blocking

---

## Accessibility Checklist

- ✅ Semantic HTML (header, main, section, footer)
- ✅ ARIA attributes on interactive elements
- ✅ Keyboard navigation (tab, enter, space)
- ✅ Focus visible states
- ✅ Color contrast (WCAG AA compliant)
- ✅ Responsive touch targets (min 44x44px)

---

## Design Tokens Reference

### Colors
```ts
charcoal: '#191919'  // bg-brand-charcoal
vanilla: '#FFFAEE'   // text-brand-vanilla
aperol: '#FE5102'    // bg-brand-aperol
```

### Typography
```ts
font-display  // Neue Haas Grotesk Display Pro (headings)
font-text     // Neue Haas Grotesk Text Pro (body)
font-mono     // Offbit (code, data)
```

### Spacing Scale
Tailwind default: 4px base unit
- `p-4` = 16px
- `py-8` = 32px vertical
- `gap-6` = 24px gap

### Breakpoints
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1536px
