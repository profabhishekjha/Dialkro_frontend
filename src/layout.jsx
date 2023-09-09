import React from 'react'
import Nav from './components/Navbar/Nav'
import Image from './components/Body/Carousel/Image'
import Footer from './components/Footer/Footer'
import Hero from './components/Body/Hero'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
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
