import BackgroundWithDescription from "../common/backgroundWithDescription/BackgroundWithDescription";
import "./Courses.css";
import CoursesAll from "./coursesAll/CoursesAll";
import { useEffect } from "react";

function Courses() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coursesDescription = {
    label: "Kurser",
    description:
      "Utforska vägen till ökad medvetenhet, balans och hälsa genom våra inspirerande kurser och workshops. Vi håller till på vackra platser som gården, Ecotopia på Österlen och Grevlunda Yoga i Vitaby. Oavsett om du är nybörjare eller vill fördjupa din kunskap, är du välkommen att utforska den spännande världen av helande och välmående med oss.",
    img: "images/MensesCrampEliminator_1800x1200.jpg",
  };

  return (
    <div className="courses">
      <BackgroundWithDescription
        label={coursesDescription.label}
        description={coursesDescription.description}
        img={coursesDescription.img}
      />
      <CoursesAll />
    </div>
  );
}

export default Courses;
