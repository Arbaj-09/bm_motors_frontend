import Image from "next/image";

export default function ACServicePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div className="relative h-72 w-full bg-zinc-100 rounded-xl">
          <Image src="https://images.pexels.com/photos/3807254/pexels-photo-3807254.jpeg?w=800&q=80" alt="AC Service & Repair" fill className="object-cover p-6 fade-in" loading="lazy" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">AC Service & Repair</h1>
          <p className="text-zinc-700 mb-4">Keep your car cool and comfortable with our comprehensive AC maintenance and repair services. Expert diagnostics and genuine refrigerants used.</p>
          <div className="flex gap-3">
            <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-black text-white px-5 py-3 hover:bg-zinc-800 transition">Call Now</a>
            <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border border-zinc-300 px-5 py-3 hover:bg-zinc-50 transition">Mail Us</a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="border rounded-xl p-6 bg-white">
          <h3 className="font-semibold mb-3">AC Gas Refill</h3>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>✓ Leak detection & repair</li>
            <li>✓ Vacuum & pressure test</li>
            <li>✓ Genuine refrigerant refill</li>
            <li>✓ Performance check</li>
          </ul>
        </div>
        <div className="border rounded-xl p-6 bg-white">
          <h3 className="font-semibold mb-3">Compressor Service</h3>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>✓ Compressor diagnostics</li>
            <li>✓ Clutch plate inspection</li>
            <li>✓ Belt replacement</li>
            <li>✓ Compressor repair/replacement</li>
          </ul>
        </div>
        <div className="border rounded-xl p-6 bg-white">
          <h3 className="font-semibold mb-3">Complete AC Service</h3>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>✓ Filter cleaning/replacement</li>
            <li>✓ Evaporator coil cleaning</li>
            <li>✓ Condenser cleaning</li>
            <li>✓ Blower motor check</li>
          </ul>
        </div>
      </div>

      <div className="bg-zinc-50 border rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-6">Common AC Problems We Fix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">❄️ Weak Cooling</h4>
            <p className="text-sm text-zinc-600">Low refrigerant, clogged filters, or compressor issues</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">🔉 Strange Noises</h4>
            <p className="text-sm text-zinc-600">Faulty compressor, loose belt, or blower motor problems</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">💨 Bad Odor</h4>
            <p className="text-sm text-zinc-600">Dirty cabin filter or bacterial growth in evaporator</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">💧 Water Leakage</h4>
            <p className="text-sm text-zinc-600">Blocked drain tube or damaged evaporator</p>
          </div>
        </div>
      </div>
    </div>
  );
}
