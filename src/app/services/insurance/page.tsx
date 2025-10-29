import Image from "next/image";

export default function InsurancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div className="relative h-72 w-full bg-zinc-100 rounded-xl">
          <Image src="https://images.pexels.com/photos/7661591/pexels-photo-7661591.jpeg?w=800&q=80" alt="Car Insurance" fill className="object-cover p-6 fade-in" loading="lazy" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">Car Insurance Services</h1>
          <p className="text-zinc-700 mb-4">Complete insurance support including claims, renewals, and policy guidance. Hassle-free cashless claims with all major insurers.</p>
          <div className="flex gap-3">
            <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-black text-white px-5 py-3 hover:bg-zinc-800 transition">Call Now</a>
            <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border border-zinc-300 px-5 py-3 hover:bg-zinc-50 transition">Mail Us</a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="border rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Insurance Claims</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>✓ Cashless claim processing</li>
            <li>✓ Survey appointment coordination</li>
            <li>✓ Document preparation</li>
            <li>✓ Estimate approval assistance</li>
            <li>✓ Direct settlement with insurer</li>
            <li>✓ Repair work management</li>
            <li>✓ Quality assurance</li>
          </ul>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Policy Services</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>✓ New policy purchase</li>
            <li>✓ Renewal assistance</li>
            <li>✓ Policy comparison</li>
            <li>✓ Add-on recommendations</li>
            <li>✓ NCB protection advice</li>
            <li>✓ Transfer & updates</li>
            <li>✓ Expert consultation</li>
          </ul>
        </div>
      </div>

      <div className="bg-zinc-50 border rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Cashless Claim Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
            <p className="text-sm font-medium">Accident Report</p>
            <p className="text-xs text-zinc-600 mt-1">Inform insurer within 24 hrs</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
            <p className="text-sm font-medium">Bring to BM Motors</p>
            <p className="text-xs text-zinc-600 mt-1">We handle the rest</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
            <p className="text-sm font-medium">Survey & Approval</p>
            <p className="text-xs text-zinc-600 mt-1">Surveyor inspection</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
            <p className="text-sm font-medium">Repair Work</p>
            <p className="text-xs text-zinc-600 mt-1">Expert restoration</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">5</div>
            <p className="text-sm font-medium">Delivery</p>
            <p className="text-xs text-zinc-600 mt-1">Zero out-of-pocket</p>
          </div>
        </div>
      </div>

      <div className="border rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-6">Tie-ups with Major Insurers</h2>
        <p className="text-zinc-600 mb-4">We have cashless claim facility with all leading insurance companies:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-zinc-700">
          <div className="border rounded p-3 text-center bg-zinc-50">HDFC ERGO</div>
          <div className="border rounded p-3 text-center bg-zinc-50">ICICI Lombard</div>
          <div className="border rounded p-3 text-center bg-zinc-50">Bajaj Allianz</div>
          <div className="border rounded p-3 text-center bg-zinc-50">TATA AIG</div>
          <div className="border rounded p-3 text-center bg-zinc-50">Reliance General</div>
          <div className="border rounded p-3 text-center bg-zinc-50">New India</div>
          <div className="border rounded p-3 text-center bg-zinc-50">Oriental</div>
          <div className="border rounded p-3 text-center bg-zinc-50">United India</div>
          <div className="border rounded p-3 text-center bg-zinc-50">National</div>
          <div className="border rounded p-3 text-center bg-zinc-50">Bharti AXA</div>
          <div className="border rounded p-3 text-center bg-zinc-50">SBI General</div>
          <div className="border rounded p-3 text-center bg-zinc-50">& Many More</div>
        </div>
      </div>
    </div>
  );
}
