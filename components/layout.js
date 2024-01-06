import React from 'react';
import Navbar from '../components/navbar';

const Layout = ({ children }) => {
  return (
    <div className='body'>
      <Navbar />
      <main className='text-[12px] sm:text-base md:text-lg lg:text-xl xl:text-2xl ml-auto mr-auto w-[70%]'>
        {children}
      </main>
    </div>
  );
};

export default Layout;

