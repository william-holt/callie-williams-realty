'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaShare,
  FaTimes,
} from 'react-icons/fa'
import {
  FaBath,
  FaBed,
  FaListCheck,
  FaMapPin,
  FaPersonDigging,
  FaRulerCombined,
  FaTag,
} from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'

import { MapWrapper } from '@/components/maps/MapWrapper'
import { Button } from '@/components/shared/Button'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { urlForImage } from '@/sanity/lib/utils'

export function Gallery(props: any) {
  const images = props.images
    ? props.images.map((image: any) => {
        return urlForImage(image)?.height(2000).width(3500).fit('crop').url()
      })
    : []

  const imageCount = images.length

  function prevImage() {
    props.setCurrentImage(props.currentImage - 1)
    if (props.currentImage === 0) {
      props.setCurrentImage(imageCount - 1)
    }
  }

  function nextImage() {
    props.setCurrentImage(props.currentImage + 1)
    if (props.currentImage === imageCount - 1) {
      props.setCurrentImage(0)
    }
  }

  const placeholderImage = '/placeholder-square.jpg'

  return (
    <div className="w-full">
      {props.isGalleryOpen && (
        <div className="fixed z-40 top-0 left-0 w-full h-screen">
          <div
            className="absolute z-0 top-0 left-0 w-full h-full bg-ink-dark bg-opacity-90"
            onClick={() => props.setIsGalleryOpen(false)}
          />
          <div className="absolute top-0 left-0 z-50 w-full">
            <div className="w-full h-16 mx-auto flex items-center justify-end px-6">
              <button onClick={props.toggleGallery}>
                <FaTimes className="text-4xl text-paper-light transition-all duration-300 ease-in-out hover:text-accent-light" />
              </button>
            </div>
          </div>
          <div className="w-full h-full flex overflow-scroll">
            {/* Gallery */}
            <div className="min-w-[100vw] h-full flex items-center justify-center">
              <button
                onClick={prevImage}
                className="relative z-30 w-[5%] flex items-center justify-center"
              >
                <FaChevronLeft className="text-4xl text-paper-light transition-all duration-300 ease-in-out hover:text-accent-light" />
              </button>
              <div className="relative z-30 w-[90%] h-full flex items-center justify-center">
                <Image
                  src={images[props.currentImage]}
                  alt="gallery image"
                  width={1500}
                  height={1500}
                  className="shadow-lg"
                />
              </div>
              <button
                onClick={nextImage}
                className="relative z-30 w-[5%] flex items-center justify-center"
              >
                <FaChevronRight className="text-4xl text-paper-light transition-all duration-300 ease-in-out hover:text-accent-light" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
