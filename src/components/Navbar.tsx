import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

import uzLogo from "../assets/uzlogo.jpg";
import ThemeToggle from "../pages/ThemeToggle";
import "../components/Navbar.css";

const navLinks = [
  { label: "Production", to: "/production" },
  { label: "Processing", to: "/processing" },
  { label: "Farm Tourism", to: "/tourism" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="topbar">

      {/* ================= BRAND ================= */}
      <Link
        className="brand"
        to="/"
        onClick={closeMenu}
        aria-label="University of Zimbabwe Agro Industrial Park home"
      >

        <span className="brand-mark">
          <img src={uzLogo} alt="University of Zimbabwe Logo" />
        </span>

        <span className="brand-text">
          <strong>University of Zimbabwe</strong>
          <small>Agro Industrial Park</small>
        </span>

      </Link>


      {/* ================= DESKTOP / MOBILE CONTROLS ================= */}
      <div className="nav-controls-wrapper">

        <nav
          className={`nav ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >

          {navLinks.map(({ label, to }) => {

            const isActive = location.pathname === to;

            return (
              <Link
                key={to}
                to={to}
                onClick={closeMenu}
                className={isActive ? "active-link" : ""}
              >
                {label}
              </Link>
            );
          })}


          {/* CONTACT CTA */}
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`nav-contact ${
              location.pathname === "/contact" ? "active-contact" : ""
            }`}
          >
            Contact
            <ArrowUpRight size={15} />
          </Link>


          {/* MOBILE THEME TOGGLE */}
          <div className="mobile-only-toggle">
            <span className="toggle-label">
              Theme Mode
            </span>

            <ThemeToggle />
          </div>

        </nav>


        {/* DESKTOP THEME TOGGLE */}
        <div className="desktop-only-toggle">
          <ThemeToggle />
        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

    </header>
  );
}