import Link from 'next/link'

export default function Home() {
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
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-[2.5rem] leading-tight font-semibold mb-4 max-w-[65ch]">
            Strategic Coaching & Innovation
          </h1>
          <p className="text-xl text-[#95A5A6] mb-8 max-w-[65ch] leading-relaxed">
            Helping leaders create meaningful change through strategic planning, 
            impact measurement, and transformative coaching.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {/* 1-on-1 Coaching */}
            <div className="border border-[#ECF0F1] p-8 rounded-lg hover:border-[#27AE60] transition bg-white">
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
            <div className="border border-[#ECF0F1] p-8 rounded-lg hover:border-[#27AE60] transition bg-white">
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

          <div className="mt-20 text-center">
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