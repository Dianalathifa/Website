import React from "react";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
    <div className="about-section-container">
      <div className="about-background-image-container">
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          What Will Learn?
        </h1>
        <p className="primary-text">
          o   Introduction to Musical Instrument
        </p>
        <p className="primary-text">
          o   Method of Use
        </p>
        <p className="primary-text">
          o   Music playing technique
        </p>
        <p className="primary-text">
          o   Chord Music
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          
        </div>        
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default About;
