import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer'
import Hero from './components/Body/Hero'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from './components/Body/Carousel/BannerCarousel'
import TopBanner from './components/Body/TopBanner'

const Layout = () => {
  const location = useLocation()

  const images = [
    '/CarouselImages/doctor.webp',
    '/CarouselImages/market.webp',
    '/CarouselImages/parcel.webp',
    '/CarouselImages/resturant.webp',
    '/CarouselImages/transport.webp'
  ]
  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div>
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <TopBanner />
      <Hero />
      <Footer />
    </div>
  )
}
export default Layout
