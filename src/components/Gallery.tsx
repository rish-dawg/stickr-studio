"use client";
import { useState } from "react";

const categories = ["All", "Brand", "Art", "Events", "Nature", "Tech", "Food"];

const galleryItems = [
  { id: 1, title: "Mountain Adventure Co.", category: "Nature", type: "Die-Cut", gradient: "from-emerald-400 to-teal-600", emoji: "🏔️", desc: "Outdoor brand vinyl stickers" },
  { id: 2, title: "Pixel Café Logo", category: "Food", type: "Holographic", gradient: "from-amber-400 to-orange-600", emoji: "☕", desc: "Coffee shop holographic labels" },
  { id: 3, title: "Neon Wave Studio", category: "Art", type: "Die-Cut", gradient: "from-purple-500 to-pink-600", emoji: "🎵", desc: "Music studio brand stickers" },
  { id: 4, title: "TechFlow SaaS", category: "Tech", type: "Clear", gradient: "from-blue-500 to-indigo-600", emoji: "💻", desc: "Software brand clear stickers" },
  { id: 5, title: "Sunrise Festival", category: "Events", type: "Glitter", gradient: "from-rose-400 to-red-600", emoji: "🎪", desc: "Festival glitter event stickers" },
  { id: 6, title: "Botanical Garden", category: "Nature", type: "Matte", gradient: "from-green-400 to-emerald-600", emoji: "🌿", desc: "Botanical illustration stickers" },
  { id: 7, title: "Urban Streetwear", category: "Brand", type: "Vinyl", gradient: "from-gray-700 to-gray-900", emoji: "👕", desc: "Streetwear brand vinyl decals" },
  { id: 8, title: "Digital Art Pack", category: "Art", type: "Holographic", gradient: "from-violet-500 to-purple-700", emoji: "🎨", desc: "Artist sticker sheet collection" },
  { id: 9, title: "Cosmic Bakery", category: "Food", type: "Die-Cut", gradient: "from-pink-400 to-rose-600", emoji: "🧁", desc: "Bakery brand packaging stickers" },
  { id: 10, title: "CloudSync Pro", category: "Tech", type: "Matte", gradient: "from-cyan-500 to-blue-600", emoji: "☁️", desc: "Tech conference swag stickers" },
  { id: 11, title: "Startup Summit 2024", category: "Events", type: "Vinyl", gradient: "from-orange-500 to-red-500", emoji: "🚀", desc: "Startup event branded stickers" },
  { id: 12, title: "Ocean Vibes Co.", category: "Brand", type: "Clear", gradient: "from-sky-400 to-blue-600", emoji: "🌊", desc: "Surf brand transparent stickers" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
            Inspiration
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Sticker{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">gallery</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Get inspired by real sticker projects from our customers. Your brand could be next.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-purple-600 text-white shadow-md shadow-purple-300/40"
                  : "bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-purple-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Sticker preview */}
              <div className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }} />
                <div className="text-6xl group-hover:scale-125 transition-transform duration-500">
                  {item.emoji}
                </div>
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                  {item.type}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-gray-50 text-gray-500 text-xs rounded-md font-medium">{item.category}</span>
                  <span className="text-purple-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
