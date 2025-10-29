import Image from "next/image";

export default function ScheduledServicePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div className="relative h-72 w-full bg-zinc-100 rounded-xl">
          <Image src="https://images.pexels.com/photos/3807268/pexels-photo-3807268.jpeg?w=800&q=80" alt="Scheduled Services" fill className="object-cover p-6 fade-in" loading="lazy" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">Scheduled Services</h1>
          <p className="text-zinc-700 mb-4">Keep your car running like new with our comprehensive periodic maintenance services. Our expert technicians use genuine parts and follow manufacturer guidelines.</p>
          <div className="flex gap-3">
            <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-black text-white px-5 py-3 hover:bg-zinc-800 transition">Call Now</a>
            <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border border-zinc-300 px-5 py-3 hover:bg-zinc-50 transition">Mail Us</a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="border rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold mb-3">Basic Service</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>✓ Engine Oil Replacement (Premium Grade)</li>
            <li>✓ Oil Filter Change</li>
            <li>✓ Air Filter Inspection</li>
            <li>✓ Battery Check & Top-up</li>
            <li>✓ Coolant Level Check</li>
            <li>✓ Brake Fluid Check</li>
            <li>✓ Wiper Fluid Top-up</li>
            <li>✓ Tire Pressure Adjustment</li>
            <li>✓ 25-Point Vehicle Inspection</li>
          </ul>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold mb-3">Comprehensive Service</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>✓ All Basic Service Items</li>
            <li>✓ Air Filter Replacement</li>
            <li>✓ Fuel Filter Replacement</li>
            <li>✓ Spark Plug Replacement</li>
            <li>✓ Brake Pad Inspection</li>
            <li>✓ Suspension Check</li>
            <li>✓ Clutch Inspection</li>
            <li>✓ AC Performance Check</li>
            <li>✓ 40-Point Vehicle Inspection</li>
            <li>✓ Computer Diagnostics</li>
          </ul>
        </div>
      </div>

      <div className="bg-zinc-50 border rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose BM Motors?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Trained Technicians</h3>
            <p className="text-sm text-zinc-600">Our mechanics are certified and experienced with all car brands.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Genuine Parts</h3>
            <p className="text-sm text-zinc-600">We use only OEM or approved aftermarket parts for reliability.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Transparent Pricing</h3>
            <p className="text-sm text-zinc-600">Clear estimates before work begins with no hidden charges.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
