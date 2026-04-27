import React from "react";
import CourseCard from "./CourseCard";

export default function Home() {
  const dummyCourse = {
    _id: "1",
    title: "MERN Stack Bootcamp",
    description: "Learn full stack development with MongoDB, Express, React, Node",
    instructor: "John Doe",
    duration: "10 weeks",
    rating: 4.8,
    studentsEnrolled: 1200,
    price: 4999,
    category: "Full Stack",
    level: "Beginner",
    isFeatured: true,
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Welcome to Tech Academy 🚀</h1>
      <p>Learn MERN Stack, APIs, and more.</p>

      <h2>Courses</h2>
      <CourseCard course={dummyCourse} />
    </div>
  );
}
