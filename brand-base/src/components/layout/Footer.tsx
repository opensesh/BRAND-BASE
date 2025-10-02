import { Globe, ArrowUp } from 'lucide-react'

// Reuse social icon components from MainResources
const OpenSessionIcon = () => (
  <Globe className="w-4 h-4" />
)
const SubstackIcon = () => (
  <div className="overflow-clip relative shrink-0 size-[16px]">
    <div className="absolute aspect-[195.2/222] bottom-[13.07%] left-[8px] overflow-clip top-[12.93%] translate-x-[-50%]">
      <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/89038d0585bdf94627b82de481f4f47017db7811.svg" />
    </div>
  </div>
)

const MediumIcon = () => (
  <div className="overflow-clip relative shrink-0 size-[16px]">
    <div className="absolute aspect-[258/145.6] bottom-[25.73%] left-[7.99px] top-[25.73%] translate-x-[-50%]">
      <div className="absolute bottom-0 left-0 right-[0.18%] top-0">
        <div
          className="absolute bottom-0 left-0 right-[0.18%] top-0"
          style={{
            maskImage: `url('http://localhost:3845/assets/a13030af1b5624f312827621c2a97345569a6d8d.svg')`,
            WebkitMaskImage: `url('http://localhost:3845/assets/a13030af1b5624f312827621c2a97345569a6d8d.svg')`,
            maskSize: '398.047px 225px',
            WebkitMaskSize: '398.047px 225px',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat'
          }}
        >
          <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/7cfe9de2df2c7981cc454105526ce28805a45b21.svg" />
        </div>
      </div>
    </div>
  </div>
)

const YouTubeIcon = () => (
  <div className="overflow-clip relative shrink-0 size-[16px]">
    <div className="absolute aspect-[525.5/295.594] bottom-[0.8%] overflow-clip top-[0.67%] translate-x-[-50%]" style={{ left: 'calc(100% - 7.986px)' }}>
      <div className="absolute h-[9.513px] translate-x-[-50%] translate-y-[-50%] w-[13.758px]" style={{ top: 'calc(50% - 0.01px)', left: 'calc(50% - 0.001px)' }}>
        <div className="absolute bottom-0 left-0 right-[0.4%] top-0">
          <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/d8c5d89cc85698f8b7b75954f830677a6f6e2fb3.svg" />
        </div>
      </div>
    </div>
  </div>
)

const FigmaIcon = () => (
  <div className="overflow-clip relative shrink-0 size-[16px]">
    <div className="absolute h-[14px] left-[7.5px] translate-x-[-50%] translate-y-[-50%] w-[9px]" style={{ top: 'calc(100% - 7.994px)' }}>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            maskImage: `url('http://localhost:3845/assets/8849242fa3763bd4a29638b458e9f912d5bf51bc.svg')`,
            WebkitMaskImage: `url('http://localhost:3845/assets/8849242fa3763bd4a29638b458e9f912d5bf51bc.svg')`,
            maskSize: '248px 372px',
            WebkitMaskSize: '248px 372px',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat'
          }}
        >
          <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/84f2b655e2732157523af9f9a05dd0950460fe98.svg" />
        </div>
      </div>
    </div>
  </div>
)

const InstagramIcon = () => (
  <div className="overflow-clip relative shrink-0 size-[16px]">
    <div className="absolute size-[14px] translate-x-[-50%] translate-y-[-50%]" style={{ top: 'calc(100% - 7.985px)', left: 'calc(100% - 7.997px)' }}>
      <div className="absolute inset-[24.52%_24.38%_24.38%_24.47%]">
        <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/dba1f865397c68ffbfc97ed7778b25c3148f9e59.svg" />
      </div>
      <div className="absolute inset-[17.25%_17.25%_70.48%_70.56%]">
        <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/12395308d61a5beb6f67a5df1c7a4e25d4952a4f.svg" />
      </div>
      <div className="absolute bottom-[0.09%] left-0 right-0 top-[0.09%]">
        <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/eeb63d3b7395b564724c97b58916dfcce1b1d69e.svg" />
      </div>
    </div>
  </div>
)

const LinkedInIcon = () => (
  <div className="overflow-clip relative shrink-0 size-[16px]">
    <div className="absolute size-[14px] translate-x-[-50%] translate-y-[-50%]" style={{ top: 'calc(100% - 7.991px)', left: 'calc(100% - 7.997px)' }}>
      <div className="absolute bottom-0 left-0 right-[-18.11%] top-0">
        <div
          className="absolute bottom-[0.82%] left-0 right-[0.13%] top-0"
          style={{
            maskImage: `url('http://localhost:3845/assets/eb380d26c128581d1893e39837969770278de2e0.svg')`,
            WebkitMaskImage: `url('http://localhost:3845/assets/eb380d26c128581d1893e39837969770278de2e0.svg')`,
            maskSize: '16.537px 14px',
            WebkitMaskSize: '16.537px 14px',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat'
          }}
        >
          <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/2bb5e40a9df127d853819e396e9c35f8dab02602.svg" />
        </div>
      </div>
    </div>
  </div>
)

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1e1e1e] w-full">
      <div className="max-w-[1327px] mx-auto px-6 py-20 flex flex-wrap gap-[60px] items-end justify-between">
        {/* Left Section: Logo and Tagline */}
        <div className="flex-1 min-w-[260px] flex flex-col items-start pr-12">
          {/* Logo - Using single combo SVG to preserve aspect ratio */}
          <div className="mb-3 pl-3">
            <img
              src="/logos/logo_main_combo_vanilla.svg"
              alt="Open Session"
              className="h-[50px] w-auto"
            />
          </div>

          {/* Tagline and Copyright */}
          <div className="flex flex-wrap gap-[19px] items-center px-3">
            <p className="font-accent text-[20px] text-foreground leading-[1.5]">
              Brand, Design, Create
            </p>
            <p className="font-text text-caption text-foreground">
              San Diego, CA © 2025
            </p>
          </div>
        </div>

        {/* Right Section: Back to Top and Social Links */}
        <div className="flex-1 min-w-[200px] max-w-[360px] flex flex-col gap-6 px-3">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-full bg-background border border-border rounded-lg px-3 py-3 flex items-center justify-center gap-3 hover:border-brand-vanilla transition-colors"
          >
            <ArrowUp className="w-[18px] h-[18px] text-foreground" />
            <span className="font-text text-button text-foreground">Back to top</span>
          </button>

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <p className="font-accent text-[18px] text-foreground leading-[1.5]">Social Links</p>
            <div className="flex flex-wrap gap-2">
              {[
                { Icon: OpenSessionIcon, label: 'Website', url: 'https://opensession.co/' },
                { Icon: SubstackIcon, label: 'Newsletter', url: 'https://open-session.link/substack-website' },
                { Icon: MediumIcon, label: 'Medium', url: 'https://open-session.link/medium-website' },
                { Icon: YouTubeIcon, label: 'YouTube', url: 'https://open-session.link/youtube-website' },
                { Icon: FigmaIcon, label: 'Figma', url: 'https://open-session.link/figma-website' },
                { Icon: InstagramIcon, label: 'Instagram', url: 'https://open-session.link/instagram-website' },
                { Icon: LinkedInIcon, label: 'LinkedIn', url: 'https://open-session.link/linkedin-website' },
              ].map(({ Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-brand-vanilla bg-background flex items-center justify-center hover:bg-brand-aperol hover:border-brand-aperol transition-colors"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


