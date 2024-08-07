'use client'

import Hamburger from 'hamburger-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import Menu from '@/components/global/Navbar/Menu'
import { Button } from '@/components/shared/Button'
import type { MenuItem, SettingsPayload } from '@/types'

interface NavbarProps {
  data: SettingsPayload
}
export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])

  // Mobile nav toggle
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when mobile nav is open
    if (isOpen) {
      document.documentElement.classList.remove('no-scroll')
      document.body.classList.remove('no-scroll')
    } else {
      document.documentElement.classList.add('no-scroll')
      document.body.classList.add('no-scroll')
    }
  }

  return (
    <nav className="sticky top-0 z-20 w-full h-[100px] bg-gradient-to-b from-ink-dark to-transparent">
      <div className="w-full max-w-screen-2xl flex flex-row items-center justify-center flex-wrap mx-auto px-4 lg:justify-between">
        <Menu menuItems={menuItems} isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={twMerge(`w-fit order-1 lg:hidden`)}>
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            duration={0.75}
            size={25}
            distance="sm"
            color="#FFFFFF"
          />
        </div>
        <div className="relative z-20 w-fit order-2 lg:order-1 xl:w-1/3 xl:justify-end">
          <Link href="/">
            <Image
              className="w-fit max-w-[250px] md:max-w-[350px] lg:max-w-[450px] xl:hidden"
              src="/navbar-logo-mobile-v1.png"
              alt="Callie Williams logo"
              width={500}
              height={250}
            />
            <Image
              className="hidden w-fit max-w-[450px] xl:block"
              src="/navbar-logo-v1.png"
              alt="Callie Williams logo"
              width={500}
              height={250}
            />
          </Link>
        </div>
        <div className="hidden w-fit items-center justify-end order-3 xl:w-1/3 xl:flex">
          <Link href="/contact">
            <Button color="paper" size="md" variant="solid">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
