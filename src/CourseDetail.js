import React from "react";
import { useParams } from "react-router-dom";
import "./CourseDetail.css";

export default function CourseDetail() {
  const { id } = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <h2>Course Detail Page</h2>
      <p>Course ID: {id}</p>
    </div>
  );
}
