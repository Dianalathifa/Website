import React from "react";
import Footer from "./Footer";
import Coach from "./Coach"
import guitar from "../Assets/guitar.png";
import piano from "../Assets/piano.png";
import biola from "../Assets/biola.png";
import Drumstick from "../Assets/Drumstick.png";
import Trumpet from "../Assets/Trumpet.png";
import Cess from "../Assets/Cess.png";
import accordian from "../Assets/accordian.png"
import Lessons from "../Assets/Lessons.png"

const Course = () => {
  
  const courseInfoData = [
    {
      image: guitar,
      title: "Guitar",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: piano,
      title: "Piano",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: biola,
      title: "Biola",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Drumstick,
      title: "Drum",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Trumpet,
      title: "Trumpet",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Cess,
      title: "Cess",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: accordian,
      title: "Accordian",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Lessons,
      title: "Lessons",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    
    
  ];
  
  return (
    <div>
      <Coach/>
      <div className="course-section-top">
        <p className="course-primary-subheading">COURSES</p>
        <h1 className="primary-heading">Browse Online Courses</h1>
      </div>
      <div className="course-section-bottom">
        {courseInfoData.map((data) => (
          <div className="course-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Course;
