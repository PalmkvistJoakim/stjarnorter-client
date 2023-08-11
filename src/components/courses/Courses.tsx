import BackgroundWithDescription from "../common/backgroundWithDescription/BackgroundWithDescription";
import "./Courses.css";
import CoursesAboutOwner from "./coursesAboutOwner/CoursesAboutOwner";
import CoursesAll from "./coursesAll/CoursesAll";

function Courses() {
  const coursesDescription = {
    label: "Kurser",
    description:
      "Jag har även kurser, bara så du vet. blabllalblalblalblfnjsnjsnfjsn fdnsfnsjlf ndsjf ndsjf nsdjkfn sdjkfn sdjkfn sdjkfn djkfns jkfnd sjdkfn jkl",
    img: "images/MensesCrampEliminator_1800x1200.webp",
  };

  return (
    <div className="courses">
      <BackgroundWithDescription
        label={coursesDescription.label}
        description={coursesDescription.description}
        img={coursesDescription.img}
      />
      <CoursesAboutOwner />
      <CoursesAll />
    </div>
  );
}

export default Courses;
