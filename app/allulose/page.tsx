export default function AllulosePage() {
  return (
    <main className="bg-[#F7F7F5] text-neutral-900">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Allulose at Kamal</h1>
        <p className="mt-4 text-neutral-700">
          Allulose is a rare sugar found in figs and raisins. It tastes like sugar with ~90% fewer calories and has minimal impact on blood sugar.
          The FDA allows allulose to be excluded from “Added Sugars.” That’s why our label reads 0g Added Sugars while listing allulose under Total Carbohydrates.
        </p>
        <div className="mt-8 grid gap-6">
          <div className="rounded-2xl bg-white ring-1 ring-black/10 p-6">
            <h2 className="text-xl font-medium">Why we use it</h2>
            <ul className="mt-3 list-disc pl-5 text-neutral-700 space-y-1">
              <li>Smooth sweetness that tastes like the real thing</li>
              <li>Lower calories (~0.4 kcal per gram)</li>
              <li>No crash; balanced energy with coffee</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-black/10 p-6">
            <h2 className="text-xl font-medium">What you’ll see on our label</h2>
            <p className="mt-3 text-neutral-700">
              <strong>Total Carbohydrate</strong> includes allulose grams. <strong>Added Sugars</strong> remain <strong>0g</strong>. 
              We also show a voluntary “Includes X g Allulose” line for clarity.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <a href="/shop" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium">
            Shop Vietnamese Iced Coffee
          </a>
        </div>
      </section>
    </main>
  );
}
