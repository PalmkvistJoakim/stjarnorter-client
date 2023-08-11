import { getCourses } from "../../../services/courses";
import "./CoursesAll.css";
import CoursesSingle from "./coursesSingle/CoursesSingle";

function CoursesAll() {
  const courses = getCourses();

  const renderCourses = () => {
    return courses.map((course) => (
      <CoursesSingle key={course.name} course={course} />
    ));
  };
  return <div className="courses-all">{renderCourses()}</div>;
}

export default CoursesAll;
