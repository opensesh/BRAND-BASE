interface DualHeadingTextProps {
  title: string // D2 title (e.g., "Mission")
  heading: string // H2 heading (e.g., "Help the world...")
  body: string // B1 body text
}

export default function DualHeadingText({ title, heading, body }: DualHeadingTextProps) {
  return (
    <div className="w-full flex flex-col gap-12">
      {/* Title - D2 (Display 2) */}
      <h2 className="font-display font-normal text-[56px] leading-[1.2] tracking-[-2px] text-brand-vanilla">
        {title}
      </h2>
      
      {/* Heading + Body Container - 24px gap */}
      <div className="flex flex-col gap-6">
        {/* Heading - H2 */}
        <h3 className="font-display font-bold text-[40px] leading-[1.2] tracking-[-1px] text-brand-vanilla">
          {heading}
        </h3>
        
        {/* Body Text - B1 (Body 1) */}
        <p className="font-text font-normal text-xl leading-[1.5] text-brand-vanilla">
          {body}
        </p>
      </div>
    </div>
  )
}
