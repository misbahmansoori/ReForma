import './Why.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserTie,
  faHeadset,
  faAward,
  faTags
} from '@fortawesome/free-solid-svg-icons';

const Why = () => {
  return (
    <section className="why-choose">
      <div className="container">
        <h2>WHY CHOOSE REFORMA</h2>
        <div className="vertical-timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faUserTie} />
            </div>
            <div className="timeline-content">
              <h3>Experienced Artisans</h3>
              <p>Our skilled artisans expertly transform and upcycle furniture items from customers across India with quality craftsmanship.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faHeadset} />
            </div>
            <div className="timeline-content">
              <h3>Dedicated Support</h3>
              <p>Our team is committed to working 24/7 to provide customer support and collection services at fair prices.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faAward} />
            </div>
            <div className="timeline-content">
              <h3>High Quality Work</h3>
              <p>We use high-quality materials and techniques in our upcycling process to maintain excellence in every piece.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faTags} />
            </div>
            <div className="timeline-content">
              <h3>Fair Pricing</h3>
              <p>We take the stress out of furniture disposal by offering fair prices for your unwanted items at the right time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;