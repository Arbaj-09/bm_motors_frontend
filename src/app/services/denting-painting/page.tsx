import Image from "next/image";

export default function DentingPaintingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">🎨 Expert Body Work</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Denting & Painting</h1>
              <p className="text-xl text-blue-100 mb-8">Expert collision repair, dent removal, and OEM-quality painting. Restore your car to factory-fresh condition with our dust-free booth.</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919637925555" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-xl">📞 Book Now</a>
                <a href="#services" className="bg-white/10 backdrop-blur-md border-2 border-white hover:bg-white hover:text-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all">View Services</a>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80" alt="Denting & Painting" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-900">Our Denting & Painting Services</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Complete body work and painting solutions</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Denting Services</h2>
            <ul className="space-y-3 text-gray-700">
              {["Minor dent removal (PDR)", "Major accident repair", "Panel beating & straightening", "Bodyline restoration", "Door & fender replacement", "Bumper repair & replacement", "Frame alignment", "Rust treatment & prevention"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Painting Services</h2>
            <ul className="space-y-3 text-gray-700">
              {["Computerized color matching", "Single panel painting", "Full-body repainting", "Scratch & scuff repair", "Clear coat application", "Primer & base coat", "Dust-free spray booth", "Factory-finish quality"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center text-gray-900">Our Process</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Four steps to restore your car's beauty</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {step: "1", title: "Assessment", desc: "Detailed inspection and damage report", icon: "🔍"},
              {step: "2", title: "Dent Repair", desc: "Panel beating and bodywork", icon: "🔨"},
              {step: "3", title: "Painting", desc: "Primer, base coat, and clear coat", icon: "🎨"},
              {step: "4", title: "Quality Check", desc: "Final inspection and delivery", icon: "✅"}
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">{item.step}</div>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-3 text-center text-gray-900">Why Choose Us for Denting & Painting?</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Professional body work and painting services</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {icon: "🎨", title: "Perfect Color Match", desc: "Advanced spectrophotometer ensures exact OEM color matching"},
            {icon: "🏭", title: "Dust-Free Booth", desc: "Climate-controlled paint booth for flawless finish"},
            {icon: "👨‍🔧", title: "Skilled Technicians", desc: "Certified professionals with years of experience"},
            {icon: "🛡️", title: "Warranty Coverage", desc: "Comprehensive warranty on paint and workmanship"},
            {icon: "💰", title: "Insurance Support", desc: "Cashless claim assistance with all major insurers"},
            {icon: "⏱️", title: "Quick Turnaround", desc: "Most jobs completed within 3-5 working days"}
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">Get Your Car Looking Brand New</h3>
            <p className="text-xl text-blue-100 mb-8">Expert denting & painting with warranty coverage</p>
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
