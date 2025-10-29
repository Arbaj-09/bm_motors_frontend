import Image from "next/image";

export default function TyresPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div className="relative h-72 w-full bg-zinc-100 rounded-xl">
          <Image src="https://images.pexels.com/photos/3807293/pexels-photo-3807293.jpeg?w=800&q=80" alt="Tyres & Wheel Care" fill className="object-cover p-6 fade-in" loading="lazy" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">Tyres & Wheel Care</h1>
          <p className="text-zinc-700 mb-4">Premium tyre brands, expert fitment, balancing, and alignment services. Ensure safety and performance with genuine tyres.</p>
          <div className="flex gap-3">
            <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-black text-white px-5 py-3 hover:bg-zinc-800 transition">Call Now</a>
            <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border border-zinc-300 px-5 py-3 hover:bg-zinc-50 transition">Mail Us</a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="border rounded-xl p-6 bg-white">
          <h3 className="font-semibold mb-3">Tyre Replacement</h3>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>✓ All premium brands</li>
            <li>✓ Expert fitment</li>
            <li>✓ Warranty included</li>
          </ul>
        </div>
        <div className="border rounded-xl p-6 bg-white">
          <h3 className="font-semibold mb-3">Wheel Balancing</h3>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>✓ Computerized balancing</li>
            <li>✓ Vibration elimination</li>
            <li>✓ Extended tyre life</li>
          </ul>
        </div>
        <div className="border rounded-xl p-6 bg-white">
          <h3 className="font-semibold mb-3">Wheel Alignment</h3>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>✓ 3D laser alignment</li>
            <li>✓ Better fuel economy</li>
            <li>✓ Improved handling</li>
          </ul>
        </div>
        <div className="border rounded-xl p-6 bg-white">
          <h3 className="font-semibold mb-3">Puncture Repair</h3>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>✓ Quick repair</li>
            <li>✓ Tubeless solutions</li>
            <li>✓ Reliable fixing</li>
          </ul>
        </div>
      </div>

      <div className="bg-zinc-50 border rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-6">When to Replace Your Tyres</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">🔴 Tread Depth Below 1.6mm</h4>
            <p className="text-sm text-zinc-600">Legal minimum tread depth for safety and grip</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">🔴 Cracks or Bulges</h4>
            <p className="text-sm text-zinc-600">Sidewall damage indicating structural weakness</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">🔴 Uneven Wear</h4>
            <p className="text-sm text-zinc-600">Sign of alignment or suspension issues</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">🔴 Age Over 5 Years</h4>
            <p className="text-sm text-zinc-600">Rubber degrades over time even with low usage</p>
          </div>
        </div>
      </div>
    </div>
  );
}
