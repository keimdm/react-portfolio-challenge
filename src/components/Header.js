import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <div>
      <div className="d-flex flex-row justify-content-center">
        <p>David Keim</p>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
