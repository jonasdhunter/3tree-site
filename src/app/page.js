import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FEFEFE] text-[#2C3E50]">
      {/* Simple Nav */}
      <nav className="px-6 py-6 border-b border-[#ECF0F1]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">
            <span className="text-3xl font-black bg-gradient-to-r from-[#27AE60] to-[#2C3E50] bg-clip-text text-transparent">3</span>tree
          </Link>
          <div className="flex gap-8 text-[#95A5A6]">
            <Link href="/about" className="hover:text-[#27AE60] transition">About</Link>
            <Link href="/book" className="hover:text-[#27AE60] transition">Book a Call</Link>
          </div>
        </div>
      </nav>

      <section className="px-6 py-20">
        <div className="max-w-[1200px] mx-auto">
          {/* Hero */}
          <div className="max-w-[800px] mb-16">
            <h1 className="text-[2.5rem] leading-tight font-semibold mb-6">
              Principles-Based Strategic Consulting
            </h1>
            <p className="text-xl leading-relaxed mb-6">
              We help values-aligned organizations through strategic consulting that integrates deep listening, presence, and living systems thinking with practical business results.
            </p>
            <p className="text-lg text-[#95A5A6] leading-relaxed">
              Working with 10 or fewer companies, we focus on 50-year design thinking rather than quick fixes—helping teams discover their collective intelligence and create something beautiful that endures.
            </p>
          </div>

          {/* Services */}
          <h2 className="text-2xl font-semibold mb-8">Integral Strategy Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Strategic Foundation */}
            <div className="border border-[#ECF0F1] p-8 rounded-lg bg-white hover:border-[#27AE60] transition">
              <h3 className="text-xl font-medium mb-4">Strategic Foundation Work</h3>
              <p className="text-[#95A5A6] leading-relaxed">
                Deep clarity on mission, vision, and values that goes beyond surface-level exercises to create authentic organizational DNA.
              </p>
            </div>

            {/* Team Alignment */}
            <div className="border border-[#ECF0F1] p-8 rounded-lg bg-white hover:border-[#27AE60] transition">
              <h3 className="text-xl font-medium mb-4">Team Alignment & Dynamics</h3>
              <p className="text-[#95A5A6] leading-relaxed">
                Using circle-based facilitation to help teams access their collective intelligence and work through complexity with presence and skill.
              </p>
            </div>

            {/* Impact Measurement */}
            <div className="border border-[#ECF0F1] p-8 rounded-lg bg-white hover:border-[#27AE60] transition">
              <h3 className="text-xl font-medium mb-4">Impact Measurement & Strategy</h3>
              <p className="text-[#95A5A6] leading-relaxed">
                Developing meaningful ways to track progress that honor both quantitative results and qualitative transformation.
              </p>
            </div>

            {/* Organizational Design */}
            <div className="border border-[#ECF0F1] p-8 rounded-lg bg-white hover:border-[#27AE60] transition">
              <h3 className="text-xl font-medium mb-4">Long-term Organizational Design</h3>
              <p className="text-[#95A5A6] leading-relaxed">
                Creating structures and cultures built to evolve and thrive over decades, not just quarters.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-lg text-[#95A5A6] mb-6">
              Ready to build something that can flourish for generations?
            </p>
            <Link 
              href="/book" 
              className="inline-block bg-[#27AE60] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#229954] transition"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}