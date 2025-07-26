import './Vision.css';
import { useState, useEffect } from 'react';
import AnimatedCounter from './AnimatedCounter'; // Make sure the path is correct

const Vision = () => {
  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  const clients = [
    { id: 1, logo: 'src/assets/image1.webp', alt: 'Client 1' },
    { id: 2, logo: 'src/assets/image2.jpeg', alt: 'Client 2' },
    { id: 3, logo: 'src/assets/image3.png', alt: 'Client 3' },
    { id: 4, logo: 'src/assets/download2.jpeg', alt: 'Client 4' },
    { id: 5, logo: 'src/assets/download.jpeg', alt: 'Client 5' },
    { id: 6, logo: 'src/assets/download.png', alt: 'Client 6' },
    { id: 7, logo: 'src/assets/image7.png', alt: 'Client 7' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClientIndex((prevIndex) => (prevIndex + 1) % (clients.length / 2));
    }, 3000);
    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <section className="vision-section">
      <div className="container">
        <h2>OUR VISION</h2>
        <p>
          At REForma, we are taking the initiative to educate people about furniture waste 
          and its environmental impact. We provide guidance on how to responsibly dispose of 
          old furniture and the benefits of choosing upcycled pieces. If furniture waste is 
          not addressed, our planet will face increasing environmental challenges.
        </p>

        {/* Mission Stats Section */}
        <div className="mission-stats">
          <div className="stats-overlay"></div>
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number"><AnimatedCounter targetNumber={2848} /></div>
                <div className="stat-label">PIECES UPCYCLED</div>
              </div>
              <div className="stat-item">
                <div className="stat-number"><AnimatedCounter targetNumber={500} /></div>
                <div className="stat-label">HAPPY CUSTOMERS</div>
              </div>
              <div className="stat-item">
                <div className="stat-number"><AnimatedCounter targetNumber={20} /></div>
                <div className="stat-label">AWARDS WON</div>
              </div>
              <div className="stat-item">
                <div className="stat-number"><AnimatedCounter targetNumber={150} /></div>
                <div className="stat-label">EXPERT ARTISANS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div className="clients-section">
          <div className="container">
            <h2>OUR CLIENTS</h2>
            <p className="clients-subtitle">TRUSTED BY LEADING BRANDS AND ORGANIZATIONS</p>
            <div className="clients-carousel">
              <div 
                className="clients-track"
                style={{ transform: `translateX(-${currentClientIndex * 20}%)` }}
              >
                {[...clients, ...clients].map((client, index) => (
                  <div key={`${client.id}-${index}`} className="client-logo">
                    <img src={client.logo} alt={client.alt} />
                  </div>
                ))}
              </div>
            </div>
            <div className="client-testimonials">
              <div className="testimonial">
                <p>"REForma transformed our office furniture, saving us thousands while aligning with our sustainability goals."</p>
                <div className="client-name">- GreenTech Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
