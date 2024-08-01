'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { urlForImage } from '@/sanity/lib/utils'

import { Button } from '@/components/shared/Button'

import { CustomPortableText } from '@/components/shared/CustomPortableText'

import {
  FaShare,
  FaLink,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from 'react-icons/fa'

import {
  FaBath,
  FaBed,
  FaListCheck,
  FaPersonDigging,
  FaRulerCombined,
  FaMapPin,
  FaTag,
} from 'react-icons/fa6'

export function SingleListingPage(initial: any) {
  const { data: listing } = initial.initial

  function convertToDollars(amount: number) {
    return amount
      .toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
      .replace('.00', '')
  }

  const images = listing.listingImages
    ? listing.listingImages.map((image: any) => {
        return urlForImage(image)?.height(2000).width(3500).fit('crop').url()
      })
    : []

  const placeholderImage = '/placeholder-square.jpg'

  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const [currentImage, setCurrentImage] = useState(0)

  function toggleGallery() {
    setIsGalleryOpen(!isGalleryOpen)

    // Prevent scrolling when gallery is open
    if (isGalleryOpen) {
      document.documentElement.classList.remove('no-scroll')
      document.body.classList.remove('no-scroll')
    } else {
      document.documentElement.classList.add('no-scroll')
      document.body.classList.add('no-scroll')
    }
  }

  const imageCount = images.length

  function prevImage() {
    setCurrentImage(currentImage - 1)
    if (currentImage === 0) {
      setCurrentImage(imageCount - 1)
    }
  }

  function nextImage() {
    setCurrentImage(currentImage + 1)
    if (currentImage === imageCount - 1) {
      setCurrentImage(0)
    }
  }

  return (
    <div className="w-full">
      {isGalleryOpen && (
        <div className="fixed z-40 top-0 left-0 w-full h-screen">
          <div
            className="absolute z-0 top-0 left-0 w-full h-full bg-ink-dark bg-opacity-90"
            onClick={() => setIsGalleryOpen(false)}
          />
          <div className="absolute top-0 left-0 z-50 w-full">
            <div className="w-full h-16 mx-auto flex items-center justify-end px-6">
              <button onClick={toggleGallery}>
                <FaTimes className="text-4xl text-paper-light transition-all duration-300 ease-in-out hover:text-accent-light" />
              </button>
            </div>
          </div>
          <div className="w-full h-full flex overflow-scroll">
            {/* Gallery */}
            {/* {images.map((image: string) => {
              return ( */}
            <div className="min-w-[100vw] h-full flex items-center justify-center border-2 border-blue-500">
              <button
                onClick={prevImage}
                className="relative z-30 w-[5%] flex items-center justify-center"
              >
                <FaChevronLeft className="text-4xl text-paper-light transition-all duration-300 ease-in-out hover:text-accent-light" />
              </button>
              <div className="relative z-30 w-[90%] h-full flex items-center justify-center">
                <Image
                  src={images[currentImage]}
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
            {/* )
            })} */}
          </div>
        </div>
      )}
      <div className="relative w-full h-[850px] flex flex-col items-start justify-start flex-wrap bg-primary-dark -mt-[100px] pb-20 md:h-screen md:pb-0">
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-ink-dark to-transparent opacity-75" />
        {/* Desktop Layout */}
        <div className="hidden md:flex w-full h-full">
          <div className="relative w-1/2 h-full ">
            <Image
              src={images[0] ? images[0] : placeholderImage}
              alt="image1"
              className="w-full h-full object-cover rounded-border-lg p-2"
              fill={true}
            />
          </div>
          <div className="w-1/2 h-full flex flex-col">
            <div className="relative w-full h-1/2">
              <Image
                src={images[1] ? images[1] : placeholderImage}
                alt="image2"
                className="w-full h-full object-cover rounded-border-lg p-2"
                fill={true}
              />
            </div>
            <div className="w-full h-1/2 flex">
              <div className="relative w-1/2 h-full">
                <Image
                  src={images[2] ? images[2] : placeholderImage}
                  alt="image3"
                  className="w-full h-full object-cover  rounded-border-lg p-2"
                  fill={true}
                />
              </div>
              <div className="w-1/2 h-full flex flex-wrap">
                <div className="relative w-full h-1/2">
                  <Image
                    src={images[3] ? images[3] : placeholderImage}
                    alt="image4"
                    className="w-full h-full object-cover rounded-border-lg p-2"
                    fill={true}
                  />
                </div>
                <div className="relative w-1/2 h-1/2">
                  <Image
                    src={images[4] ? images[4] : placeholderImage}
                    alt="image5"
                    className="w-full h-full object-cover rounded-border-lg p-2"
                    fill={true}
                  />
                </div>
                <div className="w-1/2 h-1/2 p-2">
                  <div className="relative w-full h-full shadow-sm lg:mb-0">
                    <div className="absolute z-20 bottom-0 left-0 w-full h-full flex items-center justify-center chat text-paper-light">
                      <Button
                        color="paper"
                        size="md"
                        variant="ghost"
                        onClick={toggleGallery}
                      >
                        View Gallery
                      </Button>
                    </div>
                    <div className="absolute z-10 w-full h-full bg-ink-dark opacity-75 rounded-border-lg" />
                    <Image
                      src={images[5] ? images[5] : placeholderImage}
                      alt="image6"
                      className="relative z-0 w-full h-full object-cover rounded-border-lg"
                      fill={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden w-full h-full">
          <div className="w-full h-1/3 ">
            <Image
              src={images[0] ? images[0] : placeholderImage}
              alt="image1"
              className="relative w-full h-full object-cover rounded-border-lg p-2"
              width={1500}
              height={1500}
            />
          </div>
          <div className="w-full h-1/3 ">
            <Image
              src={images[1] ? images[1] : placeholderImage}
              alt="image2"
              className="relative w-full h-full object-cover rounded-border-lg p-2"
              width={1500}
              height={1500}
            />
          </div>
          <div className="w-full h-1/3 flex flex-col">
            <div className="w-full h-1/2 ">
              <Image
                src={images[2] ? images[2] : placeholderImage}
                alt="image3"
                className="relative w-full h-full object-cover rounded-border-lg p-2"
                width={1500}
                height={1500}
              />
            </div>
            <div className="w-full h-1/2 flex flex-wrap">
              <div className="w-1/2 h-full ">
                <Image
                  src={images[3] ? images[3] : placeholderImage}
                  alt="image4"
                  className="relative w-full h-full object-cover rounded-border-lg p-2"
                  width={1500}
                  height={1500}
                />
              </div>
              <div className="w-1/2 h-full ">
                <Image
                  src={images[4] ? images[4] : placeholderImage}
                  alt="image5"
                  className="relative w-full h-full object-cover rounded-border-lg p-2"
                  width={1500}
                  height={1500}
                />
              </div>
              <div className="w-full h-1/2 p-2">
                <div className="relative w-full h-full shadow-sm lg:mb-0">
                  <div className="absolute z-20 bottom-0 left-0 w-full h-full flex items-center justify-center chat text-paper-light">
                    <Button
                      color="paper"
                      size="md"
                      variant="ghost"
                      onClick={toggleGallery}
                    >
                      View Gallery
                    </Button>
                  </div>
                  <div className="absolute z-10 w-full h-full bg-ink-dark opacity-75 rounded-border-sm" />
                  <Image
                    src={images[5] ? images[5] : placeholderImage}
                    alt="image6"
                    className="relative z-0 w-full h-full object-cover rounded-border-sm"
                    fill={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-ink py-24">
        <div className="w-full max-w-screen-2xl flex flex-col items-start justify-start mx-auto md:flex-row">
          {/* Summary */}
          <div className="w-full text-paper-light p-6 md:w-1/2">
            <div className="w-full flex flex-row items-center justify-start">
              <div className="w-fit flex justify-start flex-wrap -ml-1 pr-2">
                {listing.tags.map((tag, index) => {
                  // filter tags to only show residential, development, or commercial
                  if (
                    tag !== 'Residential' &&
                    tag !== 'Development' &&
                    tag !== 'Commercial'
                  ) {
                    return null
                  }

                  return (
                    <span
                      className="text-body uppercase text-xs text-ink-dark bg-paper-light bg-opacity-75 m-[5px] py-[2.5px] px-2 rounded-full shadow-lg"
                      key={index}
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
              <div className="w-fit flex justify-end">
                <div className="w-full flex items-center justify-end space-x-1">
                  <div
                    className={twMerge(
                      `statusIcon`,
                      listing.status === 'Sold' && 'bg-red-500',
                      listing.status === 'Active' && 'active',
                      listing.status === 'Pending' && 'bg-yellow-500',
                      listing.status === 'Under Contract' && 'bg-blue-500',
                      listing.status === 'Price Improvement' && 'bg-purple-500',
                    )}
                  />
                  <span className="text-paper-light text-body uppercase text-xs">
                    {listing.status}
                  </span>
                </div>
              </div>
            </div>
            <h3 className="shout pt-6 pb-2 text-pretty">{listing.name}</h3>
            <p className="talk pb-6 text-pretty">{listing.description}</p>
            <div className="w-fit flex items-center justify-start">
              <Link className="mr-4" href="">
                <Button color="accent" size="md" variant="solid">
                  Request A Showing
                </Button>
              </Link>
              <Link className="chat hover:underline" href="">
                <Button color="paper" size="sm" variant="ghost">
                  Ask A Question
                </Button>
              </Link>
            </div>
          </div>
          {/* Features */}
          <div className="w-full px-6 md:w-1/2 p-1">
            <div className="w-full flex md:justify-end p-4">
              <span className="chat text-paper-light pr-2">Share:</span>
              <ul className="flex space-x-2">
                <li>
                  <Link href="">
                    <FaShare className="text-paper-light text-2xl transition-all duration-300 ease-in-out  hover:text-accent-light" />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <FaLink className="text-paper-light text-2xl transition-all duration-300 ease-in-out hover:text-accent-light" />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <FaInstagram className="text-paper-light text-2xl transition-all duration-300 ease-in-out  hover:text-accent-light" />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <FaFacebook className="text-paper-light text-2xl transition-all duration-300 ease-in-out  hover:text-accent-light" />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <FaLinkedin className="text-paper-light text-2xl transition-all duration-300 ease-in-out  hover:text-accent-light" />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <FaEnvelope className="text-paper-light text-2xl transition-all duration-300 ease-in-out  hover:text-accent-light" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col items-start justify-start  bg-paper-light py-12 px-6 rounded-border-sm shadow-sm sm:flex-row">
              <ul className="w-full chat flex flex-col gap-y-4 p-1 sm:w-1/2">
                <li className="flex mr-1">
                  <FaMapPin className="text-accent text-2xl mr-2" />
                  {listing.location}
                </li>
                <li className="flex">
                  <FaTag className="text-accent text-2xl mr-2" />
                  {convertToDollars(listing.price)}
                </li>
                <li className="flex">
                  <FaRulerCombined className="text-accent text-2xl mr-2" />
                  {listing.squareFootage} sq.ft.
                </li>
                <li className="flex">
                  <FaBed className="text-accent text-2xl mr-2" />
                  {listing.bedroomCount} Bed
                </li>
                <li className="flex">
                  <FaBath className="text-accent text-2xl mr-2" />
                  {listing.bathroomCount} Bath
                </li>
                <li className="flex">
                  <FaPersonDigging className="text-accent text-2xl mr-2" />
                  Built in {listing.constructionDate}
                </li>
              </ul>
              <div className="w-full chat flex flex-col gap-y-2 p-1 pt-4 sm:w-1/2 sm:pt-0">
                <div className="flex">
                  <FaListCheck className="text-accent text-2xl mr-2" />
                  Features:
                </div>
                <CustomPortableText
                  paragraphClasses="text-ink"
                  value={listing.features}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="w-full bg-paper-light py-24">
        <div className="w-full max-w-screen-2xl mx-auto p-6">
          {/* TODO: Hook this up */}
          <CustomPortableText
            paragraphClasses="text-md md:text-xl"
            value={listing.body}
          />
          {/* Map */}
          {/* TODO: Finish map section */}
        </div>
      </div>

      {/* TODO: Figure this out */}
      {/* {listing.testimonials?.length > 0 && (
        <div>
          {listing.testimonials.map(
            (testimonial: any, testimonialIndex: number) => {
              return (
                <div key={'testimonial' + testimonialIndex}>
                  <div>{testimonial.name}</div>
                  <div>{testimonial.review}</div>
                  <div>{testimonial.date}</div>
                </div>
              )
            },
          )}
        </div>
      )} */}
    </div>
  )
}

export default SingleListingPage
