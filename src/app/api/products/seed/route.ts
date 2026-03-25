import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const seedProducts = [
  { name: "Circle Vinyl Sticker", size: "2x2", shape: "circle", type: "vinyl", quantity: 100, cost: 0.35, minOrder: 25, featured: true },
  { name: "Square Matte Sticker", size: "3x3", shape: "square", type: "matte", quantity: 100, cost: 0.45, minOrder: 25, featured: true },
  { name: "Die-Cut Logo Sticker", size: "3x3", shape: "die-cut", type: "vinyl", quantity: 100, cost: 0.55, minOrder: 50, featured: true },
  { name: "Rectangle Glossy Label", size: "2x4", shape: "rectangle", type: "glossy", quantity: 100, cost: 0.40, minOrder: 25, featured: false },
  { name: "Holographic Circle", size: "2x2", shape: "circle", type: "holographic", quantity: 100, cost: 0.75, minOrder: 50, featured: true },
  { name: "Clear Oval Sticker", size: "2x3", shape: "oval", type: "clear", quantity: 100, cost: 0.50, minOrder: 25, featured: false },
  { name: "Large Vinyl Banner Sticker", size: "4x6", shape: "rectangle", type: "vinyl", quantity: 50, cost: 1.20, minOrder: 10, featured: false },
  { name: "Mini Circle Sticker", size: "1x1", shape: "circle", type: "paper", quantity: 500, cost: 0.12, minOrder: 100, featured: false },
  { name: "Paper Square Label", size: "2x2", shape: "square", type: "paper", quantity: 250, cost: 0.18, minOrder: 50, featured: false },
  { name: "Die-Cut Holographic Badge", size: "3x3", shape: "die-cut", type: "holographic", quantity: 100, cost: 0.95, minOrder: 25, featured: true },
  { name: "Glossy Bumper Sticker", size: "3x10", shape: "rectangle", type: "glossy", quantity: 50, cost: 1.50, minOrder: 10, featured: false },
  { name: "Matte Oval Label", size: "2x3", shape: "oval", type: "matte", quantity: 100, cost: 0.42, minOrder: 25, featured: false },
  { name: "Clear Die-Cut Window Sticker", size: "4x4", shape: "die-cut", type: "clear", quantity: 50, cost: 0.85, minOrder: 25, featured: true },
  { name: "Small Vinyl Circle", size: "1.5x1.5", shape: "circle", type: "vinyl", quantity: 200, cost: 0.22, minOrder: 50, featured: false },
  { name: "Custom Shape Holographic", size: "3x3", shape: "custom", type: "holographic", quantity: 100, cost: 1.10, minOrder: 25, featured: false },
];

export async function POST() {
  try {
    // Clear existing products
    await prisma.product.deleteMany();

    // Insert seed data
    const products = await prisma.product.createMany({
      data: seedProducts.map((p) => ({ ...p, active: true })),
    });

    return NextResponse.json({
      success: true,
      count: products.count,
      message: `Seeded ${products.count} products`,
    });
  } catch (error) {
    console.error("Failed to seed products:", error);
    return NextResponse.json(
      { error: "Failed to seed products" },
      { status: 500 }
    );
  }
}
