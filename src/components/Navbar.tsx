import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import uzLogo from "../assets/uzlogo.jpg";
import ThemeToggle from "../pages/ThemeToggle";
import "../components/Navbar.css"; // Imports the new stylesheet across folder structures

const navLinks = [
  { label: "Production Unit", to: "/production" },
  { label: "VakaNyika(VN) our Processing Unit", to: "/processing" },
  { label: "Farm Tourism", to: "/tourism" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="topbar">
      <Link className="brand" to="/" aria-label="University of Zimbabwe Agro Industrial Park home">
        <span className="brand-mark image-mark">
          <img src={uzLogo} alt="UZ Logo" />
        </span>
        <span className="brand-text">University of Zimbabwe Agro Industrial Park</span>
      </Link>

      <div className="nav-controls-wrapper">
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={location.pathname === to ? "active-link" : ""}
            >
              {label}
            </Link>
          ))}
          
          {/* Mobile view toggle item placement inside links list */}
          <div className="mobile-only-toggle">
            <span className="toggle-label">Theme Mode:</span>
            <ThemeToggle />
          </div>
        </nav>

        {/* Desktop theme toggle placement */}
        <div className="desktop-only-toggle">
          <ThemeToggle />
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}