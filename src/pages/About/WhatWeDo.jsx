import './WhatWeDo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCouch,
  faTruckMoving,
  faHammer,
  faWandMagicSparkles
} from '@fortawesome/free-solid-svg-icons';

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="container">
        <h2>WHAT WE DO</h2>
        <div className="services-grid">
          <div className="service-item">
            <div className="service-icon">
              <FontAwesomeIcon icon={faCouch} />
            </div>
            <h3>FURNITURE COLLECTION</h3>
            <p>We collect unwanted furniture from customers across the region for upcycling.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <FontAwesomeIcon icon={faTruckMoving} />
            </div>
            <h3>REVERSE LOGISTICS</h3>
            <p>Efficient transportation and handling of collected furniture items to our workshops.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <FontAwesomeIcon icon={faHammer} />
            </div>
            <h3>UPCYCLING PROCESS</h3>
            <p>Transforming old furniture into beautiful, functional pieces using sustainable methods.</p>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <FontAwesomeIcon icon={faWandMagicSparkles} />
            </div>
            <h3>ASSET RENEWAL</h3>
            <p>Giving new life to furniture assets through creative redesign and restoration.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;