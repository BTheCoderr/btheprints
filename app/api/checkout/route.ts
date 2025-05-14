import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession } from "../../lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { items, email } = data;

    // Validate request
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, message: "Cart is empty" },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Create Stripe checkout session
    const session = await createCheckoutSession(items, email);

    return NextResponse.json({
      success: true,
      url: session.url,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create checkout session" },
      { status: 500 }
    );
  }
} 