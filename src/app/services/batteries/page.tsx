import Image from "next/image";

export default function BatteriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div className="relative h-72 w-full bg-zinc-100 rounded-xl">
          <Image src="https://images.pexels.com/photos/3807359/pexels-photo-3807359.jpeg?w=800&q=80" alt="Car Batteries" fill className="object-cover p-6 fade-in" loading="lazy" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">Car Batteries</h1>
          <p className="text-zinc-700 mb-4">Reliable battery replacement and maintenance services with genuine brands. Free battery health check and doorstep installation available.</p>
          <div className="flex gap-3">
            <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-black text-white px-5 py-3 hover:bg-zinc-800 transition">Call Now</a>
            <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border border-zinc-300 px-5 py-3 hover:bg-zinc-50 transition">Mail Us</a>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 border rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold mb-3">Free Battery Check</h3>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li>✓ Voltage testing</li>
              <li>✓ Load capacity check</li>
              <li>✓ Terminal inspection</li>
              <li>✓ Health report</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold mb-3">Battery Replacement</h3>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li>✓ Genuine batteries only</li>
              <li>✓ Doorstep installation</li>
              <li>✓ Old battery buyback</li>
              <li>✓ Warranty support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold mb-3">Maintenance</h3>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li>✓ Terminal cleaning</li>
              <li>✓ Corrosion treatment</li>
              <li>✓ Water top-up (if applicable)</li>
              <li>✓ Secure mounting</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4">Signs You Need a New Battery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-700">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h4 className="font-medium">Slow Engine Crank</h4>
              <p className="text-sm text-zinc-600">Engine takes longer to start than usual</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h4 className="font-medium">Dim Lights</h4>
              <p className="text-sm text-zinc-600">Headlights or cabin lights appear weak</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h4 className="font-medium">Warning Light</h4>
              <p className="text-sm text-zinc-600">Battery icon appears on dashboard</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h4 className="font-medium">Age Over 3 Years</h4>
              <p className="text-sm text-zinc-600">Most batteries need replacement after 3-4 years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
