import Image from "next/image";

export default function TyresPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">🛑 Premium Tyres</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Tyres & Wheel Care</h1>
              <p className="text-xl text-blue-100 mb-8">Premium tyre brands, expert fitment, balancing, and alignment services. Ensure safety and performance with genuine tyres.</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919637925555" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-xl">📞 Book Now</a>
                <a href="#services" className="bg-white/10 backdrop-blur-md border-2 border-white hover:bg-white hover:text-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all">View Services</a>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1606577924006-27d39b132ae2?w=800&q=80" alt="Car Tyres and Wheels" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-900">Our Tyre Services</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Complete wheel care solutions</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {icon: "🛑", title: "Tyre Replacement", items: ["All premium brands", "Expert fitment", "Warranty included"]},
            {icon: "⚖️", title: "Wheel Balancing", items: ["Computerized balancing", "Vibration elimination", "Extended tyre life"]},
            {icon: "🎯", title: "Wheel Alignment", items: ["3D laser alignment", "Better fuel economy", "Improved handling"]},
            {icon: "🔧", title: "Puncture Repair", items: ["Quick repair", "Tubeless solutions", "Reliable fixing"]}
          ].map((service, i) => (
            <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">{service.title}</h3>
              <ul className="space-y-2 text-gray-700">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* When to Replace */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center text-gray-900">When to Replace Your Tyres</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Safety first - know when to change your tyres</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {icon: "🔴", title: "Tread Depth Below 1.6mm", desc: "Legal minimum tread depth for safety and grip"},
              {icon: "🔴", title: "Cracks or Bulges", desc: "Sidewall damage indicating structural weakness"},
              {icon: "🔴", title: "Uneven Wear", desc: "Sign of alignment or suspension issues"},
              {icon: "🔴", title: "Age Over 5 Years", desc: "Rubber degrades over time even with low usage"}
            ].map((sign, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                <div className="text-4xl mb-3">{sign.icon}</div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">{sign.title}</h4>
                <p className="text-sm text-gray-600">{sign.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Need New Tyres or Wheel Service?</h3>
          <p className="text-xl text-blue-100 mb-8">Premium tyres with expert installation</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:+919637925555" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-xl">📞 Call: +91 9637925555</a>
            <a href="mailto:bmmotors55@gmail.com" className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-8 rounded-lg transition-all">✉️ Email Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
