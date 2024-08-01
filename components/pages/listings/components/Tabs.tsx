import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/shared/Button'

interface TabsProps {
  currentFilter: string
  setCurrentFilter: (filter: string) => void
}

export function Tabs(props: TabsProps) {
  const { currentFilter, setCurrentFilter } = props

  return (
    <>
      <ul className="hidden w-fit space-x-4 py-6 sm:flex">
        <li>
          <Button
            color={currentFilter === 'Residential' ? 'accent' : 'paper'}
            size="md"
            variant="solid"
            onClick={() => setCurrentFilter('Residential')}
          >
            Residential
          </Button>
        </li>
        <li>
          <Button
            color={currentFilter === 'Development' ? 'accent' : 'paper'}
            size="md"
            variant="solid"
            onClick={() => setCurrentFilter('Development')}
          >
            Development
          </Button>
        </li>
        <li>
          <Button
            color={currentFilter === 'Commercial' ? 'accent' : 'paper'}
            size="md"
            variant="solid"
            onClick={() => setCurrentFilter('Commercial')}
          >
            Commercial
          </Button>
        </li>
      </ul>
      <ul className="w-full flex flex-row items-center justify-center space-x-4 py-6 sm:hidden">
        <li
          className={twMerge(
            `chat text-accent transition-all duration-300 ease-in-out hover:text-accent-dark`,
          )}
          onClick={() => setCurrentFilter('Residential')}
        >
          Residential
        </li>
        <li
          className="chat text-accent transition-all duration-300 ease-in-out hover:text-accent-dark"
          onClick={() => setCurrentFilter('Development')}
        >
          Development
        </li>
        <li
          className="chat text-accent transition-all duration-300 ease-in-out hover:text-accent-dark"
          onClick={() => setCurrentFilter('Commercial')}
        >
          Commercial
        </li>
      </ul>
    </>
  )
}
