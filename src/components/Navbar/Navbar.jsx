import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Optional: lock scroll when navbar is open on mobile
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((v) => !v);

  return (
    <nav className="navbar">
      <div className="logo">ReForma</div>
      <div className={`nav-links${isOpen ? " open" : ""}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/products">Shop</a>
        <a href="/contact">Share</a>
      </div>
      <button
        className={`hamburger${isOpen ? " open" : ""}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close main menu" : "Open main menu"}
        aria-expanded={isOpen}
        aria-controls="menu"
        tabIndex="0"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;
