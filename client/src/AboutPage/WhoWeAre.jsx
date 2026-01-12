import React from 'react';
import './WhoWeAre.css';

const WhoWeAre = () => {
  return (
    <section className="as-story-section">
      <div className="as-container">
        <div className="as-story-content">
          <div className="as-story-left" data-aos="fade-right">
            <div className="as-story-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=1000&fit=crop"
                alt="Our Story"
                className="as-story-image"
              />
              <div className="as-story-image-overlay"></div>
              <div className="as-story-badge">
                <span className="as-badge-number">58+</span>
                <span className="as-badge-text">Years of Excellence</span>
              </div>
            </div>
          </div>

          <div className="as-story-right" data-aos="fade-left">
            <p className="as-section-label">OUR STORY</p>
            <h2 className="as-section-title">
              Building a Legacy of Agricultural Excellence
            </h2>
            <div className="as-story-text">
              <p>
                Agro Fusion is not just a company, it’s a movement. Born from the vision of Jigisha Enterprises Ltd., Agro Fusion was established to address the systemic challenges in Indian agriculture. We recognized the gaps between farmers, technology, markets, and sustainability wand decided to build a bridge.

              </p>

            </div>

            <div className="as-story-highlights">
              <div className="as-highlight-item" data-aos="fade-up" data-aos-delay="200">
                <div className="as-highlight-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="as-highlight-content">
                  <h4>Innovation First</h4>
                  <p>Pioneering agri-tech solutions</p>
                </div>
              </div>

              <div className="as-highlight-item" data-aos="fade-up" data-aos-delay="300">
                <div className="as-highlight-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="as-highlight-content">
                  <h4>Farmer Centric</h4>
                  <p>Empowering agricultural communities</p>
                </div>
              </div>

              <div className="as-highlight-item" data-aos="fade-up" data-aos-delay="400">
                <div className="as-highlight-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6" />
                  </svg>
                </div>
                <div className="as-highlight-content">
                  <h4>Sustainable Growth</h4>
                  <p>Building for future generations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;