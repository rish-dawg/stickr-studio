import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET all products
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const activeOnly = searchParams.get("active") === "true";
    const featured = searchParams.get("featured") === "true";

    const where: Record<string, boolean> = {};
    if (activeOnly) where.active = true;
    if (featured) where.featured = true;

    const products = await prisma.product.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST create a new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, size, shape, type, quantity, cost, minOrder, image, featured, active } = body;

    if (!name || !size || !shape || !type || cost === undefined) {
      return NextResponse.json(
        { error: "Missing required fields: name, size, shape, type, cost" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        name,
        size,
        shape,
        type,
        quantity: quantity ?? 100,
        cost: parseFloat(cost),
        minOrder: minOrder ?? 25,
        image: image ?? null,
        featured: featured ?? false,
        active: active ?? true,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Failed to create product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
