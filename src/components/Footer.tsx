import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest text-cream-dark">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-leaf/20 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-leaf" />
              </div>
              <span className="font-display text-2xl font-semibold text-cream">
                Plantify
              </span>
            </Link>
            <p className="text-cream-dark/80 text-sm leading-relaxed">
              Bringing nature into your home with sustainably grown plants and eco-friendly practices.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center hover:bg-leaf/20 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center hover:bg-leaf/20 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center hover:bg-leaf/20 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Shop All', 'New Arrivals', 'Best Sellers', 'Plant Care', 'Gift Cards'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-cream-dark/80 hover:text-leaf transition-colors duration-300 text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-4">Categories</h4>
            <ul className="space-y-3">
              {['Indoor Plants', 'Outdoor Plants', 'Succulents', 'Flowers', 'Planters'].map((item) => (
                <li key={item}>
                  <Link to="/categories" className="text-cream-dark/80 hover:text-leaf transition-colors duration-300 text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-leaf shrink-0 mt-0.5" />
                <span className="text-cream-dark/80 text-sm">
                  123 Green Street<br />
                  Botanical District, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-leaf shrink-0" />
                <span className="text-cream-dark/80 text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-leaf shrink-0" />
                <span className="text-cream-dark/80 text-sm">hello@plantify.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream-dark/60 text-sm">
              © 2026 Plantify. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-cream-dark/60 hover:text-cream text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="#" className="text-cream-dark/60 hover:text-cream text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
