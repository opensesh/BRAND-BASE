import { useState } from 'react'
import { Globe, Mail, FileText, Youtube, Facebook, Instagram, Linkedin, Figma, ExternalLink } from 'lucide-react'

export default function MainResources() {
  const [leftOpen, setLeftOpen] = useState(true) // Start with Key Resources open
  const [rightOpen, setRightOpen] = useState(false) // Start with Download Assets closed

  return (
    <section className="w-full max-w-[1184px] mx-auto px-6 md:px-12 py-12">
      {/* Main Resources Heading */}
      <h2 className="text-h1 text-[#f0f0f0] mb-6">
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
            <span className="text-label text-white">Key Resources</span>
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
                <h3 className="text-h5 text-brand-vanilla">Figma File</h3>
                <p className="text-b2 text-brand-vanilla">
                  Brand OS Comprehensive and expanding design system with all resources
                </p>
                <button className="w-full bg-brand-vanilla text-brand-charcoal rounded-full px-4 py-3 text-button flex items-center justify-center gap-2 hover:bg-brand-aperol hover:text-brand-vanilla transition-colors">
                  More Info
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10m0 0l-4-4m4 4l-4 4" />
                  </svg>
                </button>
              </div>

              {/* Brand Guidelines */}
              <div className="space-y-4">
                <h3 className="text-h5 text-brand-vanilla">Brand Guidelines</h3>
                <p className="text-b2 text-brand-vanilla">
                  Detailed visuals and instruction on how to use the brand across all mediumd
                </p>
                <button className="w-full bg-brand-vanilla text-brand-charcoal rounded-full px-4 py-3 text-button flex items-center justify-center gap-2 hover:bg-brand-aperol hover:text-brand-vanilla transition-colors">
                  Full Slides
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10m0 0l-4-4m4 4l-4 4" />
                  </svg>
                </button>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h3 className="text-h5 text-brand-vanilla">Contact</h3>
                <p className="text-b2 text-brand-vanilla">
                  Can't find what you're after or need to talk to some about specifics.
                </p>
                <button className="w-full border border-brand-vanilla text-brand-vanilla rounded-full px-4 py-3 text-button flex items-center justify-center gap-2 hover:bg-brand-vanilla hover:text-brand-charcoal transition-colors">
                  Get in Touch
                  <ExternalLink className="w-4 h-4" />
                </button>
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
            <span className="text-label text-white">Download Assets</span>
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
                    <h3 className="text-h5 text-white flex-1">{item}</h3>
                    <button className="flex items-center gap-2 py-1 text-white text-button hover:text-brand-aperol transition-colors">
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
                <p className="text-caption text-brand-vanilla">Social Links</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { Icon: Globe, label: 'Website' },
                    { Icon: Mail, label: 'Newsletter' },
                    { Icon: FileText, label: 'Medium' },
                    { Icon: Youtube, label: 'YouTube' },
                    { Icon: Facebook, label: 'Facebook' },
                    { Icon: Instagram, label: 'Instagram' },
                    { Icon: Linkedin, label: 'LinkedIn' },
                    { Icon: Figma, label: 'Figma' },
                  ].map(({ Icon, label }) => (
                    <button
                      key={label}
                      className="w-10 h-10 rounded-full border border-brand-vanilla bg-brand-charcoal flex items-center justify-center hover:bg-brand-aperol hover:border-brand-aperol transition-colors"
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4 text-brand-vanilla" />
                    </button>
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