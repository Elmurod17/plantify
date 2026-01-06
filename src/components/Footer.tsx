import { Link } from "react-router-dom";
import {
  Leaf,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-leaf/20 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-leaf" />
              </div>
              <span className="text-2xl font-semibold">Plantify</span>
            </Link>

            <p className="text-sm opacity-80 mb-4">
              Bringing nature into your home with sustainably grown plants and
              eco-friendly practices.
            </p>

            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/10 rounded-md">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-md">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-md">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/shop">Shop All</Link>
              </li>
              <li>
                <Link to="/shop">New Arrivals</Link>
              </li>
              <li>
                <Link to="/shop">Best Sellers</Link>
              </li>
              <li>
                <Link to="/care">Plant Care</Link>
              </li>
              <li>
                <Link to="/gifts">Gift Cards</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/categories">Indoor Plants</Link>
              </li>
              <li>
                <Link to="/categories">Outdoor Plants</Link>
              </li>
              <li>
                <Link to="/categories">Succulents</Link>
              </li>
              <li>
                <Link to="/categories">Flowers</Link>
              </li>
              <li>
                <Link to="/categories">Planters</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex gap-2 items-center">
                <MapPin className="w-5 h-5 text-leaf" />
                Coming soon
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-5 h-5 text-leaf" />
                Coming soon
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-5 h-5 text-leaf" />
                Coming soon
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <span>© 2026 Plantify. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
