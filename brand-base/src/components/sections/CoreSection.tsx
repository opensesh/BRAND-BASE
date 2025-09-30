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

  // Values content with illustrations - 5 items
  const valuesItems = [
    {
      id: 'curiosity',
      title: 'Curiosity',
      description: 'We believe curiosity is essential to staying on the cutting edge of design and innovation.',
      illustration: 'http://localhost:3845/assets/curiosity-icon.svg'
    },
    {
      id: 'solutions',
      title: 'Solutions',
      description: 'We focus on solving real problems with practical, effective approaches that drive results.',
      illustration: 'http://localhost:3845/assets/solutions-icon.svg'
    },
    {
      id: 'respect',
      title: 'Respect',
      description: 'We treat everyone with dignity and value diverse perspectives in all our interactions.',
      illustration: 'http://localhost:3845/assets/respect-icon.svg'
    },
    {
      id: 'connection',
      title: 'Connection',
      description: 'We build meaningful relationships that foster collaboration and shared success.',
      illustration: 'http://localhost:3845/assets/connection-icon.svg'
    },
    {
      id: 'transparency',
      title: 'Transparency',
      description: 'We communicate openly and honestly, building trust through clear and consistent actions.',
      illustration: 'http://localhost:3845/assets/transparency-icon.svg'
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