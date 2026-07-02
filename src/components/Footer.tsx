import { Link, useLocation } from 'react-router-dom';
import { Settings, Leaf, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const location = useLocation();

  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-terra-brown text-white pt-16 pb-8 border-t border-terra-brown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="https://i.ibb.co/fzs8ZVD2/Whats-App-Image-2026-04-26-at-9-23-04-AM-2.jpg" alt="TerraNova Energy Ltd Logo" className="h-12 w-auto object-contain bg-white p-1 rounded-sm" />
              <span className="font-serif font-bold text-3xl">TerraNova</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Powering a Net-Zero Future Through Innovation and Nature.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-4 text-terra-cream/60">Quick Links</h4>
            <ul className="space-y-2 text-sm text-terra-cream font-medium">
              <li><Link to="/about" className="hover:text-terra-green transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-terra-green transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-terra-green transition-colors">Projects</Link></li>
              <li><Link to="/strategy" className="hover:text-terra-green transition-colors">Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-4 text-terra-cream/60">Contact</h4>
            <ul className="space-y-4 text-sm text-terra-cream font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-terra-cream shrink-0 mt-0.5" />
                <span>
                  <strong>Corporate Head Office:</strong><br />
                  123 Energy Way, Port Harcourt, Rivers State
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-terra-cream shrink-0 mt-0.5" />
                <span>
                  <strong>Regional Office:</strong><br />
                  45 Diplomatic Drive, Abuja
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-4 text-terra-cream/60">Reach Us</h4>
             <ul className="space-y-4 text-sm text-terra-cream font-medium">
                 <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-terra-cream shrink-0" />
                  <span>+234 701 650 4968</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-terra-cream shrink-0" />
                  <span>terranovaenergylimited@gmail.com</span>
                </li>
             </ul>
             <div className="mt-8">
               <h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-4 text-terra-cream/60">Follow Us</h4>
               <div className="flex space-x-4">
                 <a href="https://www.facebook.com/share/18XzRrJ8dF/" target="_blank" rel="noopener noreferrer" className="text-terra-cream hover:text-terra-green hover:scale-110 transition-all">
                   <Facebook className="w-5 h-5" />
                 </a>
                 <a href="https://x.com/TeraNovaEnergy" target="_blank" rel="noopener noreferrer" className="text-terra-cream hover:text-terra-green hover:scale-110 transition-all">
                   <Twitter className="w-5 h-5" />
                 </a>
                 <a href="https://www.instagram.com/terracenovaenergylimited?igsh=Z25wcGoxdGlkN3o=" target="_blank" rel="noopener noreferrer" className="text-terra-cream hover:text-terra-green hover:scale-110 transition-all">
                   <Instagram className="w-5 h-5" />
                 </a>
                 <a href="https://wa.me/+2347016504968" target="_blank" rel="noopener noreferrer" className="text-terra-cream hover:text-terra-green hover:scale-110 transition-all">
                   <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                    </svg>
                 </a>
               </div>
             </div>
          </div>

        </div>

        <div className="border-t border-terra-cream/10 pt-8 flex max-sm:flex-col justify-between items-center gap-4 text-sm font-medium text-terra-cream/60">
          <p>© {new Date().getFullYear()} TerraNova Energy Limited. All rights reserved.</p>
          <div className="flex items-center space-x-8">
            <div className="flex space-x-4 opacity-50 grayscale hover:grayscale-0 transition-all text-xs font-black italic items-center hidden md:flex text-white">
              <span>ESG-GLOBAL</span>
              <span>NIGERIA ENERGY</span>
              <span>ECO-FUND</span>
            </div>
            <Link to="/admin" className="w-10 h-10 flex items-center justify-center border border-terra-cream/20 rounded text-terra-cream/40 hover:text-terra-green hover:border-terra-green transition-colors group">
              <Settings className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
              <span className="sr-only">Admin Login</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
