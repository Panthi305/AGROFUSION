import { useState } from "react";
import {
  ShieldCheck, Cpu, Globe2, Container, Zap, Sprout
} from "lucide-react";
import "./EcosystemAdvantage.css";

const EcosystemAdvantage = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const subsidiaries = [
    { name: "Jigisha Green", desc: "Renewable energy infrastructure and sustainable power systems.", icon: ShieldCheck, color: "#2d6a4f" },
    { name: "Jigisha Infotech", desc: "Next-gen enterprise resource planning and digital architecture.", icon: Cpu, color: "#40916c" },
    { name: "Jigisha International", desc: "Global trade facilitation and strategic cross-border partnerships.", icon: Globe2, color: "#52b788" },
    { name: "Jigisha Logistics", desc: "Advanced cold-chain management and supply chain synchronization.", icon: Container, color: "#95d5b2" },
    { name: "Jigisha Bio-Energy", desc: "Circular economy initiatives and carbon-neutral energy conversion.", icon: Zap, color: "#74c69d" },
    { name: "Jigisha Agri Inputs", desc: "High-yield bio-organic inputs and scientific crop protection.", icon: Sprout, color: "#1b4332" },
  ];

  return (
    <section className="af-ecosystem">
      <div className="af-ecosystem__container">
        <header className="af-ecosystem__header">
          <h2 className="af-ecosystem__title">Jigisha Group Ecosystem</h2>
          <p className="af-ecosystem__description">
            Agro Fusion leverages the collective strength of the Jigisha Group,
            integrating every vertical of the agricultural value chain.
          </p>
        </header>

        <div className="af-ecosystem__layout">
          {/* Left Side */}
          <div className="af-ecosystem__side side--left">
            {subsidiaries.slice(0, 3).map((item, idx) => (
              <LabelItem key={idx} item={item} isActive={hoveredItem?.name === item.name} onHover={setHoveredItem} />
            ))}
          </div>

          {/* Central Chart */}
          <div className="af-ecosystem__visual">
            <svg viewBox="0 0 200 200" className="af-ecosystem__svg">
              <defs>
                {subsidiaries.map((item, i) => (
                  <linearGradient key={i} id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={item.color} />
                    <stop offset="100%" stopColor={item.color} stopOpacity="0.8" />
                  </linearGradient>
                ))}
              </defs>

              {subsidiaries.map((item, i) => {
                const angleStep = 360 / subsidiaries.length;
                const startAngle = i * angleStep - 90;
                const endAngle = startAngle + angleStep;
                const polarToCartesian = (angle, radius) => {
                  const rad = (angle * Math.PI) / 180;
                  return { x: 100 + radius * Math.cos(rad), y: 100 + radius * Math.sin(rad) };
                };

                const p1 = polarToCartesian(startAngle, 90);
                const p2 = polarToCartesian(endAngle, 90);
                const iconPos = polarToCartesian(startAngle + angleStep / 2, 65);
                const Icon = item.icon;

                return (
                  <g key={i}
                    className={`af-ecosystem__group ${hoveredItem?.name === item.name ? "active" : ""}`}
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}>
                    <path
                      d={`M 100 100 L ${p1.x} ${p1.y} A 90 90 0 0 1 ${p2.x} ${p2.y} Z`}
                      fill={`url(#grad-${i})`}
                      className="af-ecosystem__path"
                    />
                    <g transform={`translate(${iconPos.x - 10}, ${iconPos.y - 10})`}>
                      <Icon size={20} color="white" strokeWidth={2} />
                    </g>
                  </g>
                );
              })}
              <circle cx="100" cy="100" r="35" fill="white" />
            </svg>

            <div className={`af-ecosystem__center-text ${hoveredItem ? "visible" : ""}`}>
              {hoveredItem?.name}
            </div>
          </div>

          {/* Right Side */}
          <div className="af-ecosystem__side side--right">
            {subsidiaries.slice(3, 6).map((item, idx) => (
              <LabelItem key={idx} item={item} isActive={hoveredItem?.name === item.name} onHover={setHoveredItem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LabelItem = ({ item, isActive, onHover }) => (
  <div
    className={`af-ecosystem__card ${isActive ? "active" : ""}`}
    onMouseEnter={() => onHover(item)}
    onMouseLeave={() => onHover(null)}
  >
    <div className="af-ecosystem__card-icon" style={{ backgroundColor: item.color }}>
      <item.icon size={20} color="white" />
    </div>
    <div className="af-ecosystem__card-info">
      <h4>{item.name}</h4>
      <p>{item.desc}</p>
    </div>
  </div>
);

export default EcosystemAdvantage;