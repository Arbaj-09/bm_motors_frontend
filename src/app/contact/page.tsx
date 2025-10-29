export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-10 mb-12">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-3 text-white">Contact BM Motors</h1>
          <p className="text-[#D1D1D1]">Get in touch with us for any car service needs in Mumbai</p>
        </div>
        <div className="flex-1 relative h-64 w-full rounded-2xl overflow-hidden shadow-xl fade-in">
          <img
            src="https://images.pexels.com/photos/3807344/pexels-photo-3807344.jpeg?w=800&q=80"
            alt="Customer at Reception BM Motors"
            className="object-cover w-full h-full"
            loading="lazy"
          />
          <div className="absolute inset-0" style={{background: 'rgba(0,0,0,0.35)'}}></div>
        </div>
      </div>

      <div className="my-12">
        <iframe
          title="Mumbai Map"
          width="100%"
          height="320"
          style={{ border: 0, borderRadius: '1.5rem', boxShadow: '0 8px 32px rgba(25,29,38,0.25)' }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609853106!2d72.74109828919932!3d19.08219783912938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b74f8d3df%3A0xfad9ec7e1b452d3c!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1627482820213!5m2!1sen!2sin"
          frameBorder="0"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="border rounded-xl p-8 bg-white">
          <h2 className="text-xl font-semibold mb-6">Get In Touch</h2>
          <div className="space-y-6">
            <div>
              <div className="text-sm text-zinc-500 mb-1">Phone Numbers</div>
              <div className="space-y-2">
                <a href="tel:+919637925555" className="flex items-center gap-3 text-zinc-900 hover:text-black font-medium">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 9637925555
                </a>
                <a href="tel:+919763875767" className="flex items-center gap-3 text-zinc-900 hover:text-black font-medium">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 9763875767
                </a>
              </div>
            </div>

            <div>
              <div className="text-sm text-zinc-500 mb-1">Email Address</div>
              <a href="mailto:bmmotors55@gmail.com" className="flex items-center gap-3 text-zinc-900 hover:text-black font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                bmmotors55@gmail.com
              </a>
            </div>

            <div>
              <div className="text-sm text-zinc-500 mb-1">Location</div>
              <div className="flex items-start gap-3 text-zinc-700">
                <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>

            <div>
              <div className="text-sm text-zinc-500 mb-1">Working Hours</div>
              <div className="flex items-start gap-3 text-zinc-700">
                <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div>Monday - Saturday: 9:00 AM - 7:00 PM</div>
                  <div>Sunday: 10:00 AM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-xl p-8 bg-zinc-50">
          <h2 className="text-xl font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>✓ Scheduled Maintenance & Servicing</li>
            <li>✓ AC Service & Repair</li>
            <li>✓ Denting & Painting</li>
            <li>✓ Car Detailing & Spa</li>
            <li>✓ Battery Replacement</li>
            <li>✓ Tyre & Wheel Services</li>
            <li>✓ Windshield & Glass Replacement</li>
            <li>✓ Insurance Claims Support</li>
            <li>✓ Scrap Vehicle Purchase</li>
          </ul>
        </div>
      </div>

      <div className="border rounded-xl p-8 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-3">Ready to Book a Service?</h2>
        <p className="text-zinc-600 mb-6">Contact us today for professional car care services in Mumbai</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-gradient-to-r from-[#2940D3] to-[#23263a] text-white px-6 py-3 hover:from-[#23263a] hover:to-[#2940D3] shadow-lg font-semibold transition">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
          <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border border-[#2940D3] text-[#2940D3] px-6 py-3 hover:bg-[#2940D3] hover:text-white transition font-semibold">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
