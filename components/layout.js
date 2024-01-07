import React from 'react';
import Navbar from '../components/navbar';

const Layout = ({ children }) => {
  return (
    <div className='body'>
      <Navbar />
      <div className="">
        {children}
      </div>
    </div>
  );
};

export default Layout;

