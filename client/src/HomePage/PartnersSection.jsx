import React from "react";
import "./PartnersSection.css";

// Import all images from folder
const companyImages = import.meta.glob(
    "/src/assets/all_company/*.{png,jpg,jpeg,svg,webp}",
    { eager: true }
);

// Process images into an array
const companies = Object.keys(companyImages).map((path) => {
    const image = companyImages[path].default;
    const fileName = path.split("/").pop().split(".")[0];
    const companyName = fileName
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

    return { src: image, name: companyName };
});

// Triple duplication ensures smooth scrolling even on huge screens
const infiniteLogos = [...companies, ...companies, ...companies];

const PartnersSection = () => {
    return (
        <section className="hp-partners-section" id="partners">
            <div className="hp-partners-container">
                {/* Header */}
                <div className="hp-partners-header">
                    <span className="hp-title-prefix">
                        Jigisha Group Ecosystem Partners
                    </span>
                </div>

                {/* Infinite Scroll Track */}
                <div className="hp-scroll-window">
                    {/* We animate this track */}
                    <div className="hp-scroll-track">
                        {infiniteLogos.map((company, index) => (
                            <div className="hp-logo-item" key={index}>
                                <img
                                    src={company.src}
                                    alt={company.name}
                                    loading="lazy"
                                    className="hp-logo-img"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;