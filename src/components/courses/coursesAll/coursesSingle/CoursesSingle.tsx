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
    description,
    price,
    notes,
    img,
    backgroundColor,
    color,
  } = course;

  return (
    <div className="courses-single">
      <img src={img} />
      <div
        className="courses-single-container"
        style={{ backgroundColor: backgroundColor, color: color }}
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
        <p className="courses-single-description">{description}</p>
        <div className="courses-single-price">
          <h1>{price}</h1>
          <p>{notes}</p>
        </div>
      </div>
    </div>
  );
}

export default CoursesSingle;
