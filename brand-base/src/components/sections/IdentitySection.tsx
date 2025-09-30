import { useRef } from 'react'
import SectionDropdown from '@components/common/SectionDropdown'
import useIntersectionObserver from '@hooks/useIntersectionObserver'

type Props = { defaultOpen?: boolean; lazyLoad?: boolean }

export default function IdentitySection({ defaultOpen = false, lazyLoad = false }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useIntersectionObserver(ref as React.RefObject<Element>, { threshold: 0.2 })

  const shouldLoad = !lazyLoad || inView

  const identityLinks = [
    { id: 'color', label: 'Color', href: '#color' },
    { id: 'typography', label: 'Typography', href: '#typography' }
  ]

  return (
    <div ref={ref} className="w-full max-w-[1184px] mx-auto px-6 md:px-12 py-12">
      <SectionDropdown
        title="Identity"
        defaultOpen={defaultOpen}
        links={identityLinks}
        iconType="chevron"
      >
        {shouldLoad ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-accent text-[28px] leading-[1.5] text-brand-vanilla">Brand Colors</h3>
                <p className="font-text text-base leading-[1.25] text-brand-vanilla">
                  Our color palette reflects our brand personality and creates visual consistency across all touchpoints.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="space-y-2">
                    <div className="w-full h-12 bg-brand-charcoal border border-brand-vanilla rounded"></div>
                    <p className="font-text text-xs text-brand-vanilla">Charcoal</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-12 bg-brand-vanilla border border-brand-vanilla rounded"></div>
                    <p className="font-text text-xs text-brand-vanilla">Vanilla</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-12 bg-brand-aperol border border-brand-vanilla rounded"></div>
                    <p className="font-text text-xs text-brand-vanilla">Aperol</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-accent text-[28px] leading-[1.5] text-brand-vanilla">Typography</h3>
                <p className="font-text text-base leading-[1.25] text-brand-vanilla">
                  Our typography system ensures readability and maintains brand consistency across all communications.
                </p>
                <div className="space-y-4 mt-4">
                  <div>
                    <p className="font-display text-xl text-brand-vanilla">Display Font</p>
                    <p className="font-text text-sm text-brand-vanilla/70">Neue Haas Grotesk Display Pro</p>
                  </div>
                  <div>
                    <p className="font-text text-lg text-brand-vanilla">Text Font</p>
                    <p className="font-text text-sm text-brand-vanilla/70">Neue Haas Grotesk Text Pro</p>
                  </div>
                  <div>
                    <p className="font-accent text-lg text-brand-vanilla">Accent Font</p>
                    <p className="font-text text-sm text-brand-vanilla/70">Offbit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-brand-vanilla/50 font-text text-sm">
            Content loading...
          </div>
        )}
      </SectionDropdown>
    </div>
  )
}