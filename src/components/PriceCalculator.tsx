"use client";
import { useState, useMemo } from "react";

const stickerOptions = {
  types: [
    { id: "die-cut", name: "Die-Cut", basePrice: 0.07, icon: "✂️" },
    { id: "vinyl", name: "Vinyl", basePrice: 0.05, icon: "🛡️" },
    { id: "holographic", name: "Holographic", basePrice: 0.12, icon: "🌈" },
    { id: "clear", name: "Clear", basePrice: 0.09, icon: "💎" },
    { id: "matte", name: "Matte", basePrice: 0.06, icon: "🎨" },
    { id: "glitter", name: "Glitter", basePrice: 0.14, icon: "✨" },
    { id: "bumper", name: "Bumper", basePrice: 0.15, icon: "🚗" },
    { id: "transfer", name: "Transfer", basePrice: 0.18, icon: "🏷️" },
  ],
  sizes: [
    { id: "2x2", name: "2\" × 2\"", label: "Small", multiplier: 1.0 },
    { id: "3x3", name: "3\" × 3\"", label: "Medium", multiplier: 1.4 },
    { id: "4x4", name: "4\" × 4\"", label: "Large", multiplier: 1.9 },
    { id: "5x5", name: "5\" × 5\"", label: "XL", multiplier: 2.5 },
    { id: "6x6", name: "6\" × 6\"", label: "XXL", multiplier: 3.2 },
    { id: "custom", name: "Custom", label: "Any Size", multiplier: 2.0 },
  ],
  finishes: [
    { id: "glossy", name: "Glossy", multiplier: 1.0 },
    { id: "matte", name: "Matte", multiplier: 1.05 },
    { id: "satin", name: "Satin", multiplier: 1.1 },
  ],
};

const quantityTiers = [
  { min: 50, max: 99, discount: 0 },
  { min: 100, max: 249, discount: 0.1 },
  { min: 250, max: 499, discount: 0.18 },
  { min: 500, max: 999, discount: 0.25 },
  { min: 1000, max: 2499, discount: 0.32 },
  { min: 2500, max: 5000, discount: 0.40 },
];

export default function PriceCalculator() {
  const [selectedType, setSelectedType] = useState("die-cut");
  const [selectedSize, setSelectedSize] = useState("3x3");
  const [selectedFinish, setSelectedFinish] = useState("glossy");
  const [quantity, setQuantity] = useState(250);

  const pricing = useMemo(() => {
    const type = stickerOptions.types.find((t) => t.id === selectedType)!;
    const size = stickerOptions.sizes.find((s) => s.id === selectedSize)!;
    const finish = stickerOptions.finishes.find((f) => f.id === selectedFinish)!;
    const tier = quantityTiers.find((t) => quantity >= t.min && quantity <= t.max) || quantityTiers[quantityTiers.length - 1];

    const unitBase = type.basePrice * size.multiplier * finish.multiplier;
    const unitDiscount = unitBase * (1 - tier.discount);
    const total = unitDiscount * quantity;
    const savings = (unitBase - unitDiscount) * quantity;

    return {
      unitPrice: unitDiscount,
      total,
      savings,
      discount: tier.discount,
      perSticker: unitDiscount,
      freeShipping: total >= 50,
    };
  }, [selectedType, selectedSize, selectedFinish, quantity]);

  return (
    <section id="calculator" className="py-28 bg-gradient-to-br from-purple-50 via-white to-violet-50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
            Instant Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Sticker price{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">calculator</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Configure your perfect stickers and see pricing instantly. Volume discounts up to 40% off!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sticker Type */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-black">1</span>
                Sticker Type
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stickerOptions.types.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-3 rounded-xl border-2 transition-all text-left ${
                      selectedType === type.id
                        ? "border-purple-500 bg-purple-50 shadow-md shadow-purple-200/50"
                        : "border-gray-100 hover:border-purple-200 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-xl">{type.icon}</span>
                    <div className="text-sm font-semibold text-gray-800 mt-1">{type.name}</div>
                    <div className="text-xs text-gray-400">${type.basePrice.toFixed(2)}/ea base</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-black">2</span>
                Size
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {stickerOptions.sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`p-3 rounded-xl border-2 transition-all text-center ${
                      selectedSize === size.id
                        ? "border-purple-500 bg-purple-50 shadow-md shadow-purple-200/50"
                        : "border-gray-100 hover:border-purple-200"
                    }`}
                  >
                    <div className="text-sm font-bold text-gray-800">{size.name}</div>
                    <div className="text-xs text-gray-400">{size.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Finish */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-black">3</span>
                Finish
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {stickerOptions.finishes.map((finish) => (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinish(finish.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      selectedFinish === finish.id
                        ? "border-purple-500 bg-purple-50 shadow-md shadow-purple-200/50"
                        : "border-gray-100 hover:border-purple-200"
                    }`}
                  >
                    <div className="text-sm font-bold text-gray-800">{finish.name}</div>
                    {finish.multiplier > 1 && (
                      <div className="text-xs text-gray-400">+{((finish.multiplier - 1) * 100).toFixed(0)}%</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-black">4</span>
                Quantity
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-gray-900">{quantity.toLocaleString()}</span>
                  {pricing.discount > 0 && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full">
                      {(pricing.discount * 100).toFixed(0)}% OFF
                    </span>
                  )}
                </div>
                <input
                  type="range"
                  min="50"
                  max="5000"
                  step="50"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 font-medium">
                  <span>50</span>
                  <span>1,000</span>
                  <span>2,500</span>
                  <span>5,000</span>
                </div>

                {/* Quick quantity buttons */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {[100, 250, 500, 1000, 2500].map((q) => (
                    <button
                      key={q}
                      onClick={() => setQuantity(q)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                        quantity === q
                          ? "bg-purple-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-700"
                      }`}
                    >
                      {q.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl p-6 shadow-xl shadow-purple-200/30 border-2 border-purple-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Your Quote</h3>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Type</span>
                    <span className="font-semibold text-gray-800">
                      {stickerOptions.types.find((t) => t.id === selectedType)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Size</span>
                    <span className="font-semibold text-gray-800">
                      {stickerOptions.sizes.find((s) => s.id === selectedSize)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Finish</span>
                    <span className="font-semibold text-gray-800">
                      {stickerOptions.finishes.find((f) => f.id === selectedFinish)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Quantity</span>
                    <span className="font-semibold text-gray-800">{quantity.toLocaleString()} stickers</span>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">Per sticker</span>
                      <span className="font-bold text-gray-800">${pricing.perSticker.toFixed(3)}</span>
                    </div>
                    {pricing.savings > 0 && (
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-green-600">You save</span>
                        <span className="font-bold text-green-600">-${pricing.savings.toFixed(2)}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold">Total</span>
                      <span className="text-3xl font-black bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                        ${pricing.total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {pricing.freeShipping && (
                    <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 rounded-xl p-3">
                      <span>🚚</span>
                      <span className="font-semibold">Free shipping included!</span>
                    </div>
                  )}
                </div>

                <button className="mt-6 w-full py-5 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-lg font-bold rounded-2xl hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all text-center">
                  Order Now →
                </button>

                <p className="text-center text-xs text-gray-400 mt-3">
                  Free proof before printing • 100% satisfaction guarantee
                </p>
              </div>

              {/* Volume Discounts Table */}
              <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 mb-3">Volume Discounts</h4>
                <div className="space-y-2">
                  {quantityTiers.map((tier) => (
                    <div
                      key={tier.min}
                      className={`flex justify-between text-xs py-1.5 px-2 rounded-lg ${
                        quantity >= tier.min && quantity <= tier.max
                          ? "bg-purple-50 text-purple-700 font-bold"
                          : "text-gray-500"
                      }`}
                    >
                      <span>{tier.min.toLocaleString()} – {tier.max.toLocaleString()}</span>
                      <span>{tier.discount > 0 ? `${(tier.discount * 100).toFixed(0)}% off` : "Base price"}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
