export default function AreasPage() {
  const areas = [
    "Andheri", "Bandra", "Borivali", "Chembur", "Dadar", "Ghatkopar",
    "Goregaon", "Juhu", "Kandivali", "Kurla", "Malad", "Matunga",
    "Mulund", "Navi Mumbai", "Parel", "Powai", "Santa Cruz", "Thane",
    "Vile Parle", "Wadala", "Worli", "Lower Parel", "Colaba", "Churchgate"
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-12">
        <h1 className="text-3xl font-semibold mb-3">Service Areas in Mumbai</h1>
        <p className="text-zinc-600">We provide professional car service across Mumbai with free pickup & drop</p>
      </div>

      <div className="bg-white border rounded-xl p-8 mb-12">
        <h2 className="text-xl font-semibold mb-4">Areas We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {areas.map((area) => (
            <a 
              key={area} 
              href={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`} 
              className="border rounded-lg px-4 py-3 bg-zinc-50 hover:bg-white hover:shadow-md transition text-center font-medium"
            >
              {area}
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="border rounded-xl p-8 bg-white">
          <h2 className="text-xl font-semibold mb-4">Free Pickup & Drop</h2>
          <p className="text-zinc-700 mb-4">
            We understand that visiting a service center can be time-consuming. That's why we offer complimentary pickup and drop service across all our service areas in Mumbai.
          </p>
          <ul className="space-y-2 text-zinc-700">
            <li className="flex items-start gap-2">
              <span>✓</span>
              <span>Convenient doorstep pickup</span>
            </li>
            <li className="flex items-start gap-2">
              <span>✓</span>
              <span>Safe delivery back to your location</span>
            </li>
            <li className="flex items-start gap-2">
              <span>✓</span>
              <span>Real-time service updates</span>
            </li>
            <li className="flex items-start gap-2">
              <span>✓</span>
              <span>No extra charges for pickup/drop</span>
            </li>
          </ul>
        </div>

        <div className="border rounded-xl p-8 bg-zinc-50">
          <h2 className="text-xl font-semibold mb-4">Can't Find Your Area?</h2>
          <p className="text-zinc-700 mb-4">
            Even if your area isn't listed above, we may still be able to serve you. We're constantly expanding our service coverage across Mumbai and surrounding areas.
          </p>
          <p className="text-zinc-700 mb-6">
            Contact us to check if we can provide pickup and drop service in your locality.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-black text-white px-5 py-3 hover:bg-zinc-800 transition">Call Now</a>
            <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border border-zinc-300 px-5 py-3 hover:bg-zinc-50 transition">Email Us</a>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-3">Book Your Service Today</h2>
        <p className="text-zinc-600 mb-6">Professional car care delivered to your doorstep across Mumbai</p>
        <a href="/contact" className="inline-flex items-center rounded-md bg-black text-white px-6 py-3 hover:bg-zinc-800 transition">Contact Us</a>
      </div>
    </div>
  );
}
