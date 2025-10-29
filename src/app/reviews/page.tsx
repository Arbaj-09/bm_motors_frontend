export default function ReviewsPage() {
  const reviews = [
    {
      name: "Gurkirat Singh",
      area: "Andheri",
      rating: 5,
      text: "Booked my service in Andheri and honestly it was smoother than I thought. They picked up the car right on time, sent me updates during the day, and dropped it back cleaner than I left it. Price was almost half of what the dealership quoted, so I'm happy with this one.",
      service: "Scheduled Service"
    },
    {
      name: "Ankur Singh",
      area: "Powai",
      rating: 5,
      text: "Got my AC serviced in Powai. Cooling is back to proper chill now which was badly needed in this weather. The pickup and drop thing is a lifesaver, otherwise I would've wasted 3-4 hours in traffic.",
      service: "AC Service"
    },
    {
      name: "Yatish",
      area: "Colaba",
      rating: 5,
      text: "My car had a dent in Colaba parking and I gave BM Motors a try. The repair was neat, paint matched perfectly, and they even gave warranty which I didn't expect. No one can tell there was a dent before, very impressed with the finish.",
      service: "Denting & Painting"
    },
    {
      name: "Ritik Jain",
      area: "Bandra",
      rating: 5,
      text: "Battery died in Bandra one night and BM Motors sorted it fast, like really fast. Mechanic came, checked, replaced with genuine battery and the car started instantly. Service was quick but also professional.",
      service: "Battery Replacement"
    },
    {
      name: "Hardik Chopra",
      area: "Borivali",
      rating: 5,
      text: "Did regular servicing at their Borivali workshop. They gave me a proper inspection report, told me what needs fixing now and what can wait which honestly felt honest because most garages just try to push everything at once.",
      service: "Scheduled Service"
    },
    {
      name: "Varun Chaudhary",
      area: "Wadala",
      rating: 5,
      text: "Booked a car spa after weeks of driving through rain and dust, and man the difference is crazy. The interiors smell fresh, stains on the seats gone, and the exterior polish brought back the shine. My car actually looks new again.",
      service: "Car Detailing"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-12">
        <h1 className="text-3xl font-semibold mb-3">Customer Reviews</h1>
        <p className="text-zinc-600">What our customers in Mumbai say about BM Motors</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {reviews.map((r, idx) => (
          <div key={idx} className="border rounded-xl p-6 bg-white hover:shadow-md transition">
            <div className="flex gap-1 mb-3">
              {[...Array(r.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-zinc-700 mb-4">{r.text}</p>
            <div className="flex items-center justify-between border-t pt-3">
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-zinc-600">{r.area}, Mumbai</div>
              </div>
              <div className="text-xs bg-zinc-100 px-3 py-1 rounded-full text-zinc-700">{r.service}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-zinc-50 border rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-3">Share Your Experience</h2>
        <p className="text-zinc-600 mb-6">We'd love to hear about your experience with BM Motors</p>
        <div className="flex gap-3 justify-center">
          <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-black text-white px-6 py-3 hover:bg-zinc-800 transition">Call Now</a>
          <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border border-zinc-300 px-6 py-3 hover:bg-zinc-50 transition">Email Us</a>
        </div>
      </div>
    </div>
  );
}
