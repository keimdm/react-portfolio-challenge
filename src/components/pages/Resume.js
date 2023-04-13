import React from 'react';

function Resume() {
  return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3>Resume</h3>
        <object data="../../react-portfolio-challenge/tree/main/src/assets/david-keim-resume.pdf" type="application/pdf" width="100%" height="500px">
        <p>Alternative text - include a link <a href="../../react-portfolio-challenge/tree/main/src/assets/david-keim-resume.pdf">to the PDF!</a></p>
        </object>
      </div>
  );
}

export default Resume;