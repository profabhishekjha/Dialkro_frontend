import React from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
const GymPage = () => {
  const images = [
    'GymCarousel/gym1.webp',
    'GymCarousel/gym2.webp',
    'GymCarousel/gym3.webp',
    'GymCarousel/gym4.webp',
    'GymCarousel/gym5.webp',
    'GymCarousel/gym6.webp'
  ]

  const navigate = useNavigate()
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        <CardSection onClick={() => navigate('/gym/Product_Detail')} />
        <CardSection onClick={() => navigate('/gym/Product_Detail')} />
        <CardSection onClick={() => navigate('/gym/Product_Detail')} />
        <CardSection onClick={() => navigate('/gym/Product_Detail')} />
        <CardSection onClick={() => navigate('/gym/Product_Detail')} />
        <CardSection onClick={() => navigate('/gym/Product_Detail')} />
      </div>
      <Footer />
    </div>
  )
}

export default GymPage
