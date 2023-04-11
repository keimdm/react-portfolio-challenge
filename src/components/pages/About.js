import React from 'react';
import pic from "../../assets/profile-pic.png";

function About() {
  return (
      <div className="d-flex flex-column align-items-center">
        <p>About</p>
        <img className="w-50" src={pic} alt="Profile"></img>
        <p className="text-center">
          Full stack web developer with background in chemical engineering and management consulting
        </p>
      </div>
  );
}

export default About;