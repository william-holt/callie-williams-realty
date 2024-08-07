'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import type { ShowcaseProperty } from '@/types'

import { Button } from '@/components/shared/Button'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Gallery } from '@/components/shared/Gallery'

import {
  FaBath,
  FaBed,
  FaCircleArrowLeft,
  FaCircleArrowRight,
  FaListCheck,
  FaPersonDigging,
  FaRulerCombined,
  FaMapPin,
  FaTag,
} from 'react-icons/fa6'
import { urlForImage } from '@/sanity/lib/utils'

interface propertyProps {
  title: string
  properties: ShowcaseProperty[]
}

export function HomePageFeaturedProperties(props: propertyProps) {
  const { properties } = props

  function convertToDollars(amount: number) {
    return amount
      .toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
      .replace('.00', '')
  }

  const Arrows = () => {
    return (
      <div className="flex space-x-2">
        <FaCircleArrowLeft className="text-paper-light text-4xl transition-all duration-300 ease-in-out cursor-pointer hover:text-accent" />
        <FaCircleArrowRight className="text-paper-light text-4xl transition-all duration-300 ease-in-out cursor-pointer hover:text-accent" />
      </div>
    )
  }

  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const [currentImage, setCurrentImage] = useState(0)

  function toggleGallery() {
    setIsGalleryOpen(!isGalleryOpen)
  }

  return (
    <>
      <section className="w-full bg-secondary-dark pt-12 px-4 pb-24 md:px-8">
        <div className="w-full max-w-screen-2xl flex flex-col items-start justify-start flex-wrap mx-auto md:flex-row">
          <div className="w-full flex flex-row items-center justify-center pb-6">
            <h2 className="w-full hollar text-paper-light">{props.title}</h2>
            {/*<div className="hidden w-full flex-row items-center justify-end md:flex md:w-1/3">*/}
            {/*  <Arrows />*/}
            {/*</div>*/}
          </div>
          {properties?.length && (
            <>
              {properties
                .filter((property: any) => property.isShownOnHomepage)
                .map((property: any, index: number) => (
                  <>
                    <Gallery
                      images={property.listingImages}
                      isGalleryOpen={isGalleryOpen}
                      setIsGalleryOpen={setIsGalleryOpen}
                      currentImage={currentImage}
                      setCurrentImage={setCurrentImage}
                      toggleGallery={toggleGallery}
                    />
                    <div
                      className="w-full min-h-[300px] flex flex-col items-center justify-center space-y-4 bg-secondary-light p-4 rounded-border-lg shadow-lg lg:flex-row lg:items-stretch lg:space-y-0 lg:pt-6 lg:pb-6 lg:pl-6"
                      key={index}
                    >
                      {/* Thumbnail */}
                      <div
                        className="relative w-[96%] rounded-border-lg shadow-sm sm:w-[97%] md:w-[98%] lg:w-1/2 xl:w-7/12 2xl:w-8/12"
                        style={{
                          backgroundImage: `url(${urlForImage(property.listingImages[0])?.height(2000).width(3500).fit('crop').url()})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        <div className="relative w-full h-full min-h-[300px] rounded-border-lg shadow-sm lg:mb-0">
                          <div className="absolute z-10 bottom-0 left-0 talk text-paper-light p-6">
                            <div className="w-full flex items-center justify-start space-x-2 pb-2 lg:pb-6">
                              {property.tags.length && (
                                <>
                                  {property.tags.map(
                                    (tag: any, index: number) => (
                                      <span
                                        className="text-body uppercase text-xs text-ink-dark bg-paper-light bg-opacity-75 m-[5px] py-[2.5px] px-2 rounded-full shadow-lg"
                                        key={index}
                                      >
                                        {tag}
                                      </span>
                                    ),
                                  )}
                                </>
                              )}
                              <div className="w-fit flex items-center justify-end space-x-1 pl-2">
                                <div
                                  className={twMerge(
                                    `statusIcon`,
                                    property.status === 'Sold' && 'bg-red-500',
                                    property.status === 'Active' && 'active',
                                    property.status === 'Pending' &&
                                      'bg-yellow-500',
                                    property.status === 'Under Contract' &&
                                      'bg-blue-500',
                                    property.status === 'Price Improvement' &&
                                      'bg-purple-500',
                                  )}
                                />
                                <span className="text-paper-light text-body uppercase text-xs">
                                  {property.status}
                                </span>
                              </div>
                            </div>
                            <h3 className="shout pb-2 text-pretty">
                              {property.name}
                            </h3>
                            {/* <p className="talk text-pretty">
                              {property.description}
                            </p> */}
                          </div>
                          <div className="absolute w-full h-full bg-gradient-to-t from-ink-dark rounded-border-lg" />
                        </div>
                      </div>
                      {/* Features */}
                      <div className="w-full rounded-border-lg lg:w-1/2 xl:w-5/12 2xl:w-4/12">
                        {/* Details */}
                        <div className="w-full p-2 lg:p-0 lg:pl-4 lg:pr-2">
                          <div className="w-full flex flex-col items-start justify-start bg-paper-light mb-2 py-12 px-6 rounded-border-lg shadow-sm sm:flex-row lg:mb-0">
                            <ul className="w-full chat flex flex-col gap-y-4 p-1 sm:w-1/2">
                              <li className="flex mr-1">
                                <FaMapPin className="text-accent text-2xl mr-2" />
                                {property.location}
                              </li>
                              <li className="flex">
                                <FaTag className="text-accent text-2xl mr-2" />
                                {convertToDollars(property.price)}
                              </li>
                              <li className="flex">
                                <FaRulerCombined className="text-accent text-2xl mr-2" />
                                {property.squareFootage} sq.ft.
                              </li>
                              <li className="flex">
                                <FaBed className="text-accent text-2xl mr-2" />
                                {property.bedroomCount} Bed
                              </li>
                              <li className="flex">
                                <FaBath className="text-accent text-2xl mr-2" />
                                {property.bathroomCount} Bath
                              </li>
                              <li className="flex">
                                <FaPersonDigging className="text-accent text-2xl mr-2" />
                                Built in {property.constructionDate}
                              </li>
                            </ul>
                            <div className="w-full flex flex-col gap-y-2 p-1 pt-4 sm:w-1/2 sm:pt-0">
                              <div className="flex">
                                <FaListCheck className="text-accent text-2xl mr-2" />
                                Features:
                              </div>
                              <CustomPortableText
                                paragraphClasses="text-ink"
                                value={property.features}
                              />
                            </div>
                          </div>
                        </div>
                        {/* Gallery */}
                        <div className="w-full flex flex-col items-center justify-center flex-wrap md:flex-row lg:pt-2 lg:pl-2 lg:-mb-2">
                          <div className="relative w-full h-24 p-1 md:h-48 md:w-1/2 lg:h-72">
                            <Image
                              src={`${urlForImage(property.listingImages[1])
                                ?.height(2000)
                                .width(3500)
                                .fit('crop')
                                .url()}`}
                              alt={'test'}
                              className="w-full h-full object-cover rounded-border-lg p-2"
                              fill={true}
                            />
                          </div>
                          <div className="w-full flex flex-row flex-wrap md:w-1/2">
                            <div className="relative w-1/3 h-24 p-1 md:w-full lg:h-36">
                              <Image
                                src={`${urlForImage(property.listingImages[1])
                                  ?.height(2000)
                                  .width(3500)
                                  .fit('crop')
                                  .url()}`}
                                alt={'test'}
                                className="w-full h-full object-cover rounded-border-lg p-2"
                                fill={true}
                              />
                            </div>
                            <div className="relative w-1/3 h-24 p-1 md:w-1/2 lg:h-36">
                              <Image
                                src={`${urlForImage(property.listingImages[2])
                                  ?.height(2000)
                                  .width(3500)
                                  .fit('crop')
                                  .url()}`}
                                alt={'test'}
                                className="w-full h-full object-cover rounded-border-lg p-2"
                                fill={true}
                              />
                            </div>
                            <div className="w-1/3 h-24 p-1 md:w-1/2 lg:h-36">
                              <div className="relative w-full h-full rounded-border-lg shadow-sm lg:mb-0">
                                <div className="absolute z-10 bottom-0 left-0 w-full h-full flex items-center justify-center chat text-paper-light">
                                  <button type="button" onClick={toggleGallery}>
                                    + {property.listingImages.length} More
                                  </button>
                                </div>
                                <Image
                                  src={`${urlForImage(property.listingImages[3])
                                    ?.height(2000)
                                    .width(3500)
                                    .fit('crop')
                                    .url()}`}
                                  alt={'test'}
                                  className="w-full h-full object-cover rounded-border-lg"
                                  fill={true}
                                />
                                <div className="absolute w-full h-full bg-ink-dark opacity-75 rounded-border-lg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </>
          )}
          <div className="w-full flex flex-row items-center justify-center py-4 md:hidden">
            <Arrows />
          </div>
        </div>
      </section>
      <div className="h-[250px] bg-paper-light -mt-[300px] md:h-[150px] md:-mt-[200px]" />
    </>
  )
}
