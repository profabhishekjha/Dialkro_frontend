import React from 'react'
import Nav from '../components/Navbar/Nav'
import { Outlet } from 'react-router-dom'
import Image from '../components/Body/Carousel/Image'
import Footer from '../components/Footer/Footer'
import CardSection from './components/cardSection'
import { Toaster } from 'react-hot-toast'
const ListPage = () => {
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <Image
        image="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        customclass={'h-[40vh] w-full object-cover'}></Image>
      <div className="my-5 grid items-center justify-center gap-5">
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

export default ListPage
