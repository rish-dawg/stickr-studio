"use client";

export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-br from-purple-50 via-white to-violet-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet-200/40 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative text-center">
        <div className="bg-white rounded-3xl p-10 sm:p-14 shadow-xl shadow-purple-200/30 border border-purple-100">
          <div className="text-5xl mb-6">🎨</div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-5">
            Ready to make your stickers{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">legendary?</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
            Join 50,000+ happy customers. Upload your design, get a free proof, and have premium stickers at your door in days.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#calculator"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-lg font-bold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1 transition-all"
            >
              Start Your Order →
            </a>
            <a
              href="mailto:hello@stickrstudio.com"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-gray-700 text-lg font-semibold rounded-2xl border-2 border-gray-200 hover:border-purple-300 hover:text-purple-700 transition-all"
            >
              Contact Sales
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 justify-center text-sm text-gray-400">
            <span>✓ No minimums</span>
            <span>✓ Free proofs</span>
            <span>✓ Free shipping $50+</span>
            <span>✓ 100% guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
