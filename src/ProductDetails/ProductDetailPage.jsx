import React from 'react'
import Image from '../components/Body/Carousel/Image'
import Footer from '../components/Footer/Footer'
import Hero_pg2 from './Hero_pg2'
import Nav from '../components/Navbar/Nav'

const ProductDetailPage = () => {
  return (
    <div>
      <Nav />
      <Image
        image="/Hero_pg1/Popular/banner.webp"
        customclass={'h-[40vh] w-full object-cover'}></Image>
      <Hero_pg2 />
      <Footer />
    </div>
  )
}

export default ProductDetailPage
