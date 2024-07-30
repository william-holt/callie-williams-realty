'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

import { resolveHref } from '@/sanity/lib/utils'
import type { MenuItem, SettingsPayload } from '@/types'

interface MenuProps {
  menuItems: MenuItem[]
}
export default function Menu(props: MenuProps) {
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
              <li key={key}>
                <Link
                  key={key}
                  className={`text-base uppercase text-paper-light border-b border-transparent hover:text-accent lg:text-lg ${
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
            className={`text-base uppercase text-paper-light hover:text-accent lg:text-lg`}
            href="/listings"
          >
            Properties
          </Link>
        </li>
        <li>
          <Link
            key="contact"
            className={`text-base uppercase text-paper-light hover:text-accent lg:text-lg`}
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
      <ul className="w-full max-w-xl flex flex-row items-center justify-center gap-x-4 order-2 mx-auto py-12">
        <MenuLinks />
      </ul>
    </>
  )
}
