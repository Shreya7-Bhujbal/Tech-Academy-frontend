import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import CourseDetail from "./CourseDetail";
import Enroll from "./Enroll";
import MyEnrollments from "./MyEnrollments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/enroll/:id" element={<Enroll />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
      </Routes>
    </Router>
  );
}

export default App;
