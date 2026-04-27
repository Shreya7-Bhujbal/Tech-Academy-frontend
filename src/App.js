
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import CourseDetail from "./CourseDetail";
import MyEnrollments from "./MyEnrollments";
import Enroll from "./Enroll";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<CourseDetail />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
    </Router>
  );
}

export default App;
