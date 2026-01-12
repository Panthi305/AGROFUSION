import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Sunita Sharma",
    location: "Punjab, India",
    quote: "The drone services and soil advisory are game changers. I can now farm efficiently with technology.",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=200&h=200&fit=crop"
  },
  {
    id: 2,
    name: "Jigisha International",
    location: "UAE Partner",
    quote: "Partnering with AgroFusion ensures quality produce and timely exports with transparent operations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop"
  },
  {
    id: 3,
    name: "Arjun Singh",
    location: "Rajasthan, India",
    quote: "The real-time updates on market prices have saved me from losses and increased my profit margins.",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=200&h=200&fit=crop"
  },
  {
    id: 4,
    name: "Amit Patel",
    location: "Gujarat, India",
    quote: "The sustainable farming techniques shared by the advisory team have doubled my crop yield this season.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&fit=crop"
  }
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(1);
  const [cardWidth, setCardWidth] = useState(410);

  // Memoized next step for the interval
  const nextStep = useCallback(() => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // 1. Auto-play Logic (3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      nextStep();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextStep, index]); // Reset interval if index changes manually

  // 2. Responsive Width Logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setCardWidth(310);
      else if (window.innerWidth <= 1024) setCardWidth(350);
      else setCardWidth(410);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const offset = index * -cardWidth;

  return (
    <div className="ht-testimonial-section">
      <div className="ht-header-group">
        {/* <span className="ht-pre-title">Testimonials</span> */}
        <h2 className="ht-main-title">What Our Partners Say</h2>
      </div>

      <div className="ht-carousel-wrapper">
        <button className="ht-nav-btn ht-prev" onClick={prevStep} aria-label="Previous">
          <ChevronLeft size={28} />
        </button>

        <div
          className="ht-testimonial-track"
          style={{ transform: `translateX(calc(50% - ${cardWidth / 2}px + ${offset}px))` }}
        >
          {testimonials.map((item, i) => (
            <div
              key={item.id}
              className={`ht-testimonial-card ${i === index ? 'ht-active' : ''}`}
            >
              <div className="ht-quote-mark">“</div>
              <p className="ht-testimonial-text">"{item.quote}"</p>
              <div className="ht-profile-container">
                <img src={item.image} alt={item.name} className="ht-profile-img" />
                <div className="ht-profile-info">
                  <h4>{item.name}</h4>
                  <p>{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="ht-nav-btn ht-next" onClick={nextStep} aria-label="Next">
          <ChevronRight size={28} />
        </button>
      </div>

      <div className="ht-dots-container">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`ht-dot ${i === index ? 'ht-active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;