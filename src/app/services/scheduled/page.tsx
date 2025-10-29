import Image from "next/image";

export default function ScheduledServicePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">🔧 Professional Service</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Periodic Car Services</h1>
              <p className="text-xl text-blue-100 mb-8">Keep your car running like new with our comprehensive maintenance packages. Expert technicians, genuine parts, manufacturer guidelines.</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919637925555" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-xl">📞 Book Now</a>
                <a href="#packages" className="bg-white/10 backdrop-blur-md border-2 border-white hover:bg-white hover:text-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all">View Packages</a>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80" alt="Scheduled Services" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="packages" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-900">Service Packages</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Choose the right service package for your car</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Basic Service</h2>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-6">₹2,499<span className="text-lg text-gray-500 font-normal">+</span></div>
            <ul className="space-y-3 text-gray-700">
              {[
                "Engine Oil Replacement (Premium Grade)",
                "Oil Filter Change",
                "Air Filter Inspection",
                "Battery Check & Top-up",
                "Coolant Level Check",
                "Brake Fluid Check",
                "Wiper Fluid Top-up",
                "Tire Pressure Adjustment",
                "25-Point Vehicle Inspection"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 border-2 border-blue-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative">
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">POPULAR</div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h2 className="text-2xl font-bold">Comprehensive Service</h2>
            </div>
            <div className="text-3xl font-bold mb-6">₹7,999<span className="text-lg font-normal opacity-80">+</span></div>
            <ul className="space-y-3">
              {[
                "All Basic Service Items",
                "Air Filter Replacement",
                "Fuel Filter Replacement",
                "Spark Plug Replacement",
                "Brake Pad Inspection",
                "Suspension Check",
                "Clutch Inspection",
                "AC Performance Check",
                "40-Point Vehicle Inspection",
                "Computer Diagnostics"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center text-gray-900">Why Choose BM Motors?</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Your trusted partner for car maintenance</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">👨‍🔧</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Trained Technicians</h3>
              <p className="text-gray-600">Our mechanics are certified and experienced with all car brands and models</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Genuine Parts</h3>
              <p className="text-gray-600">We use only OEM or approved aftermarket parts with warranty for reliability</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Transparent Pricing</h3>
              <p className="text-gray-600">Clear estimates before work begins with no hidden charges or surprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Schedule Your Service Today</h3>
          <p className="text-xl text-blue-100 mb-8">Professional car maintenance at affordable prices</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:+919637925555" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-xl">📞 Call: +91 9637925555</a>
            <a href="mailto:bmmotors55@gmail.com" className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-8 rounded-lg transition-all">✉️ Email Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
