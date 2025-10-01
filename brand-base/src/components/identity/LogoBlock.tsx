import LogoFrame from './LogoFrame'

export default function LogoBlock() {
  return (
    <div className="flex flex-col gap-6 p-12">
      {/* Section Title */}
      <div className="flex flex-col gap-8">
        <h2 className="font-display text-d2-mobile md:text-d2-tablet tracking-[-2px] text-brand-vanilla">
          Logo
        </h2>
      </div>

      {/* Main Section */}
      <h3 className="font-display text-h4-mobile tracking-[-0.25px] text-brand-vanilla">
        Main
      </h3>

      <div className="flex flex-wrap gap-6">
        <LogoFrame
          title="Brandmark"
          logoType="brandmark"
          logoAlt="Brandmark logo"
        />
        <LogoFrame
          title="Combo"
          logoType="combo"
          logoAlt="Combo logo"
        />
        <LogoFrame
          title="Stacked"
          logoType="stacked"
          logoAlt="Stacked logo"
        />
        <LogoFrame
          title="Horizontal"
          logoType="horizontal"
          logoAlt="Horizontal logo"
        />
      </div>

      {/* Monogram Section */}
      <h3 className="font-display text-h4-mobile tracking-[-0.25px] text-brand-vanilla mt-6">
        Monogram
      </h3>

      <div className="flex flex-wrap gap-6">
        <LogoFrame
          title="Core"
          logoType="core"
          logoAlt="Core monogram"
        />
        <LogoFrame
          title="Outline"
          logoType="outline"
          logoAlt="Outline monogram"
        />
        <LogoFrame
          title="Filled"
          logoType="filled"
          logoAlt="Filled monogram"
        />
      </div>
    </div>
  )
}
