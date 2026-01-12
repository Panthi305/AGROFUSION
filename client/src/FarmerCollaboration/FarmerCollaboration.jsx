import CollaborationModels from "./CollaborationModels"
import FarmerCollaborationHero from "./FarmerCollaborationHero"
import FarmerFirstPhilosophy from "./FarmerFirstPhilosophy"
import TechnologyIntegrationFarmers from "./TechnologyIntegrationFarmers"
import "./FarmerCollaboration.css"
import TrainingSection from "./TrainingSection"
function FarmerCollaboration() {
    return (
        <>
            <FarmerCollaborationHero />
            <div className="ffarmer-bg">
                <FarmerFirstPhilosophy />
                <CollaborationModels />
                <TechnologyIntegrationFarmers />
                <TrainingSection />
            </div>
        </>
    )
}
export default FarmerCollaboration