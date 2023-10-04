import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import SearchBar from '../SearchBar'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'

const SubCategoryShoppingPage = () => {
  const category = 'b2b' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`
  ]
  return (
    <div>
      <Nav services={`Shopping`} />
      <BannerCarousel images={images} />

      <div className="mt-10 flex items-center justify-center">
        <SearchBar />
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="/onlineshoppingCarousel/frames/Frame 15.svg" alt="alt" className="mt-10" />
        <img src="/onlineshoppingCarousel/frames/Frame 8.svg" alt="alt" className="mt-10" />
        <img src="/onlineshoppingCarousel/frames/Frame 7.svg" alt="alt" className="mt-10" />
        <img src="/onlineshoppingCarousel/frames/Frame 11.svg" alt="alt" className="mt-10" />
        <img src="/onlineshoppingCarousel/frames/Frame 13.svg" alt="alt" className="mt-10" />
      </div>
      <Footer />
    </div>
  )
}

export default SubCategoryShoppingPage
