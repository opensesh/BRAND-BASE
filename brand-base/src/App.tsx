import { Suspense, lazy, useMemo, useEffect } from 'react'
import { ThemeProvider } from '@/contexts/ThemeContext'

const Header = lazy(() => import('@components/layout/Header'))
const Hero = lazy(() => import('@components/sections/Hero'))
const MainResources = lazy(() => import('@components/sections/MainResources'))
const CoreSection = lazy(() => import('@components/sections/CoreSection'))
const IdentitySection = lazy(() => import('@components/sections/IdentitySection'))
const SystemSection = lazy(() => import('@components/sections/SystemSection'))
const Footer = lazy(() => import('@components/layout/Footer'))

export default function App() {
  // Clear hash on initial load if needed
  useEffect(() => {
    if (window.location.hash && window.location.pathname === '/') {
      // Preserve scroll position but clean URL
      const scrollToId = window.location.hash.slice(1)
      window.history.replaceState(null, '', window.location.pathname)
      
      // Optional: scroll to the section if it exists
      if (scrollToId) {
        setTimeout(() => {
          const element = document.getElementById(scrollToId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }
  }, [])
  const fallback = useMemo(
    () => <div className="container-responsive py-12 text-sm opacity-70">Loading…</div>,
    [],
  )

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
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
    </ThemeProvider>
  )
}