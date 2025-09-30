import { useRef, useState } from 'react'
import Accordion from '@components/common/Accordion'
import useIntersectionObserver from '@hooks/useIntersectionObserver'

type Props = { defaultOpen?: boolean; lazyLoad?: boolean }

export default function SystemSection({ defaultOpen = false, lazyLoad = true }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useIntersectionObserver(ref, { threshold: 0.2 })
  const [open, setOpen] = useState(defaultOpen)
  const shouldLoad = !lazyLoad || inView || open

  return (
    <div ref={ref} className="container-responsive py-8 md:py-12">
      <Accordion title="System" isOpen={open} onOpenChange={setOpen} defaultOpen={defaultOpen}>
        {shouldLoad ? (
          <div className="opacity-0 animate-fade-in [animation-fill-mode:forwards]">
            <p className="text-sm opacity-80">Components, patterns, and usage guidelines.</p>
          </div>
        ) : null}
      </Accordion>
    </div>
  )
}


