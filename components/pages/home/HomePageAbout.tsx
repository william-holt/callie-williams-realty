import Link from 'next/link'

import { Button } from '@/components/shared/Button'
import type { ShowcaseProperty } from '@/types'

interface propertyProps {
  title?: string
  description?: string
}

export function HomePageAbout(props: propertyProps) {
  const Arrows = () => {
    return <code>arrows</code>
  }

  return (
    <section className="w-full bg-secondary pt-12 pb-24 md:px-8">
      <div className="w-full max-w-screen-xl flex flex-col items-center justify-start flex-wrap mx-auto px-4 sm:flex-row">
        <div className="w-[200px] h-[200px] rounded-full bg-secondary-dark sm:mr-4 md:w-[300px] md:h-[300px]"></div>
        <div className="w-full text-center py-2 sm:flex-1 sm:text-left">
          <h2 className="hollar text-paper-light pb-2">{props.title}</h2>
          <p className="talk text-paper-light pb-4">{props.description}</p>
          <Link href="/about">
            <Button color="paper" size="md" variant="solid">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
