import { useState } from "react";

import { Dumbbell, Menu, X } from "lucide-react";

import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <Dumbbell size={25} />
        <span>ATHLETIQ</span>
      </Link>

      {location.pathname === "/" && (
        <>
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>

            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>

            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How it works
            </a>

            <a href="#pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>

          </div>

          <div className="nav-actions">

            <Link to="/onboarding" className="login-btn">
              Log in
            </Link>

            <Link to="/onboarding" className="nav-cta">
              Get Started
            </Link>

          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </>
      )}

    </nav>
  );
}

export default Navbar;