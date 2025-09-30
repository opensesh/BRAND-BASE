import { useEffect, useRef, useState } from 'react'
import { ExternalLink, ChevronDown, ChevronRight, CornerDownRight } from 'lucide-react'

interface AnchorLinkWidgetProps {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

interface NavItem {
  id: string
  label: string
  subItems?: { id: string; label: string }[]
}

export default function AnchorLinkWidget({ menuOpen, setMenuOpen }: AnchorLinkWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    core: true, // Core OPEN by default
    identity: false, // Identity CLOSED by default
    system: false, // System CLOSED by default
  })

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      // Only one section can be open at a time
      const isCurrentlyOpen = prev[id]
      return {
        core: id === 'core' && !isCurrentlyOpen,
        identity: id === 'identity' && !isCurrentlyOpen,
        system: id === 'system' && !isCurrentlyOpen,
      }
    })
  }

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [setMenuOpen])

  // Close menu on outside click (backdrop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuOpen && widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen, setMenuOpen])

  const navItems: NavItem[] = [
    {
      id: 'core',
      label: 'Core',
      subItems: [
        { id: 'mission', label: 'Mission' },
        { id: 'values', label: 'Values' },
        { id: 'voice', label: 'Voice' },
        { id: 'pillars', label: 'Pillars' },
      ],
    },
    {
      id: 'identity',
      label: 'Identity',
      subItems: [
        { id: 'color', label: 'Color' },
        { id: 'typography', label: 'Typography' },
      ],
    },
    {
      id: 'system',
      label: 'System',
      subItems: [
        { id: 'components', label: 'Components' },
        { id: 'patterns', label: 'Patterns' },
      ],
    },
  ]

  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Menu Panel */}
      <div
        ref={widgetRef}
        className={`absolute top-[60px] w-full max-w-[448px] bg-brand-charcoal border border-[#787878] rounded-lg shadow-lg transform transition-all duration-300 ease-out
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          right: 'calc(50vw - 592px + 18px)', // Align exactly to hamburger icon's right edge
        }}
      >
        <div className="px-8 py-6 flex flex-col gap-8">
          {/* Top Section: On this page */}
          <div className="flex items-center justify-between">
            <h3 className="font-text font-normal text-[10px] text-brand-vanilla uppercase tracking-wider">On this page</h3>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => toggleSection(item.id)}
                  className={`flex items-center gap-3 py-1 group w-full text-left transition-colors duration-200`}
                >
                  <div className="flex items-center justify-center w-5 h-5">
                    <svg
                      className={`w-3 h-3 ${openSections[item.id] ? 'text-brand-aperol' : 'text-brand-vanilla'}`}
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="8" cy="8" r="6" />
                    </svg>
                  </div>
                  <span className={`font-display font-bold text-[32px] leading-none tracking-tight flex-shrink-0 ${
                    openSections[item.id] ? 'text-brand-aperol' : 'text-brand-vanilla'
                  }`}>
                    {item.label}
                  </span>
                  <div className={`flex-1 border-b border-dotted mx-3 ${
                    openSections[item.id] ? 'border-brand-aperol' : 'border-[#787878]'
                  }`}></div>
                  {openSections[item.id] ? (
                    <ChevronDown className="w-5 h-5 text-brand-aperol transition-transform duration-300 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-brand-vanilla transition-transform duration-300 flex-shrink-0" />
                  )}
                </button>
                {openSections[item.id] && item.subItems && (
                  <div className="pl-8 flex flex-col gap-3 mt-3 pb-6 animate-fade-in">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.id}
                        href={`#${subItem.id}`}
                        onClick={() => handleScrollToSection(subItem.id)}
                        className="flex items-center gap-2 py-1 group text-brand-vanilla hover:text-brand-aperol transition-colors duration-200"
                      >
                        <CornerDownRight className="w-4 h-4 text-brand-vanilla group-hover:text-brand-aperol transition-colors duration-200 flex-shrink-0" />
                        <span className="font-text text-lg flex-1">{subItem.label}</span>
                        <div className="flex-1 border-b border-dotted border-[#787878] group-hover:border-brand-aperol transition-colors duration-200 mx-2"></div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-text font-normal text-[10px] text-brand-vanilla uppercase tracking-wider">Quick Links</h3>
            <div className="flex gap-2">
              <a
                href="https://www.figma.com/design/t6ibLjzJFXY6HzU0bIahxw/BRAND-OS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[132px] bg-white text-brand-charcoal rounded-full px-4 py-2.5 font-text font-medium text-sm flex items-center justify-center gap-2 hover:bg-brand-aperol hover:text-white transition-colors"
              >
                Figma
                <svg className="w-4 h-4" viewBox="0 0 38 57" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" />
                </svg>
              </a>
              <a
                href="https://github.com/opensesh/OS_Brand-Design-System"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[132px] bg-white text-brand-charcoal rounded-full px-4 py-2.5 font-text font-medium text-sm flex items-center justify-center gap-2 hover:bg-brand-aperol hover:text-white transition-colors"
              >
                Git Repo
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            <a
              href="https://www.figma.com/design/t6ibLjzJFXY6HzU0bIahxw/BRAND-OS?node-id=20094-16807&t=w51tqPrTUlDRqfak-1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-brand-charcoal rounded-full px-4 py-2.5 font-text font-medium text-sm flex items-center justify-center gap-2 hover:bg-brand-aperol hover:text-white transition-colors"
            >
              Guidelines
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}