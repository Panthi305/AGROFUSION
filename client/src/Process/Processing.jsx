import FPOInternationalEngagement from "./FPOInternationalEngagement";
import MarketLinkageServices from "./MarketLinkageServices";
import ProcessingCTA from "./ProcessingCTA";
import ProcessingFAQ from "./ProcessingFAQ";
import ProcessingHero from "./ProcessingHero";
import ProcessingInfrastructure from "./ProcessingInfrastructure";
import ProcessingOperations from "./ProcessingOperations";
import ValueChainIntegration from "./ValueChainIntegration";

function Processing() {
    return (
        <>
            <ProcessingHero />
            <ProcessingInfrastructure/> 
            <ProcessingOperations/>
            <MarketLinkageServices/>
            <ValueChainIntegration/>
            <FPOInternationalEngagement/>
            <ProcessingFAQ/>
            <ProcessingCTA/>
        </>
    );
}

export default Processing;