import "./CoursesSingle.css";
import { ICourse } from "../../../../interfaces/ICourse";
import { useState } from "react";

interface CoursesSingleProps {
  course: ICourse;
}

function CoursesSingle({ course }: CoursesSingleProps) {
  const {
    name,
    date,
    location,
    book,
    description,
    price,
    notes,
    img,
    backgroundColor,
    color,
  } = course;
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  const isDone =
    name === "Regndroppsterapi" ||
    name === "Naturlig Djurfriskvård" ||
    name === "Den vilda trädgården" ||
    name === "Yoga och vandring med ätbara vilda växter";

  const handleBook = () => {
    if (location === "Färlöv, (på min gård)") {
      window.location.href = `mailto:${book}`;
    } else {
      window.open(book, "_blank");
    }
  };

  return (
    <div className={`courses-single ${isDone && "overlay"}`}>
      <img src={img} />
      <div
        className="courses-single-container"
        style={{
          backgroundColor: backgroundColor,
          color: color,
          padding: readMore ? "10px" : "",
        }}
      >
        <h1
          style={{
            marginBottom: "12px",
          }}
        >
          {name}
        </h1>
        <div className="courses-single-info">
          <p style={{ fontWeight: "bold" }}>Datum:</p>
          <p>{date}</p>
        </div>
        <div className="courses-single-info">
          <p style={{ fontWeight: "bold" }}>Plats:</p>
          <p>{location}</p>
        </div>
        <p style={{ fontWeight: "bold", marginTop: "6px" }}>Om kursen:</p>
        <p
          className="courses-single-description"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: readMore ? "inherit" : 4,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>
        <div className="courses-single-button">
          {readMore ? (
            <button onClick={handleBook}>Boka</button>
          ) : (
            <button onClick={toggleReadMore}>Läs mer och boka</button>
          )}
        </div>
        <div className="courses-single-price">
          <h1>{price}</h1>
          <p>{notes}</p>
        </div>
      </div>
    </div>
  );
}

export default CoursesSingle;
