import { useState } from 'react'
import { ExternalLink, Globe } from 'lucide-react'

// Custom SVG icons from Figma - exact structure for pixel-perfect rendering
// Using Lucide Globe icon for simplicity
const OpenSessionIcon = () => (
  <Globe className="w-4 h-4" />
)

const SubstackIcon = () => (
  <div className="overflow-clip relative shrink-0 size-[16px]">
    <div className="absolute aspect-[195.2/222] bottom-[13.07%] left-[8px] overflow-clip top-[12.93%] translate-x-[-50%]">
      <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/89038d0585bdf94627b82de481f4f47017db7811.svg" />
    </div>
  </div>
)

const MediumIcon = () => (
  <div className="overflow-clip relative shrink-0 size-[16px]">
    <div className="absolute aspect-[258/145.6] bottom-[25.73%] left-[7.99px] top-[25.73%] translate-x-[-50%]">
      <div className="absolute bottom-0 left-0 right-[0.18%] top-0">
        <div
          className="absolute bottom-0 left-0 right-[0.18%] top-0"
          style={{
            maskImage: `url('http://localhost:3845/assets/a13030af1b5624f312827621c2a97345569a6d8d.svg')`,
            WebkitMaskImage: `url('http://localhost:3845/assets/a13030af1b5624f312827621c2a97345569a6d8d.svg')`,
            maskSize: '398.047px 225px',
            WebkitMaskSize: '398.047px 225px',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat'
          }}
        >
          <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/7cfe9de2df2c7981cc454105526ce28805a45b21.svg" />
        </div>
      </div>
    </div>
  </div>
)

const YouTubeIcon = () => (
  <div className="overflow-clip relative shrink-0 size-[16px]">
    <div className="absolute aspect-[525.5/295.594] bottom-[0.8%] overflow-clip top-[0.67%] translate-x-[-50%]" style={{ left: 'calc(100% - 7.986px)' }}>
      <div className="absolute h-[9.513px] translate-x-[-50%] translate-y-[-50%] w-[13.758px]" style={{ top: 'calc(50% - 0.01px)', left: 'calc(50% - 0.001px)' }}>
        <div className="absolute bottom-0 left-0 right-[0.4%] top-0">
          <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/d8c5d89cc85698f8b7b75954f830677a6f6e2fb3.svg" />
        </div>
      </div>
    </div>
  </div>
)

const FigmaIcon = () => (
  <div className="overflow-clip relative shrink-0 size-[16px]">
    <div className="absolute h-[14px] left-[7.5px] translate-x-[-50%] translate-y-[-50%] w-[9px]" style={{ top: 'calc(100% - 7.994px)' }}>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            maskImage: `url('http://localhost:3845/assets/8849242fa3763bd4a29638b458e9f912d5bf51bc.svg')`,
            WebkitMaskImage: `url('http://localhost:3845/assets/8849242fa3763bd4a29638b458e9f912d5bf51bc.svg')`,
            maskSize: '248px 372px',
            WebkitMaskSize: '248px 372px',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat'
          }}
        >
          <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/84f2b655e2732157523af9f9a05dd0950460fe98.svg" />
        </div>
      </div>
    </div>
  </div>
)

const InstagramIcon = () => (
  <div className="overflow-clip relative shrink-0 size-[16px]">
    <div className="absolute size-[14px] translate-x-[-50%] translate-y-[-50%]" style={{ top: 'calc(100% - 7.985px)', left: 'calc(100% - 7.997px)' }}>
      <div className="absolute inset-[24.52%_24.38%_24.38%_24.47%]">
        <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/dba1f865397c68ffbfc97ed7778b25c3148f9e59.svg" />
      </div>
      <div className="absolute inset-[17.25%_17.25%_70.48%_70.56%]">
        <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/12395308d61a5beb6f67a5df1c7a4e25d4952a4f.svg" />
      </div>
      <div className="absolute bottom-[0.09%] left-0 right-0 top-[0.09%]">
        <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/eeb63d3b7395b564724c97b58916dfcce1b1d69e.svg" />
      </div>
    </div>
  </div>
)

const LinkedInIcon = () => (
  <div className="overflow-clip relative shrink-0 size-[16px]">
    <div className="absolute size-[14px] translate-x-[-50%] translate-y-[-50%]" style={{ top: 'calc(100% - 7.991px)', left: 'calc(100% - 7.997px)' }}>
      <div className="absolute bottom-0 left-0 right-[-18.11%] top-0">
        <div
          className="absolute bottom-[0.82%] left-0 right-[0.13%] top-0"
          style={{
            maskImage: `url('http://localhost:3845/assets/eb380d26c128581d1893e39837969770278de2e0.svg')`,
            WebkitMaskImage: `url('http://localhost:3845/assets/eb380d26c128581d1893e39837969770278de2e0.svg')`,
            maskSize: '16.537px 14px',
            WebkitMaskSize: '16.537px 14px',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat'
          }}
        >
          <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/2bb5e40a9df127d853819e396e9c35f8dab02602.svg" />
        </div>
      </div>
    </div>
  </div>
)

export default function MainResources() {
  const [leftOpen, setLeftOpen] = useState(true) // Start with Key Resources open
  const [rightOpen, setRightOpen] = useState(false) // Start with Download Assets closed

  return (
    <section className="w-full max-w-[1184px] mx-auto px-6 md:px-12 py-12">
      {/* Main Resources Heading */}
      <h2 className="font-display text-h1-mobile md:text-h1-tablet xl:text-h1-desktop text-[#f0f0f0] mb-6">
        Main Resources
      </h2>

      {/* Two Accordions Side by Side */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Accordion: Key Resources */}
        <div className={`transition-all duration-300 rounded-lg border border-brand-vanilla shadow-lg overflow-hidden ${
          leftOpen ? 'flex-1 min-w-0' : 'flex-initial w-auto'
        }`}>
          <button
            onClick={() => setLeftOpen(!leftOpen)}
            className="w-full bg-brand-charcoal border-b border-[#595959] px-6 py-4 flex items-center justify-between gap-3 hover:bg-brand-charcoal/90 transition-colors"
            type="button"
          >
            <span className="font-text text-label text-brand-vanilla uppercase">Key Resources</span>
            <svg
              className={`w-4 h-2 text-brand-vanilla transition-transform duration-300 ${leftOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 14 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M1 1l6 6 6-6" />
            </svg>
          </button>

          {leftOpen && (
            <div className="bg-brand-charcoal px-6 py-8 space-y-8">
              {/* Figma File */}
              <div className="space-y-4">
                <h3 className="font-accent text-h5-mobile text-brand-vanilla">Figma File</h3>
                <p className="font-text text-b2 text-brand-vanilla">
                  Brand OS Comprehensive and expanding design system with all resources
                </p>
                <a
                  href="https://www.figma.com/design/t6ibLjzJFXY6HzU0bIahxw/BRAND-OS?node-id=11107-68411&t=w51tqPrTUlDRqfak-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-vanilla text-brand-charcoal rounded-full px-4 py-3 font-text text-button flex items-center justify-center gap-2 hover:bg-brand-aperol hover:text-brand-vanilla transition-colors"
                >
                  More Info
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10m0 0l-4-4m4 4l-4 4" />
                  </svg>
                </a>
              </div>

              {/* Brand Guidelines */}
              <div className="space-y-4">
                <h3 className="font-accent text-h5-mobile text-brand-vanilla">Brand Guidelines</h3>
                <p className="font-text text-b2 text-brand-vanilla">
                  Detailed visuals and instruction on how to use the brand across all mediumd
                </p>
                <a
                  href="https://www.figma.com/proto/t6ibLjzJFXY6HzU0bIahxw/BRAND-OS?page-id=19939%3A21956&node-id=20255-18337&viewport=465%2C-92%2C0.05&t=Fjx1co9Q53DPCGLw-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=20255%3A18337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-vanilla text-brand-charcoal rounded-full px-4 py-3 font-text text-button flex items-center justify-center gap-2 hover:bg-brand-aperol hover:text-brand-vanilla transition-colors"
                >
                  Full Slides
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10m0 0l-4-4m4 4l-4 4" />
                  </svg>
                </a>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h3 className="font-accent text-h5-mobile text-brand-vanilla">Contact</h3>
                <p className="font-text text-b2 text-brand-vanilla">
                  Can't find what you're after or need to talk to some about specifics.
                </p>
                <a
                  href="https://opensession.co/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-brand-vanilla text-brand-vanilla rounded-full px-4 py-3 font-text text-button flex items-center justify-center gap-2 hover:bg-brand-vanilla hover:text-brand-charcoal transition-colors"
                >
                  Get in Touch
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Right Accordion: Download Assets */}
        <div className={`transition-all duration-300 rounded-lg border border-brand-vanilla shadow-lg overflow-hidden ${
          rightOpen ? 'flex-1 min-w-0' : 'flex-initial w-auto'
        }`}>
          <button
            onClick={() => setRightOpen(!rightOpen)}
            className="w-full bg-brand-charcoal border-b border-[#595959] px-6 py-4 flex items-center justify-between gap-3 hover:bg-brand-charcoal/90 transition-colors"
            type="button"
          >
            <span className="font-text text-label text-brand-vanilla uppercase">Download Assets</span>
            <svg
              className={`w-4 h-2 text-brand-vanilla transition-transform duration-300 ${rightOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 14 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M1 1l6 6 6-6" />
            </svg>
          </button>

          {rightOpen && (
            <div className="bg-brand-charcoal px-6 py-8 space-y-8">
              {/* Download Links */}
              <div className="space-y-6">
                {[
                  'Icons',
                  'Logo Kit',
                  'Font Files',
                  'Illustrations',
                  'Colour Swatches',
                  'Creative Assets',
                ].map((item) => (
                  <div key={item} className="flex items-end gap-2 border-b border-[#787878] pb-1">
                    <h3 className="font-accent text-h5-mobile text-brand-vanilla flex-1">{item}</h3>
                    <button className="flex items-center gap-2 py-1 text-brand-vanilla font-text text-button hover:text-brand-aperol transition-colors">
                      Download
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M8 2v8m0 0l3-3m-3 3L5 7m-3 7h12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <p className="font-text text-caption text-brand-vanilla">Social Links</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { Icon: OpenSessionIcon, label: 'Website', url: 'https://opensession.co/' },
                    { Icon: SubstackIcon, label: 'Newsletter', url: 'https://open-session.link/substack-website' },
                    { Icon: MediumIcon, label: 'Medium', url: 'https://open-session.link/medium-website' },
                    { Icon: YouTubeIcon, label: 'YouTube', url: 'https://open-session.link/youtube-website' },
                    { Icon: FigmaIcon, label: 'Figma', url: 'https://open-session.link/figma-website' },
                    { Icon: InstagramIcon, label: 'Instagram', url: 'https://open-session.link/instagram-website' },
                    { Icon: LinkedInIcon, label: 'LinkedIn', url: 'https://open-session.link/linkedin-website' },
                  ].map(({ Icon, label, url }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-brand-vanilla bg-brand-charcoal flex items-center justify-center hover:bg-brand-aperol hover:border-brand-aperol transition-colors"
                      aria-label={label}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}