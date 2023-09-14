import React from 'react'
import Nav from '../../../../components/Navbar/Nav'
import Footer from '../../../../components/Footer/Footer'
import SearchBar from '../SearchBar'
import BannerCarousel from '../../../../components/Body/Carousel/BannerCarousel'
import Choices from '../Choices'

const SubCategoryRentalPage = () => {
  const images = [
    '/Hero_pg1/Trending/RentalsSub/carrent.webp',
    '/Hero_pg1/Trending/RentalsSub/costumesrent.webp',
    '/Hero_pg1/Trending/RentalsSub/busrent.webp',
    '/Hero_pg1/Trending/RentalsSub/temposrent.webp'
  ]
  return (
    <div>
      <Nav />
      <BannerCarousel images={images} />
      <div className="mt-5 flex items-center justify-center">
        <Choices />
      </div>
      <div className="mt-10 flex items-center justify-center">
        <SearchBar />
      </div>
      <Footer />
    </div>
  )
}

export default SubCategoryRentalPage
