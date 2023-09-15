import React from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
const HostelsPage = () => {
  const images = [
    'HostelCarousel/hostel1.webp',
    'HostelCarousel/hostel2.webp',
    'HostelCarousel/hostel3.webp',
    'HostelCarousel/hostel4.webp',
    'HostelCarousel/hostel5.webp'
  ]
  const navigate = useNavigate()
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        <CardSection onClick={() => navigate('/hostels/Product_Detail')} />
        <CardSection onClick={() => navigate('/hostels/Product_Detail')} />
        <CardSection onClick={() => navigate('/hostels/Product_Detail')} />
        <CardSection onClick={() => navigate('/hostels/Product_Detail')} />
        <CardSection onClick={() => navigate('/hostels/Product_Detail')} />
        <CardSection onClick={() => navigate('/hostels/Product_Detail')} />
      </div>
      <Footer />
    </div>
  )
}

export default HostelsPage
