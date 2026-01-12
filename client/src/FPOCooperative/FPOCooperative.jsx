import CooperativeSocietyEngagement from "./CooperativeSocietyEngagement";
import CooperativeSocietyEngagementSection from "./CooperativeSocietyEngagementSection";
import FPOCooperativeHero from "./FPOCooperativeHero";
import FPODevelopmentServices from "./FPODevelopmentServices";
import FPOFinalCTA from "./FPOFinalCTA";
import InstitutionalFramework from "./InstitutionalFramework";
import PostHarvestValueChain from "./PostHarvestValueChain";

function FPOCooperative(){
    return(
        <>
        <FPOCooperativeHero/>
        <InstitutionalFramework/>
        <FPODevelopmentServices/>
        <CooperativeSocietyEngagement/>
        <CooperativeSocietyEngagementSection/>
        <PostHarvestValueChain/>
        <FPOFinalCTA/>
        </>
    );
}

export default FPOCooperative