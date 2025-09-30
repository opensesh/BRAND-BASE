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
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div key={item.id} className="w-full">
            {/* Dropdown Header */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full py-4 flex items-center justify-between hover:opacity-80 transition-opacity"
              type="button"
              aria-expanded={openItems[item.id]}
            >
              <div className="flex items-center gap-4">
                {/* Illustration (for Values only) */}
                {hasIllustrations && item.illustration && (
                  <img
                    src={item.illustration}
                    alt={item.title}
                    className="w-16 h-16 object-contain flex-shrink-0"
                  />
                )}
                {/* Title - H3 */}
                <h3 className="font-accent font-normal text-[28px] leading-[1.5] text-brand-vanilla text-left">
                  {item.title}
                </h3>
              </div>
              
              {/* Chevron */}
              <ChevronDown
                className={`w-6 h-6 text-brand-vanilla transition-transform duration-300 flex-shrink-0 ${
                  openItems[item.id] ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            {/* Dropdown Content */}
            {openItems[item.id] && (
              <div className="pt-3 pl-20">
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
