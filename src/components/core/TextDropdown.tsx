import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
      <h2 className="font-display text-d2-mobile md:text-d2-tablet xl:text-d2-desktop text-brand-vanilla max-w-3xl">
        {title}
      </h2>

      {/* Dropdown Items - Centered with max-width */}
      <div className="flex flex-col max-w-4xl mx-auto w-full">
        {items.map((item) => (
          <div key={item.id} className="w-full border-b border-brand-vanilla group hover:border-brand-aperol transition-colors">
            {/* Dropdown Header */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full py-6 flex items-center gap-4 transition-colors"
              type="button"
              aria-expanded={openItems[item.id]}
            >
              {/* Illustration (for Values only) - 32px with padding to prevent cutoff */}
              {hasIllustrations && item.illustration && (
                <div className="w-8 h-8 flex-shrink-0 p-1 group-hover:brightness-0 group-hover:saturate-100 group-hover:[filter:invert(45%)_sepia(99%)_saturate(2783%)_hue-rotate(5deg)_brightness(101%)_contrast(102%)] transition-all">
                  <img
                    src={item.illustration}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Title - H4 (22px, Display Medium, 600 weight) */}
              <h4 className="text-h4-mobile md:text-h4-tablet xl:text-h4-desktop text-brand-vanilla text-left flex-1 group-hover:text-brand-aperol transition-colors">
                {item.title}
              </h4>

              {/* Chevron */}
              <ChevronDown
                className={`w-4 h-4 text-brand-vanilla transition-all duration-300 flex-shrink-0 group-hover:text-brand-aperol ${
                  openItems[item.id] ? 'rotate-0' : 'rotate-180'
                }`}
              />
            </button>

            {/* Dropdown Content - Body text aligns with title */}
            <AnimatePresence initial={false}>
              {openItems[item.id] && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className={`pb-8 ${hasIllustrations ? 'pl-12' : 'pl-0'}`}
                >
                  <p className="text-b1 text-brand-vanilla leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
