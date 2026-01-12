import FinalCTA from "./FinalCTA";
import HowItWorks from "./HowItWorks";
import ResearchDevelopment from "./ResearchDevelopment";
import SoilProblemSection from "./SoilProblemSection";
import SoilTestingFAQ from "./SoilTestingFAQ";
import SoilTestingHero from "./SoilTestingHero";
import SoilTestingPackages from "./SoilTestingPackages";
import WhatWeTest from "./WhatWeTest";


function SoilTesting(){
    return( 
        <>
        <SoilTestingHero/>

        <SoilProblemSection/>

        <SoilTestingPackages/>

        <HowItWorks/>

        <WhatWeTest/>

        <ResearchDevelopment/>
        <SoilTestingFAQ/>
        {/* <FinalCTA/> */}
        </>
    );
}

export default SoilTesting;