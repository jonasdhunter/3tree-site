'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Book() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: "bf971bd6-69e8-4077-82f2-a7233a10137a",
          subject: "New Contact from 3Tree Website",
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      })
      
      if (response.ok) {
        setSubmitted(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })

        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: "bf971bd6-69e8-4077-82f2-a7233a10137a",
            subject: "Thank you for contacting 3Tree",
            to: formData.email,
            from_name: "3Tree",
            message: `Dear ${formData.name},

Thank you for reaching out to 3Tree. We've received your message:

"${formData.message}"

To schedule a conversation, please visit our booking link:
https://calendly.com/jonasdhunter/30m

We look forward to connecting with you soon.

Best regards,
The 3Tree Team`
          })
        })
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error submitting form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className="min-h-screen bg-[#FEFEFE] text-[#2C3E50]">
      <nav className="px-6 py-6 border-b border-[#ECF0F1]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">
            <span className="text-3xl font-black bg-gradient-to-r from-[#27AE60] to-[#2C3E50] bg-clip-text text-transparent">3</span>tree
          </Link>
          <div className="flex gap-8 text-[#95A5A6]">
            <Link href="/about" className="hover:text-[#27AE60] transition">About</Link>

            <Link href="/gallery" className="hover:text-[#27AE60] transition">Gallery</Link>
            <Link href="/book" className="text-[#27AE60]">Book a Call</Link>
          </div>
        </div> 
      </nav>

      <section className="px-6 py-20">
        <div className="max-w-[600px] mx-auto">
          {!submitted ? (
            <>
              <h1 className="text-[2.5rem] leading-tight font-semibold mb-4 text-center">Let&apos;s Connect</h1>
              <p className="text-xl text-[#95A5A6] mb-12 text-center">
                Share a bit about what you&apos;re working on and we&apos;ll find a time to explore how we might support you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#ECF0F1] rounded-lg focus:outline-none focus:border-[#27AE60] transition"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#ECF0F1] rounded-lg focus:outline-none focus:border-[#27AE60] transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">
                    What&apos;s on your mind? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your organization, what you're working on, and what kind of support you're looking for..."
                    className="w-full px-4 py-3 border border-[#ECF0F1] rounded-lg focus:outline-none focus:border-[#27AE60] transition resize-none"
                  />
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#27AE60] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#229954] transition disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1 className="text-[2.5rem] leading-tight font-semibold mb-4 text-center">Thank You</h1>
              <p className="text-xl text-[#95A5A6] mb-6 text-center">
                We&apos;ve received your message and sent you an email with next steps.
              </p>
              <p className="text-xl text-[#95A5A6] mb-12 text-center">
                Ready to schedule? Click the button below to find a time that works for you.
              </p>
              <div className="text-center">
                <a
                  href="https://calendly.com/jonasdhunter/30m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#27AE60] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#229954] transition"
                >
                  Schedule a Call
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}