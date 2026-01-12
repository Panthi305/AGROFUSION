
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
function HomePage() {
    return (
        <>

            <Hero />
            <div className="hhome-bg">
                {/* <MissionVision/> */}
                <StrategicPillars />
                <EcosystemAdvantage />
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