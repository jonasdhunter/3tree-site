// ============================================
// app/work/page.js - Combined Work & About Page
// ============================================
import Link from 'next/link'

export default function Work() {
  return (
    <main className="min-h-screen bg-[#FEFEFE] text-[#2C3E50]">
      {/* Simple Nav */}
      <nav className="px-6 py-6 border-b border-[#ECF0F1]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">
            <span className="text-3xl font-black bg-gradient-to-r from-[#27AE60] to-[#2C3E50] bg-clip-text text-transparent">3</span>tree
          </Link>
          <div className="flex gap-8 text-[#95A5A6]">
            <Link href="/work" className="text-[#27AE60]">Work</Link>
            <Link href="/book" className="hover:text-[#27AE60] transition">Book a Call</Link>
          </div>
        </div>
      </nav>

      <section className="px-6 py-20">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-[2.5rem] leading-tight font-semibold mb-12">Work</h1>
          
          {/* Brief intro */}
          <div className="max-w-[800px] mb-16">
            <p className="text-xl leading-relaxed mb-6">
              I'm Jonas Hunter, a strategic coach and facilitator helping leaders and organizations create meaningful change.
            </p>
            <p className="text-lg text-[#95A5A6] leading-relaxed">
              With experience across nonprofit, corporate, and startup environments, I bring a systems perspective to organizational challenges, focusing on aligning strategy with values and measuring what matters.
            </p>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* 1-on-1 Coaching */}
            <div className="border border-[#ECF0F1] p-8 rounded-lg bg-white">
              <h3 className="text-2xl font-medium mb-4">1-on-1 Coaching</h3>
              <p className="text-[#95A5A6] leading-relaxed mb-6">
                Personal transformation for leaders ready to create meaningful impact.
              </p>
              <ul className="space-y-3 text-[#95A5A6]">
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Executive Leadership Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Career Transition & Strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Personal Impact Planning</span>
                </li>
              </ul>
            </div>

            {/* Consulting & Facilitation */}
            <div className="border border-[#ECF0F1] p-8 rounded-lg bg-white">
              <h3 className="text-2xl font-medium mb-4">Consulting & Strategic Facilitation</h3>
              <p className="text-[#95A5A6] leading-relaxed mb-6">
                Organizational transformation through collaborative strategy and measurement.
              </p>
              <ul className="space-y-3 text-[#95A5A6]">
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Aligned Strategy Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Impact Measurement Frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Culture & Values Alignment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Principles */}
          <div className="border-t border-[#ECF0F1] pt-16 max-w-[800px]">
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
          <div className="mt-20 text-center">
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