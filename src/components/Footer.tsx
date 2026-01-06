import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-forest text-cream">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <Link to="/" className="font-semibold text-lg">
          Plantify
        </Link>

        <nav className="flex gap-6 opacity-80">
          <Link to="/shop">Shop</Link>
          <Link to="/care">Care</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <span className="opacity-60">© 2026 Plantify</span>
      </div>
    </footer>
  );
};

export default Footer;
