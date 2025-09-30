import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface DropdownItem {
  id: string
  title: string
  description: string
  illustration?: string // Optional illustration URL for Values
}

interface TextDropdownProps {
  title: string
  items: DropdownItem[]
  hasIllustrations?: boolean
}

export default function TextDropdown({ title, items, hasIllustrations = false }: TextDropdownProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="w-full flex flex-col">
      {/* Section Title */}
      <h3 className="font-display font-bold text-[32px] leading-[1.2] tracking-[-1px] text-brand-vanilla mb-6">
        {title}
      </h3>

      {/* Dropdown Items */}
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="border border-brand-vanilla rounded-lg overflow-hidden bg-brand-charcoal"
          >
            {/* Dropdown Header */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-brand-charcoal/90 transition-colors"
              type="button"
              aria-expanded={openItems[item.id]}
            >
              <div className="flex items-center gap-4">
                {/* Illustration (for Values only) */}
                {hasIllustrations && item.illustration && (
                  <img
                    src={item.illustration}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                )}
                {/* Title */}
                <span className="font-accent text-xl leading-[1.5] text-brand-vanilla text-left">
                  {item.title}
                </span>
              </div>
              
              {/* Chevron */}
              <ChevronDown
                className={`w-5 h-5 text-brand-vanilla transition-transform duration-300 flex-shrink-0 ${
                  openItems[item.id] ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            {/* Dropdown Content */}
            {openItems[item.id] && (
              <div className="px-6 py-4 border-t border-brand-vanilla/20">
                <p className="font-text text-base leading-[1.5] text-brand-vanilla">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
