import React from "react";
import DroneHero from "./DroneHero";
import DroneServices from "./DroneServices";
import DroneFleet from "./DroneFleet";
import DroneHowItWorks from "./DroneHowItWorks";
import DroneBooking from "./DroneBooking";
import DroneFAQ from "./DroneFAQ";
import DroneCTA from "./DroneCTA";
import "./Drone.css"
const Drone = () => {
  return ( 
    <>
      <DroneHero />
      <div className="drone-bg">
      <DroneServices/>
      <DroneFleet/>
      <DroneHowItWorks/>
      <DroneBooking/>
      <DroneFAQ/>
      <DroneCTA/></div>
    </>
  );
};

export default Drone;
