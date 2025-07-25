import React, { useEffect } from "react";
import "./Testimonial.css";
import ScrollReveal from "scrollreveal";

const testimonials = [
  {
    name: "Aarav Sharma",
    quote:
      "Reforma piece completely transformed my space. The craftsmanship and story behind each items makes it so special.",
  },

  {
    name: "Nina Desai",
    quote:
      "Beautifully restored furniture with a purpose. I love the warm, earthy aesthetics and values they bring.",
  },

  {
    name: "Kabir Joshi",
    quote:
      "Buying from ReForma isn't just shopping - it's supporting art, sustainability, and conscious living.",
  },
];

const Testimonial = () => {
  useEffect(() => {
    ScrollReveal().reveal(".testimonial-column", {
      origin: "bottom",
      distance: "20px",
      duration: 1000,
      interval: 200,
    });
  }, []);

  return(
    <section className="testimonial-section">
        <h2 className="testimonial-heading">Words from Our People</h2>
        <div className="testimonial-columns">
            {testimonials.map((item,idx) => (
                <div className="testimonial-column" key={idx}>
                    <div className="quote-mark">“</div>
                    <p className="testimonial-text">{item.quote}</p>
                    <p className="testimonial-author"> - {item.name}</p>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Testimonial;
