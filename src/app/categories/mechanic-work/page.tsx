import Image from "next/image";

export default function MechanicWorkPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">🔧 Professional Mechanics</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Car Services Mechanic Work</h1>
              <p className="text-xl text-blue-100 mb-8">Complete mechanical care for your car with expert technicians and genuine parts. From routine maintenance to complex repairs.</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919637925555" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-xl">📞 Book Now</a>
                <a href="#services" className="bg-white/10 backdrop-blur-md border-2 border-white hover:bg-white hover:text-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all">View Services</a>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1632823469527-5c9bfad7e8f5?w=800&q=80" alt="Mechanic Working on Car" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-3 text-center text-gray-900">Our Mechanic Services</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Expert mechanical solutions for all car models</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {icon: "🔧", title: "Periodic Service", desc: "Engine oil changes and routine maintenance"},
            {icon: "🛠️", title: "Brake & Suspension", desc: "Complete brake and suspension overhauls"},
            {icon: "⚙️", title: "Engine Diagnostics", desc: "Advanced troubleshooting and repairs"},
            {icon: "🔋", title: "Electricals", desc: "Battery checks and electrical repairs"}
          ].map((service, i) => (
            <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">Need Expert Mechanic Services?</h3>
            <p className="text-xl text-blue-100 mb-8">Professional care for your vehicle</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+919637925555" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-xl">📞 Call: +91 9637925555</a>
              <a href="mailto:bmmotors55@gmail.com" className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-8 rounded-lg transition-all">✉️ Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
