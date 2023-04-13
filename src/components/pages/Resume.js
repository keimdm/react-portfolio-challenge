import React from 'react';
import resume from "../../assets/david-keim-resume.pdf";

function Resume() {
  return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3>Resume</h3>
        <p>Alternative text - include a link <a href="../../assets/david-keim-resume.pdf">to the PDF!</a></p>
        <img className="w-50" src={resume} alt="Resume"></img>
      </div>
  );
}

export default Resume;