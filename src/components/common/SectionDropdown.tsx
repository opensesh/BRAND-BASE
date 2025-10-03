import { useState, useRef, useEffect } from 'react'
import type { ReactNode } from 'react'
import { ChevronDown, Plus, Minus } from 'lucide-react'

interface LinkItem {
  id: string
  label: string
  href: string
  external?: boolean
}

interface SectionDropdownProps {
  title: string
  number: string // e.g., "01", "02", "03"
  children: ReactNode
  defaultOpen?: boolean
  links?: LinkItem[]
  className?: string
  iconType?: 'chevron' | 'plus-minus'
  isOpen?: boolean
  onToggle?: (isOpen: boolean) => void
}

export default function SectionDropdown({
  title,
  number,
  children,
  defaultOpen = true,
  links = [],
  className = '',
  iconType = 'chevron',
  isOpen: controlledIsOpen,
  onToggle
}: SectionDropdownProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen)
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<number>(0)

  // Measure content height for smooth animations
  useEffect(() => {
    if (contentRef.current) {
      const updateHeight = () => {
        if (contentRef.current) {
          const height = contentRef.current.scrollHeight
          setContentHeight(height)
        }
      }

      // Initial measurement
      updateHeight()

      // Use ResizeObserver to detect when content changes (e.g., nested dropdowns opening)
      const resizeObserver = new ResizeObserver(updateHeight)
      resizeObserver.observe(contentRef.current)

      return () => {
        resizeObserver.disconnect()
      }
    }
  }, [children, isOpen])

  const toggleOpen = () => {
    const newIsOpen = !isOpen
    if (onToggle) {
      onToggle(newIsOpen)
    } else {
      setInternalIsOpen(newIsOpen)
    }
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
          isOpen ? 'rotate-0' : 'rotate-180'
        }`}
      />
    )
  }

  return (
    <section className={`w-full ${className}`} data-section-dropdown>
      {/* Flexbox Container */}
      <div className="flex flex-col w-full">
        {/* Header Button */}
        <button
          onClick={toggleOpen}
          className="w-full bg-transparent px-0 pb-6 flex items-center justify-between group transition-colors"
          type="button"
          aria-expanded={isOpen}
          aria-controls={`section-${title.toLowerCase().replace(/\s+/g, '-')}-content`}
        >
          <div className="flex items-center gap-3">
            {/* Separate Number Text Box - H5 */}
            <span className="font-accent text-h5-mobile md:text-h5-tablet xl:text-h5-desktop text-brand-vanilla">
              {number}
            </span>
            {/* Separate Title Text Box - Display D1 */}
            <h2 className="font-display text-d1-mobile md:text-d1-tablet xl:text-d1-desktop text-brand-vanilla">
              {title}
            </h2>
          </div>
          <ChevronDown
            className={`w-6 h-6 text-brand-vanilla transition-transform duration-300 flex-shrink-0 ${
              isOpen ? 'rotate-0' : 'rotate-180'
            }`}
          />
        </button>
        
        {/* Bottom Line Vector - 1px weight, vanilla color, fills container */}
        <div className="w-full h-[1px] bg-brand-vanilla"></div>
      </div>

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
        <div ref={contentRef}>
          {/* Main Content with constrained width for readability */}
          <div className="py-12 max-w-[1040px] mx-auto px-4 md:px-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}