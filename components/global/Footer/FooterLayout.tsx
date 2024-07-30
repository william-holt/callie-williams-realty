import Image from 'next/image'
import Link from 'next/link'

import Menu from '@/components/global/Footer/Menu'

import type { PortableTextBlock } from 'next-sanity'

import { CustomPortableText } from '@/components//shared/CustomPortableText'
import type { MenuItem, SettingsPayload } from '@/types'

import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'

interface FooterProps {
  data: SettingsPayload
  numberOfReviews?: number
}
export default function Footer(props: FooterProps) {
  const { data, numberOfReviews } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])
  const footer = data?.footer || ([] as PortableTextBlock[])
  return (
    <footer className="bottom-0 w-full bg-ink py-12 text-center md:py-20">
      <div className="w-full max-w-screen-2xl mx-auto px-6">
        <div className="w-full max-w-xl mx-auto px-12">
          <Image src="/footer-logo.png" alt="Logo" width={1080} height={700} />
        </div>
        <Menu menuItems={menuItems} />
        <div className="w-full flex flex-col items-start justify-start sm:flex-row sm:items-center">
          {/* Zillow Rating */}
          <div className="w-full flex flex-col text-paper-light sm:w-1/2">
            <div className="w-full flex flex-row items-center justify-center space-x-1 sm:justify-start">
              <FaStar className="text-2xl" />
              <FaStar className="text-2xl" />
              <FaStar className="text-2xl" />
              <FaStar className="text-2xl" />
              <FaStar className="text-2xl" />
              <span className="text-xl mt-1">5.0</span>
            </div>
            <div className="w-full flex flex-row items-center justify-center space-x-1 sm:justify-start">
              <Link
                href="https://www.zillow.com/profile/clwilliams2081"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {numberOfReviews} reviews on
              </Link>
              <Image
                src="/zillow-logo.png"
                alt="The Zillow logo"
                width={100}
                height={50}
              />
            </div>
          </div>
          {/* Social Links */}
          <ul className="w-full flex flex-row items-center justify-center space-x-1 py-4 sm:w-1/2 sm:justify-end sm:py-0">
            <li className="text-4xl text-paper-light transition-all duration-300 ease-in-out hover:text-accent hover:scale-105">
              <Link
                href="https://www.instagram.com/realestatebycallie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </Link>
            </li>
            <li className="text-4xl text-paper-light transition-all duration-300 ease-in-out hover:text-accent hover:scale-105">
              <Link
                href="https://www.facebook.com/callie.williams.3914/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </Link>
            </li>
            <li className="text-4xl text-paper-light transition-all duration-300 ease-in-out hover:text-accent hover:scale-105">
              <Link
                href="https://www.linkedin.com/in/callie-williams-b17698a4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6" />
        {footer && (
          <CustomPortableText
            paragraphClasses="talk text-paper-light"
            value={footer}
          />
        )}
      </div>
    </footer>
  )
}
