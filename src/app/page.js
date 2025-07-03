import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Simple Nav */}
      <nav className="px-6 py-6 border-b border-gray-900">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold">3tree</Link>
          <div className="flex gap-8 text-gray-400">
            <Link href="/work" className="hover:text-white transition">Work</Link>
            <Link href="/writing" className="hover:text-white transition">Writing</Link>
            <Link href="/book" className="hover:text-white transition">Book a Call</Link>
          </div>
        </div>
      </nav>

      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-4">
            Strategic Coaching & Innovation
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Helping leaders create meaningful change through strategic planning, 
            impact measurement, and transformative coaching.
          </p>
          
          {/* Updated grid - now clickable */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <Link href="/work" className="border border-gray-800 p-6 rounded hover:border-gray-600 transition block">
              <h3 className="text-xl font-semibold mb-2">Coaching & Consulting</h3>
              <p className="text-gray-400">1-on-1 coaching, workshops, and strategic facilitation</p>
            </Link>
            <Link href="/writing" className="border border-gray-800 p-6 rounded hover:border-gray-600 transition block">
              <h3 className="text-xl font-semibold mb-2">Insights & Tools</h3>
              <p className="text-gray-400">Frameworks, experiments, and lessons learned</p>
            </Link>
          </div>

          {/* Simple CTA */}
          <div className="mt-16 text-center">
            <Link 
              href="/book" 
              className="inline-block bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-200 transition"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}