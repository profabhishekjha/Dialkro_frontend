import React from 'react'
import Nav from '../../../../components/Navbar/Nav'
import Footer from '../../../../components/Footer/Footer'
import SearchBar from '../SearchBar'
import BannerCarousel from '../../../../components/Body/Carousel/BannerCarousel'

const SubCategoryBridalPage = () => {
  const images = [
    'Hero_pg1/CarouselImages/doctor.webp',
    'Hero_pg1/CarouselImages/market.webp',
    'Hero_pg1/CarouselImages/parcel.webp',
    'Hero_pg1/CarouselImages/resturant.webp',
    'Hero_pg1/CarouselImages/transport.webp'
  ]
  return (
    <div>
      <Nav />
      <BannerCarousel images={images} />
      <div className="mt-5 flex flex-col gap-8">
        {/*         <div className="flex items-center justify-center">
          <Choices />
        </div> */}
        <div className="ml-24">
          <SearchBar />
        </div>
        <div className="flex items-center justify-center">
          <button className="h-[40px] w-[25vw] rounded-md bg-blue-500 text-white hover:bg-blue-400">
            View All Categories
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SubCategoryBridalPage
