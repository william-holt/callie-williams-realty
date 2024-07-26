import { Button } from '@/components/shared/Button'
import { Input } from '@/components/shared/Input'

export function Subscribe() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto pt-12 pb-16">
      <div className="w-full px-6">
        <h2 className="hollar text-accent-dark pb-4">
          Signup for Callie&rsquo;s newsletter
        </h2>
        <p className="talk text-accent-dark pb-6">
          Sign up below to start receiving Callie&rsquo;s newsletter and
          discover your dream home before anyone else does!
        </p>
      </div>
      <div className="w-full flex flex-col items-start justify-start lg:flex-row lg:items-center">
        <div className="w-full flex flex-col items-start justify-start p-4 lg:w-5/6 lg:flex-row lg:space-x-4">
          <Input
            className="w-full lg:w-1/3"
            name="firstName"
            label="First Name"
            mode="dark"
            type="text"
            required
          />
          <Input
            className="w-full lg:w-1/3"
            name="lastName"
            label="Last Name"
            mode="dark"
            type="text"
            required
          />
          <Input
            className="w-full lg:w-1/3"
            name="email"
            label="Email Address"
            mode="dark"
            type="email"
            required
          />
        </div>
        <div className="w-full flex items-center justify-start px-6 lg:hidden">
          <Button color="accent" size="md" variant="solid">
            Sign Up
          </Button>
        </div>
        <div className="hidden w-full items-center justify-center lg:w-1/6  lg:flex">
          <Button color="accent" size="md" variant="solid">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  )
}
