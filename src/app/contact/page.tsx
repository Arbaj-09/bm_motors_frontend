export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact BM Motors</h1>
          <p className="text-xl text-blue-100">Get in touch with Mumbai's trusted car service experts</p>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <iframe
          title="Mumbai Map"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '1rem' }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609853106!2d72.74109828919932!3d19.08219783912938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b74f8d3df%3A0xfad9ec7e1b452d3c!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1627482820213!5m2!1sen!2sin"
        />
      </section>

      {/* Contact Info & Services */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h2>
            <div className="space-y-6">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">Phone Numbers</div>
                <div className="space-y-3">
                  <a href="tel:+919637925555" className="flex items-center gap-3 text-gray-900 hover:text-blue-600 font-medium transition-colors group">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span>+91 9637925555</span>
                  </a>
                  <a href="tel:+919763875767" className="flex items-center gap-3 text-gray-900 hover:text-blue-600 font-medium transition-colors group">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span>+91 9763875767</span>
                  </a>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">Email Address</div>
                <a href="mailto:bmmotors55@gmail.com" className="flex items-center gap-3 text-gray-900 hover:text-blue-600 font-medium transition-colors group">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-6 h-6 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>bmmotors55@gmail.com</span>
                </a>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">Location</div>
                <div className="flex items-start gap-3 text-gray-700">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="pt-3">
                    <span className="font-medium text-gray-900">Mumbai, Maharashtra</span>
                    <p className="text-sm text-gray-500 mt-1">Serving all major areas</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">Working Hours</div>
                <div className="flex items-start gap-3 text-gray-700">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="pt-2">
                    <div className="font-medium text-gray-900">Monday - Saturday: 9:00 AM - 7:00 PM</div>
                    <div className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Periodic Car Services",
                "AC Service & Repair",
                "Denting & Painting",
                "Car Detailing & Spa",
                "Battery Replacement",
                "Tyre & Wheel Services",
                "Windshield Replacement",
                "Insurance Claims",
                "Brake Services",
                "Engine Repairs",
                "Suspension Work",
                "Electrical Repairs"
              ].map((service, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Book a Service?</h2>
            <p className="text-xl text-blue-100 mb-8">Contact us today for professional car care services in Mumbai</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+919637925555" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-xl flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a href="mailto:bmmotors55@gmail.com" className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-4 px-8 rounded-lg transition-all flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
