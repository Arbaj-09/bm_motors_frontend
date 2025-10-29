import Image from "next/image";

export default function ScrapVehiclePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
        <div className="relative h-64 w-full bg-zinc-100 rounded-lg">
          <Image src="https://images.pexels.com/photos/3807344/pexels-photo-3807344.jpeg?w=800&q=80" alt="Scrap Vehicle Purchase" fill className="object-cover p-6 fade-in" loading="lazy" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-3">Scrap Vehicle Purchase</h1>
          <p className="text-zinc-600 mb-2">Fast, fair scrap evaluation with complete paperwork support and doorstep pickup.</p>
          <ul className="list-disc ml-5 text-zinc-700 space-y-1">
            <li>On-spot assessment and best price</li>
            <li>RTO and documentation assistance</li>
            <li>Secure pickup and eco-compliant disposal</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-3">
        <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-black text-white px-5 py-3">Call Now</a>
        <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border px-5 py-3">Mail Us</a>
      </div>
    </div>
  );
}
