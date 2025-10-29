import Image from "next/image";

export default function InsuranceRenewalCategoryPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">💳 Easy Renewal</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Car Insurance Renewal</h1>
              <p className="text-xl text-blue-100 mb-8">Compare leading insurers and renew instantly with the right add-ons. Get the best coverage at competitive prices.</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919637925555" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-xl">📞 Get Quote</a>
                <a href="#features" className="bg-white/10 backdrop-blur-md border-2 border-white hover:bg-white hover:text-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all">Learn More</a>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" alt="Insurance Renewal" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-3 text-center text-gray-900">Why Renew With Us</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Best coverage and hassle-free process</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {icon: "🔍", title: "Policy Comparison", desc: "Expert guidance on best plans"},
            {icon: "🛡️", title: "Add-ons Available", desc: "Zero Dep, Engine Protect, RSA"},
            {icon: "⚡", title: "Quick Process", desc: "Digital paperwork and instant delivery"}
          ].map((feature, i) => (
            <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">Renew Your Car Insurance Today</h3>
            <p className="text-xl text-blue-100 mb-8">Compare plans and save money</p>
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
