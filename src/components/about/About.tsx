import "./About.css";
import { useEffect } from "react";
import AboutCatharina from "./aboutCatharina/AboutCatharina";
import AboutFarmacy from "./aboutFarmacy/AboutFarmacy";
import AboutEcotopia from "./aboutEcotopia/AboutEcotopia";
import AboutHealth from "./aboutHealth/AboutHealth";
import AboutCourses from "./aboutCourses/AboutCourses";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const aboutDescription = {
  //   label: "Om",
  //   description:
  //     "Stjärnörter och Själens Stjärna är en oas för dem som söker naturligt välbefinnande och en plats där själen kan finna ro. Genom Catharinas breda kunskap och kärlek till örter och terapiformer skapas en värld av läkning och balans för alla som söker det bästa för sin hälsa och sitt välmående.",
  //   img: "images/MensesCrampEliminator_1800x1200.webp",
  // };

  return (
    <div className="about">
      <AboutCatharina />
      <AboutFarmacy />
      <AboutEcotopia />
      <AboutHealth />
      <AboutCourses />
    </div>
  );
}

export default About;
