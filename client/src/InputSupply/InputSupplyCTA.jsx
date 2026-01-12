import "./InputSupplyCTA.css";

const InputSupplyCTA = () => { 
  return (
    <section className="input-cta-section">
      <div className="input-cta-wrapper"> 

        {/* HEADER */}
        <div className="input-cta-header">
          <h2>Start Your Journey to Better Yields</h2>
          <p>
            <em>Join 8,50,000+ Farmers Trusting AgroFusion for Quality Inputs</em>
          </p> 
        </div>

        {/* CTA BUTTON */}
        <div className="input-cta-button-wrapper">
          <button
            className="input-cta-btn"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us for Inputs Advisory
          </button>
        </div>

      </div>
    </section>
  );
};

export default InputSupplyCTA;
