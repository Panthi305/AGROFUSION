import InstallationProcess from "./InstallationProcess";
import InternationalOperations from "./InternationalOperations";
import IrrigationSolutions from "./IrrigationSolutions";
import SolarHero from "./SolarHero";
import SolarIrrigationCTA from "./SolarIrrigationCTA";
import SolarIrrigationFAQ from "./SolarIrrigationFAQ";
import SolarPartnership from "./SolarPartnership";
import SolarPumpSolutions from "./SolarPumpSolutions";
import SustainabilityImpact from "./SustainabilityImpact";

function Solar() {
    return (<>
        <SolarHero/>
        <SolarPartnership/>
        <SolarPumpSolutions/>
        <IrrigationSolutions/>
        <InstallationProcess/>
        {/* <SustainabilityImpact/> */}
        {/* <InternationalOperations/> */}
        <SolarIrrigationFAQ/>
        <SolarIrrigationCTA/>
    </>);
}

export default Solar;