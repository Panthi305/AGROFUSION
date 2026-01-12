import AgroPortfolioOverview from "./AgroPortfolioOverview";
import AgroProductHero from "./AgroProductHero";
import BioCngRenewablePortfolio from "./BioCngRenewablePortfolio";
import FertilizerPortfolio from "./FertilizerPortfolio";
import FinalAgriCTA from "./FinalAgriCTA";
import MachineryPortfolio from "./MachineryPortfolio";
import OrganicPortfolio from "./OrganicPortfolio";
import PrecisionTechPortfolio from "./PrecisionTechPortfolio";
import SeedsPortfolio from "./SeedsPortfolio";

function Products(){
    return(
        <>
        <AgroProductHero/>
        <AgroPortfolioOverview/>
        <SeedsPortfolio/>
        <FertilizerPortfolio/>
        <OrganicPortfolio/>
        <MachineryPortfolio/>
        <PrecisionTechPortfolio/>
        <BioCngRenewablePortfolio/>
        <FinalAgriCTA/>
        </>
    );
}
export default Products;