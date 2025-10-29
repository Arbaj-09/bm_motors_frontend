import Image from "next/image";

const categories = [
  { title: "Car Services Mechanic Work", slug: "mechanic-work", img: "https://images.pexels.com/photos/3806268/pexels-photo-3806268.jpeg?w=800&q=80", desc: "Engine oil service, brakes, suspension, clutch, diagnostics, and electricals by trained technicians." },
  { title: "Car Denting and Painting", slug: "denting-painting", img: "https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?w=800&q=80", desc: "Panel repairs, paint correction, full-body paint, and OEM color match in a controlled booth." },
  { title: "Scrap Vehicle Purchase", slug: "scrap-vehicle", img: "https://images.pexels.com/photos/3807344/pexels-photo-3807344.jpeg?w=800&q=80", desc: "Hassle-free scrap evaluation, documentation assistance, and pickup from your location." },
  { title: "Car Insurance Claim", slug: "insurance-claim", img: "https://images.pexels.com/photos/7661591/pexels-photo-7661591.jpeg?w=800&q=80", desc: "Cashless claim support, survey coordination, and end-to-end repair management." },
  { title: "Car Insurance Renewal", slug: "insurance-renewal", img: "https://images.pexels.com/photos/6189286/pexels-photo-6189286.jpeg?w=800&q=80", desc: "Compare plans and renew instantly with optimum coverage and add-ons." },
  { title: "Car Detailing", slug: "detailing", img: "https://images.pexels.com/photos/3807274/pexels-photo-3807274.jpeg?w=800&q=80", desc: "Interior deep clean, exterior polish, ceramic coatings, and paint protection film." },
];

export default function CategoriesIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6 text-[#191D26]">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((c) => (
          <a key={c.slug} href={`/categories/${c.slug}`} className="group border rounded-xl overflow-hidden bg-white hover:shadow-md transition">
            <div className="relative h-44 w-full bg-zinc-100">
              <Image src={c.img} alt={c.title + ' icon'} fill className="object-contain p-6" loading="lazy" />
            </div>
            <div className="p-5">
              <div className="font-medium mb-1 text-[#191D26]">{c.title}</div>
              <div className="text-sm text-zinc-600">{c.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
