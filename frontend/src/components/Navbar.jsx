import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <Dumbbell size={25} />
        <span>ATHLETIQ</span>
      </a>

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
        <a href="/login" className="login-btn">
          Log in
        </a>

        <a href="/register" className="nav-cta">
          Get Started
        </a>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
}

export default Navbar;