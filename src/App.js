import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';

function App() {

  const [currentPage, setCurrentPage] = useState('about-me');

  const renderPage = () => {
    if (currentPage === 'about-me') {
      return <About />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
