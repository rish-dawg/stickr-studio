"use client";

const socialIcons = [
  {
    name: "Twitter",
    href: "#",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.85 4.85 0 01-3.59-1.42V6.69h3.59z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
                  <polyline points="14,3 14,8 21,8" />
                </svg>
              </div>
              <span className="text-xl font-extrabold text-white">Stickr Studio</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Premium custom stickers for brands, artists, and dreamers. Weatherproof, vibrant, and built to last.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-400/30 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-3">
              {["Die-Cut Stickers", "Vinyl Stickers", "Holographic", "Clear Stickers", "Matte Stickers", "Bumper Stickers", "Sticker Sheets", "Labels"].map((item) => (
                <li key={item}>
                  <a href="#sticker-types" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Blog", "Careers", "Press", "Sustainability", "Affiliate Program"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              {["Help Center", "Design Templates", "File Guidelines", "Shipping Info", "Returns & Refunds", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Stickr Studio. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a key={link} href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
