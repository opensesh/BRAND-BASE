interface DualHeadingTextProps {
  heading: string
  body: string
}

export default function DualHeadingText({ heading, body }: DualHeadingTextProps) {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Heading - H2 */}
      <h2 className="font-display font-bold text-[40px] leading-[1.2] tracking-[-1px] text-brand-vanilla">
        {heading}
      </h2>
      
      {/* Body Text - P1 */}
      <p className="font-text text-xl leading-[1.5] text-brand-vanilla max-w-[800px]">
        {body}
      </p>
    </div>
  )
}
