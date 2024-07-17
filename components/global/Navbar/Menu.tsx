'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

import { resolveHref } from '@/sanity/lib/utils'
import type { MenuItem, SettingsPayload } from '@/types'

interface MenuProps {
  menuItems: MenuItem[]
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
}
export default function Navbar(props: MenuProps) {
  const menuItems = props?.menuItems || ([] as MenuItem[])
  const pathname = usePathname()

  const MenuLinks = () => {
    return (
      <>
        {menuItems &&
          menuItems.map((menuItem, key) => {
            const href = resolveHref(menuItem?._type, menuItem?.slug)
            if (!href) {
              return null
            }
            return (
              <li>
                <Link
                  key={key}
                  className={`text-5xl uppercase text-paper-light border-b border-transparent hover:text-accent lg:text-lg ${
                    pathname === href
                      ? 'border-paper-light'
                      : 'border-transparent'
                  }`}
                  href={href}
                >
                  {menuItem.title}
                </Link>
              </li>
            )
          })}
        <li>
          <Link
            key="properties"
            className={`text-5xl uppercase text-paper-light hover:text-accent lg:text-lg`}
            href="/properties"
          >
            Properties
          </Link>
        </li>
        <li>
          <Link
            key="contact"
            className={`text-5xl uppercase text-paper-light hover:text-accent lg:text-lg`}
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </>
    )
  }

  return (
    <>
      <ul
        className={twMerge(
          `fixed top-0 w-full h-screen flex flex-col items-center justify-center bg-primary gap-y-4 transition-all duration-300 ease-in-out lg:hidden`,
          props.isOpen ? 'left-0' : '-left-[200vw]',
        )}
      >
        <MenuLinks />
      </ul>
      <ul className="hidden w-1/3 flex-row items-start justify-start gap-x-4 order-2 lg:flex xl:order-1">
        <MenuLinks />
      </ul>
    </>
  )
}
