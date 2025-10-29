import Image from "next/image";

export default function DetailingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div className="relative h-72 w-full bg-zinc-100 rounded-xl">
          <Image src="https://images.pexels.com/photos/3807274/pexels-photo-3807274.jpeg?w=800&q=80" alt="Car Detailing" fill className="object-cover p-6 fade-in" loading="lazy" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">Car Detailing</h1>
          <p className="text-zinc-700 mb-4">Restore your car's showroom shine with our premium detailing packages. Deep cleaning, polishing, and protection for interior and exterior.</p>
          <div className="flex gap-3">
            <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-black text-white px-5 py-3 hover:bg-zinc-800 transition">Call Now</a>
            <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border border-zinc-300 px-5 py-3 hover:bg-zinc-50 transition">Mail Us</a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="border rounded-xl p-6 bg-white">
          <h3 className="text-lg font-semibold mb-3">Interior Detailing</h3>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>✓ Steam vacuum cleaning</li>
            <li>✓ Leather/fabric conditioning</li>
            <li>✓ Dashboard & panel cleaning</li>
            <li>✓ Carpet shampooing</li>
            <li>✓ Odor elimination</li>
            <li>✓ Sanitization treatment</li>
          </ul>
        </div>
        <div className="border rounded-xl p-6 bg-white">
          <h3 className="text-lg font-semibold mb-3">Exterior Detailing</h3>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>✓ Foam wash & rinse</li>
            <li>✓ Clay bar treatment</li>
            <li>✓ Machine polishing</li>
            <li>✓ Waxing & sealing</li>
            <li>✓ Tire & trim dressing</li>
            <li>✓ Glass treatment</li>
          </ul>
        </div>
        <div className="border rounded-xl p-6 bg-white">
          <h3 className="text-lg font-semibold mb-3">Premium Protection</h3>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>✓ Ceramic coating</li>
            <li>✓ Paint protection film</li>
            <li>✓ Graphene coating</li>
            <li>✓ Headlight restoration</li>
            <li>✓ Chrome polishing</li>
            <li>✓ Long-term warranty</li>
          </ul>
        </div>
      </div>

      <div className="bg-zinc-50 border rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Detailing Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border-2">
            <h3 className="font-semibold text-lg mb-2">Basic Spa</h3>
            <p className="text-sm text-zinc-600 mb-4">Essential cleaning package</p>
            <ul className="space-y-1 text-sm text-zinc-700">
              <li>• Exterior foam wash</li>
              <li>• Interior vacuuming</li>
              <li>• Dashboard cleaning</li>
              <li>• Tire dressing</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-black">
            <div className="text-xs bg-black text-white px-2 py-1 rounded inline-block mb-2">POPULAR</div>
            <h3 className="font-semibold text-lg mb-2">Premium Spa</h3>
            <p className="text-sm text-zinc-600 mb-4">Complete detailing experience</p>
            <ul className="space-y-1 text-sm text-zinc-700">
              <li>• All Basic items</li>
              <li>• Machine polishing</li>
              <li>• Leather conditioning</li>
              <li>• Carpet shampooing</li>
              <li>• Waxing & sealing</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 border-2">
            <h3 className="font-semibold text-lg mb-2">Ceramic Coating</h3>
            <p className="text-sm text-zinc-600 mb-4">Ultimate protection</p>
            <ul className="space-y-1 text-sm text-zinc-700">
              <li>• All Premium items</li>
              <li>• Paint correction</li>
              <li>• 9H Ceramic coating</li>
              <li>• 3-5 year warranty</li>
              <li>• Hydrophobic finish</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits of Regular Detailing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">✨</span>
            <div>
              <h4 className="font-medium">Maintains Resale Value</h4>
              <p className="text-sm text-zinc-600">Well-maintained appearance increases resale price</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🛡️</span>
            <div>
              <h4 className="font-medium">Paint Protection</h4>
              <p className="text-sm text-zinc-600">Prevents oxidation, fading, and environmental damage</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🧼</span>
            <div>
              <h4 className="font-medium">Healthier Cabin</h4>
              <p className="text-sm text-zinc-600">Eliminates allergens, bacteria, and bad odors</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🚗</span>
            <div>
              <h4 className="font-medium">Pride of Ownership</h4>
              <p className="text-sm text-zinc-600">Enjoy driving a spotless, showroom-fresh car</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
