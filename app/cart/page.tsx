// app/shop/page.tsx
'use client';

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";

const PRODUCT = {
  id: "vietnamese-iced-coffee",
  name: "Vietnamese Iced Coffee",
  price: 4.99,
  img: "/images/can/vietnamese-iced-coffee.png",
  tagline: "Authentic • Smooth • Elevated",
  size: "12 FL OZ (355 mL)",
};

export default function ShopPage() {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    add(
      {
        id: PRODUCT.id,
        name: PRODUCT.name,
        price: PRODUCT.price,
        image: PRODUCT.img,
        size: PRODUCT.size,
      },
      qty
    );
    setAdded(true);
    // brief confirmation
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <main className="bg-white text-neutral-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Shop</h1>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition p-6 text-center">
            <div className="relative">
              <Image
                src={PRODUCT.img}
                alt={PRODUCT.name}
                width={360}
                height={760}
                className="h-[280px] w-auto mx-auto select-none"
                priority
              />
              {added && (
                <div className="absolute inset-x-0 -bottom-3 mx-auto w-max rounded-full bg-neutral-900 text-white text-xs px-3 py-1 shadow">
                  Added to cart ✓
                </div>
              )}
            </div>

            <h3 className="mt-6 text-lg font-medium">{PRODUCT.name}</h3>
            <p className="mt-1 text-sm text-neutral-600">{PRODUCT.tagline}</p>
            <p className="mt-1 text-sm text-neutral-600">{PRODUCT.size}</p>

            <div className="mt-3 text-base font-semibold">${PRODUCT.price.toFixed(2)}</div>

            {/* Qty + Add */}
            <div className="mt-5 flex items-center justify-center gap-3">
              <div className="inline-flex items-center rounded-full ring-1 ring-neutral-300">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="h-9 w-9 text-lg hover:bg-neutral-100 rounded-l-full"
                >
                  −
                </button>
                <div className="w-10 text-center text-sm">{qty}</div>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => Math.min(99, q + 1))}
                  className="h-9 w-9 text-lg hover:bg-neutral-100 rounded-r-full"
                >
                  +
                </button>
              </div>

              <button
                onClick={onAdd}
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-5 py-2 text-sm font-medium hover:opacity-95 transition"
              >
                Add to cart
              </button>
            </div>

            <p className="mt-3 text-xs text-neutral-500">
              Taxes & shipping shown at checkout.{" "}
              <a href="/cart" className="underline underline-offset-2">
                View cart
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
