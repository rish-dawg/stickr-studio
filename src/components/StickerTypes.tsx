"use client";
import { useState } from "react";

const stickerTypes = [
  {
    id: "die-cut",
    name: "Die-Cut Stickers",
    description: "Custom-shaped stickers cut to the exact outline of your design. Perfect for logos, characters, and unique shapes.",
    price: "From $0.07/ea",
    icon: "✂️",
    gradient: "from-purple-500 to-indigo-600",
    shadow: "shadow-purple-400/30",
    features: ["Custom shape", "White vinyl", "Weatherproof", "UV resistant"],
    popular: true,
  },
  {
    id: "vinyl",
    name: "Vinyl Stickers",
    description: "Durable, outdoor-grade vinyl stickers that withstand sun, rain, and scratches. Built to last years.",
    price: "From $0.05/ea",
    icon: "🛡️",
    gradient: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-400/30",
    features: ["Super durable", "Outdoor rated", "5+ year life", "Scratch resistant"],
    popular: false,
  },
  {
    id: "holographic",
    name: "Holographic Stickers",
    description: "Eye-catching rainbow holographic finish that shifts colors as light hits. Perfect for standing out.",
    price: "From $0.12/ea",
    icon: "🌈",
    gradient: "from-pink-500 to-purple-500",
    shadow: "shadow-pink-400/30",
    features: ["Rainbow effect", "Premium feel", "Die-cut shape", "Waterproof"],
    popular: true,
  },
  {
    id: "clear",
    name: "Clear Stickers",
    description: "Transparent background stickers that blend seamlessly onto any surface for a clean, printed-on look.",
    price: "From $0.09/ea",
    icon: "💎",
    gradient: "from-cyan-500 to-teal-500",
    shadow: "shadow-cyan-400/30",
    features: ["See-through bg", "Clean look", "Glass friendly", "Waterproof"],
    popular: false,
  },
  {
    id: "matte",
    name: "Matte Stickers",
    description: "Soft, non-glossy finish that gives your stickers a premium, sophisticated look with no glare.",
    price: "From $0.06/ea",
    icon: "🎨",
    gradient: "from-amber-500 to-orange-500",
    shadow: "shadow-amber-400/30",
    features: ["No glare", "Premium feel", "Write-on surface", "Smudge resistant"],
    popular: false,
  },
  {
    id: "glitter",
    name: "Glitter Stickers",
    description: "Sparkly, textured finish that catches light beautifully. Perfect for crafts, events, and eye-catching branding.",
    price: "From $0.14/ea",
    icon: "✨",
    gradient: "from-rose-500 to-pink-600",
    shadow: "shadow-rose-400/30",
    features: ["Sparkle finish", "Textured feel", "Die-cut", "Indoor/outdoor"],
    popular: false,
  },
  {
    id: "bumper",
    name: "Bumper Stickers",
    description: "Heavy-duty stickers made for car bumpers. Extra thick, extra durable, with easy peel-and-stick application.",
    price: "From $0.15/ea",
    icon: "🚗",
    gradient: "from-green-500 to-emerald-600",
    shadow: "shadow-green-400/30",
    features: ["Extra thick", "Car safe", "Easy apply", "Removable"],
    popular: false,
  },
  {
    id: "transfer",
    name: "Transfer Stickers",
    description: "Multi-piece designs applied as one with transfer tape. Ideal for multi-color logos and text on windows.",
    price: "From $0.18/ea",
    icon: "🏷️",
    gradient: "from-violet-500 to-purple-600",
    shadow: "shadow-violet-400/30",
    features: ["Multi-piece", "Window safe", "Clean apply", "Professional look"],
    popular: false,
  },
];

export default function StickerTypes() {
  const [activeType, setActiveType] = useState<string | null>(null);

  return (
    <section id="sticker-types" className="py-28 bg-[#f8f9fb] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
            Our Collection
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Every sticker type you{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">need</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            From die-cut to holographic, matte to glitter — we&apos;ve got the perfect sticker for every project.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stickerTypes.map((type) => (
            <div
              key={type.id}
              className={`group relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer shadow-sm ${
                activeType === type.id
                  ? "border-purple-400 shadow-xl shadow-purple-200/50 -translate-y-2"
                  : "border-gray-100/80 hover:border-purple-200 hover:shadow-lg hover:-translate-y-1"
              }`}
              onClick={() => setActiveType(activeType === type.id ? null : type.id)}
            >
              {type.popular && (
                <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-md">
                  Popular
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.gradient} ${type.shadow} shadow-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {type.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{type.name}</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-3">{type.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {type.features.map((f) => (
                  <span key={f} className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs rounded-lg font-medium">
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                <span className="text-lg font-black bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                  {type.price}
                </span>
                <span className="text-purple-500 group-hover:translate-x-1 transition-transform text-lg">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
