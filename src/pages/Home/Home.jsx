import React from "react";
import "./Home.css";
import Hero from "./Hero";
import MaterialJourney from "./MaterialJourney";
import Intro from "./Intro";
import Feature from "./Feature";
import Testimonial from "./Testimonial";
import Newsletter from "./Newsletter";


function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <MaterialJourney />
      <Feature />
      <Testimonial />
      <Newsletter />
    </>
  );
}

export default Home;
