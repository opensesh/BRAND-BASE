import Button from '@components/common/Button'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-brand-charcoal/60 bg-brand-charcoal/90">
      <div className="container-responsive flex items-center justify-between py-3">
        <a href="#core" className="font-semibold tracking-tight">
          BRAND-BASE
        </a>
        <nav className="hidden md:flex items-center gap-3">
          <a href="#core" className="text-sm opacity-80 hover:opacity-100">Core</a>
          <a href="#identity" className="text-sm opacity-80 hover:opacity-100">Identity</a>
          <a href="#system" className="text-sm opacity-80 hover:opacity-100">System</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="secondary">Get Started</Button>
        </div>
      </div>
    </header>
  )
}


