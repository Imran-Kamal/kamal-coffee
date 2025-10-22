'use client'

import { useState } from 'react'

export default function ShopPage() {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    // For now, we’ll just alert — later integrate actual cart logic
    alert(`Added ${quantity} x Original Kamal Coffee to cart`)
  }

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Original Kamal Coffee</h1>
          <p>Oat Milk · Allulose · Bold Vietnamese Iced Coffee</p>
        </div>
      </section>

      <section className="shop-grid">
        <div className="product-card">
          <div className="product-image">
            <img
              width={300}
              height={450}
              src="/images/kamal%20coffee%20simple%20image%20first%20sketch%20front%20of%20can.jpeg"
              alt="Original Kamal Coffee can"
            />
          </div>
          <div className="product-info">
            <h3>Original</h3>
            <p>Experience the rich taste of Vietnamese iced coffee, reimagined with oat milk and sweetened with allulose. Smooth, bold, and beautifully simple.</p>
            <p className="note">12 fl oz (355 mL) · Vegan · Lactose-Free</p>

            <div className="quantity-selector">
              <label htmlFor="qty">Quantity:</label>
              <input
                id="qty"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                className="qty-input"
              />
            </div>

            <button className="primary-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <section className="prose-wrap">
        <div className="prose">
          <h2>What Makes It Different</h2>
          <ul>
            <li><strong>Premium Vietnamese Robusta beans</strong> — bold & smooth.</li>
            <li><strong>Oat-milk condensed milk</strong> — creamy and dairy-free.</li>
            <li><strong>Allulose sweetener</strong> — sweetness without the crash.</li>
            <li><strong>Ready to drink</strong> — no brewing required.</li>
          </ul>
          <h3>How to Enjoy</h3>
          <p>Chill, pour over ice, add oat milk or your favorite creamer, stir, and enjoy. Or keep it simple — bold, pure, and refreshing.</p>
        </div>
      </section>
    </main>
  )
}
