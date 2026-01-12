import React from "react";
import { Link } from "react-router-dom";
import {
  Send, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Sprout,
  ShieldCheck, Wind, Sun, Settings, ShoppingCart, Truck, FlaskConical, Cpu
} from "lucide-react";
import "./Footer.css";
import logo from "./../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="af-footer">
      <div className="af-footer__main">
        <div className="af-footer__container">

          {/* 1. BRAND LOGO & SOCIAL */}
          <div className="af-footer__col-brand">
            <div className="footer-brand-identity">
              <img
                src={logo}
                alt="Jai Kishan Logo"
                className="footer-logo-img"
              />

              <div className="footer-logo-text">
                <span className="footer-logo-name">AgroFusion</span>
              </div>

            </div>
            <p className="footer-bio">
              Empowering farmers with 4K drone tech, AI-driven insights, and a seamless digital marketplace for a sustainable future.
            </p>
            <div className="footer-social-row">
              <a href="#" className="social-pill"><Facebook size={18} /></a>
              <a href="#" className="social-pill"><Twitter size={18} /></a>
              <a href="#" className="social-pill"><Linkedin size={18} /></a>
              <a href="#" className="social-pill"><Instagram size={18} /></a>
            </div>
          </div>

          {/* 2. SERVICES GRID */}
          <div className="af-footer__col-links">
            <h4 className="footer-heading">Services</h4>
            <div className="footer-services-grid">
              <ul className="footer-ul">
                <li><Link to="/services/drone-farming"><Wind size={16} /> Drones</Link></li>
                <li><Link to="/services/solar-irrigation"><Sun size={16} /> Solar</Link></li>
                <li><Link to="/services/agri-finance"><ShieldCheck size={16} /> Finance</Link></li>
                <li><Link to="/services/biocng"><Cpu size={16} /> Bio CNG</Link></li>
              </ul>
              <ul className="footer-ul">
                <li><Link to="/services/agricultural-input"><ShoppingCart size={16} /> Inputs</Link></li>
                <li><Link to="/services/processing-market-linkage"><Truck size={16} /> Market</Link></li>
                <li><Link to="/services/mechanization"><Settings size={16} /> Tech</Link></li>
                <li><Link to="/services/soil-testing"><FlaskConical size={16} /> Testing</Link></li>
              </ul>
            </div>
          </div>

          {/* 3. QUICK LINKS */}
          <div className="af-footer__col-links">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-ul">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/farmers">Farmers</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* 4. NEWSLETTER */}
          <div className="af-footer__col-cta">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="newsletter-text">Stay updated with the latest in Agri-Tech.</p>
            <form className="footer-news-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit"><Send size={18} /></button>
            </form>
            <div className="footer-info-compact">
              <div className="info-item"><Mail size={16} /> <span>info@agrofusion.com</span></div>
              <div className="info-item"><Phone size={16} /> <span>+91 98765 43210</span></div>
            </div>
          </div>

        </div>
      </div>


    </footer>
  );
};

export default Footer;