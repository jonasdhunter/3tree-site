'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Book() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    connectionType: '',
    whyNow: '',
    vision: '',
    strengthsGaps: '',
    currentStage: '',
    timeline: '',
    name: '',
    email: '',
    organization: ''
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
          subject: "New 3Tree Intake Form Submission",
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          connection_type: formData.connectionType,
          why_reaching_out: formData.whyNow,
          vision: formData.vision,
          strengths_and_gaps: formData.strengthsGaps,
          current_stage: formData.currentStage,
          timeline: formData.timeline
        })
      })
      
      if (response.ok) {
        setSubmitted(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
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
      {/* Nav - updated to remove Work link */}
      <nav className="px-6 py-6 border-b border-[#ECF0F1]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">
            <span className="text-3xl font-black bg-gradient-to-r from-[#27AE60] to-[#2C3E50] bg-clip-text text-transparent">3</span>tree
          </Link>
          <div className="flex gap-8 text-[#95A5A6]">
            <Link href="/about" className="hover:text-[#27AE60] transition">About</Link>
            <Link href="/book" className="text-[#27AE60]">Book a Call</Link>
          </div>
        </div>
      </nav>

      <section className="px-6 py-20">
        <div className="max-w-[800px] mx-auto">
          {!submitted ? (
            <>
              {/* FORM SECTION - All the form fields from the artifact */}
              {/* Copy all the form JSX from the book-page-intake artifact here */}
              {/* It's too long to paste in this response, but use the complete form from the artifact */}
            </>
          ) : (
            <>
              <h1 className="text-[2.5rem] leading-tight font-semibold mb-4">Thank You</h1>
              <p className="text-xl text-[#95A5A6] mb-12">
                Your responses help me prepare for our conversation. Please select a time that works for you below.
              </p>
              
              {/* Add your Calendly embed here */}
              <div className="calendly-inline-widget" 
                   data-url="https://calendly.com/YOUR_CALENDLY_LINK" 
                   style={{minWidth: '320px', height: '630px'}}>
              </div>
              <script type="text/javascript" 
                      src="https://assets.calendly.com/assets/external/widget.js" 
                      async>
              </script>
            </>
          )}
        </div>
      </section>
    </main>
  )
}