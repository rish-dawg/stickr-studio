"use client";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Bloom Studio",
    avatar: "🧑‍🎨",
    text: "The holographic stickers blew our minds! The quality is insane — we use them on all our product packaging now. Customers literally collect them.",
    rating: 5,
    type: "Holographic",
  },
  {
    name: "Marcus Rivera",
    role: "Marketing Lead, CloudSync",
    avatar: "👨‍💼",
    text: "We ordered 5,000 die-cut stickers for our conference. They arrived in 3 days, looked perfect, and everyone wanted one. Already reordered!",
    rating: 5,
    type: "Die-Cut",
  },
  {
    name: "Emily Park",
    role: "Independent Artist",
    avatar: "👩‍🎤",
    text: "As an artist selling stickers, quality matters. These are the best I've found — vibrant colors, durable, and the pricing for small batches is unbeatable.",
    rating: 5,
    type: "Vinyl",
  },
  {
    name: "Jake Thompson",
    role: "Owner, Urban Coffee Co.",
    avatar: "☕",
    text: "Clear stickers on our coffee cups look absolutely premium. Customers think they're screen-printed. The free proof process was super easy.",
    rating: 5,
    type: "Clear",
  },
  {
    name: "Aisha Patel",
    role: "Event Coordinator",
    avatar: "🎉",
    text: "Ordered glitter stickers for a music festival. They were the hit of the merch table! Fast turnaround and exceptional customer support.",
    rating: 5,
    type: "Glitter",
  },
  {
    name: "David Kim",
    role: "CEO, NexTech Labs",
    avatar: "🔬",
    text: "We needed durable laptop stickers for our employees. The matte finish looks incredibly professional. Bulk pricing saved us 40%. No brainer.",
    rating: 5,
    type: "Matte",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-purple-200 text-sm font-semibold mb-4 backdrop-blur-sm">
            Loved by 50,000+ Customers
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            What our customers{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">say</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/15 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-lg">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-purple-300 text-xs">{t.role}</div>
                </div>
                <div className="ml-auto px-2 py-0.5 bg-white/10 rounded-full text-purple-200 text-xs font-medium">
                  {t.type}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "10M+", label: "Stickers Printed" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "99.7%", label: "On-Time Delivery" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-purple-300 text-sm mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
