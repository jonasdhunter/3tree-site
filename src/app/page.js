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
          <h1 className="text-[2.5rem] leading-tight font-semibold mb-4 max-w-[65ch]">
            Strategic Backbone for Transformational Consultants
          </h1>
          <p className="text-xl text-[#95A5A6] mb-8 max-w-[65ch] leading-relaxed">
            I help transformation consultants deliver excellence by providing the strategic backbone that lets them focus on their clients&apos; breakthroughs instead of getting lost in the logistics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Foundation Tier */}
            <div className="border border-[#ECF0F1] p-8 rounded-lg hover:border-[#27AE60] transition bg-white">
              <h3 className="text-2xl font-medium mb-4">Foundation</h3>
              <p className="text-[#27AE60] font-medium mb-6">5 hours/month</p>
              <p className="text-[#95A5A6] leading-relaxed mb-6">
                Essential structure for consultants seeking core support.
              </p>
              <ul className="space-y-3 text-[#95A5A6]">
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Weekly Strategic Guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Basic Implementation Support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Document Review</span>
                </li>
              </ul>
            </div>

            {/* Comprehensive Tier */}
            <div className="border border-[#ECF0F1] p-8 rounded-lg hover:border-[#27AE60] transition bg-white">
              <h3 className="text-2xl font-medium mb-4">Comprehensive</h3>
              <p className="text-[#27AE60] font-medium mb-6">10 hours/month</p>
              <p className="text-[#95A5A6] leading-relaxed mb-6">
                Full partnership for established consultants.
              </p>
              <ul className="space-y-3 text-[#95A5A6]">
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Enhanced Strategic Support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Full Implementation Support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Document Excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Progress Tracking</span>
                </li>
              </ul>
            </div>

            {/* Intensive Tier */}
            <div className="border border-[#ECF0F1] p-8 rounded-lg hover:border-[#27AE60] transition bg-white">
              <h3 className="text-2xl font-medium mb-4">Intensive</h3>
              <p className="text-[#27AE60] font-medium mb-6">20 hours/month</p>
              <p className="text-[#95A5A6] leading-relaxed mb-6">
                Comprehensive support for complex engagements.
              </p>
              <ul className="space-y-3 text-[#95A5A6]">
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Dedicated Strategic Partnership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Full Implementation Support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Document Excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Comprehensive Progress Tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#27AE60] mr-2">•</span>
                  <span>Practice Management Support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-medium mb-6 text-center">Who We Serve</h2>
            <p className="text-xl text-[#95A5A6] mb-8 max-w-[65ch] mx-auto text-center leading-relaxed">
              For consultants leading complex organizational change who need strategic guidance, implementation support, and practice management, so they can be fully present for their clients&apos; transformation.
            </p>
            <div className="text-center">
              <Link 
                href="/book" 
                className="inline-block bg-[#27AE60] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#229954] transition"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}