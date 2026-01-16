import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { preloadImages } from "../utils/imageOptimization";
import "./GroupCompanies.css";

// Header Logos
import logoGoGlobal from "./../assets/all_company/GO GLOBAL.png";
import logoJGC from "./../assets/all_company/JGC.png";

// Common "J" Logo for all entities
import commonJLogo from "./../assets/WhoWeAre/logo.png";

function GroupCompanies() {
    // Preload header logos and the common entity logo
    useEffect(() => {
        const essentials = [logoGoGlobal, logoJGC, commonJLogo];
        preloadImages(essentials);
    }, []);

    const companies = [
        { name: "JIGISHA ENTERPRISES ", category: "Corporate Hub", description: "The central strategic and financial core of the Jigisha Group conglomerate." },
        { name: "JIGISHA INTERNATIONAL PVT LTD", category: "Global Operations", description: "Managing global expansion and strategic cross-border partnerships." },
        { name: "JIGISHA RAILTECH PVT LTD", category: "Railway & Transport", description: "Providing SITC and manufacturing solutions for railway and metro networks." },
        { name: "JIGISHA DEFENSE TECHNOLOGIES PVT LTD", category: "Defense", description: "R&D and manufacturing of advanced systems for naval and land applications." },
        { name: "JIGISHA INFRA PVT LTD", category: "Infrastructure", description: "Developing large-scale EPC projects and industrial parks." },
        { name: "JIGISHA AGRO INDUSTRIES PVT. LTD", category: "Agriculture", description: "Modern agricultural solutions and sustainable waste management." },
        { name: "JIGISHA GREEN PVT LTD", category: "Renewable Energy", description: "Harnessing solar, wind, and nuclear energy for a sustainable future." },
        { name: "JIGISHA ENGINEERING PVT LTD", category: "Engineering", description: "Heavy fabrication and turnkey engineering for global power plants." },
        { name: "JIGISHA INDUSTRIES PVT LTD", category: "Manufacturing", description: "Producing heavy machinery for mission-critical sectors." },
        { name: "JIGISHA INFOTECH PVT LTD", category: "Technology", description: "IT, software development, and automation for digital transformation." },
        { name: "JIGISHA PHARMA & HEALTHCARE", category: "Healthcare", description: "Medical R&D and manufacturing of pharmaceutical infrastructure." },
        { name: "JIGISHA AUTOMOBILES PVT LTD", category: "Automotive", description: "Automotive components and electric vehicle solutions." },
        { name: "JIGISHA RETAILS PVT LTD", category: "Retail", description: "Omni-channel retail platforms for industrial marketplaces." },
        { name: "JIGISHA LOGISTICS PVT LTD", category: "Logistics", description: "Integrated supply chain and multimodal transport." },
        { name: "JIGISHA INFIN PVT LTD", category: "Finance", description: "Corporate financial advisory and risk management." },
        { name: "JIGISHA ENVIROCARE PVT LTD", category: "Environment", description: "Dedicated to water treatment and environmental sustainability." },
        { name: "JIGISHA TECHNOLOGIES PVT LTD", category: "Advanced Tech", description: "Exploring robotics and thorium energy breakthroughs." },
        { name: "JIGISHA MEDIA VISION", category: "Media", description: "Advertising, news portals, and digital branding." },
        { name: "JIGISHA INDUSTRIAL SERVICES PVT LTD", category: "Services", description: "Professional MRO and industrial compliance support." }
    ];

    const categories = ["All", ...new Set(companies.map(c => c.category))];
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filtered = companies.filter(c => {
        const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
        const matchCat = selectedCategory === "All" || c.category === selectedCategory;
        return matchSearch && matchCat;
    });

    return (
        <section className="gc-wrapper">
            <div className="gc-inner">
                {/* --- PREMIUM HEADER --- */}
                <header className="gc-prestige-header">
                    <div className="gc-header-flex">
                        <motion.img
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            src={logoGoGlobal}
                            alt="Go Global"
                            className="gc-branding-icon"
                        />
                        <div className="gc-header-center">
                            <h2 className="gc-h2">Group <span className="gc-gold">Companies</span></h2>
                        </div>
                        <motion.img
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            src={logoJGC}
                            alt="JGC"
                            className="gc-branding-icon"
                        />
                    </div>
                </header>

                {/* --- SEARCH & DROPDOWN --- */}
                <div className="gc-controls-row">
                    <div className="gc-search-box">
                        <input
                            type="text"
                            placeholder="Find a subsidiary..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="gc-filter-box">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="gc-dropdown"
                        >
                            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                    </div>
                </div>

                {/* --- UNIFORM GRID --- */}
                <motion.div layout className="gc-compact-grid">
                    <AnimatePresence>
                        {filtered.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                className="gc-mini-card"
                                key={item.name}
                            >
                                {/* UNIFORM VISUAL SECTION */}
                                <div className="gc-entity-header">
                                    <img src={commonJLogo} alt="Jigisha Group" className="gc-common-j" />
                                    <h4 className="gc-entity-name">{item.name}</h4>
                                </div>

                                <div className="gc-mini-body">
                                    <span className="gc-mini-cat">{item.category}</span>
                                    <p className="gc-mini-desc">{item.description}</p>
                                    <button className="gc-mini-btn">Explore <span>→</span></button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

export default GroupCompanies;