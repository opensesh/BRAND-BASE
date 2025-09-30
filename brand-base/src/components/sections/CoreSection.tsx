import { useRef } from 'react'
import SectionDropdown from '@components/common/SectionDropdown'
import useIntersectionObserver from '@hooks/useIntersectionObserver'

type Props = { defaultOpen?: boolean; lazyLoad?: boolean }

export default function CoreSection({ defaultOpen = true, lazyLoad = false }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useIntersectionObserver(ref as React.RefObject<Element>, { threshold: 0.2 })

  const shouldLoad = !lazyLoad || inView

  return (
    <div ref={ref} className="w-full max-w-[1184px] mx-auto px-6 md:px-12 py-12">
      <SectionDropdown
        title="Core"
        number="01"
        defaultOpen={defaultOpen}
        iconType="chevron"
      >
        {shouldLoad ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-accent text-[28px] leading-[1.5] text-brand-vanilla">Brand Mission</h3>
                <p className="font-text text-base leading-[1.25] text-brand-vanilla">
                  Our mission is to create meaningful connections through authentic brand experiences that inspire and engage our community.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-accent text-[28px] leading-[1.5] text-brand-vanilla">Core Values</h3>
                <ul className="font-text text-base leading-[1.25] text-brand-vanilla space-y-2">
                  <li>• Authenticity</li>
                  <li>• Innovation</li>
                  <li>• Community</li>
                  <li>• Excellence</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-accent text-[28px] leading-[1.5] text-brand-vanilla">Brand Voice</h3>
              <p className="font-text text-base leading-[1.25] text-brand-vanilla">
                Our voice is confident yet approachable, professional yet human. We communicate with clarity and purpose, 
                always staying true to our brand values while connecting authentically with our audience.
              </p>
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