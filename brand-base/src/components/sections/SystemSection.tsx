import { useRef } from 'react'
import SectionDropdown from '@components/common/SectionDropdown'
import useIntersectionObserver from '@hooks/useIntersectionObserver'

type Props = { defaultOpen?: boolean; lazyLoad?: boolean }

export default function SystemSection({ defaultOpen = false, lazyLoad = false }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useIntersectionObserver(ref as React.RefObject<Element>, { threshold: 0.2 })

  const shouldLoad = !lazyLoad || inView

  return (
    <div ref={ref} className="w-full max-w-[1184px] mx-auto px-6 md:px-12 py-12">
      <SectionDropdown
        title="System"
        number="03"
        defaultOpen={defaultOpen}
        iconType="chevron"
      >
        {shouldLoad ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-accent text-[28px] leading-[1.5] text-brand-vanilla">Design Components</h3>
                <p className="font-text text-base leading-[1.25] text-brand-vanilla">
                  Reusable components that maintain consistency and efficiency across all brand applications.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="p-4 border border-[#787878] rounded">
                    <p className="font-text text-sm text-brand-vanilla">Button Components</p>
                  </div>
                  <div className="p-4 border border-[#787878] rounded">
                    <p className="font-text text-sm text-brand-vanilla">Form Elements</p>
                  </div>
                  <div className="p-4 border border-[#787878] rounded">
                    <p className="font-text text-sm text-brand-vanilla">Navigation Items</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-accent text-[28px] leading-[1.5] text-brand-vanilla">Design Patterns</h3>
                <p className="font-text text-base leading-[1.25] text-brand-vanilla">
                  Established patterns for common user interactions and interface layouts that ensure consistency.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="p-4 border border-[#787878] rounded">
                    <p className="font-text text-sm text-brand-vanilla">Card Layouts</p>
                  </div>
                  <div className="p-4 border border-[#787878] rounded">
                    <p className="font-text text-sm text-brand-vanilla">Modal Patterns</p>
                  </div>
                  <div className="p-4 border border-[#787878] rounded">
                    <p className="font-text text-sm text-brand-vanilla">Grid Systems</p>
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