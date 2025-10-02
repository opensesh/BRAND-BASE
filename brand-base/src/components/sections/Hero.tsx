import { ChevronRight } from "lucide-react"
import Button from "@components/common/Button"

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
      {/* Grid BG */}
      <div
        className="absolute inset-0 opacity-30 w-full h-full
        bg-[linear-gradient(to_right,#d0d0d0_1px,transparent_1px),linear-gradient(to_bottom,#d0d0d0_1px,transparent_1px)]
        dark:bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)]
        bg-[size:6rem_5rem]
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        style={{ zIndex: 1 }}
      />

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