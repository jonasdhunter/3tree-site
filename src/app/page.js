export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-4">
            3tree
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Innovation Lab & Digital Experiments
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="border border-gray-800 p-6 rounded hover:border-gray-600 transition">
              <h3 className="text-xl font-semibold mb-2">Impact Tools</h3>
              <p className="text-gray-400">Measurement frameworks and visualization</p>
            </div>
            <div className="border border-gray-800 p-6 rounded hover:border-gray-600 transition">
              <h3 className="text-xl font-semibold mb-2">AI Experiments</h3>
              <p className="text-gray-400">Next-gen coaching and consulting tools</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}