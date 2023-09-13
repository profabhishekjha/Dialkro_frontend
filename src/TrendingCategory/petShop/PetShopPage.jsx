import React from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
const PetShopPage = () => {
  const images = [
    'Hero_pg1/Trending/PetshopCarousel/pet1.webp',
    'Hero_pg1/Trending/PetshopCarousel/pet2.webp',
    'Hero_pg1/Trending/PetshopCarousel/pet3.webp',
    'Hero_pg1/Trending/PetshopCarousel/pet4.webp',
    'Hero_pg1/Trending/PetshopCarousel/pet5.webp',
    'Hero_pg1/Trending/PetshopCarousel/pet6.webp',
    'Hero_pg1/Trending/PetshopCarousel/pet7.webp'
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
