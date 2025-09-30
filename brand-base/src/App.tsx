import { Suspense, lazy, useMemo } from 'react'

const Header = lazy(() => import('@components/layout/Header'))
const Hero = lazy(() => import('@components/sections/Hero'))
const MainResources = lazy(() => import('@components/sections/MainResources'))
const CoreSection = lazy(() => import('@components/sections/CoreSection'))
const IdentitySection = lazy(() => import('@components/sections/IdentitySection'))
const SystemSection = lazy(() => import('@components/sections/SystemSection'))
const Footer = lazy(() => import('@components/layout/Footer'))

export default function App() {
  const fallback = useMemo(
    () => <div className="container-responsive py-12 text-sm opacity-70">Loading…</div>,
    [],
  )

  return (
    <div className="min-h-screen bg-brand-charcoal text-brand-vanilla">
      <Suspense fallback={fallback}>
        <Header />
      </Suspense>
      <main>
        <Suspense fallback={fallback}>
          <Hero />
        </Suspense>
        <Suspense fallback={fallback}>
          <MainResources />
        </Suspense>
        <section id="core">
          <Suspense fallback={fallback}>
            <CoreSection defaultOpen />
          </Suspense>
        </section>
        <section id="identity">
          <Suspense fallback={fallback}>
            <IdentitySection defaultOpen={false} lazyLoad />
          </Suspense>
        </section>
        <section id="system">
          <Suspense fallback={fallback}>
            <SystemSection defaultOpen={false} lazyLoad />
          </Suspense>
        </section>
      </main>
      <Suspense fallback={fallback}>
        <Footer />
      </Suspense>
    </div>
  )
}