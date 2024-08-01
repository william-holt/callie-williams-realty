'use client'
import { useState } from 'react'
import { Input } from '@/components/shared/Input'
import { Button } from '@/components/shared/Button'


export function ContactCallie(props: any) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [post, setPost] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const postData = async () => {
      const data = {
        title: firstName,
        post: post,
      };

      const response = await fetch("/api/email/send", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData().then((data) => {
      alert(data.message);
    });
  }

  return (
    <div className="w-full max-w-screen-2xl mx-auto pb-16">
      <div className="w-full px-6">
        <h2 className="hollar text-white pb-4">
          Contact Callie
        </h2>
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <div className="w-full flex flex-col items-start justify-start p-4 lg:w-5/6 lg:flex-row lg:space-x-4">
          <Input
            className="w-full lg:w-1/3"
            name="firstName"
            label="First Name"
            mode="light"
            type="text"
            placeholder="Your first name"
            required
          />
          <Input
            className="w-full lg:w-1/3"
            name="lastName"
            label="Last Name"
            mode="light"
            type="text"
            placeholder="Your last name"
            required
          />
          <Input
            className="w-full lg:w-1/3"
            name="email"
            label="Email Address"
            mode="light"
            type="email"
            placeholder="Your email address"
            required
          />
        </div>
        <div className="w-full flex flex-col items-start justify-start p-4 lg:w-5/6 lg:flex-row lg:space-x-4">
          <Input
            className="w-full lg:w-1/3"
            name="subject"
            label="Subject"
            mode="light"
            type="text"
            placeholder="Subject of your message"
            required
          />
          <Input
            className="w-full lg:w-2/3"
            name="message"
            label="Message"
            mode="light"
            type="text"
            placeholder="Your message"
            required
          />
        </div>
        <div className="w-full flex items-center justify-start px-6">
          <Button color="paper" size="md" variant="solid">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  )
}
