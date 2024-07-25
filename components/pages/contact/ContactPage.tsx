'use client';
import { useState } from 'react'

export function ContactPage() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const postData = async () => {
      const data = {
        title: title,
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
    <div className="space-y-20 flex flex-col">
      <h1>Contact Page</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Title">Title</label>
          <input
            className="border-2 border-gray-300 p-2"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="post">Comment</label>
          <input
            className="border-2 border-gray-300 p-2"
            id="post"
            type="text"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="post">Email</label>
          <input
            className="border-2 border-gray-300 p-2"
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactPage
