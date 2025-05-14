import { ImageResponse } from "next/og";
import { products } from "../../lib/products";

export const runtime = "edge";
export const alt = "Product image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ fontSize: 64, fontWeight: "bold" }}>BthePrints</h1>
            <p>Product not found</p>
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <h1 style={{ fontSize: 60, fontWeight: "bold", color: "#000", marginBottom: 30 }}>
            {product.name}
          </h1>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              justifyContent: "space-between",
              width: "100%",
              marginBottom: 20,
            }}
          >
            <p style={{ margin: 0 }}>${product.price.toFixed(2)}</p>
            <p style={{ margin: 0, textTransform: "capitalize" }}>
              Category: {product.category}
            </p>
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#4b5563",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            {product.description.substring(0, 100)}
            {product.description.length > 100 ? "..." : ""}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 60,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          BthePrints
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 