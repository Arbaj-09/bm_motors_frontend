import Image from "next/image";

export default function DentingPaintingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div className="relative h-72 w-full bg-zinc-100 rounded-xl">
          <Image src="https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?w=800&q=80" alt="Denting & Painting" fill className="object-cover p-6 fade-in" loading="lazy" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">Denting & Painting</h1>
          <p className="text-zinc-700 mb-4">Expert collision repair, dent removal, and OEM-quality painting in a dust-free booth. Restore your car to factory-fresh condition.</p>
          <div className="flex gap-3">
            <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-black text-white px-5 py-3 hover:bg-zinc-800 transition">Call Now</a>
            <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border border-zinc-300 px-5 py-3 hover:bg-zinc-50 transition">Mail Us</a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="border rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Denting Services</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>✓ Minor dent removal (PDR)</li>
            <li>✓ Major accident repair</li>
            <li>✓ Panel beating & straightening</li>
            <li>✓ Bodyline restoration</li>
            <li>✓ Door & fender replacement</li>
            <li>✓ Bumper repair & replacement</li>
            <li>✓ Frame alignment</li>
            <li>✓ Rust treatment & prevention</li>
          </ul>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Painting Services</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>✓ Computerized color matching</li>
            <li>✓ Single panel painting</li>
            <li>✓ Full-body repainting</li>
            <li>✓ Scratch & scuff repair</li>
            <li>✓ Clear coat application</li>
            <li>✓ Primer & base coat</li>
            <li>✓ Dust-free spray booth</li>
            <li>✓ Factory-finish quality</li>
          </ul>
        </div>
      </div>

      <div className="bg-zinc-50 border rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
            <h3 className="font-semibold mb-2">Assessment</h3>
            <p className="text-sm text-zinc-600">Detailed inspection and damage report</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
            <h3 className="font-semibold mb-2">Dent Repair</h3>
            <p className="text-sm text-zinc-600">Panel beating and bodywork</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
            <h3 className="font-semibold mb-2">Painting</h3>
            <p className="text-sm text-zinc-600">Primer, base coat, and clear coat</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
            <h3 className="font-semibold mb-2">Quality Check</h3>
            <p className="text-sm text-zinc-600">Final inspection and delivery</p>
          </div>
        </div>
      </div>

      <div className="border rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Us for Denting & Painting?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">🎨 Perfect Color Match</h3>
            <p className="text-sm text-zinc-600">Advanced spectrophotometer ensures exact OEM color</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">🏭 Dust-Free Booth</h3>
            <p className="text-sm text-zinc-600">Climate-controlled paint booth for flawless finish</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">👨‍🔧 Skilled Technicians</h3>
            <p className="text-sm text-zinc-600">Certified professionals with years of experience</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">🛡️ Warranty Coverage</h3>
            <p className="text-sm text-zinc-600">Comprehensive warranty on paint and workmanship</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">💰 Insurance Support</h3>
            <p className="text-sm text-zinc-600">Cashless claim assistance with all major insurers</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">⏱️ Quick Turnaround</h3>
            <p className="text-sm text-zinc-600">Most jobs completed within 3-5 working days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
