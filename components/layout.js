import React from 'react'
import Navbar from "../components/navbar";

const Layout = ({children}) => {
  return (
    <div className='body'>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout