export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-12">
        <h1 className="text-3xl font-semibold mb-3">Car Services Price List (Mumbai)</h1>
        <p className="text-zinc-600">Transparent pricing with no hidden charges. Contact us for exact quotes based on your car model.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="border rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Scheduled Service</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-zinc-700">Basic Service</span>
              <span className="font-semibold">₹2,499+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-700">Standard Service</span>
              <span className="font-semibold">₹4,999+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-700">Comprehensive</span>
              <span className="font-semibold">₹7,999+</span>
            </div>
          </div>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">AC Services</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-zinc-700">AC Gas Refill</span>
              <span className="font-semibold">₹2,499+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-700">AC Service</span>
              <span className="font-semibold">₹1,999+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-700">Compressor Repair</span>
              <span className="font-semibold">₹8,999+</span>
            </div>
          </div>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Batteries</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-zinc-700">Battery Check</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-700">Battery Replacement</span>
              <span className="font-semibold">₹3,999+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-700">Premium Battery</span>
              <span className="font-semibold">₹6,999+</span>
            </div>
          </div>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Car Detailing</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-zinc-700">Basic Spa</span>
              <span className="font-semibold">₹1,499+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-700">Premium Spa</span>
              <span className="font-semibold">₹3,999+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-700">Ceramic Coating</span>
              <span className="font-semibold">₹12,999+</span>
            </div>
          </div>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Tyres & Wheels</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-zinc-700">Wheel Alignment</span>
              <span className="font-semibold">₹999+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-700">Wheel Balancing</span>
              <span className="font-semibold">₹599+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-700">Tyre Replacement</span>
              <span className="font-semibold">₹4,999+</span>
            </div>
          </div>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Denting & Painting</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-zinc-700">Minor Dent (PDR)</span>
              <span className="font-semibold">₹1,999+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-700">Panel Painting</span>
              <span className="font-semibold">₹4,999+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-700">Full Body Paint</span>
              <span className="font-semibold">₹35,999+</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 border rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose BM Motors?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">💰 Transparent Pricing</h3>
            <p className="text-sm text-zinc-600">Clear estimates before work begins with no hidden charges</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">🎯 Best Value</h3>
            <p className="text-sm text-zinc-600">Competitive pricing without compromising on quality</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">✅ Quality Guarantee</h3>
            <p className="text-sm text-zinc-600">Warranty on parts and service for peace of mind</p>
          </div>
        </div>
      </div>

      <div className="border rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-3">Get a Free Quote</h2>
        <p className="text-zinc-600 mb-6">Contact us for personalized pricing based on your car make and model</p>
        <div className="flex gap-3 justify-center">
          <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-black text-white px-6 py-3 hover:bg-zinc-800 transition">Call Now</a>
          <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border border-zinc-300 px-6 py-3 hover:bg-zinc-50 transition">Email Us</a>
        </div>
      </div>
    </div>
  );
}
