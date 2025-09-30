import { ReactNode, useState, useRef, useEffect } from 'react'
import { ChevronDown, Plus, Minus } from 'lucide-react'

interface LinkItem {
  id: string
  label: string
  href: string
  external?: boolean
}

interface SectionDropdownProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
  links?: LinkItem[]
  className?: string
  iconType?: 'chevron' | 'plus-minus'
}

export default function SectionDropdown({
  title,
  children,
  defaultOpen = true,
  links = [],
  className = '',
  iconType = 'chevron'
}: SectionDropdownProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<number>(0)

  // Measure content height for smooth animations
  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight
      setContentHeight(height)
    }
  }, [children, isOpen])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const renderIcon = () => {
    if (iconType === 'plus-minus') {
      return isOpen ? (
        <Minus className="w-5 h-5 text-brand-vanilla transition-transform duration-300" />
      ) : (
        <Plus className="w-5 h-5 text-brand-vanilla transition-transform duration-300" />
      )
    }
    
    return (
      <ChevronDown 
        className={`w-5 h-5 text-brand-vanilla transition-transform duration-300 ${
          isOpen ? 'rotate-180' : 'rotate-0'
        }`} 
      />
    )
  }

  return (
    <section className={`w-full border border-brand-vanilla rounded-lg overflow-hidden ${className}`}>
      {/* Header */}
      <button
        onClick={toggleOpen}
        className="w-full bg-brand-charcoal border-b border-[#595959] px-6 py-4 flex items-center justify-between gap-3 hover:bg-brand-charcoal/90 transition-colors"
        type="button"
        aria-expanded={isOpen}
        aria-controls={`section-${title.toLowerCase().replace(/\s+/g, '-')}-content`}
      >
        <span className="font-text font-medium text-xs text-white uppercase tracking-wide">
          {title}
        </span>
        {renderIcon()}
      </button>

      {/* Content Panel */}
      <div
        id={`section-${title.toLowerCase().replace(/\s+/g, '-')}-content`}
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          height: isOpen ? `${contentHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden'
        }}
      >
        <div ref={contentRef} className="bg-brand-charcoal">
          {/* Navigation Links */}
          {links.length > 0 && (
            <div className="px-6 py-6 border-b border-[#595959]">
              <nav className="space-y-3">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="block font-text text-base text-brand-vanilla hover:text-brand-aperol transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="flex-1">{link.label}</span>
                    {link.external && (
                      <svg 
                        className="w-4 h-4 text-brand-vanilla group-hover:text-brand-aperol transition-colors" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                      >
                        <path d="M6 3h7v7M13 3L3 13" />
                      </svg>
                    )}
                  </a>
                ))}
              </nav>
            </div>
          )}

          {/* Main Content */}
          <div className="px-6 py-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
