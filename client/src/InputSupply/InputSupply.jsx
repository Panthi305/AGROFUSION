import CropCarePortfolio from "./CropCarePortfolio";
import DistributionNetwork from "./DistributionNetwork";
import FertilizerPortfolio from "./FertilizerPortfolio";
import InputSupplyCTA from "./InputSupplyCTA";
import InputSupplyFAQ from "./InputSupplyFAQ";
import InputSupplyHero from "./InputSupplyHero";
import OrganicFarmingPortfolio from "./OrganicFarmingPortfolio";
import SeedsPortfolio from "./SeedsPortfolio";

function InputSupply(){
    return(
        <>
        <InputSupplyHero/> 
        <SeedsPortfolio/>
        <FertilizerPortfolio/>
        <CropCarePortfolio/>
        <OrganicFarmingPortfolio/>
        <DistributionNetwork/>
        <InputSupplyFAQ/>
        <InputSupplyCTA/>
        </>
    );
}

export default InputSupply;