import BioCngFAQ from "./BioCngFAQ";
import BioCNGHero from "./BioCNGHero";
import BioCNGModels from "./BioCNGModels";
import BioCNGProblem from "./BioCNGProblem";
import BioCNGProcess from "./BioCNGProcess";
import EnvironmentalImpact from "./EnvironmentalImpact";
import FinalCTA from "./FinalCTA";
import QualityAssurance from "./QualityAssurance";
import TechnologyInnovation from "./TechnologyInnovation";
import "./BioCNG.css"

function BioCNG(){
    return(
        <> 
        <BioCNGHero/>
        {/* <BioCNGProblem/> */}
        <div className="bio-bg"></div>
        <BioCNGProcess/>
        <BioCNGModels/>
        <EnvironmentalImpact/>
        <TechnologyInnovation/>
        {/* <QualityAssurance/>        chaman quality */}
        <BioCngFAQ/>
        <FinalCTA/>
        </>
    );
}

export default BioCNG;