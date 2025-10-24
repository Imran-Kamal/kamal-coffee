// components/MiniCart.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/components/CartProvider';
import { X } from 'lucide-react';
import { useEffect } from 'react';

type MiniCartProps = {
  open: boolean;
  onClose: () => void;
};

export default function MiniCart({ open, onClose }: MiniCartProps) {
  const { items, increment, decrement, remove, subtotal, count } = useCart();

  // Prevent background scroll while cart is open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Drawer */}
          <motion.aside
            key="drawer"
            className="fixed right-0 top-0 bottom-0 w-[360px] max-w-full bg-white z-50 flex flex-col shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
          >
            <div className="flex items-center justify-between px-5 h-16 border-b border-neutral-200">
              <h2 className="text-lg font-semibold tracking-tight">Your Cart</h2>
              <button
                aria-label="Close cart"
                onClick={onClose}
                className="p-2 rounded-md hover:bg-neutral-100 transition"
              >
                <X className="w-5 h-5 text-neutral-600" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {items.length === 0 && (
                <p className="text-sm text-neutral-600 text-center mt-10">
                  Your cart is empty.
                </p>
              )}

              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 items-center border-b border-neutral-200 pb-4"
                >
                  {item.image && (
                    <div className="relative w-16 h-16 shrink-0 rounded-md overflow-hidden ring-1 ring-neutral-200">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-neutral-900 truncate">
                      {item.name}
                    </h3>
                    {item.size && (
                      <p className="text-xs text-neutral-500">{item.size}</p>
                    )}
                    <p className="text-sm text-neutral-700 mt-1">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => decrement(item.id)}
                        className="w-6 h-6 rounded-full ring-1 ring-neutral-300 text-sm flex items-center justify-center hover:bg-neutral-100"
                      >
                        −
                      </button>
                      <span className="text-sm">{item.qty}</span>
                      <button
                        onClick={() => increment(item.id)}
                        className="w-6 h-6 rounded-full ring-1 ring-neutral-300 text-sm flex items-center justify-center hover:bg-neutral-100"
                      >
                        +
                      </button>
                      <button
                        onClick={() => remove(item.id)}
                        className="ml-3 text-xs text-neutral-500 hover:text-neutral-800"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-200 p-5">
              <div className="flex justify-between text-sm font-medium text-neutral-900">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-neutral-500 mt-1">
                Taxes and shipping calculated at checkout.
              </p>
              <Link
                href="/cart"
                onClick={onClose}
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 text-white py-3 text-sm font-medium hover:opacity-95 transition"
              >
                View Cart ({count})
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
