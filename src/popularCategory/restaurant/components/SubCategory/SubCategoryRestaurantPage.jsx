import React from 'react'
import Nav from '../../../../components/Navbar/Nav'
import Footer from '../../../../components/Footer/Footer'
import SearchBar from '../SearchBar'
import Choices from '../Choices'
import BannerCarousel from '../../../../components/Body/Carousel/BannerCarousel'

const SubCategoryRestaurantPage = () => {
  const cateogry = 'resturant'
  const images = [
    `Hero_pg1/SubCategoryImages/${cateogry}Carousel/${cateogry} (1).webp`,
    `Hero_pg1/SubCategoryImages/${cateogry}Carousel/${cateogry} (2).webp`,
    `Hero_pg1/SubCategoryImages/${cateogry}Carousel/${cateogry} (4).webp`,
    `Hero_pg1/SubCategoryImages/${cateogry}Carousel/${cateogry} (5).webp`,
    `Hero_pg1/SubCategoryImages/${cateogry}Carousel/${cateogry} (6).webp`
  ]
  return (
    <div>
      <Nav />
      <BannerCarousel images={images} />
      <div className="mt-5 flex flex-col gap-8">
        <div className="flex items-center justify-center">
          <Choices />
        </div>
        <div className="flex items-center justify-center">
          <SearchBar />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SubCategoryRestaurantPage
