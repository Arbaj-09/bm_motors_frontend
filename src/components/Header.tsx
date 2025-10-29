"use client";
import { useState } from "react";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: "Scheduled Services", href: "/services/scheduled" },
    { name: "AC Services", href: "/services/ac" },
    { name: "Cleaning & Detailing", href: "/services/detailing" },
    { name: "Denting & Painting", href: "/services/denting-painting" },
    { name: "Insurance", href: "/services/insurance" },
    { name: "Batteries", href: "/services/batteries" },
    { name: "Tyres", href: "/services/tyres" },
    { name: "Windshields & Glass", href: "/services/windshields" },
  ];

  const categories = [
    { name: "Car Services Mechanic Work", href: "/categories/mechanic-work" },
    { name: "Car Denting and Painting", href: "/categories/denting-painting" },
    { name: "Scrap Vehicle Purchase", href: "/categories/scrap-vehicle" },
    { name: "Car Insurance Claim", href: "/categories/insurance-claim" },
    { name: "Car Insurance Renewal", href: "/categories/insurance-renewal" },
    { name: "Car Detailing", href: "/categories/detailing" },
  ];

  return (
    <header className="w-full border-b border-[#D5D7DE] bg-[#191D26]/90 backdrop-blur-xl supports-[backdrop-filter]:bg-[#191D26]/90 sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between font-sans" style={{fontFamily: 'Poppins, Inter, Roboto, sans-serif'}}>
        <a href="/" className="text-2xl font-bold tracking-tight text-[#D5D7DE] drop-shadow-glow">
          BM Motors
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="hover:text-blue-600 flex items-center gap-1 transition-colors">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-0 pt-2 z-50">
                <div className="w-64 bg-white border border-gray-200 rounded-xl shadow-2xl py-3 backdrop-blur-lg">
                  {services.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="block px-5 py-2.5 text-sm text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 hover:underline transition-all"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Categories Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button className="hover:text-blue-600 flex items-center gap-1 transition-colors">
              Categories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {categoriesOpen && (
              <div className="absolute top-full left-0 mt-0 pt-2 z-50">
                <div className="w-72 bg-white border border-gray-200 rounded-xl shadow-2xl py-3 backdrop-blur-lg">
                  {categories.map((c) => (
                    <a
                      key={c.href}
                      href={c.href}
                      className="block px-5 py-2.5 text-sm text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 hover:underline transition-all"
                    >
                      {c.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="/areas" className="hover:text-blue-600 transition-colors">Areas</a>
          <a href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
          <a href="/reviews" className="hover:text-blue-600 transition-colors">Reviews</a>
          <a href="/faqs" className="hover:text-blue-600 transition-colors">FAQs</a>
          <a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            <div>
              <div className="font-medium mb-2">Services</div>
              <div className="pl-4 space-y-2">
                {services.map((s) => (
                  <a key={s.href} href={s.href} className="block text-sm text-zinc-600 hover:text-black">
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="font-medium mb-2">Categories</div>
              <div className="pl-4 space-y-2">
                {categories.map((c) => (
                  <a key={c.href} href={c.href} className="block text-sm text-zinc-600 hover:text-black">
                    {c.name}
                  </a>
                ))}
              </div>
            </div>
            <a href="/areas" className="block">Areas</a>
            <a href="/pricing" className="block">Pricing</a>
            <a href="/reviews" className="block">Reviews</a>
            <a href="/faqs" className="block">FAQs</a>
            <a href="/contact" className="block">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
