'use client'

import { useState } from 'react'
import Image from 'next/image'
import Hamburger from 'hamburger-react'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/shared/Button'
import Menu from '@/components/global/Navbar/Menu'

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
    <nav className="sticky top-0 z-10 w-full max-w-screen-2xl flex flex-row items-center justify-center flex-wrap mx-auto px-4 py-4 backdrop-blur lg:justify-between">
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
      <div className="relative z-10 w-fit order-2 lg:order-1 xl:w-1/3 xl:justify-end">
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
      </div>
      <div className="hidden w-fit items-center justify-end order-3 xl:w-1/3 xl:flex">
        <Button color="paper" size="md" variant="solid">
          Contact Us
        </Button>
      </div>
    </nav>
  )
}
