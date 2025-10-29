import Image from "next/image";

export default function WindshieldsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div className="relative h-72 w-full bg-zinc-100 rounded-xl">
          <Image src="https://images.pexels.com/photos/3807258/pexels-photo-3807258.jpeg?w=800&q=80" alt="Windshields & Glass" fill className="object-cover p-6 fade-in" loading="lazy" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">Windshields & Glass</h1>
          <p className="text-zinc-700 mb-4">Expert windshield repair and replacement with OEM-quality glass. Same-day service and insurance claim support available.</p>
          <div className="flex gap-3">
            <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-black text-white px-5 py-3 hover:bg-zinc-800 transition">Call Now</a>
            <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border border-zinc-300 px-5 py-3 hover:bg-zinc-50 transition">Mail Us</a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="border rounded-xl p-6 bg-white">
          <h3 className="font-semibold mb-3">Windshield Repair</h3>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>✓ Chip and crack repair</li>
            <li>✓ Prevents spreading</li>
            <li>✓ Cost-effective solution</li>
            <li>✓ Quick 30-min service</li>
          </ul>
        </div>
        <div className="border rounded-xl p-6 bg-white">
          <h3 className="font-semibold mb-3">Windshield Replacement</h3>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>✓ OEM-quality glass</li>
            <li>✓ Perfect fitment</li>
            <li>✓ Warranty included</li>
            <li>✓ Insurance support</li>
          </ul>
        </div>
        <div className="border rounded-xl p-6 bg-white">
          <h3 className="font-semibold mb-3">Door Glass & Mirrors</h3>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>✓ Side window replacement</li>
            <li>✓ Rear glass service</li>
            <li>✓ Mirror glass repair</li>
            <li>✓ Regulator fixing</li>
          </ul>
        </div>
      </div>

      <div className="bg-zinc-50 border rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4">Why Replace Your Windshield?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-700">
          <div className="flex items-start gap-3">
            <span className="text-xl">✅</span>
            <div>
              <h4 className="font-medium">Safety First</h4>
              <p className="text-sm text-zinc-600">Windshield provides 30% of structural strength in accidents</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">✅</span>
            <div>
              <h4 className="font-medium">Clear Vision</h4>
              <p className="text-sm text-zinc-600">Cracks impair visibility and increase accident risk</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">✅</span>
            <div>
              <h4 className="font-medium">Airbag Deployment</h4>
              <p className="text-sm text-zinc-600">Damaged windshield affects airbag efficiency</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">✅</span>
            <div>
              <h4 className="font-medium">Resale Value</h4>
              <p className="text-sm text-zinc-600">Maintain car value with pristine windshield</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
