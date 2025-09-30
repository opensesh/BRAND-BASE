interface Column {
  id: string
  title: string
  description: string
}

interface TextColumnsProps {
  heading: string
  columns: Column[]
}

export default function TextColumns({ heading, columns }: TextColumnsProps) {
  return (
    <div className="w-full flex flex-col gap-8">
      {/* Section Heading - H3 */}
      <h3 className="font-display font-bold text-[32px] leading-[1.2] tracking-[-1px] text-brand-vanilla">
        {heading}
      </h3>

      {/* Three Columns - Flexbox that wraps, min-width 300px */}
      <div className="flex flex-wrap gap-6">
        {columns.map((column) => (
          <div
            key={column.id}
            className="flex-1 min-w-[300px] flex flex-col gap-3"
          >
            {/* Column Title - H4 */}
            <h4 className="font-text font-medium text-lg leading-[1.5] text-brand-vanilla">
              {column.title}
            </h4>
            
            {/* Column Description - Body P2 */}
            <p className="font-text text-base leading-[1.5] text-brand-vanilla">
              {column.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
