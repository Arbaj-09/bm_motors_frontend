export default function ReviewsPage() {
  const reviews = [
    {name: "Gurkirat Singh", area: "Andheri", rating: 5, text: "Booked my service in Andheri and honestly it was smoother than I thought. They picked up the car right on time, sent me updates during the day, and dropped it back cleaner than I left it. Price was almost half of what the dealership quoted, so I'm happy with this one.", service: "Scheduled Service", img: "https://randomuser.me/api/portraits/men/32.jpg"},
    {name: "Ankur Singh", area: "Powai", rating: 5, text: "Got my AC serviced in Powai. Cooling is back to proper chill now which was badly needed in this weather. The pickup and drop thing is a lifesaver, otherwise I would've wasted 3-4 hours in traffic.", service: "AC Service", img: "https://randomuser.me/api/portraits/men/52.jpg"},
    {name: "Yatish", area: "Colaba", rating: 5, text: "My car had a dent in Colaba parking and I gave BM Motors a try. The repair was neat, paint matched perfectly, and they even gave warranty which I didn't expect. No one can tell there was a dent before, very impressed with the finish.", service: "Denting & Painting", img: "https://randomuser.me/api/portraits/men/80.jpg"},
    {name: "Ritik Jain", area: "Bandra", rating: 5, text: "Battery died in Bandra one night and BM Motors sorted it fast, like really fast. Mechanic came, checked, replaced with genuine battery and the car started instantly. Service was quick but also professional.", service: "Battery Replacement", img: "https://randomuser.me/api/portraits/men/22.jpg"},
    {name: "Hardik Chopra", area: "Borivali", rating: 5, text: "Did regular servicing at their Borivali workshop. They gave me a proper inspection report, told me what needs fixing now and what can wait which honestly felt honest because most garages just try to push everything at once.", service: "Scheduled Service", img: "https://randomuser.me/api/portraits/men/44.jpg"},
    {name: "Varun Chaudhary", area: "Wadala", rating: 5, text: "Booked a car spa after weeks of driving through rain and dust, and man the difference is crazy. The interiors smell fresh, stains on the seats gone, and the exterior polish brought back the shine. My car actually looks new again.", service: "Car Detailing", img: "https://randomuser.me/api/portraits/men/66.jpg"},
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-xl text-blue-100">What our customers in Mumbai say about BM Motors</p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <img src={r.img} alt={r.name} className="w-16 h-16 rounded-full border-2 border-blue-500" />
                <div className="flex-1">
                  <div className="font-bold text-lg text-gray-900">{r.name}</div>
                  <div className="text-sm text-gray-600">{r.area}, Mumbai</div>
                </div>
                <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">{r.service}</div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(r.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                ))}
              </div>
              <p className="text-gray-700 italic">"{r.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Share Your Experience</h2>
            <p className="text-xl text-blue-100 mb-8">We'd love to hear about your experience with BM Motors</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+919637925555" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-xl">📞 Call Now</a>
              <a href="mailto:bmmotors55@gmail.com" className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-8 rounded-lg transition-all">✉️ Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
