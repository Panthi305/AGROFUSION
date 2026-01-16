
import Hero from "./Hero";
// import MissionVision from "./MissionVision";
import StrategicPillars from "./StrategicPillars";
import EcosystemAdvantage from "./EcosystemAdvantage";
import ImpactStats from "./ImpactStats";
import FarmerModels from "./FarmerModels";
import TechnologyBackbone from "./TechnologyBackbone";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import "./HomePage.css";
import PartnersSection from "./PartnersSection";
import JaiKissanSection from "./JaiKissanSection";
function HomePage() {
    return (
        <>

            <Hero />
            <div className="hhome-bg">
                <PartnersSection />
                {/* <MissionVision/> */}
                <StrategicPillars />
                <EcosystemAdvantage />
                <JaiKissanSection />
                <ImpactStats />
                <FarmerModels />
                <TechnologyBackbone />
                <Testimonials />
            </div>
            <CTA />

        </>
    );
}

export default HomePage