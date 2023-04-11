import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className="d-flex flex-row justify-content-center">
        <p>David Keim</p>
      </div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default Header;
