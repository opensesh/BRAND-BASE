interface DualHeadingTextProps {
  heading: string
  body: string
}

export default function DualHeadingText({ heading, body }: DualHeadingTextProps) {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Heading - H3 style from Figma */}
      <h3 className="font-accent font-normal text-[28px] leading-[1.5] text-brand-vanilla">
        {heading}
      </h3>
      
      {/* Body Text - Body P1 from Figma */}
      <p className="font-text font-normal text-xl leading-[1.25] text-brand-vanilla">
        {body}
      </p>
    </div>
  )
}
