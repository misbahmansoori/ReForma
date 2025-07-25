import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Feature.css";

const projects = [
  {
    title: "Retro Bookshelf",
    image: "/assets/step4.png",
    description: "An old cabinet reborn as a stunning minimalist bookshelf",
  },
  {
    title: "Rustic Coffee Table",
    image: "/assets/step4.png",
    description: "Crafted from reclaimed wood, ideal for cozy corners.",
  },
  {
    title: "Pastel Chair Set",
    image: "/assets/step4.png",
    description: "Chairs painted in calming tones with modern aesthetics",
  },
  {
    title: "Vintage Mirror Frame",
    image: "/assets/step4.png",
    description: "From scrap wood to a charming rustic wall frame.",
  },
  {
    title: "Palette Shoe Rack",
    image: "/assets/step4.png",
    description: "Old wooden pallets turned into modern storage.",
  },
];

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev-arrow" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="arrow next-arrow" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const Feature = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="featured-section">
      <h2 className="featured-heading">Featured Projects</h2>

      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="slide-wrapper">
            <div className="slide-card">
              <img src={project.image} alt={project.title} className="slide-img" />
              <div className="slide-text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Link to="/products" className="view-all-btn">
        View All Products →
      </Link>
    </section>
  );
};

export default Feature;
