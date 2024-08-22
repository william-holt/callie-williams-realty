'use client'

import { Button } from '@/components/shared/Button'
import { Input } from '@/components/shared/Input'
import { ErrorMessage, Field, Form, Formik } from 'formik'

export function ContactCallie(props: any) {
  function handleSubmit(formData: any) {
    const postData = async () => {
      const data = {
        subject: 'Contact: ' + formData.subject + ' ',
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
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
    <div className="w-full max-w-screen-2xl mx-auto pb-16">
      <div className="w-full px-6">
        <h2 className="hollar text-white pb-4">Contact Callie</h2>
      </div>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', subject: '', message: '' }}
        onSubmit={handleSubmit}>
        <Form className="w-full flex flex-col items-start justify-start">
          <div className="w-full flex flex-col items-start justify-start p-4 lg:flex-row lg:space-x-4">
            <div className="w-full lg:w-1/3">
              <Field
                name="firstName"
                label="First Name"
                type="text"
                as={Input}
                required />
              <ErrorMessage name="firstName" />
            </div>
            <div className="w-full lg:w-1/3">
              <Field
                name="lastName"
                label="Last Name"
                type="text"
                as={Input}
                required />
              <ErrorMessage name="lastName" />
            </div>
            <div className="w-full lg:w-1/3">
              <Field
                name="email"
                label="Email Address"
                type="text"
                as={Input}
                required />
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start p-4 lg:flex-row lg:space-x-4">
            <div className="w-full lg:w-1/3">
              <Field
                name="subject"
                label="Subject"
                type="text"
                as={Input}
                required />
              <ErrorMessage name="subject" />
            </div>
            <div className="w-full lg:w-2/3">
              <Field
                name="message"
                label="Message"
                type="text"
                as={Input}
                required />
              <ErrorMessage name="message" />
            </div>
          </div>
          <div className="w-full flex items-center justify-start px-6">
            <Button type="submit" color="paper" size="md" variant="solid">
              Sign Up
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
