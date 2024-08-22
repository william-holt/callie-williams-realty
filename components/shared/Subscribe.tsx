'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik'

import { Button } from '@/components/shared/Button'
import { DarkInput } from '@/components/shared/DarkInput'

export function Subscribe() {
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
      <Formik
        initialValues={{firstName: '', lastName: '', email: ''}}
        onSubmit={handleSubmit}>
        <Form className="w-full flex flex-col items-start justify-start lg:flex-row lg:items-center">
          <div className="w-full flex flex-col items-start justify-start p-4 lg:w-5/6 lg:flex-row lg:space-x-4">
            <div className="w-full md:w-1/3">
              <Field
                name="firstName"
                label="First Name"
                type="text"
                as={DarkInput}
                required />
              <ErrorMessage name="firstName" />
            </div>
            <div className="w-full md:w-1/3">
              <Field
                name="lastName"
                label="Last Name"
                type="text"
                as={DarkInput}
                required />
              <ErrorMessage name="lastName" />
            </div>
            <div className="w-full md:w-1/3">
              <Field
                name="email"
                label="Email Address"
                type="text"
                as={DarkInput}
                required />
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="w-full flex items-center justify-start px-6 lg:hidden">
            <Button type='submit' color="accent" size="md" variant="solid">
              Sign Up
            </Button>
          </div>
          <div className="hidden w-full items-center justify-center lg:w-1/6  lg:flex">
            <Button type='submit' color="accent" size="md" variant="solid">
              Sign Up
            </Button>
          </div>
        </Form>
      </Formik>

    </div>
  )
}
