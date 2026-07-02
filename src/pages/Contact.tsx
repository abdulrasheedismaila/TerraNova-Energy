import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import PageTransition from "../components/PageTransition";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:terranovaenergylimited@gmail.com';
    setStatus('Opening mail client...');
    setTimeout(() => {
      setStatus('');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <PageTransition className="pt-20 md:pt-24 pb-16 md:pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4"
        >
          <span className="text-terra-green font-bold tracking-wider uppercase text-xs sm:text-sm">Get in Touch</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-terra-brown mt-2 mb-4 sm:mb-6 leading-tight">Contact Us</h1>
          <p className="text-base sm:text-lg text-terra-brown/70 leading-relaxed">
            Reach out to our teams in Abuja and Rivers State.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8 sm:space-y-12"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-terra-brown mb-4 sm:mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-terra-green/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-terra-green" />
                </div>
                Corporate Head Office
              </h3>
              <div className="text-terra-brown/80 text-base sm:text-lg bg-terra-cream p-5 sm:p-6 rounded-xl border border-terra-brown/5 ml-0 sm:ml-12 hover:shadow-md transition-shadow">
                123 Energy Way<br />
                Port Harcourt<br />
                Rivers State, Nigeria
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-terra-brown mb-4 sm:mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-terra-yellow/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-terra-yellow" />
                </div>
                Regional Office
              </h3>
              <div className="text-terra-brown/80 text-base sm:text-lg bg-terra-cream p-5 sm:p-6 rounded-xl border border-terra-brown/5 ml-0 sm:ml-12 hover:shadow-md transition-shadow">
                45 Diplomatic Drive<br />
                Central Business District<br />
                Abuja, Nigeria
              </div>
            </div>

            <div className="pt-8 border-t border-terra-brown/10 space-y-4 sm:space-y-6">
              <a href="tel:+2347016504968" className="flex items-center gap-4 text-terra-brown/80 hover:text-terra-green transition-colors group p-2 -ml-2 rounded-lg hover:bg-terra-cream">
                <div className="w-10 h-10 rounded-full bg-terra-green/10 flex items-center justify-center shrink-0 group-hover:bg-terra-green group-hover:text-white transition-colors text-terra-green">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg sm:text-xl font-medium">+234 701 650 4968</span>
              </a>
              <a href="mailto:terranovaenergylimited@gmail.com" className="flex items-center gap-4 text-terra-brown/80 hover:text-terra-green transition-colors group p-2 -ml-2 rounded-lg hover:bg-terra-cream">
                <div className="w-10 h-10 rounded-full bg-terra-green/10 flex items-center justify-center shrink-0 group-hover:bg-terra-green group-hover:text-white transition-colors text-terra-green">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-base sm:text-lg font-medium break-all">terranovaenergylimited@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-terra-brown p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl text-white w-full"
          >
            <h3 className="text-2xl font-serif font-bold mb-6 sm:mb-8">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-terra-cream/80 mb-1.5 sm:mb-2">Name / Organization</label>
                <input 
                  type="text" required
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 sm:py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-terra-green transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-terra-cream/80 mb-1.5 sm:mb-2">Email Address</label>
                <input 
                  type="email" required
                  value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 sm:py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-terra-green transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-terra-cream/80 mb-1.5 sm:mb-2">Message</label>
                <textarea 
                  required rows={4}
                  value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-terra-green resize-none transition-all"
                  placeholder="How can we partner with you?"
                />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-terra-green hover:bg-[#1a5b3a] text-white font-bold py-3.5 sm:py-4 rounded-lg transition-colors shadow-lg mt-2"
                disabled={status === 'Opening mail client...'}
              >
                {status || 'Send Message'}
              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
