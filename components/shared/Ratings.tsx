import Link from 'next/link'
import Image from 'next/image'

import { FaStar } from 'react-icons/fa6'

export const Ratings = () => {
  return (
    <>
      {/* Ratings */}
      <div className="w-full flex flex-col space-y-2 text-paper-light sm:w-1/2 sm:flex-row sm:space-x-4 sm:space-y-0">
        {/* Zillow Rating */}
        <div className="w-fit">
          <div className="w-full flex flex-row items-center justify-start space-x-1">
            <FaStar className="text-2xl" />
            <FaStar className="text-2xl" />
            <FaStar className="text-2xl" />
            <FaStar className="text-2xl" />
            <FaStar className="text-2xl" />
            <span className="text-xl mt-1">5.0</span>
          </div>
          <div className="w-full h-12 flex flex-row items-center justify-start space-x-1">
            <Link
              href="https://www.zillow.com/profile/clwilliams2081"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              reviews on
            </Link>
            <Image
              src="/zillow-logo.png"
              alt="The Zillow logo"
              width={100}
              height={50}
            />
          </div>
        </div>
        {/* Google Rating */}
        <div className="w-fit">
          <div className="w-full flex flex-row items-center justify-start space-x-1">
            <FaStar className="text-2xl" />
            <FaStar className="text-2xl" />
            <FaStar className="text-2xl" />
            <FaStar className="text-2xl" />
            <FaStar className="text-2xl" />
            <span className="text-xl mt-1">5.0</span>
          </div>
          <div className="w-full h-12 flex flex-row items-center justify-start space-x-1">
            <Link
              href="https://www.zillow.com/profile/clwilliams2081"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              rating on
            </Link>
            <Image
              src="/google-white-logo.png"
              alt="The Google logo"
              width={100}
              height={50}
            />
          </div>
        </div>
      </div>
    </>
  )
}
