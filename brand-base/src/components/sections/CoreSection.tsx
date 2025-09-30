import { useRef } from 'react'
import SectionDropdown from '@components/common/SectionDropdown'
import DualHeadingText from '@components/core/DualHeadingText'
import TextDropdown from '@components/core/TextDropdown'
import TextColumns from '@components/core/TextColumns'
import useIntersectionObserver from '@hooks/useIntersectionObserver'

type Props = { defaultOpen?: boolean; lazyLoad?: boolean }

export default function CoreSection({ defaultOpen = true, lazyLoad = false }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useIntersectionObserver(ref as React.RefObject<Element>, { threshold: 0.2 })

  const shouldLoad = !lazyLoad || inView

  // Mission content
  const missionContent = {
    title: "Mission",
    heading: "Help the world make the most of technology",
    body: "We envision a world where anyone can access the level of design once reserved for tech giants. A future where bold branding, creative AI, and great content fuel growth and connection. We want to wake up knowing our work helps people create."
  }

  // Values content with illustrations - 5 items (matching Figma screenshots)
  // Using placeholder SVG data URLs until actual assets are available
  const valuesItems = [
    {
      id: 'curiosity',
      title: 'Curiousity',
      description: 'We believe curiosity is essential to staying on the cutting edge of design and innovation.',
      illustration: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"%3E%3Ccircle cx="32" cy="32" r="28" fill="%23FFFAEE"/%3E%3C/svg%3E'
    },
    {
      id: 'solutions',
      title: 'Solutions',
      description: 'Every initiative we undertake—whether for clients or our community—is driven by problem-solving and impactful outcomes.',
      illustration: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"%3E%3Crect x="12" y="12" width="40" height="40" fill="%23FFFAEE"/%3E%3C/svg%3E'
    },
    {
      id: 'respect',
      title: 'Respect',
      description: 'We treat everyone with respect and wield technology responsibly, understanding its potential and its limits.',
      illustration: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"%3E%3Cpath d="M32 8L52 56H12L32 8Z" fill="%23FFFAEE"/%3E%3C/svg%3E'
    },
    {
      id: 'connection',
      title: 'Connection',
      description: 'We nurture relationships within our community and brand ecosystems through meaningful engagement and collaborative design systems.',
      illustration: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"%3E%3Ccircle cx="20" cy="32" r="12" fill="%23FFFAEE"/%3E%3Ccircle cx="44" cy="32" r="12" fill="%23FFFAEE"/%3E%3C/svg%3E'
    },
    {
      id: 'transparency',
      title: 'Transparency',
      description: 'Celebrate who we are, how we got here, and how we help clients and community grow',
      illustration: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"%3E%3Cpolygon points="32,8 56,24 56,48 32,56 8,48 8,24" fill="%23FFFAEE"/%3E%3C/svg%3E'
    }
  ]

  // Pillars content (no illustrations)
  const pillarsItems = [
    {
      id: 'consistency',
      title: 'Consistency',
      description: 'Maintaining a unified brand presence across all touchpoints ensures recognition and builds trust with our audience.'
    },
    {
      id: 'clarity',
      title: 'Clarity',
      description: 'Clear communication and straightforward messaging make our brand accessible and easy to understand.'
    },
    {
      id: 'flexibility',
      title: 'Flexibility',
      description: 'Adapting to different contexts while maintaining core identity allows our brand to thrive in diverse environments.'
    },
    {
      id: 'purpose',
      title: 'Purpose',
      description: 'Every brand element serves a specific function and contributes to our overall mission and goals.'
    }
  ]

  // Voice columns
  const voiceColumns = [
    {
      id: 'tone',
      title: 'Tone',
      description: 'Our tone is confident yet approachable, professional yet conversational. We speak with authority while remaining relatable and human.'
    },
    {
      id: 'style',
      title: 'Style',
      description: 'We communicate with clarity and purpose, using straightforward language that resonates with our audience without unnecessary complexity.'
    },
    {
      id: 'personality',
      title: 'Personality',
      description: 'Our brand personality is authentic, innovative, and collaborative—reflecting our core values in every interaction.'
    }
  ]

  return (
    <div ref={ref} className="w-full max-w-[1184px] mx-auto px-6 md:px-12 py-12">
      <SectionDropdown
        title="Core"
        number="01"
        defaultOpen={defaultOpen}
        iconType="chevron"
      >
        {shouldLoad ? (
          <div className="flex flex-col gap-16">
            {/* Mission - Dual Heading Text */}
            <DualHeadingText
              title={missionContent.title}
              heading={missionContent.heading}
              body={missionContent.body}
            />

            {/* Values - Text Dropdown with Illustrations */}
            <TextDropdown
              title="Values"
              items={valuesItems}
              hasIllustrations={true}
            />

            {/* Pillars - Text Dropdown without Illustrations */}
            <TextDropdown
              title="Pillars"
              items={pillarsItems}
              hasIllustrations={false}
            />

            {/* Voice - Text Columns */}
            <TextColumns
              heading="Voice"
              columns={voiceColumns}
            />
          </div>
        ) : (
          <div className="text-brand-vanilla/50 font-text text-sm">
            Content loading...
          </div>
        )}
      </SectionDropdown>
    </div>
  )
}