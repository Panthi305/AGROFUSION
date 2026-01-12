import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./LeadershipTeam.css";
import img1 from "./../assets/About/p1.png";
import img2 from "./../assets/About/p2.png";
import img3 from "./../assets/About/p3.png";
const leadershipData = [
  {
    name: "Rajveer Singh ",
    title: "Director – Agro Fusion",
    bio: "Creative mind with future vision",
    img: img2,
  },
  {
    name: "Thakur Umesh Singh",
    title: "CEO – Agri-Tech",
    bio: "Social worker and tech leader, developer IoT, drone, and app innovation.",
    img: img3,
  },
  {
    name: "Vinod kumar Dunsua",
    title: "Director – Agri Operations",
    bio: "Expert in mechanization and supply chain management.",
    img: img1,
  },


];

const LeadershipTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="af-leadership">
      <div className="af-leadership__container">
        <div className="af-leadership__header" data-aos="fade-down">
          <h2 className="af-leadership__title">Meet the Minds Behind Agro Fusion</h2>
        </div>

        <div className="af-leadership__grid">
          {leadershipData.map((member, index) => (
            <div
              key={index}
              className="af-leadership__card"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="af-leadership__img-wrapper">
                <img
                  src={member.img}
                  alt={member.name}
                  className="af-leadership__img"
                />
              </div>
              <h3 className="af-leadership__name">{member.name}</h3>
              <p className="af-leadership__title-card">{member.title}</p>
              <p className="af-leadership__bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;