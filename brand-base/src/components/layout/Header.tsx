import { useState, useEffect } from 'react'
import AnchorLinkWidget from '@components/common/AnchorLinkWidget'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 bg-brand-charcoal border-b border-[#787878]">
        <div className="w-full max-w-[1184px] mx-auto px-6 py-3 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img
                src="http://localhost:3845/assets/4616150fc23035aa4d566608ac01cc98af4f2698.svg"
                alt="Brand Logo"
                className="w-6 h-6 text-brand-vanilla"
              />
            </a>
          </div>

          {/* Hamburger Menu Icon (Mobile & Desktop) */}
          <div className="flex items-center justify-center w-6 h-6">
            <button
              className="relative w-6 h-6 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {/* Hamburger Lines - hidden when menu is open */}
              <div className={`absolute flex flex-col gap-[3px] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}>
                <span className="w-[18px] h-[1.5px] bg-brand-vanilla" />
                <span className="w-[18px] h-[1.5px] bg-brand-vanilla" />
              </div>

              {/* X Lines - hidden when menu is closed */}
              <div className={`absolute transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
                <span className="absolute w-[18px] h-[1.5px] bg-brand-vanilla rotate-45" />
                <span className="absolute w-[18px] h-[1.5px] bg-brand-vanilla -rotate-45" />
              </div>
            </button>
          </div>
        </div>
      </header>
      <AnchorLinkWidget menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  )
}