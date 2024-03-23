import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound: React.FC = () => {
  return (
    <>
    <Header/>
      <div className='wrapper column'>
        <h1>404 - Not Found</h1>
        <p className='headline'>The page you are looking for does not exist.</p>
      </div>
      <Footer/>
    </>
  );
};

export default NotFound;
