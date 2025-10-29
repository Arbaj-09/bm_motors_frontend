import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

// Removed Geist font setup. Use native modern system fonts instead

export const metadata: Metadata = {
  title: "BM Motors | Car Service & Repair in Mumbai",
  description:
    "BM Motors - Expert car service, AC repair, denting & painting, detailing, batteries, tyres, and more in Mumbai. Call +91 9637925555 / 9763875767 or mail bmmotors55@gmail.com.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: 'Inter, Poppins, Roboto, Helvetica, Arial, sans-serif' }}>
        <div className="min-h-screen flex flex-col fade-in">
          <Header />
          <main className="flex-1 fade-in">{children}</main>
          <footer className="w-full border-t bg-gradient-to-r from-[#23263a] via-[#191D26] to-[#2940D3] text-[#D5D7DE]">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm" style={{fontFamily: 'Poppins, Inter, Roboto, sans-serif'}}>
              <div>
                <h3 className="font-semibold mb-3">About</h3>
                <ul className="space-y-2">
                  <li><a className="hover:underline" href="/about">About Us</a></li>
                  <li><a className="hover:underline" href="/contact">Contact Us</a></li>
                  <li><a className="hover:underline" href="/terms">Terms and Conditions</a></li>
                  <li><a className="hover:underline" href="/privacy">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Our Services</h3>
                <ul className="space-y-2">
                  <li><a className="hover:underline" href="/services/scheduled">Scheduled Services</a></li>
                  <li><a className="hover:underline" href="/services/ac">AC Services</a></li>
                  <li><a className="hover:underline" href="/services/detailing">Cleaning & Detailing</a></li>
                  <li><a className="hover:underline" href="/services/denting-painting">Denting & Painting</a></li>
                  <li><a className="hover:underline" href="/services/batteries">Batteries</a></li>
                  <li><a className="hover:underline" href="/services/tyres">Tyres</a></li>
                  <li><a className="hover:underline" href="/services/windshields">Windshields & Glass</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Popular Areas</h3>
                <ul className="space-y-2">
                  <li><a className="hover:underline" href="/areas/andheri">Andheri</a></li>
                  <li><a className="hover:underline" href="/areas/bandra">Bandra</a></li>
                  <li><a className="hover:underline" href="/areas/borivali">Borivali</a></li>
                  <li><a className="hover:underline" href="/areas/chembur">Chembur</a></li>
                  <li><a className="hover:underline" href="/areas/powai">Powai</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Contact</h3>
                <p className="mb-2"><a className="hover:underline" href="mailto:bmmotors55@gmail.com">bmmotors55@gmail.com</a></p>
                <p className="mb-2"><a className="hover:underline" href="tel:+919637925555">+91 9637925555</a></p>
                <p className="mb-4"><a className="hover:underline" href="tel:+919763875767">9763875767</a></p>
                <div className="flex gap-2">
                  <a href="tel:+919637925555" className="inline-flex items-center rounded-md bg-black text-white px-3 py-2">Call Now</a>
                  <a href="mailto:bmmotors55@gmail.com" className="inline-flex items-center rounded-md border px-3 py-2">Mail Us</a>
                </div>
              </div>
            </div>
            <div className="border-t text-xs text-[#D5D7DE]/80" style={{background: 'rgba(25,29,38,0.97)'}}>
              <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <span>© {new Date().getFullYear()} BM Motors</span>
                <span>Mumbai</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

