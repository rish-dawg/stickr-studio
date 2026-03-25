"use client";

const steps = [
  {
    number: "01",
    title: "Upload Your Design",
    description: "Upload your artwork in any format — PNG, SVG, AI, PSD, or PDF. No design? We offer free design help.",
    icon: "📤",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    number: "02",
    title: "Configure & Preview",
    description: "Choose your sticker type, size, finish, and quantity. See a live preview and get instant pricing.",
    icon: "⚙️",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    number: "03",
    title: "Free Proof Approval",
    description: "We send you a digital proof to review before printing. Request unlimited revisions — it's free.",
    icon: "✅",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    number: "04",
    title: "Fast Delivery",
    description: "Your stickers are printed with premium inks, precision cut, and shipped to your door in 3-5 days.",
    icon: "🚀",
    gradient: "from-green-500 to-emerald-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-[#f8f9fb] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            How it{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">works</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            From upload to doorstep in 4 simple steps. No minimums, no hassle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-0.5 bg-gradient-to-r from-purple-300 to-indigo-200" />
              )}

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-purple-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg mx-auto flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <div className="text-xs font-black text-purple-400 mb-2 tracking-widest">STEP {step.number}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
