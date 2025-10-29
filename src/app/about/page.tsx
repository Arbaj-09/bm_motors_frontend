export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-3 text-white">About BM Motors</h1>
          <p className="text-[#D1D1D1]">Your trusted partner for professional car care in Mumbai</p>
        </div>
        <div className="flex-1 relative h-64 w-full rounded-2xl overflow-hidden shadow-xl fade-in">
          <img 
            src="https://images.pexels.com/photos/3807363/pexels-photo-3807363.jpeg?w=800&q=80" 
            alt="BM Motors Mechanic Team" 
            className="object-cover w-full h-full" 
            loading="lazy"
          />
          <div className="absolute inset-0" style={{background: 'rgba(0,0,0,0.35)'}}></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="border rounded-xl p-8 bg-white">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            BM Motors is Mumbai's trusted car service center, providing comprehensive automotive care with expertise, quality, and transparency. We understand that your car is more than just a vehicle—it's your daily companion, and we treat it with the care it deserves.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            With years of experience serving car owners across Mumbai, we've built our reputation on honest service, skilled technicians, and competitive pricing. From routine maintenance to major repairs, we're equipped to handle all your car care needs.
          </p>
        </div>

        <div className="border rounded-xl p-8 bg-zinc-50">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            To deliver exceptional car service experiences that build lasting relationships with our customers through quality workmanship, transparent pricing, and reliable service.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            We believe in empowering car owners with knowledge and choices, ensuring every service is performed with their consent and understanding.
          </p>
        </div>
      </div>

      <div className="bg-white border rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose BM Motors?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="font-semibold mb-2">Expert Technicians</h3>
            <p className="text-sm text-zinc-600">Certified mechanics with extensive experience across all car brands and models</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-semibold mb-2">Quality Parts</h3>
            <p className="text-sm text-zinc-600">Only genuine OEM or approved aftermarket parts with manufacturer warranty</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-semibold mb-2">Transparent Pricing</h3>
            <p className="text-sm text-zinc-600">Clear estimates before work begins with no hidden charges or surprises</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🚗</div>
            <h3 className="font-semibold mb-2">Free Pickup & Drop</h3>
            <p className="text-sm text-zinc-600">Complimentary pickup and delivery across Mumbai for your convenience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="font-semibold mb-2">Service Warranty</h3>
            <p className="text-sm text-zinc-600">Comprehensive warranty on parts and labor for complete peace of mind</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⏱️</div>
            <h3 className="font-semibold mb-2">Quick Turnaround</h3>
            <p className="text-sm text-zinc-600">Efficient service without compromising quality to get you back on the road</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="border rounded-xl p-6 bg-white text-center">
          <div className="text-4xl font-bold text-black mb-2">10+</div>
          <div className="text-zinc-600">Years Experience</div>
        </div>
        <div className="border rounded-xl p-6 bg-white text-center">
          <div className="text-4xl font-bold text-black mb-2">5000+</div>
          <div className="text-zinc-600">Happy Customers</div>
        </div>
        <div className="border rounded-xl p-6 bg-white text-center">
          <div className="text-4xl font-bold text-black mb-2">100%</div>
          <div className="text-zinc-600">Quality Guaranteed</div>
        </div>
      </div>

      <div className="bg-zinc-50 border rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-3">Experience the BM Motors Difference</h2>
        <p className="text-zinc-600 mb-6 max-w-2xl mx-auto">
          Visit us today and discover why thousands of car owners in Mumbai trust BM Motors for their automotive needs. Quality service, honest pricing, and customer satisfaction guaranteed.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-black text-white px-6 py-3 hover:bg-zinc-800 transition">Call Now</a>
          <a href="/contact" className="inline-flex items-center rounded-md border border-zinc-300 px-6 py-3 hover:bg-zinc-50 transition">Contact Us</a>
        </div>
      </div>
    </div>
  );
}
