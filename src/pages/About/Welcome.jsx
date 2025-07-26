import React, { useEffect } from 'react';
import './Welcome.css';
import ScrollReveal from 'scrollreveal';

const Welcome = () => {
  useEffect(() => {
    // Animation for the welcome text elements
    ScrollReveal().reveal(".welcome-text h2", {
      delay: 300,
      distance: "30px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "left",
      reset: false,
    });

    ScrollReveal().reveal(".welcome-text p", {
      delay: 500,
      distance: "30px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "left",
      reset: false,
      interval: 200, // staggers the animation for multiple elements
    });

    // Animation for the welcome image
    ScrollReveal().reveal(".welcome-image", {
      delay: 400,
      distance: "30px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "right",
      reset: false,
    });

    // Animation for decorative circles
    ScrollReveal().reveal(".decorative-circle", {
      delay: 200,
      distance: "50px",
      duration: 1200,
      easing: "ease-out",
      origin: "top",
      reset: false,
      interval: 100,
    });
  }, []);

  return (
    <section className="welcome-section">
      <div className="decorative-circle decorative-circle-1"></div>
      <div className="decorative-circle decorative-circle-2"></div>
      <div className="container welcome-grid">
        <div className="welcome-text">
          <h2>
            <span className="highlight">WELCOME TO</span>
            <span className="brand-name">REFORMA</span>
          </h2>
          <p>
            As a society, we have become increasingly aware of our environmental impact. 
            With growing consumption, we produce more furniture waste that ends up in landfills. 
            This waste contributes significantly to environmental degradation. Hence, it is our 
            duty to act and prevent further harm to our planet.
          </p>
          <p>
            <span className="accent-text">REForma</span> is an innovative marketplace dedicated to upcycling furniture, managed by 
            a group of professionals committed to sustainable practices. We transform discarded 
            furniture into beautiful, functional pieces through our network of skilled artisans 
            across the country. We upcycle old furniture like chairs, tables, sofas, cabinets, 
            and many other items that would otherwise be discarded.
          </p>
        </div>
        <div className="welcome-image">
          <img src="src/assets/welcomeimg.png" alt="Upcycled furniture example" />
          <div className="image-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;