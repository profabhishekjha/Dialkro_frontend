import React from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Image from '../../components/Body/Carousel/Image'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
const DentistPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <Image
        image="/Hero_pg1/Popular/banner.webp"
        customclass={'h-[40vh] w-full object-cover'}></Image>
      <div className=" my-5 grid  items-center justify-center gap-5">
        <CardSection onClick={() => navigate('/dentist/Product_Detail')} />
        <CardSection onClick={() => navigate('/dentist/Product_Detail')} />
        <CardSection onClick={() => navigate('/dentist/Product_Detail')} />
        <CardSection onClick={() => navigate('/dentist/Product_Detail')} />
        <CardSection onClick={() => navigate('/dentist/Product_Detail')} />
        <CardSection onClick={() => navigate('/dentist/Product_Detail')} />
      </div>
      <Footer />
    </div>
  )
}

export default DentistPage
