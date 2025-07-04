'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// Sample gallery data - you can replace these with your actual images
const galleryItems = [
  {
    id: 1,
    title: 'Workshop Session',
    description: 'Strategic planning workshop with community leaders',
    imagePath: '/images/workshop.jpg',
  },
  {
    id: 2,
    title: 'Team Collaboration',
    description: 'Facilitated team building exercise',
    imagePath: '/images/collaboration.jpg',
  },
  {
    id: 3,
    title: 'Impact Planning',
    description: 'Working session on impact measurement framework',
    imagePath: '/images/planning.jpg',
  },
  // Add more items as needed
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

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
            <Link href="/gallery" className="text-[#27AE60]">Gallery</Link>
            <Link href="/book" className="hover:text-[#27AE60] transition">Book a Call</Link>
          </div>
        </div>
      </nav>

      <section className="px-6 py-20">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-[2.5rem] leading-tight font-semibold mb-4 text-center">Our Work in Action</h1>
          <p className="text-xl text-[#95A5A6] mb-12 text-center">
            A visual journey through our impact and collaboration
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                className="cursor-pointer overflow-hidden rounded-lg border border-[#ECF0F1] hover:border-[#27AE60] transition"
                onClick={() => openModal(item)}
              >
                <div className="relative h-64">
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-[#95A5A6]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white bg-[#27AE60] rounded-full w-8 h-8 flex items-center justify-center"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="relative h-[60vh]">
              <Image
                src={selectedImage.imagePath}
                alt={selectedImage.title}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-medium mb-2">{selectedImage.title}</h3>
              <p className="text-[#95A5A6]">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}