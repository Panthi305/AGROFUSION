import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Home, User, LayoutGrid, ChevronDown, Settings,
  FlaskConical, ShoppingCart, Truck, Sun,
  ShieldCheck, Users2, Briefcase, PhoneCall, Menu, X, Info
} from "lucide-react";
import "./Navbar.css";
import logo from "./../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  };

  const whoWeAreLinks = [
    {
      links: [
        { label: "Group Companies", path: "/about/company" },
        { label: "Our Mission", path: "/about/mission" },
        { label: "Our Client", path: "/about/clients" },
        { label: "Our Strategy", path: "/about/strategy" },
        { label: "CSR", path: "/about/csr" },
        { label: "Privacy Policy", path: "/about/privacy" }
      ]
    },
    {
      links: [
        { label: "Group Websites", path: "/about/website" },
        { label: "Our Vision", path: "/about/vision" },
        { label: "Our Values", path: "/about/values" },
        { label: "Infrastructure", path: "/about/infrastructure" },
        { label: "Philosophy", path: "/about/philosophy" },
        { label: "Terms & Conditions", path: "/about/terms" }
      ]
    },
    {
      links: [
        { label: "Group Businesses", path: "/about/businesses" },
        { label: "Our Way", path: "/about/our-way" },
        { label: "Core Benefits", path: "/about/benefits" },
        { label: "Our Team", path: "/about/team" },
        { label: "Investors", path: "/about/investors" },
        { label: "Refund Policy", path: "/about/refund" }
      ]
    }
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-is-open" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu} className="logo-link">
            <div className="logo-image-wrapper">
              <img src={logo} alt="AgroFusion Logo" className="navbar-logo-img" />
            </div>
            <span className="brand-name">
              Agro<span className="brand-accent">Fusion</span>
            </span>
          </Link>
        </div>

        <button className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav-menu-wrapper ${menuOpen ? "open" : ""}`}>
          <ul className="nav-menu">
            <li>
              <NavLink to="/" onClick={closeMenu} end>
                <Home size={18} /> <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>
                <User size={18} /> <span>About</span>
              </NavLink>
            </li>

            {/* WHO WE ARE / ABOUT DROPDOWN */}
            <li className={`nav-dropdown mega-dropdown ${aboutOpen ? "open" : ""}`}
              onMouseEnter={() => window.innerWidth > 992 && setAboutOpen(true)}
              onMouseLeave={() => window.innerWidth > 992 && setAboutOpen(false)}>
              <div className="services-link" onClick={() => window.innerWidth <= 992 && setAboutOpen(!aboutOpen)}>
                <User size={18} /> <span>Who We Are</span>
                <ChevronDown className={`arrow ${aboutOpen ? "up" : ""}`} size={16} />
              </div>

              <div className={`mega-menu ${aboutOpen ? "show" : ""}`}>
                <div className="mega-menu-container">
                  {whoWeAreLinks.map((column, idx) => (
                    <ul key={idx} className="mega-column">
                      {column.links.map((link) => (
                        <li key={link.path}>
                          <NavLink to={link.path} onClick={closeMenu}>{link.label}</NavLink>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </li>

            {/* SERVICES DROPDOWN */}
            <li className={`nav-dropdown ${servicesOpen ? "open" : ""}`}
              onMouseEnter={() => window.innerWidth > 992 && setServicesOpen(true)}
              onMouseLeave={() => window.innerWidth > 992 && setServicesOpen(false)}>
              <div className="services-link" onClick={() => window.innerWidth <= 992 && setServicesOpen(!servicesOpen)}>
                <LayoutGrid size={18} /> <span>Services</span>
                <ChevronDown className={`arrow ${servicesOpen ? "up" : ""}`} size={16} />
              </div>

              <ul className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>
                <li><NavLink to="/services/agri-finance" onClick={closeMenu}><ShieldCheck size={16} /> Agri Finance</NavLink></li>
                <li><NavLink to="/services/biocng" onClick={closeMenu}><Settings size={16} /> Bio CNG</NavLink></li>
                <li><NavLink to="/services/drone-farming" onClick={closeMenu}><Info size={16} /> Drone Farming</NavLink></li>
                <li><NavLink to="/services/agricultural-input" onClick={closeMenu}><ShoppingCart size={16} /> Inputs Supply</NavLink></li>
                <li><NavLink to="/services/processing-market-linkage" onClick={closeMenu}><Truck size={16} /> Market Linkage</NavLink></li>
                <li><NavLink to="/services/mechanization" onClick={closeMenu}><Settings size={16} /> Mechanization</NavLink></li>
                <li><NavLink to="/services/soil-testing" onClick={closeMenu}><FlaskConical size={16} /> Soil Testing</NavLink></li>
                <li><NavLink to="/services/solar-irrigation" onClick={closeMenu}><Sun size={16} /> Solar Irrigation</NavLink></li>
              </ul>
            </li>

            <li><NavLink to="/products" onClick={closeMenu}><Briefcase size={18} /> <span>Products</span></NavLink></li>
            <li><NavLink to="/farmers" onClick={closeMenu}><Users2 size={18} /> <span>Farmers</span></NavLink></li>

            <li className="nav-cta">
              <NavLink to="/contact" onClick={closeMenu} className="cta-button">
                <PhoneCall size={18} /> <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="nav-step-divider">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L0,80 L380,80 L440,55 L1440,55 L1440,0 Z" className="step-fill"></path>
        </svg>
      </div>
    </header>
  );
};

export default Navbar;