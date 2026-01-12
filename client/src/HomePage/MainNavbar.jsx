import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./MainNavbar.css";
// import "./Navigation.media.css"

export default function Navigation() {

    const navigate = useNavigate();
    const navRef = useRef(null); // Ref for outside click detection

    const [mobileOpen, setMobileOpen] = useState(false);
    const [desktopMain, setDesktopMain] = useState(null);
    const [desktopSub, setDesktopSub] = useState(null);
    const [mobileMain, setMobileMain] = useState(null);
    const [mobileSub, setMobileSub] = useState(null);

    const menus = [
        {
            title: "About Us",
            children: [
                {
                    title: "Group Companies",
                    submenu: [
                        "JIGISHA INDUSTRIAL SERVICES Pvt. Ltd.",
                        "JIGISHA ENVIROCARE Pvt. Ltd.",
                        "JIGISHA TECHNOLOGIES Pvt. Ltd.",
                        "JIGISHA INDUSTRIES Pvt. Ltd.",
                        "JIGISHA ENGINEERING Pvt. Ltd.",
                        "JIGISHA AUTOMOBILES Pvt. Ltd.",
                        "JIGISHA INFRA Pvt. Ltd.",
                        "JIGISHA DEFENSE TECHNOLOGIES Pvt. Ltd.",
                        "JIGISHA INFIN Pvt. Ltd.",
                        "JIGISHA PHARMA & HEALTHCARE Pvt. Ltd.",
                        "JIGISHA LOGISTICS Pvt. Ltd.",
                        "JIGISHA AGRO INDUSTRIES Pvt. Ltd.",
                        "JIGISHA ELECTRICALS & ELECTRONICS Pvt. Ltd.",
                        "JIGISHA RAILTECH Pvt. Ltd.",
                        "JIGISHA RETAILS Pvt. Ltd.",
                        "Jigisha Media Vision Pvt. Ltd.",
                        "Jigisha Infotech Pvt. Ltd.",
                        "Jigisha Green Pvt. Ltd.",
                        "JIGISHA INTERNATIONAL Pvt. Ltd."
                    ]
                },
                {
                    title: "Group Businesses",
                    submenu: [
                        "Agro Industry",
                        "Advertising",
                        "Agrofusion",
                        "Automobiles",
                        "Collaboration",
                        "Contract Manufacturing",
                        "Defence Technology",
                        "E-commerce",
                        "Electricals",
                        "Electronics",
                        "Engineering",
                        "Green Fuel Tech",
                        "ICMBRO",
                        "Industrial Supply",
                        "Infra",
                        "Insurance & Finance (TPC)",
                        "IT & Infotech",
                        "Join Venture",
                        "News & Media",
                        "Our Infrastructure",
                        "Outsourcing",
                        "Pharma & Healthcare",
                        "Railway & Metro",
                        "Retails",
                        "Shipping & Logistics",
                        "Technology",
                        "International Business"
                    ]
                },
                {
                    title: "Corporate Information",
                    submenu: [
                        "Our Mission",
                        "Our Vision",
                        "Our Way",
                        "Our Client",
                        "Our Values",
                        "Our Core Benefits",
                        "Our Strategy",
                        "Infrastructure",
                        "Our Team",
                        "Corporate Social Responsibility",
                        "Corporate Philosophy",
                        "Investor Relationship"
                    ]
                },
                {
                    title: "Policies",
                    submenu: [
                        "Privacy Policy",
                        "Terms & Conditions",
                        "Refund Policy"
                    ]
                },
            ],
        },
        {
            title: "Parts & Products",
            children: [
                {
                    title: "Agricultural & Raw Materials",
                    submenu: [
                        "Agriculture Products",
                        "Industrial Raw Material",
                        "Envirocare",
                        "Metro Train Products",
                        "Industrial Products",
                        "Commercial Products",
                        "Domestic Products",
                        "Pharma & Healthcare"
                    ]
                },
                {
                    title: "Automobiles & Heavy Equipment",
                    submenu: [
                        "Industrial Automobiles",
                        "Commercial Automobiles",
                        "Domestic Automobiles",
                        "Earthmovers & Mining Products",
                        "Industrial Electrical Products",
                        "Commercial Electrical Products",
                        "Domestic Electrical Products"
                    ]
                },
                {
                    title: "Electronics & Technology",
                    submenu: [
                        "Industrial Electronics Products",
                        "Commercial Electronics Products",
                        "Domestic Electronics Products",
                        "IT Products",
                        "Industrial Technology & Automation",
                        "Solar Products",
                        "Large Power Production, Products & Parts",
                        "Contract Manufacturing"
                    ]
                },
            ],
        },
        {
            title: "Services",
            children: [
                {
                    title: "Core Services",
                    submenu: [
                        "Engineering Services",
                        "Agriculture",
                        "Envirocare",
                        "Metro Train",
                        "Industrial",
                        "Commercial",
                        "Domestic",
                        "Pharma & Healthcare",
                        "Industrial Automobiles",
                        "Commercial Automobiles",
                        "Domestic Automobiles",
                        "Earthmovers & Mining"
                    ]
                },
                {
                    title: "Technical Services",
                    submenu: [
                        "Industrial Electrical",
                        "Commercial Electrical",
                        "Domestic Electrical",
                        "Industrial Electronics",
                        "Commercial Electronics",
                        "Domestic Electronics",
                        "IT Services",
                        "Industrial Technology & Automation",
                        "Solar & Other Energy Sector",
                        "Large Power Production Plants"
                    ]
                },
                {
                    title: "Specialized Services",
                    submenu: [
                        "Contract Manufacturing",
                        "Services for Railway",
                        "Services for Metro Project",
                        "Railway Products",
                        "Industrial Service",
                        "Finance",
                        "Insurance",
                        "Advertising",
                        "News & Media"
                    ]
                },
            ],
        },
        {
            title: "Contact Us",
            children: [
                {
                    title: "Contact Options",
                    submenu: [
                        "Customer Care",
                        "Enquiry",
                        "Commercial Services",
                        "Vendor Support",
                        "Logistics Support",
                        "Product Support",
                        "Service Support",
                        "Advertise With Us"
                    ]
                },
                {
                    title: "Opportunities",
                    submenu: [
                        "Join Us",
                        "Career",
                        "Become A Vendor",
                        "Advertise with us"
                    ]
                },
            ],
        },
        {
            title: "Media",
            children: [
                {
                    title: "Media Resources",
                    submenu: [
                        "Downloads",
                        "News",
                        "Blogs",
                        "Certificates",
                        "Booklets",
                        "Product Brochures",
                        "Service Brochures",
                        "Warranty Cards",
                        "Product Catalogs"
                    ]
                },
            ],
        },
        {
            title: "Login",
            children: [
                {
                    title: "Login Options",
                    submenu: [
                        "Buyer Login",
                        "Employee Email Login",
                        "Vendor Login",
                        "Project Team Login"
                    ]
                },
            ],
        },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                closeAllMenus();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const closeAllMenus = () => {
        setDesktopMain(null);
        setDesktopSub(null);
        setMobileOpen(false);
    };

    const toggleDesktopMain = (i) => {
        setDesktopMain(desktopMain === i ? null : i);
        setDesktopSub(null);
    };

    const toggleMobileMain = (i) => {
        setMobileMain(mobileMain === i ? null : i);
        setMobileSub(null);
    };

    // --- Helper for Hover (Desktop Only) ---
    const handleMouseEnter = (i) => {
        if (window.innerWidth > 1024) {
            setDesktopMain(i);
            setDesktopSub(null);
        }
    };

    return (
        <nav className="navbar" ref={navRef}>
            <div className="nav-container">
                <div className="nav-inner">
                    <div className="brand">
                        <h1>Hello</h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="desktop-menu">
                        {menus.map((menu, i) => (
                            <div
                                key={menu.title}
                                className="menu-item-wrapper"
                                onMouseEnter={() => handleMouseEnter(i)}
                            >
                                <button
                                    className={`menu-btn ${desktopMain === i ? "open" : ""}`}
                                    onClick={() => toggleDesktopMain(i)}
                                >
                                    {menu.title}
                                    {menu.children.length > 0 && <ChevronDown size={16} />}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="nav-contact">
                        <button className="nav-btn">
                            <span className="nav-btn-text">Get started</span>
                            <span className="nav-btn-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.6rem" height="1.6rem" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                        d="M8 12h8m0 0l-3.5-3.5M16 12l-3.5 3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => {
                            setMobileOpen(!mobileOpen);
                            setMobileMain(null);
                            setMobileSub(null);
                        }}
                    >
                        {mobileOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Desktop Mega Menu */}
            {desktopMain !== null && menus[desktopMain].children.length > 0 && (
                <div
                    className="mega-menu"
                    onMouseLeave={() => setDesktopMain(null)} // Closes when mouse leaves the mega area
                >
                    <div className="mega-inner">
                        <div className="mega-left">
                            {menus[desktopMain].children.map((item, idx) => (
                                <button
                                    key={item.title}
                                    className={`mega-btn ${desktopSub === idx ? "active" : ""}`}
                                    onMouseEnter={() => setDesktopSub(idx)} // Hover over categories
                                    onClick={() => setDesktopSub(idx)}
                                >
                                    {item.title}
                                    <ChevronRight size={16} />
                                </button>
                            ))}
                        </div>

                        <div className="mega-right">
                            {desktopSub !== null && (
                                <div className="mega-right-grid">
                                    {menus[desktopMain].children[desktopSub].submenu.map((sub) => {
                                        const slug = sub.toLowerCase().replace(/\s+/g, "-");
                                        return (
                                            <div
                                                key={sub}
                                                className="mega-item"
                                                onClick={() => {
                                                    navigate(`/preview/${slug}`);
                                                    closeAllMenus(); // Close after navigation
                                                }}
                                            >
                                                {sub}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="mobile-menu">
                    {menus.map((menu, i) => (
                        <div key={menu.title} className="mobile-section">
                            <button
                                className="mobile-main-btn"
                                onClick={() => toggleMobileMain(i)}
                            >
                                {menu.title}
                                {menu.children.length > 0 && <ChevronDown />}
                            </button>

                            {mobileMain === i &&
                                menu.children.map((child, idx) => (
                                    <div key={child.title} className="mobile-sub">
                                        <button
                                            className="mobile-sub-btn"
                                            onClick={() =>
                                                setMobileSub(mobileSub === idx ? null : idx)
                                            }
                                        >
                                            {child.title}
                                            <ChevronDown size={14} />
                                        </button>

                                        {mobileSub === idx && (
                                            <div className="mobile-items">
                                                {child.submenu.map((s) => (
                                                    <div key={s}>{s}</div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
}