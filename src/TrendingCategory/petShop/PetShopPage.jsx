import React from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
const PetShopPage = () => {
  const images = [
    'PetshopCarousel/pet1.webp',
    'PetshopCarousel/pet2.webp',
    'PetshopCarousel/pet3.webp',
    'PetshopCarousel/pet4.webp',
    'PetshopCarousel/pet5.webp',
    'PetshopCarousel/pet6.webp',
    'PetshopCarousel/pet7.webp'
  ]

  const navigate = useNavigate()
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        <CardSection onClick={() => navigate('/petshop/Product_Detail')} />
        <CardSection onClick={() => navigate('/petshop/Product_Detail')} />
        <CardSection onClick={() => navigate('/petshop/Product_Detail')} />
        <CardSection onClick={() => navigate('/petshop/Product_Detail')} />
        <CardSection onClick={() => navigate('/petshop/Product_Detail')} />
        <CardSection onClick={() => navigate('/petshop/Product_Detail')} />
      </div>
      <Footer />
    </div>
  )
}

export default PetShopPage
