// About.jsx
import React from "react";
import { AboutStyle } from "./aboutstyle";

function About() {
  return (
    <AboutStyle>
      <div className="body">
        <h2 className="heading">A Symbol of Excellence in Placement Training</h2>
        <p className="paragraph">
          Aptitude Guru Hem was born from the aspiration to create a learning
          environment that inspires greatness. Our founder, driven by personal
          experiences and a desire to make a difference, established the company
          with a mission to empower students with the right skills and mindset
          for success.
        </p>

        <div className="body2">
          <div className="seconddiv">
            <h1 className="heading2">Our Vision</h1>
            <p className="secondpara">
              Our vision is to empower individuals from diverse backgrounds to
              become accomplished professionals. At Aptitude Guru Hem, we
              believe that knowledge has the power to transcend boundaries.
            </p>
          </div>

          <div className="divider"></div>
          <div className="seconddiv">
            <h1 className="heading3">Our Mission</h1>
            <p className="secondpara">
              Our mission is to revolutionize education by providing
              comprehensive training in aptitude, coding, and web/mobile
              development. We foster a culture of inclusivity and personal
              growth.
            </p>
          </div>
        </div>
      </div>
    </AboutStyle>
  );
}

export default About;