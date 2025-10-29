export default function FAQsPage() {
  const faqs = [
    { 
      q: "Do you offer free pickup and drop?", 
      a: "Yes, we offer complimentary pickup and drop service across most areas in Mumbai for your convenience. Our driver will collect your car from your location and return it after the service is completed." 
    },
    { 
      q: "What car brands do you service?", 
      a: "We service all major car brands including Maruti Suzuki, Hyundai, Honda, Toyota, Tata, Mahindra, Ford, Volkswagen, Skoda, and luxury brands like BMW, Mercedes, Audi, and more." 
    },
    { 
      q: "Do you use genuine spare parts?", 
      a: "Yes, we use only genuine OEM parts or approved aftermarket parts from trusted brands. All parts come with manufacturer warranty for your peace of mind." 
    },
    { 
      q: "How long does a typical service take?", 
      a: "A basic service usually takes 3-4 hours, while comprehensive service may take 6-8 hours. For major repairs or denting & painting, we'll provide you with an estimated timeline based on the scope of work." 
    },
    { 
      q: "Do you provide warranty on services?", 
      a: "Yes, we provide warranty on both parts and labor. The warranty period varies depending on the service type - typically 1000 km or 1 month for general services, and up to 1 year for painting and major repairs." 
    },
    { 
      q: "Can I get a free estimate before service?", 
      a: "Absolutely! We provide transparent, itemized estimates before starting any work. You'll know exactly what you're paying for with no hidden charges." 
    },
    { 
      q: "Do you accept insurance claims?", 
      a: "Yes, we have cashless claim facility with all major insurance companies including HDFC ERGO, ICICI Lombard, Bajaj Allianz, TATA AIG, and many more. We'll handle all the paperwork for you." 
    },
    { 
      q: "What payment methods do you accept?", 
      a: "We accept all major payment methods including cash, credit/debit cards, UPI, net banking, and digital wallets for your convenience." 
    },
    { 
      q: "Do you offer emergency breakdown assistance?", 
      a: "Yes, we provide emergency roadside assistance for battery jumpstart, tyre change, and towing services. Call us on +91 9637925555 for immediate help." 
    },
    { 
      q: "How can I book a service?", 
      a: "You can book a service by calling us at +91 9637925555 / 9763875767 or emailing us at bmmotors55@gmail.com. We'll schedule a convenient time for pickup." 
    },
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-12">
        <h1 className="text-3xl font-semibold mb-3">Frequently Asked Questions</h1>
        <p className="text-zinc-600">Everything you need to know about BM Motors and our services</p>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mb-12">
        {faqs.map((f, idx) => (
          <div key={idx} className="border rounded-xl p-6 bg-white hover:shadow-md transition">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-semibold">Q</span>
              </div>
              <div className="flex-1">
                <div className="font-semibold mb-2 text-lg">{f.q}</div>
                <div className="text-zinc-700 leading-relaxed">{f.a}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-zinc-50 border rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-3">Still Have Questions?</h2>
        <p className="text-zinc-600 mb-6">Our team is here to help. Contact us for any queries or to book a service.</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-black text-white px-6 py-3 hover:bg-zinc-800 transition">Call Now</a>
          <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border border-zinc-300 px-6 py-3 hover:bg-zinc-50 transition">Email Us</a>
        </div>
      </div>
    </div>
  );
}
