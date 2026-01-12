
import AboutHero from "./AboutHero";
import CoreValues from "./CoreValues";
import JigishaAdvantage from "./JigishaAdvantage";
import JoinMission from "./JoinMission";
import LeadershipTeam from "./LeadershipTeam";
import MissionVision from "./MissionVision";
import Partners from "./Partners";
import WhoWeAre from "./WhoWeAre";
import WhyChoose from "./WhyChoose";


function AboutPage(){
    return( 
        <>
        <AboutHero/> 
        <WhoWeAre/>
        <MissionVision/>
        <CoreValues/>
        {/* <JigishaAdvantage/> */}
        <LeadershipTeam/>
        <WhyChoose/>
        {/* <Partners/> */}
        <JoinMission/>
       
        </>
    );
}

export default AboutPage