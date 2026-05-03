/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  UtensilsCrossed, 
  Bike, 
  CreditCard, 
  ChevronRight,
  Menu,
  X,
  MessageSquare,
  Instagram,
  Facebook
} from 'lucide-react';
import { useState } from 'react';

const MENU_ITEMS = [
  { name: "Cutting Chai", price: 10, category: "Hot Drinks", image: "https://images.unsplash.com/photo-1594631252845-29fc45862070?q=80&w=300&auto=format&fit=crop" },
  { name: "Full Chai", price: 20, category: "Hot Drinks", image: "https://images.unsplash.com/photo-1544787210-2211dca2161a?q=80&w=300&auto=format&fit=crop" },
  { name: "Samosa", price: 15, category: "Snacks", image: "https://images.unsplash.com/photo-1601050638917-3606f548f2ba?q=80&w=300&auto=format&fit=crop" },
  { name: "Bread Pakora", price: 25, category: "Snacks", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=300&auto=format&fit=crop" },
  { name: "Maggi", price: 40, category: "Quick Bites", image: "https://images.unsplash.com/photo-1612927623705-618d13df48b2?q=80&w=300&auto=format&fit=crop" },
  { name: "Bun Maska", price: 30, category: "Quick Bites", image: "https://images.unsplash.com/photo-1628163581728-66f8e778aab4?q=80&w=300&auto=format&fit=crop" },
];

const REVIEWS = [
  { name: "Best chai in town!", user: "Aman Gupta", rating: 5 },
  { name: "Affordable snacks and quick service.", user: "Priya Sharma", rating: 4 },
  { name: "Perfect place for evening hangout.", user: "Rahul Verma", rating: 5 },
];

const HOURS = [
  { day: "Mon - Thu", time: "6:00 AM – 10:00 PM" },
  { day: "Fri - Sat", time: "6:00 AM – 11:00 PM" },
  { day: "Sunday", time: "7:00 AM – 9:00 PM" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white">
              <Coffee size={24} />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">Sharma Ji</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:text-amber-600 transition-colors">Menu</a>
            <a href="#about" className="hover:text-amber-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
            <button className="bg-amber-500 text-white px-5 py-2 rounded-full hover:bg-amber-600 transition-colors shadow-sm cursor-pointer">
              Order Now
            </button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-4 md:hidden"
          >
            <div className="flex flex-col gap-6 text-lg font-medium">
              <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button className="bg-amber-500 text-white p-4 rounded-xl">Order Online</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1594631252845-29fc45862070?q=80&w=2000&auto=format&fit=crop" 
              alt="Indian Tea Stall"
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="inline-block bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                Since 1995 • Aligarh
              </span>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">
                Fresh Chai, <br/><span className="text-amber-400">Warm Memories.</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-lg leading-relaxed">
                Experience the authentic taste of Aligarh with our signature Cutting Chai and piping hot Samosas. Perfect for your evening hangout.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-amber-500 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-600 transition-all flex items-center gap-2 cursor-pointer">
                  Explore Menu <ChevronRight size={20} />
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all cursor-pointer">
                  View Location
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Info Grid */}
        <section className="py-12 bg-neutral-100 border-y border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Star size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-2xl font-bold">4.3/5</p>
                <p className="text-sm text-neutral-500">248+ Reviews</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Bike size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold">Free Delivery</p>
                <p className="text-sm text-neutral-500">Within 2 km</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <CreditCard size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold">Digital Pay</p>
                <p className="text-sm text-neutral-500">UPI, Paytm Ready</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold">Open Early</p>
                <p className="text-sm text-neutral-500">Starts at 6:00 AM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-24 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">Our Signature Menu</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-neutral-500">Handcrafted snacks made fresh every single hour.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENU_ITEMS.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="menu-card flex gap-4 items-center"
              >
                <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-neutral-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-amber-600">{item.category}</span>
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-amber-700 font-bold">₹{item.price}</span>
                    <button className="text-xs bg-neutral-900 text-white px-3 py-1.5 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer">
                      Add to Order
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-neutral-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-4xl mb-8">What our customers say in Aligarh</h2>
                <div className="space-y-6">
                  {REVIEWS.map((review, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white/5 border border-white/10 p-6 rounded-2xl"
                    >
                      <div className="flex gap-1 text-amber-400 mb-3">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                      </div>
                      <p className="text-lg italic mb-4">"{review.name}"</p>
                      <p className="text-sm text-neutral-400">— {review.user}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544787210-2211dca2161a?q=80&w=800&auto=format&fit=crop" 
                  alt="Customer enjoying chai"
                  className="rounded-3xl shadow-2xl opacity-80"
                />
                <div className="absolute -bottom-6 -right-6 lg:bottom-12 lg:-right-12 bg-white text-neutral-900 p-8 rounded-2xl shadow-xl max-w-[240px]">
                  <MessageSquare className="text-amber-500 mb-4" size={32} />
                  <p className="font-bold text-xl mb-1">4.3 Quality</p>
                  <p className="text-sm text-neutral-500">Based on Google Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Hours */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-4xl mb-8">Find Us</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                    <MapPin className="text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Visit Our Stall</h4>
                    <p className="text-neutral-500">23, Railway Road, Near Bus Stand<br/>Aligarh, Uttar Pradesh – 202001</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
                    <Phone className="text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-neutral-500">+91 98765 43210</p>
                  </div>
                </div>
                <div className="accent-border">
                  <p className="font-bold mb-2">Payment Methods</p>
                  <p className="text-sm text-neutral-500">Cash, UPI, Paytm accepted</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
              <h3 className="font-serif text-2xl mb-6">Opening Hours</h3>
              <div className="space-y-4">
                {HOURS.map((h, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-neutral-200 last:border-0">
                    <span className="font-medium">{h.day}</span>
                    <span className="text-neutral-500">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-amber-500 text-white p-6 rounded-2xl flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg">Home Delivery</p>
                  <p className="text-white/80 text-sm">Within 2km of Railway Road</p>
                </div>
                <Bike size={40} className="text-white/40" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white">
              <Coffee size={18} />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">Sharma Ji</span>
          </div>
          
          <p className="text-sm text-neutral-500 italic font-serif">"Best chai in Aligarh since 1995"</p>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-amber-100 hover:text-amber-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-amber-100 hover:text-amber-600 transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-neutral-100 text-center text-xs text-neutral-400">
          © 2024 Sharma Ji Tea & Snacks. Built with love in Aligarh.
        </div>
      </footer>
    </div>
  );
}

