import React, { useEffect } from "react";
import "./Home.css";

function Hero() {
  useEffect(() => {
    ScrollReveal().reveal(".hero-overlay", {
      delay: 300,
      distance: "30px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "bottom",
      reset: false,
    });
  }, []);
 return (
    <section className="hero-section">
      <img
        className="hero-bg"
        src="/Public/assets/Hero.png"
        alt="Recycled Furniture Hero"
      />
      <div className="hero-decor-blob"></div> {/* decor element */}
      <div className="hero-overlay">
        <p className="hero-tagline">Upcycled | Handcrafted | Sustainable</p>

        <h1 className="hero-heading">Turning Waste into Worth</h1>
        <p className="hero-subtext">
          Explore our curated collection of handcrafted furniture made from recycled materials.
        </p>
        <a href="/products" className="hero-btn">Shop Now</a>
      </div>
      <div className="scroll-indicator">
  <svg width="24" height="24" fill="#1b1005ff" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16l-6-6h12l-6 6z"/>
  </svg>
</div>


    </section>
    
  );
}

export default Hero;