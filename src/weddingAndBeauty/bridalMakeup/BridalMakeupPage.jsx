import React from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet } from 'react-router-dom'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'

const BridalMakeupPage = () => {
  const bridal = 'bridal'
  const images = [
    `${bridal}Carousel/${bridal}5.webp`,
    `${bridal}Carousel/${bridal}2.webp`,
    `${bridal}Carousel/${bridal}7.webp`,
    `${bridal}Carousel/${bridal}6.webp`,
    `${bridal}Carousel/${bridal}8.webp`
  ]

  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection />
      </div>
      <Footer />
    </div>
  )
}

export default BridalMakeupPage
