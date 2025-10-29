import Image from "next/image";

export default function DentingPaintingCategoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
        <div className="relative h-64 w-full bg-zinc-100 rounded-lg">
          <Image src="https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?w=800&q=80" alt="Car Denting and Painting" fill className="object-cover p-6 fade-in" loading="lazy" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-3">Car Denting and Painting</h1>
          <p className="text-zinc-600 mb-2">High-quality dent repair and OEM-matched painting in a dust-free booth.</p>
          <ul className="list-disc ml-5 text-zinc-700 space-y-1">
            <li>Panel beating and bodyline restoration</li>
            <li>Computerized color matching and blending</li>
            <li>Scratch, scuff and rust treatment</li>
            <li>Full-body repainting with clear coat</li>
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
