'use client'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import { Input } from '@/components/shared/Input'
import { Ratings } from '@/components/shared/Ratings'
import { urlForImage } from '@/sanity/lib/utils'

interface HomePageHeroProps {
  description?: any[]
  title?: string
  numberOfReviews?: number
  coverImage?: any
}

export function HomePageHero(props: HomePageHeroProps) {
  const { title, description, numberOfReviews, coverImage = false } = props

  function handleSubmit(formData: any) {
    const postData = async () => {
      const data = {
        subject: 'Newsletter Sign Up from ',
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email
      }
      const jsonData = JSON.stringify(data)

      const response = await fetch('/api/email/send', {
        method: 'POST',
        body: jsonData
      })
      return response.json()
    }
    postData().then((data) => {
      alert(data.message)
    })
  }

  if (!description && !title) {
    return null
  }

  const imageUrl = urlForImage(coverImage)
    ?.height(2000)
    .width(3500)
    .fit('crop')
    .url()

  return (
    <section
      className="relative -top-[100px] left-0 w-full h-fit min-h-[950px] flex flex-col items-center justify-center -mb-[100px] md:h-screen"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-ink-dark opacity-60" />
      <div className="relative w-full max-w-screen-2xl h-fit min-h-[1000px] flex flex-col items-center justify-center mx-auto md:h-screen">
        <div className="absolute bottom-0 w-full h-full flex flex-col items-start justify-between pt-24 px-4 pb-12 sm:pt-36">
          {/* Top */}
          <div className="w-full flex flex-col items-start justify-start sm:flex-row sm:items-center sm:px-2 xl:px-0">
            <Ratings />
            {/* Social Links */}
            <ul className="w-full flex flex-row items-center justify-start space-x-1 py-4 sm:w-1/2 sm:justify-end sm:py-0">
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
          {/* Bottom */}
          <div className="w-full sm:px-2 xl:px-0">
            {/* Logos */}
            <div className="pb-4">
              <ul className="w-full flex flex-row items-center justify-start space-x-4 pt-12 sm:pt-0 sm:space-x-6">
                <li className="w-12 sm:w-fit">
                  <Image
                    src="/realtor-logo.png"
                    alt="The Realtor logo"
                    width={75}
                    height={75}
                  />
                </li>
                <li className="w-36 sm:w-fit">
                  <Image
                    src="/real-estate-43-logo.png"
                    alt="Real Estate 43 logo"
                    width={200}
                    height={100}
                  />
                </li>
                <li className="w-36 sm:w-fit">
                  <Image
                    src="/adtv-logo.png"
                    alt="The American Dream TV logo"
                    width={225}
                    height={115}
                  />
                </li>
              </ul>
            </div>
            {/* Title */}
            <h1 className="roar text-paper-light pb-6 text-balance md:pb-12">
              {title}
            </h1>
            {/* Description */}
            <p className="talk text-paper-light pb-6 text-balance">
              {description}
            </p>
            {/* Subscribe Bar */}
            <Formik
              initialValues={{firstName: '', lastName: '', email: ''}}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              <Form className="w-full flex flex-col items-start justify-start rounded-border-lg shadow-lg backdrop-blur-md backdrop-brightness-125 md:h-36 md:flex-row md:items-center">
                <div
                  className="w-full flex flex-col items-start justify-start p-4 md:w-5/6 md:flex-row md:space-x-2 lg:space-x-4">
                  <div className="w-full md:w-1/3">
                    <Field
                      name="firstName"
                      label="First Name"
                      type="text"
                      as={Input}
                      required />
                    <ErrorMessage name="firstName" />
                  </div>
                  <div className="w-full md:w-1/3">
                    <Field
                      name="lastName"
                      label="Last Name"
                      type="text"
                      as={Input}
                      required />
                    <ErrorMessage name="lastName" />
                  </div>
                  <div className="w-full md:w-1/3">
                    <Field
                      name="email"
                      label="Email Address"
                      type="text"
                      as={Input}
                      required />
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <button
                  className="w-full h-12 flex items-center justify-center talk uppercase text-accent bg-paper-light rounded-border-bottom-lg transition-all duration-300 ease-in-out hover:bg-accent hover:text-paper-light md:hidden"
                  type="submit">
                  Sign Up
                </button>
                <button
                  className="hidden w-full items-center justify-center talk uppercase text-accent bg-paper-light rounded-border-right-lg transition-all duration-300 ease-in-out hover:bg-accent hover:text-paper-light md:w-1/6 md:h-36 md:flex"
                  type='submit'>
                  Sign Up
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}
