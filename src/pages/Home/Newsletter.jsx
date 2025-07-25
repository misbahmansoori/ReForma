import React, { useEffect } from "react";
import "./Newsletter.css";
import ScrollReveal from "scrollreveal";

function Newsletter() {
  useEffect(() => {
    ScrollReveal().reveal(".newsletter-container", {
      delay: 100,
      duration: 1000,
      distance: "40px",
      origin: "bottom",
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2>Join the Reforma Tribe</h2>
        <p>
          Get upcycling tips, DIY inspiration, and early access to new pieces
        </p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />

          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
