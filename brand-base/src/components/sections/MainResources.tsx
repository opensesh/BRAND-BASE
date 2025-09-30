import Card from '@components/common/Card'

export default function MainResources() {
  return (
    <section className="container-responsive py-8 md:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Card>
          <h3 className="text-lg font-medium">Design Tokens</h3>
          <p className="mt-1 text-sm opacity-80">Sync and transform tokens into Tailwind config.</p>
        </Card>
        <Card>
          <h3 className="text-lg font-medium">Components</h3>
          <p className="mt-1 text-sm opacity-80">Reusable, accessible UI building blocks.</p>
        </Card>
        <Card>
          <h3 className="text-lg font-medium">Guidelines</h3>
          <p className="mt-1 text-sm opacity-80">Usage patterns, voice & tone, and more.</p>
        </Card>
      </div>
    </section>
  )
}


