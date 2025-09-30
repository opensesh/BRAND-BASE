import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Figma, Github, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react'

interface AnchorLinkWidgetProps {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

interface NavItem {
  id: string
  label: string
  number: string
  subItems?: { id: string; label: string }[]
}

export default function AnchorLinkWidget({ menuOpen, setMenuOpen }: AnchorLinkWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    core: true, // Core open by default as per Figma
    identity: false,
    system: false,
  })

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
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

  // Close menu on outside click (backdrop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen, setMenuOpen])

  const navItems: NavItem[] = [
    {
      id: 'core',
      label: 'Core',
      number: '01',
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
      number: '02',
      subItems: [
        { id: 'color', label: 'Color' },
        { id: 'typography', label: 'Typography' },
      ],
    },
    {
      id: 'system',
      label: 'System',
      number: '03',
      subItems: [
        { id: 'components', label: 'Components' },
        { id: 'patterns', label: 'Patterns' },
      ],
    },
  ]

  const currentPath = location.hash.replace('#', '')

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
        className={`absolute top-[60px] h-[calc(100vh-60px)] w-full max-w-sm bg-brand-charcoal border border-[#787878] rounded-l-lg shadow-lg transform transition-transform duration-300 ease-out
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          right: 'calc(50vw - 592px + 24px)', // Align to hamburger icon's right edge
        }}
      >
        <div className="p-6 md:p-12 flex flex-col h-full">
          {/* Top Section: On this page */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-text font-medium text-xs text-brand-vanilla uppercase">On this page</h3>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3 mb-12">
            {navItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => toggleSection(item.id)}
                  className={`flex items-center gap-2 py-2 group w-full text-left ${
                    currentPath === item.id ? 'text-brand-aperol' : 'text-brand-vanilla hover:text-brand-aperol'
                  } transition-colors`}
                >
                  <div className="flex items-center justify-center w-6 h-6">
                    <svg
                      className={`w-4 h-4 ${currentPath === item.id ? 'text-brand-aperol' : 'text-brand-vanilla'}`}
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="8" cy="8" r="6" />
                    </svg>
                  </div>
                  <span className="font-display font-medium text-2xl tracking-[-1px] flex-1">
                    {item.number} {item.label}
                  </span>
                  <div className="flex-1 border-b border-dotted border-[#787878] mx-2"></div>
                  {openSections[item.id] ? (
                    <ChevronDown className="w-6 h-6 text-brand-vanilla transition-transform duration-300" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-brand-vanilla transition-transform duration-300" />
                  )}
                </button>
                {openSections[item.id] && item.subItems && (
                  <div className="pl-8 flex flex-col gap-2 py-2 animate-fade-in">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.id}
                        href={`#${subItem.id}`}
                        onClick={() => handleScrollToSection(subItem.id)}
                        className={`flex items-center gap-2 py-1 group ${
                          currentPath === subItem.id ? 'text-brand-aperol' : 'text-brand-vanilla hover:text-brand-aperol'
                        } transition-colors`}
                      >
                        <ChevronRight className="w-4 h-4 text-brand-vanilla" />
                        <span className="font-text text-lg flex-1">{subItem.label}</span>
                        <div className="flex-1 border-b border-dotted border-[#787878] mx-2"></div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Quick Links */}
          <div className="mt-auto space-y-3">
            <h3 className="font-text font-normal text-xs text-brand-vanilla uppercase">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.figma.com/design/t6ibLjzJFXY6HzU0bIahxw/BRAND-OS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-vanilla text-brand-charcoal rounded-full px-4 py-3 font-text font-medium text-base flex items-center justify-center gap-2 hover:bg-brand-aperol hover:text-brand-vanilla transition-colors"
              >
                <Figma className="w-4 h-4" />
                Figma
              </a>
              <a
                href="https://github.com/opensesh/OS_Brand-Design-System"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-vanilla text-brand-charcoal rounded-full px-4 py-3 font-text font-medium text-base flex items-center justify-center gap-2 hover:bg-brand-aperol hover:text-brand-vanilla transition-colors"
              >
                <Github className="w-4 h-4" />
                Git Repo
              </a>
            </div>
            <a
              href="https://www.figma.com/design/t6ibLjzJFXY6HzU0bIahxw/BRAND-OS?node-id=20094-16807&t=w51tqPrTUlDRqfak-1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-brand-vanilla text-brand-vanilla rounded-full px-4 py-3 font-text font-medium text-base flex items-center justify-center gap-2 hover:bg-brand-aperol hover:text-brand-charcoal transition-colors"
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