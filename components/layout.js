import React from 'react'
import Navbar from "../components/navbar";

const Layout = ({children}) => {
  return (
    <div>
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
