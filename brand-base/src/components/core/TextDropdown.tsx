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
    <div className="w-full flex flex-col gap-12">
      {/* Section Title - D2 */}
      <h2 className="font-display font-normal text-[56px] leading-[1.2] tracking-[-2px] text-brand-vanilla">
        {title}
      </h2>

      {/* Dropdown Items */}
      <div className="flex flex-col">
        {items.map((item) => (
          <div key={item.id} className="w-full border-b border-brand-vanilla">
            {/* Dropdown Header */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full py-6 flex items-center gap-6 hover:opacity-80 transition-opacity"
              type="button"
              aria-expanded={openItems[item.id]}
            >
              {/* Illustration (for Values only) - fills container */}
              {hasIllustrations && item.illustration && (
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={item.illustration}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              
              {/* Title - H4 */}
              <h4 className="font-accent font-normal text-xl leading-[1.5] text-brand-vanilla text-left flex-1">
                {item.title}
              </h4>
              
              {/* Chevron */}
              <ChevronDown
                className={`w-5 h-5 text-brand-vanilla transition-transform duration-300 flex-shrink-0 ${
                  openItems[item.id] ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            {/* Dropdown Content */}
            {openItems[item.id] && (
              <div className="pb-6 pl-[88px]">
                <p className="font-text font-normal text-xl leading-[1.5] text-brand-vanilla">
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
