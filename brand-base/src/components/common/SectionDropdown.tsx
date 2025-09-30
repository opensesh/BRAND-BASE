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
}

export default function SectionDropdown({
  title,
  number,
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
    <section className={`w-full ${className}`}>
      {/* Header */}
      <button
        onClick={toggleOpen}
        className="w-full bg-transparent px-0 pb-6 flex items-start justify-between group transition-colors"
        type="button"
        aria-expanded={isOpen}
        aria-controls={`section-${title.toLowerCase().replace(/\s+/g, '-')}-content`}
      >
        <div className="flex items-start gap-3">
          <span className="font-accent font-normal text-sm leading-[1.25] text-brand-vanilla">
            {number}
          </span>
          <h2 className="font-display font-bold text-[80px] leading-[1.2] tracking-[-4px] text-brand-vanilla">
            {title}
          </h2>
        </div>
        <ChevronDown 
          className={`w-6 h-6 text-brand-vanilla transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`} 
        />
      </button>
      
      {/* Bottom line - directly after button */}
      <div className="w-full h-[1px] bg-brand-vanilla mb-0"></div>

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
          {/* Main Content */}
          <div className="py-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}