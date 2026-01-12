import PartnerWithUs from "./PartnerWithUs";
import ServiceDelivery from "./ServiceDelivery";
import ServiceHero from "./ServiceHero";
import ServicePhilosophy from "./ServicePhilosophy";
import ServiceVerticals from "./ServiceVerticals";
import TechnologyServices from "./TechnologyServices";

function ServicePage(){
    return(
        <>
        <ServiceHero/>
        <ServicePhilosophy/> 
        <ServiceVerticals/>
        <ServiceDelivery/>
        <TechnologyServices/>
        <PartnerWithUs/>
        </>
    );
}

export default ServicePage