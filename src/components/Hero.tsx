"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, #6C3CE1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      {/* Floating sticker shapes — hidden on mobile/tablet to avoid overlap */}
      <div className="absolute top-24 left-[8%] animate-float opacity-80 hidden xl:block">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl shadow-orange-300/40 flex items-center justify-center text-3xl rotate-12">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="0.5" fill="white"/><circle cx="17.5" cy="10.5" r="0.5" fill="white"/><circle cx="8.5" cy="7.5" r="0.5" fill="white"/><circle cx="6.5" cy="12.5" r="0.5" fill="white"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2Z"/></svg>
        </div>
      </div>
      <div className="absolute top-40 right-[10%] animate-float-delayed opacity-80 hidden xl:block">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-xl shadow-blue-300/40 flex items-center justify-center text-2xl -rotate-12">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
      </div>
      <div className="absolute bottom-32 left-[15%] animate-float-delayed opacity-70 hidden xl:block">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 shadow-xl shadow-violet-300/40 flex items-center justify-center text-2xl rotate-6">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
      </div>
      <div className="absolute bottom-48 right-[15%] animate-float opacity-70 hidden xl:block">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-xl shadow-emerald-300/40 flex items-center justify-center text-2xl -rotate-6">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm border border-purple-200/50 text-purple-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Free shipping on orders over $50
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              <span className="text-gray-900">Stickers that</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-violet-500 to-amber-500 bg-clip-text text-transparent">
                stick out.
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Premium custom stickers for your brand, art, or anything you dream up.
              Die-cut, vinyl, holographic &mdash; weatherproof and vibrant.
            </p>

            {/* Sticker showcase - shown here on mobile only, between text and buttons */}
            <div className="block lg:hidden mt-8">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500 shadow-2xl shadow-purple-500/40 overflow-hidden animate-float">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-3 flex items-center justify-center">
                      <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner">
                        <div className="text-center">
                          <div className="text-5xl sm:text-6xl leading-none" style={{ textShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>🍌</div>
                          <div className="mt-1 text-xs font-bold opacity-70 tracking-wider">COOL BANANA</div>
                        </div>
                      </div>
                      <div className="absolute -inset-1 rounded-2xl border-2 border-white/30 pointer-events-none" />
                    </div>
                    <div className="text-base sm:text-lg font-black tracking-tight">YOUR DESIGN HERE</div>
                    <div className="text-xs opacity-70 mt-1">Premium vinyl sticker</div>
                    <div className="mt-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold">
                      Die-Cut &bull; Waterproof
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-orange-300/40 flex items-center justify-center animate-float-delayed rotate-12">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-blue-300/40 flex items-center justify-center animate-float -rotate-12">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M6 3h12l4 6-10 13L2 9z"/></svg>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#calculator"
                className="group inline-flex items-center justify-center px-7 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-base sm:text-lg font-bold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1 transition-all"
              >
                Design Your Stickers
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center px-7 sm:px-10 py-4 sm:py-5 bg-white text-gray-700 text-base sm:text-lg font-semibold rounded-2xl border-2 border-gray-200 hover:border-purple-300 hover:text-purple-700 hover:shadow-lg transition-all"
              >
                View Examples
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 sm:mt-12 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start">
              {[
                { icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, text: "24hr Turnaround", color: "text-amber-500" },
                { icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, text: "Weatherproof", color: "text-blue-500" },
                { icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M22 12h-4"/><path d="M6 12H2"/><path d="M12 6V2"/><path d="M12 22v-4"/></svg>, text: "Pixel Perfect", color: "text-purple-500" },
                { icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.5 4.27C2.63 6.12 2.22 11.56 2.22 11.56l7.1 2.39L7.5 4.27z"/><path d="M16.5 4.27c4.87 1.85 5.28 7.29 5.28 7.29l-7.1 2.39 1.82-9.68z"/><path d="M12 2l1.82 9.68L12 22l-1.82-10.32L12 2z"/></svg>, text: "Eco-Friendly", color: "text-green-500" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-sm text-gray-500">
                  <span className={badge.color}>{badge.icon}</span>
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Sticker showcase (desktop only, mobile version is inline above) */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Main sticker card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500 shadow-2xl shadow-purple-500/40 overflow-hidden animate-float">
                {/* Sticker image showcase */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-4 flex items-center justify-center">
                    {/* Cool banana sticker visual using CSS art */}
                    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner">
                      <div className="text-center">
                        <div className="text-6xl sm:text-7xl leading-none" style={{ textShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>🍌</div>
                        <div className="mt-1 text-xs font-bold opacity-70 tracking-wider">COOL BANANA</div>
                      </div>
                    </div>
                    {/* White sticker border effect */}
                    <div className="absolute -inset-1 rounded-2xl border-2 border-white/30 pointer-events-none" />
                  </div>
                  <div className="text-lg sm:text-xl font-black tracking-tight">YOUR DESIGN HERE</div>
                  <div className="text-xs opacity-70 mt-1">Premium vinyl sticker</div>
                  <div className="mt-3 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold">
                    Die-Cut &bull; Waterproof
                  </div>
                </div>
              </div>

              {/* Floating mini stickers */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-orange-300/40 flex items-center justify-center animate-float-delayed rotate-12">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-blue-300/40 flex items-center justify-center animate-float -rotate-12">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M6 3h12l4 6-10 13L2 9z"/></svg>
              </div>
              <div className="absolute top-4 -left-6 sm:-left-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-emerald-300/40 flex items-center justify-center animate-float-delayed rotate-6">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 1l3.22 6.966 7.78.94-5.72 5.288L18.68 22 12 18.27 5.32 22l1.4-7.806L1 8.906l7.78-.94z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50C240 10 480 90 720 50C960 10 1200 90 1440 50V100H0V50Z" fill="#f8f9fb" />
        </svg>
      </div>
    </section>
  );
}
