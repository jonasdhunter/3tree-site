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
            <Link href="/work" className="border border-[#ECF0F1] p-8 rounded-lg hover:border-[#27AE60] transition block bg-white">
              <h3 className="text-2xl font-medium mb-4">Coaching & Consulting</h3>
              <p className="text-[#95A5A6] leading-relaxed">1-on-1 coaching, workshops, and strategic facilitation</p>
            </Link>
            <Link href="/writing" className="border border-[#ECF0F1] p-8 rounded-lg hover:border-[#27AE60] transition block bg-white">
              <h3 className="text-2xl font-medium mb-4">Insights & Tools</h3>
              <p className="text-[#95A5A6] leading-relaxed">Frameworks, experiments, and lessons learned</p>
            </Link>
          </div>

          <div className="mt-20">
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