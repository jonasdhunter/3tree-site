import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen bg-[#FEFEFE] text-[#2C3E50]">
      {/* Simple Nav */}
      <nav className="px-6 py-6 border-b border-[#ECF0F1]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">
            <span className="text-3xl font-black bg-gradient-to-r from-[#27AE60] to-[#2C3E50] bg-clip-text text-transparent">3</span>tree
          </Link>
          <div className="flex gap-8 text-[#95A5A6]">
            <Link href="/about" className="text-[#27AE60]">About</Link>
            <Link href="/work" className="hover:text-[#27AE60] transition">Work</Link>
            <Link href="/book" className="hover:text-[#27AE60] transition">Book a Call</Link>
          </div>
        </div>
      </nav>

      <section className="px-6 py-20">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[2.5rem] leading-tight font-semibold mb-12">How We Work</h1>
          
          {/* Opening */}
          <div className="mb-16">
            <p className="text-xl leading-relaxed mb-6">
              At our core, we believe that lasting organizational transformation emerges not from mechanical processes, but from living systems that honor both consciousness and craft.
            </p>
            <p className="text-lg text-[#95A5A6] leading-relaxed mb-6">
              We work with values-aligned organizations ready to move beyond quick fixes toward sustainable, 50-year thinking—helping teams discover their collective intelligence and create something beautiful that endures.
            </p>
            <p className="text-lg text-[#95A5A6] leading-relaxed">
              Our approach integrates deep principles with practical results, supporting leaders who understand that the most profound changes happen when we slow down enough to listen, stay present with complexity, and allow solutions to emerge from authentic collaboration.
            </p>
          </div>

          {/* Principles */}
          <div className="border-t border-[#ECF0F1] pt-16">
            <h2 className="text-2xl font-semibold mb-12">Our Foundational Principles</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-medium mb-3">Listening</h3>
                <p className="text-[#95A5A6] leading-relaxed">
                  True listening engages mind, emotions, feelings, and bodily sensations to perceive more clearly. When we listen with our whole being—present to thoughts, aware of emotions both heavy and light, attuned to the wisdom held in the body—we can see more deeply. This quality of attention generates real knowledge, conviction, and knowing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Presence</h3>
                <p className="text-[#95A5A6] leading-relaxed">
                  Presence is a state of being that transcends typical vulnerability and authenticity. It's the awareness that recognizes when we're caught by mental chatter, emotional reactivity, or physical tension—and the active choice to rise above these patterns. Presence means grasping our agency: surrendering what doesn't serve while remaining completely open and receptive to what wants to emerge.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Relationship</h3>
                <p className="text-[#95A5A6] leading-relaxed">
                  This principle goes beyond traditional collaboration. It's about maintaining your sovereignty while moving in harmony with others toward an emergent ideal. Rather than being driven by intellectual frameworks, this work is guided by a deeper intelligence that allows for authentic connection and collective wisdom to arise naturally.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Foundational Understanding</h3>
                <p className="text-[#95A5A6] leading-relaxed">
                  The recognition that consciousness underlies all of material reality. This isn't theoretical but must be personally experienced—the felt sense of something true, good, and beautiful that connects us to the source of creativity and wisdom. When teams touch this deeper foundation, their work becomes aligned with larger patterns of growth and sustainability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Agency & Simplicity</h3>
                <p className="text-[#95A5A6] leading-relaxed">
                  The wisdom of not doing more than what's needed, not acting until we're ready. This principle guides us toward elegant solutions and right timing, honoring natural rhythms rather than forcing outcomes through sheer effort.
                </p>
              </div>
            </div>
          </div>

          {/* Working Together */}
          <div className="mt-20 pt-16 border-t border-[#ECF0F1]">
            <h2 className="text-2xl font-semibold mb-8">Working Together</h2>
            <p className="text-lg text-[#95A5A6] leading-relaxed mb-6">
              We work with a small number of organizations—typically 10 or fewer—allowing for the depth of relationship and attention that real transformation requires. Our rhythm honors both focused sprint work and reflective integration time.
            </p>
            <p className="text-lg text-[#95A5A6] leading-relaxed mb-12">
              We're drawn to leaders and organizations who want to do things right rather than fast, who understand that the most sustainable growth happens organically, and who are willing to invest in foundational work that creates lasting value.
            </p>
            
            <div className="text-center">
              <p className="text-lg text-[#95A5A6] mb-6">
                If you're sensing there's a deeper way to operate, if you want your work to be aligned with your values, and if you're ready to build something that can flourish for generations—
              </p>
              <Link 
                href="/book" 
                className="inline-block bg-[#27AE60] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#229954] transition"
              >
                Let's Have a Conversation.
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}