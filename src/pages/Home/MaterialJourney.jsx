import React, { useEffect } from "react";
import "./Material.css";
import ScrollReveal from "scrollreveal";

function MaterialJourney() {
  useEffect(() => {
    ScrollReveal().reveal(".map-step", {
      delay: 100,
      distance: "40px",
      duration: 1000,
      origin: "bottom",
      interval: 150,
    });
  }, []);

  const steps = [
    {
      title: "Before",
      description: "Old, unused furniture waiting for a new life.",
      image: "/assets/step1.png",
    },
    {
      title: "Dismantling & Cleaning",
      description: "We carefully take apart and deep-clean every piece.",
      image: "/assets/step2.jpg",
    },
    {
      title: "Painting & Assembly",
      description: "Fresh paint, polish, and detailed assembling.",
      image: "/assets/step3.jpg",
    },
    {
      title: "After",
      description: "A stunning, modern upcycled creation ready for your home.",
      image: "/assets/step4.png",
    },
  ];

  return (
    <section className="material-section">
      
      <h2 className="material-heading">The Upcycling Journey</h2>

      <div className="map-journey">
        {steps.map((step, index) => (
          <div
            className={`map-step ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="map-circle">{index + 1}</div>
            <div className="map-content">
              <img src={step.image} alt={step.title} />
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* SVG Path */}
        <svg className="map-line" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 50 0 Q 60 20 50 40 Q 40 60 50 80 Q 60 90 50 100"
            fill="none"
            stroke="#6e4d3c"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  );
}

export default MaterialJourney;
