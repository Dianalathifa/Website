import React ,{ useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Course from "./Components/Course";
import Coach from "./Components/Coach";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/Coach" element={<Coach />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
