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
      <div className="relative z-10 w-full max-w-[1184px] mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col items-start justify-end h-full">
        {/* Brand Logo */}
        <div className="mb-4">
          <img
            src="http://localhost:3845/assets/c211f5a3d4f63b1df665a029a544dfcc056932ac.svg"
            alt="Brand Logo"
            className="w-40 h-auto"
          />
        </div>

        {/* Main Heading */}
        <h1 className="font-accent text-brand-vanilla text-6xl md:text-[120px] leading-[1.25] md:leading-[1.2] tracking-[-4px] mb-4">
          Brand Base
        </h1>

        {/* Subtitle */}
        <p className="font-text text-brand-vanilla text-lg md:text-xl leading-[1.25] max-w-2xl">
          Find up-to-date brand assets and guideline to create content
        </p>
      </div>
    </section>
  )
}