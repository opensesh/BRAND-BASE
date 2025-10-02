import { ChevronRight } from "lucide-react"
import Button from "@components/common/Button"
import FaultyTerminal from "@components/ui/faulty-terminal"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-32 pb-20 px-6 text-center md:px-8
      h-[690px] overflow-hidden
      bg-[linear-gradient(to_bottom,#FFFAEE,#FFFAEE_50%,#e8e8e8_88%)]
      dark:bg-[linear-gradient(to_bottom,#191919,#191919_50%,#0a0a0a_88%)]
      rounded-b-xl"
    >
      {/* FaultyTerminal Effect - Layer 0 (behind everything) */}
      <div
        className="absolute inset-0 w-full h-full opacity-20"
        style={{ zIndex: 0 }}
      >
        <FaultyTerminal
          scale={2}
          gridMul={[1.5, 1]}
          digitSize={1.2}
          timeScale={0.5}
          scanlineIntensity={0.5}
          glitchAmount={0.8}
          flickerAmount={0.6}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#FE5102"
          mouseReact={false}
          pageLoadAnimation={true}
          brightness={1}
        />
      </div>

      {/* Title */}
      <h1
        className="animate-fade-in text-balance relative
        bg-gradient-to-br from-brand-vanilla from-30% to-brand-vanilla/40
        bg-clip-text py-6 font-display text-d2-mobile md:text-d2-tablet xl:text-d2-desktop
        leading-none tracking-tighter
        text-transparent"
        style={{ animationDelay: '0.2s', opacity: 0, zIndex: 10 }}
      >
        Brand OS
      </h1>

      {/* Subtitle */}
      <p
        className="animate-fade-in mb-12 text-balance relative
        text-lg tracking-tight text-brand-vanilla/60 font-text
        md:text-xl"
        style={{ animationDelay: '0.4s', opacity: 0, zIndex: 10 }}
      >
        the basecamp for our brand
      </p>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4 flex-wrap animate-fade-in relative" style={{ animationDelay: '0.6s', opacity: 0, zIndex: 10 }}>
        <button className="px-6 py-3 text-sm text-brand-vanilla/70 font-text
          bg-gradient-to-tr from-brand-vanilla/5 via-brand-vanilla/10 to-transparent
          border-[2px] border-brand-vanilla/20
          rounded-full w-fit tracking-tight uppercase
          transition-all duration-300 hover:border-brand-vanilla/40 hover:text-brand-vanilla/90">
          Core
        </button>
        <button className="px-6 py-3 text-sm text-brand-vanilla/70 font-text
          bg-gradient-to-tr from-brand-vanilla/5 via-brand-vanilla/10 to-transparent
          border-[2px] border-brand-vanilla/20
          rounded-full w-fit tracking-tight uppercase
          transition-all duration-300 hover:border-brand-vanilla/40 hover:text-brand-vanilla/90">
          Identity
        </button>
        <button className="px-6 py-3 text-sm text-brand-vanilla/70 font-text
          bg-gradient-to-tr from-brand-vanilla/5 via-brand-vanilla/10 to-transparent
          border-[2px] border-brand-vanilla/20
          rounded-full w-fit tracking-tight uppercase
          transition-all duration-300 hover:border-brand-vanilla/40 hover:text-brand-vanilla/90">
          System
        </button>
      </div>

      {/* Bottom Fade */}
      <div
        className="animate-fade-up-no-translate relative mt-32 opacity-0 [perspective:2000px]
        after:absolute after:inset-0 after:z-50
        after:[background:linear-gradient(to_top,#191919_10%,transparent)]"
      />
    </section>
  )
}