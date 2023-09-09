import React from 'react'
import Nav from './components/Navbar/Nav'
import Image from './components/Body/Carousel/Image'
import Footer from './components/Footer/Footer'
import Hero from './components/Body/Hero'

const Layout = () => {
  return (
    <div>
      <Nav />
      <Image
        image="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        customclass={'h-[40vh] w-full object-cover'}></Image>
      <Hero />

      <Footer />
    </div>
  )
}

export default Layout
