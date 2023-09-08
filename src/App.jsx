import { Outlet } from 'react-router-dom'
import Nav from './components/Navbar/Nav'
import Hero from './components/Body/Hero'
import Footer from './components/Footer/Footer'

import React from 'react'
function App() {
  return (
    <>
      <Outlet />
      <Nav />
      <Hero />
      <Footer />
    </>
  )
}

export default App
