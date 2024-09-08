import { cartTable, db } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import { eq, and } from "drizzle-orm";
import { cookies } from "next/headers";

export const DELETE = async (request: NextRequest) => {
  try {
    const req = await request.json();
    const productId = req.productId;
    const Cookies = cookies();
    const userId = Cookies.get("user_id")?.value;

    if (!productId || !userId) {
      return NextResponse.json({ message: "Product ID and User ID are required" }, { status: 400 });
    }

    const res = await db
      .delete(cartTable)
      .where(and(eq(cartTable.productId, productId), eq(cartTable.user_id, userId)))
      .returning();

    if (res.length === 0) {
      return NextResponse.json({ message: "Product not found for the user" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product deleted successfully", res });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", error: error }, { status: 500 });
  }
};
