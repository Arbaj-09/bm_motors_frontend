import HomeHero from '../components/HomeHero';
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#171A22] text-white font-sans">
      <HomeHero />

      {/* Services Grid */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Top Car Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Scheduled Service",
              img: "https://images.pexels.com/photos/3807268/pexels-photo-3807268.jpeg?w=800&q=80",
            },
            {
              name: "AC Service & Repair",
              img: "https://images.pexels.com/photos/3807254/pexels-photo-3807254.jpeg?w=800&q=80",
            },
            {
              name: "Denting & Painting",
              img: "https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?w=800&q=80",
            },
            {
              name: "Car Spa & Detailing",
              img: "https://images.pexels.com/photos/3807274/pexels-photo-3807274.jpeg?w=800&q=80",
            },
            {
              name: "Tyres & Wheel Care",
              img: "https://images.pexels.com/photos/3807293/pexels-photo-3807293.jpeg?w=800&q=80",
            },
            {
              name: "Batteries",
              img: "https://images.pexels.com/photos/3807359/pexels-photo-3807359.jpeg?w=800&q=80",
            },
            {
              name: "Insurance Claims",
              img: "https://images.pexels.com/photos/6189286/pexels-photo-6189286.jpeg?w=800&q=80",
            },
            {
              name: "Windshields & Glass",
              img: "https://images.pexels.com/photos/3807258/pexels-photo-3807258.jpeg?w=800&q=80",
            },
          ].map((s, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition hover:-translate-y-1 bg-[#202438]"
            >
              <Image src={s.img} alt={s.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h3 className="text-lg font-bold text-white drop-shadow mb-1">{s.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works / Features */}
      <section className="max-w-7xl mx-auto px-4 py-12 fade-in">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How BM Motors Works</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            {
              name: "Pick Your Service",
              img: "https://images.pexels.com/photos/3806268/pexels-photo-3806268.jpeg?w=400&q=80",
              desc: "Choose from regular, repair, care, or insurance."
            },
            {
              name: "Free Doorstep Pickup",
              img: "https://images.pexels.com/photos/3807344/pexels-photo-3807344.jpeg?w=400&q=80",
              desc: "We pick and drop your car anywhere in Mumbai."
            },
            {
              name: "Track Updates",
              img: "https://images.pexels.com/photos/3807359/pexels-photo-3807359.jpeg?w=400&q=80",
              desc: "Get SMS/call updates – see real progress."
            },
            {
              name: "Pay & Drive Happy",
              img: "https://images.pexels.com/photos/3807363/pexels-photo-3807363.jpeg?w=400&q=80",
              desc: "Transparent billing, warranty service, no surprises."
            },
          ].map((f, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-[#23263a] shadow text-white flex flex-col items-center"
            >
              <div className="relative h-32 w-full min-w-[100px]">
                <Image src={f.img} alt={f.name} fill className="object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-black/30" />
              </div>
              <div className="p-4">
                <h4 className="font-bold mb-2">{f.name}</h4>
                <div className="text-[#D1D1D1] text-sm">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gradient-to-br from-[#23263a] to-[#2940D3] py-16 fade-in">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name:"Gurkirat Singh",area:"Andheri",img:"https://randomuser.me/api/portraits/men/32.jpg",text:"Booked my service in Andheri and honestly it was smoother than I thought. Pickup/drop was right on time. Price half of dealership, car came back spotless."},
              {name:"Ankur Singh",area:"Powai",img:"https://randomuser.me/api/portraits/men/52.jpg",text:"Got my AC serviced. Cooling is back to normal and process was smooth. Pickup & drop is a lifesaver!"},
              {name:"Yatish",area:"Colaba",img:"https://randomuser.me/api/portraits/men/80.jpg",text:"Neat dent repair and perfect paint match. Very impressed with finish and value. Warranty included!"},
            ].map((t, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-2xl px-8 py-8 border border-[#D5D7DE]/15 shadow-xl transition-all text-white text-center flex flex-col items-center">
                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full border-2 border-[#2940D3] object-cover shadow-md mb-4" loading="lazy" />
                <div className="flex gap-1 mb-3 justify-center">
                  {Array.from({length: 5}).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                  ))}
                </div>
                <div className="text-lg mb-3 "><em>“{t.text}”</em></div>
                <div className="text-sm text-blue-200">{t.name} <span className="text-[#D1D1D1]">({t.area}, Mumbai)</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Mumbai Areas */}
      <section className="max-w-7xl mx-auto px-4 py-14 fade-in">
        <h2 className="text-2xl font-bold mb-5 text-center">Popular Areas We Serve</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {["Andheri","Mulund","Powai","Chembur","Goregaon","Ghatkopar","Bandra","Kurla","Borivali","Parel"].map((a) => (
            <span key={a} className="px-4 py-2 bg-[#23263a] text-[#D1D1D1] rounded-lg font-medium shadow hover:bg-blue-800 transition">{a}</span>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 py-14 fade-in">
        <h2 className="text-2xl font-bold mb-7 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
        {[
          {q:"Where is the nearest BM Motors workshop in Mumbai?",a:"We have service partners across Mumbai. Call or WhatsApp us to find the closest one."},
          {q:"What does a basic BM Motors car service cost?",a:"Our Basic Service package in Mumbai starts at just ₹2,499. Includes oil, fluid top-up, essential checks—40% less than dealer rates."},
          {q:"How do I book my car service?",a:"Call us or use our online form to select your car, pick services, and schedule pickup. We handle everything else."},
          {q:"What types of car service do you offer?",a:"Regular servicing, denting, painting, AC, batteries, tyres, insurance claims, detailing—full car care suite."},
        ].map((f, idx) => (
          <details key={idx} className="rounded-xl border border-[#23263a] bg-[#23263a]/60 p-4 group transition">
            <summary className="cursor-pointer text-lg font-semibold group-open:text-blue-400">{f.q}</summary>
            <div className="text-[#D1D1D1] mt-3">{f.a}</div>
          </details>
        ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 fade-in">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-3xl p-10 md:p-16 shadow-xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Get your car serviced by Mumbai’s trusted professionals</h3>
          <p className="text-lg text-blue-100 mb-7">Book now for genuine parts, expert mechanics, and complimentary pickup/drop.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="tel:+919637925555" className="btn-primary rounded-2xl px-8 py-4 font-semibold text-lg">Call Now</a>
            <a href="mailto:bmmotors55@gmail.com" className="rounded-2xl px-8 py-4 font-semibold text-lg bg-white/10 border-2 border-white text-white hover:bg-blue-900 transition shadow">Email Us</a>
          </div>
        </div>
      </section>

      {/* Footer (simplified) */}
      <footer className="border-t bg-[#191D26] text-[#D1D1D1] py-8 px-4 text-center text-sm fade-in">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-y-4 gap-x-10 justify-center">
          <a href="#" className="hover:underline">About Us</a>
          <a href="#services" className="hover:underline">Our Services</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>Contact: <a href="tel:+919637925555" className="text-blue-500">+91 96379 25555</a> / <a href="mailto:bmmotors55@gmail.com" className="text-blue-500">bmmotors55@gmail.com</a></span>
        </div>
        <div className="mt-4 text-xs text-[#D1D1D1]/70">© {new Date().getFullYear()} BM Motors, Mumbai. All rights reserved.</div>
      </footer>
    </div>
  );
}
