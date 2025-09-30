import { useRef, useState } from 'react'
import Accordion from '@components/common/Accordion'
import useIntersectionObserver from '@hooks/useIntersectionObserver'

type Props = { defaultOpen?: boolean; lazyLoad?: boolean }

export default function CoreSection({ defaultOpen = true, lazyLoad = false }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useIntersectionObserver(ref, { threshold: 0.2 })
  const [open, setOpen] = useState(defaultOpen)

  const shouldLoad = !lazyLoad || inView || open

  return (
    <div ref={ref} className="container-responsive py-8 md:py-12">
      <Accordion title="Core" isOpen={open} onOpenChange={setOpen} defaultOpen={defaultOpen}>
        {shouldLoad ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="opacity-0 animate-fade-in [animation-fill-mode:forwards]">
              <p className="text-sm opacity-80">
                Core resources and foundational guidelines for the brand system.
              </p>
            </div>
            <div className="opacity-0 animate-fade-in [animation-delay:120ms] [animation-fill-mode:forwards]">
              <ul className="list-disc list-inside text-sm opacity-90">
                <li>Principles</li>
                <li>Voice & Tone</li>
                <li>Usage</li>
              </ul>
            </div>
          </div>
        ) : null}
      </Accordion>
    </div>
  )
}


