import React from 'react'
import Nav from '../../../../components/Navbar/Nav'
import Footer from '../../../../components/Footer/Footer'
import SearchBar from '../SearchBar'
import BannerCarousel from '../../../../components/Body/Carousel/BannerCarousel'
import Choices from '../Choices'

const SubCategoryRentalPage = () => {
  const images = [
    'RentalsSub/carrent.webp',
    'RentalsSub/costumesrent.webp',
    'RentalsSub/busrent.webp',
    'RentalsSub/temposrent.webp'
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
