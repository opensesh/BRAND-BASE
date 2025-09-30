import Button from '@components/common/Button'

export default function Hero() {
  return (
    <section className="container-responsive py-10 md:py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight font-display">
          Build your brand system fast
        </h1>
        <p className="mt-4 text-sm md:text-base opacity-80">
          Opinionated, component-driven brand foundation with lazy-loaded sections for performance.
        </p>
        <div className="mt-6 flex gap-3">
          <Button>Explore Core</Button>
          <Button variant="secondary">Preview Components</Button>
        </div>
      </div>
    </section>
  )
}


