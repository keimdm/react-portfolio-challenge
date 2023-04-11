import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className="d-flex flex-row justify-content-center">
        <h1>David Keim</h1>
      </div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default Header;
