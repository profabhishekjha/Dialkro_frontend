import React from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
const pestControlPage = () => {
  const images = [
    'PestCarousel/pest1.webp',
    'PestCarousel/pest2.webp',
    'PestCarousel/pest3.webp',
    'PestCarousel/pest4.webp',
    'PestCarousel/pest5.webp'
  ]
  const navigate = useNavigate()
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        <CardSection onClick={() => navigate('/pestControl/Product_Detail')} />
        <CardSection onClick={() => navigate('/pestControl/Product_Detail')} />
        <CardSection onClick={() => navigate('/pestControl/Product_Detail')} />
        <CardSection onClick={() => navigate('/pestControl/Product_Detail')} />
        <CardSection onClick={() => navigate('/pestControl/Product_Detail')} />
        <CardSection onClick={() => navigate('/pestControl/Product_Detail')} />
      </div>
      <Footer />
    </div>
  )
}

export default pestControlPage
