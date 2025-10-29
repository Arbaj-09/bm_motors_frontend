import Image from "next/image";

export default function ServicesPage() {
  const services = [
    { name: "Scheduled Services", slug: "scheduled", img: "https://images.pexels.com/photos/3807268/pexels-photo-3807268.jpeg?w=800&q=80", desc: "Periodic maintenance and servicing" },
    { name: "AC Services", slug: "ac", img: "https://images.pexels.com/photos/3807254/pexels-photo-3807254.jpeg?w=800&q=80", desc: "AC repair, gas refill, and servicing" },
    { name: "Cleaning & Detailing", slug: "detailing", img: "https://images.pexels.com/photos/3807274/pexels-photo-3807274.jpeg?w=800&q=80", desc: "Interior & exterior detailing" },
    { name: "Denting & Painting", slug: "denting-painting", img: "https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?w=800&q=80", desc: "Bodywork and painting services" },
    { name: "Insurance", slug: "insurance", img: "https://images.pexels.com/photos/7661591/pexels-photo-7661591.jpeg?w=800&q=80", desc: "Claims and policy assistance" },
    { name: "Batteries", slug: "batteries", img: "https://images.pexels.com/photos/3807359/pexels-photo-3807359.jpeg?w=800&q=80", desc: "Battery replacement and service" },
    { name: "Tyres", slug: "tyres", img: "https://images.pexels.com/photos/3807293/pexels-photo-3807293.jpeg?w=800&q=80", desc: "Tyre replacement and wheel care" },
    { name: "Windshields & Glass", slug: "windshields", img: "https://images.pexels.com/photos/3807258/pexels-photo-3807258.jpeg?w=800&q=80", desc: "Glass repair and replacement" },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-12">
        <h1 className="text-3xl font-semibold mb-3 text-[#FFFFFF]">Our Services</h1>
        <p className="text-[#D1D1D1]">Comprehensive car care solutions for all your automotive needs</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <a key={s.slug} href={`/services/${s.slug}`} className="group border-2 border-zinc-200 rounded-2xl overflow-hidden bg-white/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-800 fade-in">
            <div className="relative h-48 w-full">
              <Image src={s.img} alt={s.name + ' photo'} fill className="object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 p-3" style={{background: 'rgba(0,0,0,0.4)'}}>
                <div className="font-semibold text-lg text-white">{s.name}</div>
                <div className="text-sm text-zinc-100">{s.desc}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
