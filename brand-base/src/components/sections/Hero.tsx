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

        {/* Main Heading - Display D1 */}
        <h1 className="font-display font-normal text-[80px] md:text-[120px] leading-[1.2] tracking-[-4px] text-brand-vanilla">
          Brand Base
        </h1>

        {/* Subtitle - Body P1 */}
        <p className="font-text text-xl leading-[1.25] text-brand-vanilla max-w-xl">
          Find up-to-date brand assets and guidelines to create content
        </p>
      </div>
    </section>
  )
}