import './About.css';
import Welcome from './Welcome';
import WhoWeAre from './WhoWeAre';
import Why from './Why';
import WhatWeDo from './WhatWeDo';
import Vision from './Vision';

const About = () => {
  return (
    <div className="about-page">
      {/* Breadcrumb and Header */}
      <div className="breadcrumb">
        <div className="container">
          <p><strong>HOME</strong> &gt; ABOUT US</p>
        </div>
      </div>

      <header className="page-header">
        <div className="container">
          <h1>ABOUT US</h1>
        </div>
      </header>

      <Welcome />
      <WhoWeAre />
      <Why />
      <WhatWeDo />
      <Vision />
    </div>
  );
};

export default About;