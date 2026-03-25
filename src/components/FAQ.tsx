"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What file formats do you accept?",
    a: "We accept PNG, JPG, SVG, AI, PSD, PDF, and EPS files. For the best quality, we recommend vector formats (SVG, AI, EPS) or high-resolution PNG/JPG files (300 DPI minimum). Don't have a design? Our team offers free design assistance!",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Our minimum order is just 50 stickers — perfect for testing or small projects. We offer generous volume discounts starting at 100+ stickers, with savings up to 40% for orders of 2,500+.",
  },
  {
    q: "How long does shipping take?",
    a: "Standard production takes 3-5 business days, with free shipping on orders over $50. We also offer rush production (1-2 days) for an additional fee. All orders include tracking information.",
  },
  {
    q: "Are your stickers waterproof?",
    a: "Yes! All our stickers are printed on premium vinyl with waterproof, UV-resistant inks. They're designed to withstand outdoor conditions including rain, sun, and snow. Most stickers last 5+ years outdoors.",
  },
  {
    q: "Do I get a proof before printing?",
    a: "Absolutely! Every order includes a free digital proof sent to your email within 24 hours. You can request unlimited revisions until you're 100% happy. We never print without your approval.",
  },
  {
    q: "What's the difference between die-cut and kiss-cut?",
    a: "Die-cut stickers are cut through the vinyl and backing to the exact shape of your design. Kiss-cut stickers are cut through only the vinyl layer, leaving the backing intact — making them easy to peel. Kiss-cut is great for sticker sheets.",
  },
  {
    q: "Can I order custom sizes?",
    a: "Absolutely! While we have standard sizes from 2\" to 6\", we can produce stickers in virtually any size up to 12\" × 12\". Contact us for custom dimensions and we'll provide an instant quote.",
  },
  {
    q: "Do you offer white ink printing?",
    a: "Yes! We offer white ink for clear and transparent stickers. This allows you to have solid white elements in your design that won't be see-through. Just indicate white ink areas in your design file.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Got{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">questions?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to know about ordering custom stickers.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                openIndex === i ? "border-purple-200 shadow-lg shadow-purple-100/50" : "border-gray-100"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    openIndex === i
                      ? "bg-purple-600 text-white rotate-180"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5l4 4 4-4" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
