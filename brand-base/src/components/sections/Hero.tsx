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
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-brand-charcoal opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1184px] mx-auto px-6 md:px-12 pb-12 flex flex-col items-start justify-end gap-3">
        {/* Brand Logo */}
        <img
          src="http://localhost:3845/assets/c211f5a3d4f63b1df665a029a544dfcc056932ac.svg"
          alt="Brand Logo"
          className="w-40 h-auto"
        />

        {/* Main Heading - Display D1 with Glass Effect */}
        <h1 className="font-display font-normal text-[80px] md:text-[120px] leading-[1.2] tracking-[-4px] text-brand-vanilla backdrop-blur-sm bg-brand-vanilla/10 px-4 py-2 rounded-lg">
          Brand Basecamp
        </h1>

        {/* Subtitle - Body P2 */}
        <p className="font-text text-base leading-[1.5] text-brand-vanilla max-w-xl">
          Your central hub for brand assets, guidelines, and resources to create consistent, on-brand content
        </p>
      </div>
    </section>
  )
}