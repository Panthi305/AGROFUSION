import AgriFinanceFAQ from "./AgriFinanceFAQ";
import AgriFinanceFinalCTA from "./AgriFinanceFinalCTA";
import AgriFinanceHero from "./AgriFinanceHero";
import AgriFinancePartnership from "./AgriFinancePartnership";
import CreditLoanProducts from "./CreditLoanProducts";
import FinancialAdvisory from "./FinancialAdvisory";
import InsuranceProducts from "./InsuranceProducts";
import RiskManagement from "./RiskManagement";

function AgriFinance(){
    return(
        <> 
        <AgriFinanceHero/>
        <AgriFinancePartnership/>
        <CreditLoanProducts/>
        <InsuranceProducts/>
        <FinancialAdvisory/>
        {/* <RiskManagement/> */}
        {/* <AgriFinanceFAQ/> */}
        {/* <AgriFinanceFinalCTA/> */}
        </>
    );
}
export default AgriFinance;