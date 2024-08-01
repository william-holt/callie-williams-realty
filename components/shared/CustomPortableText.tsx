import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from 'next-sanity'
import type { Image } from 'sanity'

import ImageBox from '@/components/shared/ImageBox'
import { TimelineSection } from '@/components/shared/TimelineSection'

export function CustomPortableText({
  paragraphClasses,
  captionClasses,
  value,
}: {
  paragraphClasses?: string
  captionClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }: any) => <h1 className="roar pb-4">{children}</h1>,
      h2: ({ children }: any) => <h2 className="hollar pb-4">{children}</h2>,
      h3: ({ children }: any) => <h3 className="scream pb-4">{children}</h3>,
      h4: ({ children }: any) => <h4 className="shout pb-4">{children}</h4>,
      h5: ({ children }: any) => <h5 className="yell-alt pb-4">{children}</h5>,
      h6: ({ children }: any) => <h6 className="whisper pb-2">{children}</h6>,
      blockquote: ({ children }: any) => (
        <blockquote className="scream my-6 p-6 border-l-4 border-lightGreen">
          {children}
        </blockquote>
      ),
      normal: ({ children }: any) => (
        <p className="talk mb-2 pb-4">{children}</p>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="chat mt-2 ml-6 mb-6">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="chat mt-2 ml-6 mb-6">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li className="pb-2" style={{ listStyleType: 'disc' }}>
          {children}
        </li>
      ),
      number: ({ children }: any) => (
        <li
          className="text-darkGreen ml-2 pb-2"
          style={{ listStyleType: 'decimal' }}
        >
          {children}
        </li>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className={`${paragraphClasses} underline transition hover:opacity-50 `}
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        )
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string }
      }) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9]"
            />
            {value?.caption && (
              <div className={captionClasses}>{value.caption}</div>
            )}
          </div>
        )
      },
      timeline: ({ value }) => {
        const { items } = value || {}
        return <TimelineSection timelines={items} />
      },
    },
  }

  return (
    <div className={paragraphClasses}>
      <PortableText components={components} value={value} />
    </div>
  )
}
