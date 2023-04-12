import React from 'react';

function Resume() {
  return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3>Resume</h3>
        <object data="../../assets/david-keim-resume.pdf" type="application/pdf" width="100%" height="500px"></object>
      </div>
  );
}

export default Resume;