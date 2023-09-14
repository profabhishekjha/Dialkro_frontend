import React from 'react'
import Nav from '../../../../components/Navbar/Nav'
import Footer from '../../../../components/Footer/Footer'
import SearchBar from '../SearchBar'
import BannerCarousel from '../../../../components/Body/Carousel/BannerCarousel'

const SubCategoryHospitalPage = () => {
  const category = 'hospital' // Category name
  const images = [
    `Hero_pg1/Popular/${category}Carousel/${category}1.webp`,
    `Hero_pg1/Popular/${category}Carousel/${category}2.webp`,
    `Hero_pg1/Popular/${category}Carousel/${category}3.webp`,
    `Hero_pg1/Popular/${category}Carousel/${category}4.webp`
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

export default SubCategoryHospitalPage
