import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen bg-[#FEFEFE] text-[#2C3E50]">
      {/* Simple Nav */}
      <nav className="px-6 py-6 border-b border-[#ECF0F1]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">3Tree</Link>
          <div className="flex gap-8 text-[#95A5A6]">
            <Link href="/work" className="hover:text-[#27AE60] transition">Work</Link>
            <Link href="/writing" className="hover:text-[#27AE60] transition">Writing</Link>
            <Link href="/book" className="hover:text-[#27AE60] transition">Book a Call</Link>
          </div>
        </div>
      </nav>

      <section className="px-6 py-20">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[2.5rem] leading-tight font-semibold mb-12">About</h1>
          
          {/* Brief Bio */}
          <div className="mb-16">
            <p className="text-xl leading-relaxed mb-6">
              I'm Jonas Hunter, a strategic coach and facilitator helping leaders and organizations create meaningful change.
            </p>
            <p className="text-lg text-[#95A5A6] leading-relaxed">
              With experience across nonprofit, corporate, and startup environments, I bring a systems perspective to organizational challenges. My work focuses on aligning strategy with values, measuring what matters, and building cultures that support both impact and wellbeing.
            </p>
          </div>

          {/* Principles */}
          <div className="border-t border-[#ECF0F1] pt-16">
            <h2 className="text-2xl font-semibold mb-8">Guiding Principles</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-2">Clarity Through Simplicity</h3>
                <p className="text-[#95A5A6] leading-relaxed">
                  Complex challenges don't require complicated solutions. The best strategies are clear, actionable, and aligned with core values.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Measure What Matters</h3>
                <p className="text-[#95A5A6] leading-relaxed">
                  Impact isn't just about numbers. True measurement captures both quantitative outcomes and qualitative change.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Systems Over Symptoms</h3>
                <p className="text-[#95A5A6] leading-relaxed">
                  Lasting change comes from understanding and addressing root causes, not just managing surface-level issues.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Progress Over Perfection</h3>
                <p className="text-[#95A5A6] leading-relaxed">
                  Small, consistent steps toward a clear vision create more sustainable change than dramatic overhauls.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-16 border-t border-[#ECF0F1] text-center">
            <p className="text-lg text-[#95A5A6] mb-6">
              Ready to create meaningful change?
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