export default function Hero() {
  return (
    <section className="relative h-[768px] w-full overflow-hidden flex items-end justify-start">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src="http://localhost:3845/assets/814705a509d7684ed52ceafd1f239ac0ab41a989.png"
          alt="Brand Basecamp Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay - Lighter */}
        <div className="absolute inset-0 bg-brand-charcoal opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1184px] mx-auto px-6 md:px-12 pb-12 flex flex-col items-start justify-end gap-3 overflow-visible">
        {/* Brand Logo */}
        <img
          src="http://localhost:3845/assets/c211f5a3d4f63b1df665a029a544dfcc056932ac.svg"
          alt="Brand Logo"
          className="w-40 h-auto"
        />

        {/* Main Heading - Display D2 */}
        <h1 className="font-display text-d2-mobile md:text-d2-tablet xl:text-d2-desktop text-brand-vanilla">
          Brand Base
        </h1>

        {/* Subtitle - H4 */}
        <p className="font-display text-h4-mobile md:text-h4-tablet xl:text-h4-desktop text-white">
          Our home page for all brand assets, systems, and guidelines
        </p>
      </div>
    </section>
  )
}