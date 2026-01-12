import EquipmentCategories from "./EquipmentCategories";
import FAQSection from "./FAQSection";
import FarmMechanizationHero from "./FarmMechanizationHero";
import FinalCTA from "./FinalCTA";
import HowMaaSWorks from "./HowMaaSWorks";
import RentalPurchaseCalculator from "./RentalPurchaseCalculator";
import SafetyInsurance from "./SafetyInsurance";

function FarmMechanization(){
    return(
        <>
        <FarmMechanizationHero/> 
        <EquipmentCategories/>
        
        {/* <RentalPurchaseCalculator/> */}
        <HowMaaSWorks/>
        <SafetyInsurance/>

        <FAQSection/>
        <FinalCTA/>
        </>
    )
    ;
}

export default FarmMechanization