import { useState, useEffect } from 'react'
import { DitheringShader } from './dithering-shader'

interface LoadingScreenProps {
  onComplete?: () => void
  minDuration?: number
}

export function LoadingScreen({ onComplete, minDuration = 2000 }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        onComplete?.()
      }, 600) // Wait for fade out animation
    }, minDuration)

    return () => clearTimeout(timer)
  }, [minDuration, onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-brand-charcoal transition-opacity duration-600 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="w-full h-full max-w-[800px] max-h-[800px] aspect-square flex items-center justify-center relative">
        <DitheringShader
          shape="ripple"
          type="2x2"
          colorBack="#191919"
          colorFront="#FE5102"
          pxSize={2}
          speed={1.2}
          width={800}
          height={800}
          className="absolute inset-0"
        />
      </div>
      <span className="pointer-events-none z-10 text-center font-accent absolute text-brand-vanilla tracking-normal" style={{ fontSize: '40px', lineHeight: '1.25' }}>
        LOADING
      </span>
    </div>
  )
}
