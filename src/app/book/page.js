
// ============================================
// app/book/page.js - Booking Page (Simple redirect or embed)
// ============================================
import Link from 'next/link'

export default function Book() {
  return (
    <main className="min-h-screen bg-[#FEFEFE] text-[#2C3E50]">
      {/* Simple Nav */}
      <nav className="px-6 py-6 border-b border-[#ECF0F1]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">
            <span className="text-3xl font-black bg-gradient-to-r from-[#27AE60] to-[#2C3E50] bg-clip-text text-transparent">3</span>tree
          </Link>
          <div className="flex gap-8 text-[#95A5A6]">
            <Link href="/work" className="hover:text-[#27AE60] transition">Work</Link>
            <Link href="/book" className="text-[#27AE60]">Book a Call</Link>
          </div>
        </div>
      </nav>

      <section className="px-6 py-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-[2.5rem] leading-tight font-semibold mb-4">Book a Call</h1>
          <p className="text-xl text-[#95A5A6] mb-12">
            Let's explore how we can work together to create meaningful change.
          </p>
          
          {/* You can either embed Calendly here or redirect */}
          <div className="bg-white border border-[#ECF0F1] rounded-lg p-8">
            <p className="text-[#95A5A6] mb-4">
              Select a time that works for you:
            </p>
            {/* Add your Calendly embed code here */}
            {/* Or use a simple redirect: */}
            <script>
              {/* window.location.href = 'https://calendly.com/your-link' */}
            </script>
          </div>
        </div>
      </section>
    </main>
  )
}