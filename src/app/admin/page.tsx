"use client";

import { useState, useEffect, useCallback } from "react";

type Product = {
  id: string;
  name: string;
  size: string;
  shape: string;
  type: string;
  quantity: number;
  cost: number;
  minOrder: number;
  image: string | null;
  featured: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

const SHAPES = ["circle", "square", "rectangle", "oval", "die-cut", "custom"];
const TYPES = ["vinyl", "paper", "matte", "glossy", "holographic", "clear"];
const SIZES = ["1x1", "1.5x1.5", "2x2", "2x3", "2x4", "3x3", "3x10", "4x4", "4x6", "custom"];

const emptyForm = {
  name: "",
  size: "2x2",
  shape: "circle",
  type: "vinyl",
  quantity: 100,
  cost: 0.35,
  minOrder: 25,
  image: "",
  featured: false,
  active: true,
};

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterShape, setFilterShape] = useState("");

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const payload = { ...form, image: form.image || null };
    const url = editingId ? `/api/products/${editingId}` : "/api/products";
    const method = editingId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSaving(false);
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
    fetchProducts();
  };

  const handleEdit = (product: Product) => {
    setForm({
      name: product.name,
      size: product.size,
      shape: product.shape,
      type: product.type,
      quantity: product.quantity,
      cost: product.cost,
      minOrder: product.minOrder,
      image: product.image || "",
      featured: product.featured,
      active: product.active,
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    fetchProducts();
  };

  const handleSeed = async () => {
    if (!confirm("This will replace ALL products with sample data. Continue?")) return;
    setLoading(true);
    await fetch("/api/products/seed", { method: "POST" });
    fetchProducts();
  };

  const toggleActive = async (product: Product) => {
    await fetch(`/api/products/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !product.active }),
    });
    fetchProducts();
  };

  const toggleFeatured = async (product: Product) => {
    await fetch(`/api/products/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ featured: !product.featured }),
    });
    fetchProducts();
  };

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = !filterType || p.type === filterType;
    const matchesShape = !filterShape || p.shape === filterShape;
    return matchesSearch && matchesType && matchesShape;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="text-gray-400 hover:text-white transition text-sm">
              &larr; Back to site
            </a>
            <span className="text-gray-600">|</span>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Product Admin
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSeed}
              className="px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition"
            >
              Seed Sample Data
            </button>
            <button
              onClick={() => {
                setForm(emptyForm);
                setEditingId(null);
                setShowForm(true);
              }}
              className="px-4 py-2 text-sm bg-purple-600 hover:bg-purple-500 rounded-lg font-medium transition"
            >
              + Add Product
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Products", value: products.length, color: "purple" },
            { label: "Active", value: products.filter((p) => p.active).length, color: "green" },
            { label: "Featured", value: products.filter((p) => p.featured).length, color: "amber" },
            { label: "Types", value: [...new Set(products.map((p) => p.type))].length, color: "blue" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4"
            >
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <p className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm flex-1 min-w-[200px] focus:outline-none focus:border-purple-500 transition"
          />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-purple-500 transition"
          >
            <option value="">All Types</option>
            {TYPES.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
          <select
            value={filterShape}
            onChange={(e) => setFilterShape(e.target.value)}
            className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-purple-500 transition"
          >
            <option value="">All Shapes</option>
            {SHAPES.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Product Table */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📦</div>
            <p className="text-gray-400 text-lg">No products found</p>
            <p className="text-gray-600 text-sm mt-1">
              Add a product or seed sample data to get started.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-800">
                  <th className="text-left px-4 py-3 text-gray-400 font-medium">Name</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-medium">Size</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-medium">Shape</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-medium">Type</th>
                  <th className="text-right px-4 py-3 text-gray-400 font-medium">Cost/unit</th>
                  <th className="text-right px-4 py-3 text-gray-400 font-medium">Min Order</th>
                  <th className="text-center px-4 py-3 text-gray-400 font-medium">Status</th>
                  <th className="text-center px-4 py-3 text-gray-400 font-medium">Featured</th>
                  <th className="text-right px-4 py-3 text-gray-400 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-gray-800/50 hover:bg-gray-900/50 transition"
                  >
                    <td className="px-4 py-3 font-medium">{product.name}</td>
                    <td className="px-4 py-3 text-gray-400">{product.size}&quot;</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs capitalize">
                        {product.shape}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded-full text-xs capitalize">
                        {product.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-mono">${product.cost.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right text-gray-400">{product.minOrder}</td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => toggleActive(product)}
                        className={`w-10 h-5 rounded-full transition relative ${
                          product.active ? "bg-green-500" : "bg-gray-700"
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${
                            product.active ? "left-5" : "left-0.5"
                          }`}
                        />
                      </button>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => toggleFeatured(product)}
                        className={`text-lg transition ${
                          product.featured
                            ? "text-amber-400"
                            : "text-gray-700 hover:text-gray-500"
                        }`}
                      >
                        ★
                      </button>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(product)}
                          className="px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 rounded-lg transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="px-3 py-1 text-xs bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-lg transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
              <h2 className="text-lg font-bold">
                {editingId ? "Edit Product" : "Add Product"}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setForm(emptyForm);
                }}
                className="text-gray-400 hover:text-white transition text-2xl leading-none"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">Product Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Circle Vinyl Sticker"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              {/* Size + Shape row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Size *</label>
                  <select
                    value={form.size}
                    onChange={(e) => setForm({ ...form, size: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 transition"
                  >
                    {SIZES.map((s) => (
                      <option key={s} value={s}>{s}&quot;</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Shape *</label>
                  <select
                    value={form.shape}
                    onChange={(e) => setForm({ ...form, shape: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 transition"
                  >
                    {SHAPES.map((s) => (
                      <option key={s} value={s}>
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Type */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">Material Type *</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 transition"
                >
                  {TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cost + Quantity + MinOrder row */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Cost/unit ($) *</label>
                  <input
                    type="number"
                    required
                    step="0.01"
                    min="0"
                    value={form.cost}
                    onChange={(e) =>
                      setForm({ ...form, cost: parseFloat(e.target.value) || 0 })
                    }
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Default Qty</label>
                  <input
                    type="number"
                    min="1"
                    value={form.quantity}
                    onChange={(e) =>
                      setForm({ ...form, quantity: parseInt(e.target.value) || 1 })
                    }
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Min Order</label>
                  <input
                    type="number"
                    min="1"
                    value={form.minOrder}
                    onChange={(e) =>
                      setForm({ ...form, minOrder: parseInt(e.target.value) || 1 })
                    }
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">Image URL (optional)</label>
                <input
                  type="url"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  placeholder="https://..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              {/* Toggles */}
              <div className="flex gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                    className="w-4 h-4 rounded accent-purple-500"
                  />
                  <span className="text-sm text-gray-300">Featured</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.active}
                    onChange={(e) => setForm({ ...form, active: e.target.checked })}
                    className="w-4 h-4 rounded accent-green-500"
                  />
                  <span className="text-sm text-gray-300">Active</span>
                </label>
              </div>

              {/* Submit */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                    setForm(emptyForm);
                  }}
                  className="flex-1 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-medium transition disabled:opacity-50"
                >
                  {saving ? "Saving..." : editingId ? "Update Product" : "Create Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
