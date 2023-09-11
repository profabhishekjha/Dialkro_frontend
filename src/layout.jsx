import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './components/Navbar/Nav'
import Image from './components/Body/Carousel/Image'
import Footer from './components/Footer/Footer'
import Hero from './components/Body/Hero'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div>
      <Toaster />
      <Nav />
      <Image
        image="/Hero_pg1/Popular/banner.webp"
        customclass={'h-[40vh] w-full object-cover'}></Image>
      <Hero />
      <Footer />
    </div>
  )
}

export default Layout
