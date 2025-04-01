"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-white md:min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
        Contact Us
      </h2>
      {status && <p className="text-green-400 text-center mb-4">{status}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border bg-gray-800 border-gray-600 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border bg-gray-800 border-gray-600 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border bg-gray-800 border-gray-600 text-white h-32"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-400 to-pink-400 text-white font-bold py-2 rounded-md hover:opacity-80 transition"
        >
          Send Message
        </button>
        <div className="mt-4 text-center">
          <Link href="/" className="text-gray-400 hover:underline">
            Back to Home
          </Link>
          </div>
      </form>
    </div>
  );
}