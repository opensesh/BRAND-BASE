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
      <div className="relative z-10 w-full max-w-[1184px] mx-auto p-12 flex flex-col items-start justify-end gap-3 overflow-visible">
        {/* Brand Logo */}
        <img
          src="http://localhost:3845/assets/c211f5a3d4f63b1df665a029a544dfcc056932ac.svg"
          alt="Brand Logo"
          className="w-40 h-40"
        />

        {/* Main Heading - Display D2 */}
        <h1 className="text-d2 text-brand-vanilla">
          Brand Base
        </h1>

        {/* Subtitle - H4 */}
        <p className="text-h4 text-brand-vanilla">
          Our home page for all brand assets, systems, and guidelines
        </p>
      </div>
    </section>
  )
}