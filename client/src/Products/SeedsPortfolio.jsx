import React from "react";
import "./SeedsPortfolio.css";
import card1 from "./../assets/Products/card1.jpeg";
import card2 from "./../assets/Products/card2.jpeg";
import card3 from "./../assets/Products/card3.jpeg";
import card4 from "./../assets/Products/card4.png";
const SeedsPortfolio = () => {
  return (
    <section className="sp-seeds-premium-section">
      <div className="sp-seeds-container">
        {/* Section Header */}
        <div className="sp-seeds-header">
          <div className="sp-seeds-eyebrow">Product Catalog</div>
          <h2>Certified Seeds for <span className="sp-green-text">Every Crop & Climate</span></h2>
          <p>
            Scientifically bred, climate-resilient seed varieties supporting
            productivity, quality, and sustainable agriculture.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="sp-seeds-main-grid">

          {/* Cereals & Grains - Featured Wide Card */}
          <div className="sp-seed-feature-card sp-cereals">
            <div className="sp-card-image-side">
              <img src={card1} alt="Cereals" />
              <div className="sp-img-overlay"></div>
            </div>
            <div className="sp-card-content-side">
              <span className="sp-category-tag">Cereals & Grains</span>
              <h3>High-Performance Grains</h3>

              <div className="sp-inner-flex">
                <div className="sp-inner-col">
                  <h4>Hybrid Paddy Seeds</h4>
                  <ul>
                    <li>Short / Medium / Long duration</li>
                    <li>High-yield & disease resistant</li>
                    <li>Zone specific options</li>
                    <li>Export-quality traits</li>
                  </ul>
                </div>
                <div className="sp-inner-col">
                  <h4>Wheat Varieties</h4>
                  <ul>
                    <li>HD, PBW, HI rust resistance</li>
                    <li>High protein quality</li>
                    <li>Adapted to soil types</li>
                    <li>Climate-resilient genetics</li>
                  </ul>
                </div>
              </div>

              <div className="sp-maize-footer">
                <h4>Maize & Millets</h4>
                <p>Single/triple cross hybrids, Jowar, Bajra, Ragi under Shree Anna Mission.</p>
              </div>
            </div>
          </div>

          {/* Pulses */}
          <div className="sp-seed-compact-card">
            <div className="sp-compact-img-wrapper">
              <img src={card2} alt="Pulses" style={{ borderRadius: "20px" }} />
            </div>
            <h3>Pulses Portfolio</h3>
            <div className="sp-compact-body">
              <h4>Major Pulses</h4>
              <ul>
                <li>Tur, Urad, Moong, Masoor</li>
                <li>Short-duration multi-cropping</li>
              </ul>
              <h4>Specialty Pulses</h4>
              <ul>
                <li>Chickpea region-specific</li>
                <li>Export-quality lentils</li>
              </ul>
            </div>
          </div>

          {/* Oilseeds */}
          <div className="sp-seed-compact-card">
            <div className="sp-compact-img-wrapper">
              <img src={card3} alt="Oilseeds" style={{ borderRadius: "20px" }} />
            </div>
            <h3>Oilseeds Portfolio</h3>
            <div className="sp-compact-body">
              <h4>Mustard</h4>
              <ul>
                <li>Hybrid & open-pollinated</li>
                <li>High oil recovery</li>
              </ul>
              <h4>Groundnut & Soybean</h4>
              <ul>
                <li>G2/G7 groundnut types</li>
                <li>JS soybean series</li>
              </ul>
            </div>
          </div>

          {/* Vegetables */}
          <div className="sp-seed-feature-card sp-veg">
            <div className="sp-card-content-side">
              <span className="sp-category-tag">Vegetables</span>
              <h3>High Margin Varieties</h3>
              <div className="sp-inner-flex">
                <div className="sp-inner-col">
                  <h4>Common Vegetables</h4>
                  <ul>
                    <li>Tomato, Chilli, Brinjal</li>
                    <li>Long shelf-life traits</li>
                    <li>High yield potential</li>
                  </ul>
                </div>
                <div className="sp-inner-col">
                  <h4>Fruit & Exotic</h4>
                  <ul>
                    <li>Watermelon & muskmelon</li>
                    <li>Parthenocarpic cucumber</li>
                    <li>Greenhouse & export seeds</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sp-card-image-side">
              <img src={card4} alt="Vegetables" />
              <div className="sp-img-overlay"></div>
            </div>
          </div>

          {/* Fodder & Value Addition */}
          <div className="sp-bottom-split">
            <div className="sp-mini-card sp-fodder">
              <h4>Fodder Seeds</h4>
              <p>Napier grass (CO-3 / CO-4), Lucerne for dairy, Multicut sorghum fodder.</p>
              <ul className="sp-mini-points">
                <li>High biomass yield</li>
                <li>Ideal for dairy nutrition</li>
                <li>Year-round fodder supply</li>
              </ul>
            </div>
            <div className="sp-mini-card sp-highlight">
              <h4>Value Addition Services</h4>
              <ul>
                <li><strong>Seed Coating:</strong> Nutrients</li>
                <li><strong>Testing:</strong> Germination/Purity</li>
                <li><strong>Traceability:</strong> QR Tracking</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SeedsPortfolio;