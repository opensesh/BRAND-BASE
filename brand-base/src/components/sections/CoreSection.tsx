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
    heading: "Mission",
    body: "To empower teams to build authentic, consistent brand experiences that resonate with audiences and drive meaningful connections."
  }

  // Values content with illustrations
  const valuesItems = [
    {
      id: 'authenticity',
      title: 'Authenticity',
      description: 'We believe in genuine expression and staying true to our core identity in every interaction and decision.',
      illustration: 'http://localhost:3845/assets/authenticity-icon.svg' // Update with actual asset
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description: 'We continuously push boundaries and embrace new ideas to stay ahead and deliver exceptional value.',
      illustration: 'http://localhost:3845/assets/innovation-icon.svg' // Update with actual asset
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      description: 'We foster teamwork and open communication, believing that the best results come from collective effort.',
      illustration: 'http://localhost:3845/assets/collaboration-icon.svg' // Update with actual asset
    },
    {
      id: 'excellence',
      title: 'Excellence',
      description: 'We maintain high standards in everything we do, striving for quality and precision in every detail.',
      illustration: 'http://localhost:3845/assets/excellence-icon.svg' // Update with actual asset
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