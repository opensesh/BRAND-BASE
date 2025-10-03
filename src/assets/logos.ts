// Logo assets from Figma Design System
const BASE_URL = import.meta.env.BASE_URL

export const LOGO_ASSETS = {
  // Main Logos
  brandmark: {
    vanilla: `${BASE_URL}assets/logos/brandmark-vanilla.svg`,
    glass: `${BASE_URL}assets/logos/brandmark-glass.svg`,
  },
  combo: {
    vanilla: `${BASE_URL}assets/logos/logo_main_combo_vanilla.svg`,
    glass: `${BASE_URL}assets/logos/logo_main_combo_glass.svg`,
  },
  stacked: {
    vanilla: `${BASE_URL}assets/logos/stacked-vanilla.svg`,
    glass: `${BASE_URL}assets/logos/stacked-glass.svg`,
  },
  horizontal: {
    vanilla: `${BASE_URL}assets/logos/horizontal-vanilla.svg`,
    glass: `${BASE_URL}assets/logos/horizontal-glass.svg`,
  },
  // Monograms
  core: {
    vanilla: `${BASE_URL}assets/logos/core.svg`,
    glass: `${BASE_URL}assets/logos/core-glass.svg`,
  },
  outline: {
    vanilla: `${BASE_URL}assets/logos/outline.svg`,
    glass: `${BASE_URL}assets/logos/outline-glass.svg`,
  },
  filled: {
    vanilla: `${BASE_URL}assets/logos/filled.svg`,
    glass: `${BASE_URL}assets/logos/filled-glass.svg`,
  },
} as const

export type LogoType = 'brandmark' | 'combo' | 'stacked' | 'horizontal' | 'core' | 'outline' | 'filled'
export type ColorVariant = 'Charcoal' | 'Glass' | 'Vanilla'
