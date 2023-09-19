import React from 'react'
import Nav from '../../../../components/Navbar/Nav'
import Footer from '../../../../components/Footer/Footer'
import SearchBar from '../SearchBar'
import BannerCarousel from '../../../../components/Body/Carousel/BannerCarousel'

const SubCategoryWeddingServicesPage = () => {
  const category = 'wedding'
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`,
    `${category}Carousel/${category}4.webp`
  ]
  return (
    <div>
      <Nav />
      <BannerCarousel images={images} />
      <div className="mt-10 flex items-center justify-center">
        <SearchBar />
      </div>
      <Footer />
    </div>
  )
}

export default SubCategoryWeddingServicesPage
