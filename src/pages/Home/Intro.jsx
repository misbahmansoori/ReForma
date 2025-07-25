import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <section className="why-section">
      <div className="why-container">
        <h2 className="why-heading">Why ReForma?</h2>
        <p className="why-tagline">
          Not just furniture — a movement towards sustainability and mindful living.
        </p>

        <div className="why-grid">
          <div className="why-point">
            <h3> Upcycle, Don't Replace</h3>
            <p>
              We believe in transforming the old into stunning, functional pieces —
              reducing waste and preserving charm.
            </p>
          </div>

          <div className="why-point">
            <h3>Craftsmanship with Heart</h3>
            <p>
              Each piece is thoughtfully redesigned, hand-finished, and unique —
              no mass production, only character.
            </p>
          </div>

          <div className="why-point">
            <h3>Sustainability at Core</h3>
            <p>
              From sourcing to packaging, we keep our process eco-conscious and
              community-friendly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
