import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import SearchBar from '../SearchBar'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'

const SubCategoryb2bPage = () => {
  const category = 'b2b' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`
  ]
  return (
    <div>
      <Nav services={`B2B`} />
      <BannerCarousel images={images} />

      <div className="mt-10 flex items-center justify-center">
        <SearchBar />
      </div>
      <Footer />
    </div>
  )
}

export default SubCategoryb2bPage
